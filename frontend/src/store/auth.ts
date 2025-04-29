import { defineStore } from 'pinia'
import { Login, Logout, IsLoggedIn } from '../../wailsjs/go/main/App'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: localStorage.getItem('loggedIn') === 'true',
    username: localStorage.getItem('username') || ''
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        const result = await Login(username, password);

        if (typeof result === 'boolean' && result === true) {
          this.loggedIn = true;
          this.username = username;
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('username', username);
        } else if (typeof result === 'string') {
          alert(result);
        } else {
          alert('Login failed');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login error. Please try again.');
      }
    },

    async checkLoggedIn() {
      try {
        const result = await IsLoggedIn();
        this.loggedIn = result;
        if (!result) {
          this.username = '';
          localStorage.removeItem('loggedIn');
          localStorage.removeItem('username');
        }
      } catch (error) {
        console.error('Check login failed:', error);
      }
    },

    async logout() {
      try {
        await Logout();
      } catch (error) {
        console.error('Logout failed:', error);
      }

      this.loggedIn = false;
      this.username = '';
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('username');
    }
  }
});
