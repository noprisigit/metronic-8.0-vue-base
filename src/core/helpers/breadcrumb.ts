import { useBreadcrumbsStore } from "@/store/modules/useBreadcrumbsStore";

/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */
export const setCurrentPageBreadcrumbs = (
  pageTitle: string,
  breadcrumbs: Array<string>
): void => {
  useBreadcrumbsStore().setBreadcrumb({
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs,
  });
};

/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */
export const setCurrentPageTitle = (title: string): void => {
  useBreadcrumbsStore().setBreadcrumb({
    title: title,
    pageBreadcrumbPath: [],
  });
};
