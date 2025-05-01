import { defineStore } from "pinia";
import objectPath from "object-path";
import merge from "deepmerge";
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

export const useLayoutConfigStore = defineStore("layoutConfig", {
  state: (): { config: LayoutConfigTypes; initial: LayoutConfigTypes } => ({
    config: layoutConfig,
    initial: layoutConfig,
  }),

  getters: {
    layoutConfig: (state) => {
      return (path: string, defaultValue: unknown = null): any => {
        return objectPath.get(state.config, path, defaultValue);
      };
    },
  },

  actions: {
    setLayoutConfig(payload: LayoutConfigTypes): void {
      this.config = payload;
    },

    resetLayoutConfig(): void {
      this.config = { ...this.initial };
    },

    overrideLayoutConfig(): void {
      const stored = JSON.parse(window.localStorage.getItem("config") || "{}");
      this.config = this.initial = {
        ...this.initial,
        ...stored,
      };
    },

    overridePageLayoutConfig(payload: Partial<LayoutConfigTypes>): void {
      this.config = merge(this.config, payload);
    },
  },
});
