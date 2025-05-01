import { defineStore } from "pinia";

export interface StoreInfo {
  classes: {
    header?: string[];
    headerContainer?: string[];
    headerMobile?: string[];
    headerMenu?: string[];
    aside?: string[];
    asideMenu?: string[];
    asideToggle?: string[];
    toolbar?: string[];
    toolbarContainer?: string[];
    content?: string[];
    contentContainer?: string[];
    footerContainer?: string[];
    sidebar?: string[];
    pageTitle?: string[];
    [key: string]: string[] | undefined;
  };
}

export const useBodyStore = defineStore("body", {
  state: (): StoreInfo => ({
    classes: {},
  }),

  getters: {
    getClasses: (state) => {
      return (position?: string) => {
        if (position) return state.classes[position];
        return state.classes;
      };
    },
  },

  actions: {
    setClassNameByPosition(payload: { position: string; className: string }) {
      const { position, className } = payload;
      if (!this.classes[position]) {
        this.classes[position] = [];
      }
      this.classes[position]!.push(className);
    },

    addBodyClassName(className: string) {
      document.body.classList.add(className);
    },

    removeBodyClassName(className: string) {
      document.body.classList.remove(className);
    },

    addBodyAttribute(payload: { qulifiedName: string; value: string }) {
      const { qulifiedName, value } = payload;
      document.body.setAttribute(qulifiedName, value);
    },

    removeBodyAttribute(payload: { qulifiedName: string }) {
      document.body.removeAttribute(payload.qulifiedName);
    },

    addClassName(payload: { position: string; className: string }) {
      this.setClassNameByPosition(payload);
    },
  },
});
