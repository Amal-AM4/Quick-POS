<template>
    <div class="login-wrapper">
        <v-container class="fill-height d-flex align-center justify-center" fluid>

            <v-overlay :model-value="isLoading"
            class="align-center justify-center">
                <v-progress-circular
                    v-if="isLoading"
                    indeterminate
                    color="white"
                ></v-progress-circular>
            </v-overlay>

            <v-card class="pa-5" rounded-xl elevation="4" max-width="400" width="100%">
                <v-card-title class="text-h5 font-weight-bold text-center">
                    Login
                </v-card-title>

                <v-card-text>
                    <v-form @submit.prevent="onLogin">
                        <v-text-field
                            v-model="username"
                            label="Username"
                            placeholder="Enter user id"
                            prepend-inner-icon="mdi-account"
                            variant="outlined"
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            label="Password"
                            placeholder="••••••••"
                            prepend-inner-icon="mdi-lock"
                            variant="outlined"
                        ></v-text-field>

                        <v-btn
                            color="primary"
                            block
                            size="large"
                            variant="tonal"
                            type="submit"
                            class="mt-4"
                        >Login</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const isLoading = ref(false)

const onLogin = async () => {
    isLoading.value = true

    console.log('Logging in with:', username.value, password.value);
    try {
        await auth.login(username.value, password.value)

        if (auth.loggedIn) {
            // redirect after login success
            router.push('/home')
        } else {
            // handle failed login attempt
            console.error("login failed: incorrect credentials");
        }
    } catch (error) {
        console.error('Login error:', error)
    } finally {
        isLoading.value = false
    }
}


</script>

<style scoped lang="scss">
    .login-wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

