import objectPath from "object-path";
import merge from "deepmerge";
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";
import { defineStore } from 'pinia'


const LayoutConfigTypes = layoutConfig;

export const useConfigStore = defineStore('configModule', {
  state: () => {
    return {
      config: LayoutConfigTypes,
      initial: LayoutConfigTypes,
    }
  },
  actions: {
    setLayoutConfigProperty(payload) {
      const { property, value } = payload;
      objectPath.set(this.config, property, value);
      if(process.client){
        localStorage.setItem("config", JSON.stringify(this.config));
      }
    },
    resetLayoutConfig() {
      this.config = Object.assign({}, this.initial);
    },
    overrideLayoutConfig(): void {
      if(process.client){
        this.config = this.initial = Object.assign(
            {},
            this.initial,
            JSON.parse(localStorage.getItem("config") || "{}")
        );
      }
    },
    overridePageLayoutConfig(payload) {
      this.config = merge(this.config, payload);
    },
    layoutConfig(path = '',defaultValue = ''): string {
      return objectPath.get(this.config, path, defaultValue);
    }
  }
})

