import { useAuthStore } from "./modules/useAuthStore";
import { useBodyStore } from "./modules/useBodyStore";
import { useBreadcrumbsStore } from "./modules/useBreadcrumbsStore";
import { useLayoutConfigStore } from "./modules/useConfigStore";

export function useStores() {
  return {
    authStore: useAuthStore(),
    bodyStore: useBodyStore(),
    breadcrumbsStore: useBreadcrumbsStore(),
    configStore: useLayoutConfigStore(),
  };
}
