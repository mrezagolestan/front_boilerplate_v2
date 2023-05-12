import { Actions, Mutations } from "~/store/enums/StoreEnums";


export interface StoreInfo {
  classes: {
    header?: Array<string>;
    headerContainer?: Array<string>;
    headerMobile?: Array<string>;
    headerMenu?: Array<string>;
    aside?: Array<string>;
    asideMenu?: Array<string>;
    asideToggle?: Array<string>;
    toolbar?: Array<string>;
    toolbarContainer?: Array<string>;
    content?: Array<string>;
    contentContainer?: Array<string>;
    footerContainer?: Array<string>;
    sidebar?: Array<string>;
    pageTitle?: Array<string>;
  };
}


export const state = () => ({
  classes: {},
})

export const mutations = {
  [Mutations.SET_CLASSNAME_BY_POSITION](payload) {
    const { position, className } = payload;
    if (!state.classes[position]) {
      state.classes[position] = [];
    }
    state.classes[position].push(className);
  },

}

export const actions = {
  async getClasses() {
    return (position) => {
      if (typeof position !== "undefined") {
        return state.classes[position];
      }
      return state.classes;
    };
  },
  [Actions.ADD_BODY_CLASSNAME](className) {
    if(process.client){
      document.body.classList.add(className);
    }
  },
  [Actions.REMOVE_BODY_CLASSNAME](className) {
    if(process.client){
      document.body.classList.remove(className);
    }
  },
  [Actions.ADD_BODY_ATTRIBUTE](payload) {
    if(process.client){
      const { qualifiedName, value } = payload;
      document.body.setAttribute(qualifiedName, value);
    }
  },
  [Actions.REMOVE_BODY_ATTRIBUTE](payload) {
    if(process.client){
      const { qualifiedName } = payload;
      document.body.removeAttribute(qualifiedName);
    }
  },
  [Actions.ADD_CLASSNAME](payload) {
    storeContext.commit(Mutations.SET_CLASSNAME_BY_POSITION, payload);
  }
}