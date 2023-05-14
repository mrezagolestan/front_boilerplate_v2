import { ThemeModeComponent } from "assets/ts/layout";
import { defineStore } from 'pinia'



const themeModeLSKey = "kt_theme_mode_value";
const themeMenuModeLSKey = "kt_theme_mode_menu";


let modeFromLocalStorage = '';

if(process.client){
  modeFromLocalStorage = localStorage.getItem(themeModeLSKey)
      ? (localStorage.getItem(themeModeLSKey) as "light" | "dark" | "system")
      : ThemeModeComponent.getSystemMode();
}

export const useThemeStore = defineStore('themeModule', {
  state: () => {
    return {
      mode: modeFromLocalStorage,
    }
  },
  actions: {
    async setThemeModeMutation(payload) {
      this.mode =  payload;
    },
    getThemeMode(): string {
      return this.mode;
    },
    async setThemeModeAction(payload) {
      if(process.client){
        localStorage.setItem(themeModeLSKey, payload);
        localStorage.setItem(themeMenuModeLSKey, payload);
        document.documentElement.setAttribute("data-theme", payload);
        ThemeModeComponent.init();
        this.setThemeModeMutation(payload);
      }
    }
  }
})