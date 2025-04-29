import { defineStore } from 'pinia'
import { Login, Logout, IsLoggedIn } from '../../wailsjs/go/main/App'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    username: '',
  }),

  actions: {
    async login(username: string, password: string) {
      // console.log('login method called with:', username, password);
    
      try {
        const result = await Login(username, password);
    
        if (typeof result === 'boolean') {
          if (result) {
            this.loggedIn = true;
            this.username = username;
          } else {
            alert('Login failed');
          }
        } else if (typeof result === 'string') {
          alert(result);
        } else {
          console.error('Unexpected login result:', result);
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    },    

    async checkLoggedIn() {
      try {
        this.loggedIn = await IsLoggedIn();
      } catch (error) {
        console.error('Check login failed:', error);
      }
    },

    async logout() {
      try {
        await Logout();
        this.loggedIn = false;
        this.username = '';
      } catch (error) {
        console.error('Logout failed:', error);
      }
    },
  }
});
