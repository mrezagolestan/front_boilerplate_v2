import { defineStore } from 'pinia'



interface StoreInfo {
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
}


export const useBodyStore = defineStore('bodyModule', {
    state: () => {
        return {
            classes: {} as StoreInfo,
        }
    },
    actions: {
        async appendBreadcrumb(payload) {
            const { position, className } = payload;
            if (!this.classes[position]) {
                this.classes[position] = [];
            }
            this.classes[position].push(className);
        },
        async getClasses() {
            return (position) => {
                if (typeof position !== "undefined") {
                    return this.classes[position];
                }
                return this.classes;
            };
        },
        async addBodyClassName(className) {
            if(process.client){
                document.body.classList.add(className);
            }
        },
        async removeBodyClassName(className) {
            if(process.client){
                document.body.classList.remove(className);
            }
        },
        async addBodyAttribute(payload) {
            if(process.client){
                const { qualifiedName, value } = payload;
                document.body.setAttribute(qualifiedName, value);
            }
        },
        async removeBodyAttribute(payload) {
            if(process.client){
                const { qualifiedName } = payload;
                document.body.removeAttribute(qualifiedName);
            }
        },
        async addClassName(payload) {
            this.appendBreadcrumb(payload);
        }
    }
})