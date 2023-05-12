import { Actions, Mutations } from "~/store/enums/StoreEnums";
import { ThemeModeComponent } from "assets/ts/layout";


const themeModeLSKey = "kt_theme_mode_value";
const themeMenuModeLSKey = "kt_theme_mode_menu";


let modeFromLocalStorage = '';

if(process.client){
  modeFromLocalStorage = localStorage.getItem(themeModeLSKey)
      ? (localStorage.getItem(themeModeLSKey) as "light" | "dark" | "system")
      : ThemeModeComponent.getSystemMode();
}


export const state = () => ({
  mode: modeFromLocalStorage,
})

export const mutations = {
  [Mutations.SET_THEME_MODE_MUTATION](payload) {
    state.mode =  payload;
  }
}

export const actions = {
  async getThemeMode(): string {
    return state.mode;
  },

  async [Actions.SET_THEME_MODE_ACTION](payload) {
    if(process.client){
      localStorage.setItem(themeModeLSKey, payload);
      localStorage.setItem(themeMenuModeLSKey, payload);
    }
    document.documentElement.setAttribute("data-theme", payload);
    ThemeModeComponent.init();
    storeContext.commit(Mutations.SET_THEME_MODE_MUTATION, payload);
  }
}