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
  
            <v-card-subtitle>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">Sl. No.</th>
                    <th class="text-left">ID</th>
                    <th class="text-left">Supplier Name</th>
                    <th class="text-left">Contact Person</th>
                    <th class="text-left">Phone</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">GSTIN</th>
                    <th class="text-left">Address</th>
                    <th class="text-left">Place</th>
                    <th class="text-left">City</th>
                    <th class="text-left">State</th>
                    <th class="text-left">Pincode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(supplier, index) in suppliers" :key="supplier.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ supplier.id }}</td>
                    <td>{{ supplier.supplierName }}</td>
                    <td>{{ supplier.contactPerson }}</td>
                    <td>{{ supplier.phone }}</td>
                    <td>{{ supplier.email }}</td>
                    <td>{{ supplier.gstin }}</td>
                    <td>{{ supplier.addressLine }}</td>
                    <td>{{ supplier.place }}</td>
                    <td>{{ supplier.city }}</td>
                    <td>{{ supplier.state }}</td>
                    <td>{{ supplier.pincode }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
/* Add custom styles here */
</style>
