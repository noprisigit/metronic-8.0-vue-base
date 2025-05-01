import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

export interface UserAuthInfo {
  errors: Record<string, string>;
  user: User;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): UserAuthInfo => ({
    errors: {},
    user: {} as User,
    isAuthenticated: !!JwtService.getToken(),
  }),

  getters: {
    currentUser: (state): User => state.user,
    isUserAuthenticated: (state): boolean => state.isAuthenticated,
    getErrors: (state) => state.errors,
  },

  actions: {
    setAuth(user: User) {
      this.isAuthenticated = true;
      this.user = user;
      this.errors = {};
      JwtService.saveToken(user.api_token);
    },

    setUser(user: User) {
      this.user = user;
    },

    setPassword(password: string) {
      this.user.password = password;
    },

    setError(error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        !Array.isArray(error)
      ) {
        this.errors = { ...error };
      } else {
        this.errors = {};
      }
    },

    purgeAuth() {
      this.isAuthenticated = false;
      this.user = {} as User;
      this.errors = {};
      JwtService.destroyToken();
    },

    async login(credentials: Record<string, string>) {
      try {
        const { data } = await ApiService.post("login", credentials);
        this.setAuth(data);
      } catch (error: any) {
        this.setError(error.response.data.errors);
      }
    },

    logout() {
      this.purgeAuth();
    },

    async register(credentials: Record<string, string>) {
      try {
        const { data } = await ApiService.post("register", credentials);
        this.setAuth(data);
      } catch (error: any) {
        this.setError(error.response.data.errors);
      }
    },

    async forgotPassword(payload: Record<string, any>) {
      try {
        await ApiService.post("forgot_password", payload);
        this.setError({});
      } catch (error: any) {
        this.setError(error.response.data.errors);
      }
    },

    async verifyAuth(payload: Record<string, any>) {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        try {
          const { data } = await ApiService.post("verify_token", payload);
          this.setAuth(data);
        } catch (error: any) {
          this.setError(error.response.data.errors);
          this.purgeAuth();
        }
      } else {
        this.purgeAuth();
      }
    },
  },
});
