import { useAuthStore } from "./modules/useAuthStore";
import { useBodyStore } from "./modules/useBodyStore";
import { useBreadcrumbsStore } from "./modules/useBreadcrumbsStore";
import { useLayoutConfigStore } from "./modules/useConfigStore";

export function useStores() {
  return {
    auth: useAuthStore,
    body: useBodyStore,
    breadcrumbs: useBreadcrumbsStore,
    config: useLayoutConfigStore,
  };
}
