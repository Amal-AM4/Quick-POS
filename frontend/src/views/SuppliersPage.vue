<template>
    <v-container>
      <!-- Button to Create New Supplier -->
      <v-row>
        <v-col>
          <v-btn color="primary" @click="createNewSupplier">
            Create New Supplier
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Supplier List Table -->
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              <span class="text-h5 font-weight-bold">Supplier List</span>
            </v-card-title>
  
            <v-data-table :items="suppliers" :fixed-header="true">

            </v-data-table>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Define the headers for the data table
  const headers = ref([
    { text: 'Sl. No.', align: 'start', key: 'slno' },
    { text: 'ID', align: 'start', key: 'id' },
    { text: 'Supplier Name', align: 'start', key: 'supplierName' },
    { text: 'Contact Person', align: 'start', key: 'contactPerson' },
    { text: 'Phone', align: 'start', key: 'phone' },
    { text: 'Email', align: 'start', key: 'email' },
    { text: 'GSTIN', align: 'start', key: 'gstin' },
    { text: 'Address', align: 'start', key: 'addressLine' },
    { text: 'Place', align: 'start', key: 'place' },
    { text: 'City', align: 'start', key: 'city' },
    { text: 'State', align: 'start', key: 'state' },
    { text: 'Pincode', align: 'start', key: 'pincode' }
  ]);
  
  // Mock data for suppliers
  const suppliers = ref([
    {
      id: 1,
      supplierName: 'Supplier A',
      contactPerson: 'John Doe',
      phone: '123-456-7890',
      email: 'supplierA@example.com',
      gstin: 'GSTIN12345',
      addressLine: '123 ABC Street',
      place: 'City A',
      city: 'City A',
      state: 'State A',
      pincode: '123456',
    },
    {
      id: 2,
      supplierName: 'Supplier B',
      contactPerson: 'Jane Smith',
      phone: '987-654-3210',
      email: 'supplierB@example.com',
      gstin: 'GSTIN67890',
      addressLine: '456 XYZ Street',
      place: 'City B',
      city: 'City B',
      state: 'State B',
      pincode: '654321',
    },
  ]);
  
  // Function to create a new supplier (for demonstration)
  function createNewSupplier() {
    // Placeholder for logic to create a new supplier
    alert('Create a new supplier');
  }
  </script>
  
  <style lang="scss">
  /* Add custom styles here if needed */
  </style>
  