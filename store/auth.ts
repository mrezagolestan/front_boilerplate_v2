import ApiService from "~/core/services/ApiService";
import JwtService from "~/core/services/JwtService";
import { defineStore } from 'pinia'

interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

export const useAuthStore = defineStore('authModule', {
  state: () => {
    return {
      errors: {},
      user: {} as User,
      isAuthenticated : !!JwtService.getToken(),    }
  },
  actions: {
    async currentUser() {
      return this.user;
    },
    async isUserAuthenticated() {
      return this.isAuthenticated;
    },
    async getErrors() {
      return this.errors;
    },
    async login(credentials) {
      return ApiService.post("login", credentials)
          .then(({ data }) => {
            this.setAuth(data);
          })
          .catch(({ response }) => {
            this.setError(response.data.errors);
          });
    },
    async register(credentials) {
      return ApiService.post("register", credentials)
          .then(({ data }) => {
            this.setAuth(data);
          })
          .catch(({ response }) => {
            this.setError(response.data.errors);
          });
    },
    async forgotPassword(payload) {
      return ApiService.post("forgot_password", payload)
          .then(() => {
            this.setError({});
          })
          .catch(({ response }) => {
            this.setError(response.data.errors);
          });
    },
    async verifyAuth(payload) {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.post("verify_token", payload)
            .then(({ data }) => {
              this.setAuth(data);
            })
            .catch(({ response }) => {
              this.setError(response.data.errors);
              this.logout();
            });
      } else {
        this.logout();
      }
    },
    async setError(error) {
      this.errors = { ...error };
    },
    async setAuth(user) {
      this.isAuthenticated = true;
      this.user = user;
      this.errors = {};
      JwtService.saveToken(user.api_token);
    },
    async setUser(user) {
      this.user = user;
    },
    async setPassword(password) {
      this.user.password = password;
    },
    async logout() {
      this.isAuthenticated = false;
      this.user = {} as User;
      this.errors = [];
      JwtService.destroyToken();
    },
  }
})

