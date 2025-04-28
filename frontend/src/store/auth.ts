import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        username: '',
    }),

    actions: {
        async login(username: string, password: string) {
            console.log('backend:', window.backend);
            if (!window.backend || !window.backend.App) {
                console.error("Backend not ready yet!");
                return;
            }            
            
            const [success, message] = await window.backend.App.Login(username, password);

            if (success) {
                this.loggedIn = true;
                this.username = username;
            } else {
                alert(message);
            }
        },

        async checkLoggedIn() {
            this.loggedIn = await window.backend.App.IsLoggedIn();
        },

        async logout() {
            await window.backend.App.Logout();
            this.loggedIn = false;
            this.username = '';
        },
    }
})