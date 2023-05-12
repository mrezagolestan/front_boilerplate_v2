import objectPath from "object-path";
import merge from "deepmerge";
import layoutConfig from "~/core/config/DefaultLayoutConfig";
import { Mutations } from "~/store/enums/StoreEnums";
import LayoutConfigTypes from "~/core/config/LayoutConfigTypes";

interface StoreInfo {
  config: LayoutConfigTypes;
  initial: LayoutConfigTypes;
}

const LayoutConfigTypes = layoutConfig;

export const state = () => ({
  config: LayoutConfigTypes,
  initial: LayoutConfigTypes,
})

export const mutations = {
  [Mutations.SET_LAYOUT_CONFIG_PROPERTY](payload): void {
    const { property, value } = payload;
    objectPath.set(state.config, property, value);
    if(process.client){
      localStorage.setItem("config", JSON.stringify(state.config));
    }
  },
  [Mutations.RESET_LAYOUT_CONFIG]() {
    state.config = Object.assign({}, state.initial);
  },
  [Mutations.OVERRIDE_LAYOUT_CONFIG](): void {
    if(process.client){
      state.config = state.initial = Object.assign(
          {},
          state.initial,
          JSON.parse(localStorage.getItem("config") || "{}")
      );
    }
  },
  [Mutations.OVERRIDE_PAGE_LAYOUT_CONFIG](payload): void {
    state.config = merge(state.config, payload);
  }
}

export const actions = {
}

export const getters = {
  layoutConfig(path,defaultValue) {
    return objectPath.get(state.config, path, defaultValue);
  }
}