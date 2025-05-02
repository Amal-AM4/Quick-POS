<template>
  <v-container class="pa-4" max-width="1200">
    <v-card>
      <v-card-title class="my-4">
        <v-icon class="mr-2" color="success">mdi-store</v-icon>
        Store Details
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="submitForm" ref="formRef">
          <v-text-field
            v-model="storeDetails.storeName"
            label="Store Name"
            placeholder="Enter store name"
            @input="storeDetails.storeName = capitalizeEachWord(storeDetails.storeName)"
            required
            :rules="[requiredRule]"
            variant="outlined"
          />

          <v-text-field
            v-model="storeDetails.ownerName"
            label="Owner Name"
            placeholder="Enter shop owner's name"
            @input="storeDetails.ownerName = capitalizeEachWord(storeDetails.ownerName)"
            required
            :rules="[requiredRule]"
            variant="outlined"
          />

          <v-text-field
            v-model="storeDetails.addressLine"
            label="Address"
            placeholder="123 Main St"
            @input="storeDetails.addressLine = capitalizeEachWord(storeDetails.addressLine)"
            required
            :rules="[requiredRule]"
            variant="outlined"
          />

          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="storeDetails.district"
                label="District"
                placeholder="e.g., Tvm"
                @input="storeDetails.district = capitalizeEachWord(storeDetails.district)"
                variant="outlined"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="storeDetails.place"
                label="Place"
                placeholder="Current Place"
                @input="storeDetails.place = capitalizeEachWord(storeDetails.place)"
                :rules="[requiredRule]"
                variant="outlined"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="storeDetails.pincode"
                label="Pincode"
                placeholder="e.g., 682001"
                @input="storeDetails.pincode = digitsOnly(storeDetails.pincode).slice(0, 6)"
                :rules="[pincodeRule]"
                maxlength="6"
                variant="outlined"
              />
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="storeDetails.phone"
                label="Phone"
                placeholder="9876543210"
                @input="storeDetails.phone = digitsOnly(storeDetails.phone).slice(0, 10)"
                :rules="[phoneRule]"
                maxlength="10"
                required
                variant="outlined"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="storeDetails.email"
                label="Email"
                placeholder="example@mail.com"
                type="email"
                variant="outlined"
              />
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="storeDetails.gstin"
                label="GSTIN"
                placeholder="22AAAAA0000A1Z5"
                @input="storeDetails.gstin = storeDetails.gstin.toUpperCase().slice(0, 15)"
                :rules="[gstinRule]"
                maxlength="15"
                required
                variant="outlined"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="storeDetails.upiID"
                label="UPI ID"
                placeholder="store@upi"
                variant="outlined"
                :rules="[requiredRule]"
              />
            </v-col>
          </v-row>

          <v-btn type="submit" class="mt-4" color="primary">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification";
import { CreateStoreDetail } from '../../wailsjs/go/main/App'

const toast = useToast();
const router = useRouter();

const requiredRule = (value: string) => {
  return !!value || 'This field is required'
}

const storeDetails = ref({
  storeName: '',
  ownerName: '',
  addressLine: '',
  place: '',
  district: '',
  pincode: '',
  phone: '',
  email: '',
  gstin: '',
  upiID: ''
})

const formRef = ref()

// Live format functions
const capitalizeEachWord = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase())
}

const digitsOnly = (text: string) => {
  return text.replace(/\D/g, '')
}

// Validation rules
const pincodeRule = (value: string) => {
  return /^\d{6}$/.test(value) || 'Pincode must be a 6-digit number'
}

const phoneRule = (value: string) => {
  return /^\d{10}$/.test(value) || 'Phone number must be 10 digits'
}

const gstinRule = (value: string) => {
  return /^[0-9A-Z]{15}$/.test(value) || 'GSTIN must be 15 characters (A-Z, 0-9)'
}


// Submit handler
const submitForm = () => {
  formRef.value?.validate().then((valid: boolean) => {
    if (valid) {

      if (
        storeDetails.value.storeName !== '' &&
        storeDetails.value.ownerName !== '' &&
        storeDetails.value.addressLine !== '' &&
        storeDetails.value.place !== '' &&
        storeDetails.value.pincode !== '' &&
        storeDetails.value.phone !== '' &&
        storeDetails.value.district !== '' &&
        storeDetails.value.email !== '' &&
        storeDetails.value.upiID !== '' &&
        storeDetails.value.gstin !== ''
      ) {
        
        console.log('Submitted Store Details:', storeDetails.value)

        CreateStoreDetail(
          storeDetails.value.storeName,
          storeDetails.value.ownerName,
          storeDetails.value.addressLine,
          storeDetails.value.place,
          storeDetails.value.district,
          storeDetails.value.pincode,
          storeDetails.value.phone,
          storeDetails.value.email,
          storeDetails.value.gstin,
          storeDetails.value.upiID
        )
        .then((response) => {
          router.push('/dashboard')
          toast.success("Store details is successfully added.")
          console.log('sucessfully insered')
        })
        .catch((err) => {
          console.error(err);
        })
      } else {
        toast.warning("Field should contains values")
      }
    }
  })
}


</script>
