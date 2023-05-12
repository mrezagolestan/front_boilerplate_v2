import ApiService from "~/core/services/ApiService";
import JwtService from "~/core/services/JwtService";
import { Actions, Mutations } from "~/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";


export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

export interface UserAuthInfo {
  errors: unknown;
  user: User;
  isAuthenticated: boolean;
}


export const state = () => ({
  errors: {},
  user: {} as User,
  isAuthenticated : !!JwtService.getToken(),
})

export const mutations = {
  [Mutations.SET_ERROR](error) {
    state.errors = { ...error };
  },
  [Mutations.SET_AUTH](user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(user.api_token);
  },
  [Mutations.SET_USER](user) {
    state.user = user;
  },
  [Mutations.SET_PASSWORD](password) {
    state.user.password = password;
  },
  [Mutations.PURGE_AUTH]() {
    state.isAuthenticated = false;
    state.user = {} as User;
    state.errors = [];
    JwtService.destroyToken();
  },


}

export const actions = {
  async currentUser(): User {
    return state.user;
  },
  async isUserAuthenticated(): boolean {
    return state.isAuthenticated;
  },
  async getErrors() {
    return state.errors;
  },
  [Actions.LOGIN](credentials) {
    return ApiService.post("login", credentials)
        .then(({ data }) => {
          storeContext.commit(Mutations.SET_AUTH, data);
        })
        .catch(({ response }) => {
          storeContext.commit(Mutations.SET_ERROR, response.data.errors);
        });
  },
  [Actions.LOGOUT]() {
    storeContext.commit(Mutations.PURGE_AUTH);
  },
  [Actions.REGISTER](credentials) {
    return ApiService.post("register", credentials)
        .then(({ data }) => {
          storeContext.commit(Mutations.SET_AUTH, data);
        })
        .catch(({ response }) => {
          storeContext.commit(Mutations.SET_ERROR, response.data.errors);
        });
  },
  [Actions.FORGOT_PASSWORD](payload) {
    return ApiService.post("forgot_password", payload)
        .then(() => {
          storeContext.commit(Mutations.SET_ERROR, {});
        })
        .catch(({ response }) => {
          storeContext.commit(Mutations.SET_ERROR, response.data.errors);
        });
  },
  [Actions.VERIFY_AUTH](payload) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("verify_token", payload)
          .then(({ data }) => {
            storeContext.commit(Mutations.SET_AUTH, data);
          })
          .catch(({ response }) => {
            storeContext.commit(Mutations.SET_ERROR, response.data.errors);
            storeContext.commit(Mutations.PURGE_AUTH);
          });
    } else {
      storeContext.commit(Mutations.PURGE_AUTH);
    }
  },
}