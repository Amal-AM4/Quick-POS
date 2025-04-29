<template>
    <v-container class="pa-4" max-width="1200">
        <v-card>
            <v-card-title class="my-4"><v-icon class="mr-2" color="success">mdi-store</v-icon> Store Details</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitForm">
                    <v-text-field
                      v-model="storeDetails.storeName"
                        label="Store Name"
                        placeholder="Enter store name"
                        required
                        variant="outlined"
                    />

                    <v-text-field
                      v-model="storeDetails.addressLine"
                        label="Address"
                        placeholder="123 Main St"
                        required
                        variant="outlined"
                    />

                    <v-row dense>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="storeDetails.district"
                          label="District"
                          placeholder="e.g., Tvm"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="storeDetails.place"
                          label="Place"
                          placeholder="Current Place"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="storeDetails.pincode"
                          label="Pincode"
                          placeholder="e.g., 682001"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row dense>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="storeDetails.phone"
                          label="Phone"
                          placeholder="98745 43210"
                          type="tel"
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
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row dense>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="storeDetails.gstin"
                          label="GSTIN"
                          placeholder="22AAAAA0000A1Z5"
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
                        />
                      </v-col>
                    </v-row>
                    
                    <v-btn class="mt-4" color="primary" >Submit</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const storeDetails = ref({
  storeName: '',
  ownerName: '',
  addressLine: '',
  place: '',
  district: null as string | null,
  pincode: '',
  phone: '',
  email: '',
  gstin: '',
  upiID: '',
})

const submitForm = () => {
  
}
</script>


<style>

</style>