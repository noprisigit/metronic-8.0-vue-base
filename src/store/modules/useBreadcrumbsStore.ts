import { defineStore } from "pinia";

interface Breadcrumb {
  title: string;
  pageBreadcrumbPath: string[];
}

interface StoreInfo {
  breadcrumbs: Breadcrumb;
}

export const useBreadcrumbsStore = defineStore("breadcrumbs", {
  state: (): StoreInfo => ({
    breadcrumbs: {
      title: "",
      pageBreadcrumbPath: [],
    },
  }),

  getters: {
    getBreadcrumbs: (state): Breadcrumb => state.breadcrumbs,
    pageBreadcrumbPath: (state): string[] =>
      state.breadcrumbs.pageBreadcrumbPath,
    pageTitle: (state): string => state.breadcrumbs.title,
  },

  actions: {
    setBreadcrumb(payload: Breadcrumb) {
      this.breadcrumbs = payload;
    },
  },
});
