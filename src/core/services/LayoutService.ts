import objectPath from "object-path";
import { config } from "@/core/helpers/config";
import { useBodyStore } from "@/store/modules/useBodyStore";

class LayoutService {
  /**
   * @description initialize default layout
   */
  public static init(): void {
    LayoutService.initLayout();
    LayoutService.initHeader();
    LayoutService.initToolbar();
    LayoutService.initAside();
    LayoutService.initFooter();
  }

  /**
   * @description init layout
   */
  public static initLayout(): void {
    useBodyStore().addBodyAttribute({
      qulifiedName: "id",
      value: "kt_body",
    });

    if (objectPath.get(config.value, "loader.display")) {
      useBodyStore().addBodyClassName("page-loading-enabled");
      useBodyStore().addBodyClassName("page-loading");
    }
  }

  /**
   * @description init header
   */
  public static initHeader(): void {
    if (objectPath.get(config.value, "header.fixed.desktop")) {
      useBodyStore().addBodyClassName("header-fixed");
    }

    if (objectPath.get(config.value, "header.fixed.tabletAndMobile")) {
      useBodyStore().addBodyClassName("header-tablet-and-mobile-fixed");
    }
  }

  /**
   * @description init toolbar
   */
  public static initToolbar(): void {
    if (!objectPath.get(config.value, "toolbar.display")) {
      return;
    }

    useBodyStore().addBodyClassName("toolbar-enabled");

    if (objectPath.get(config.value, "toolbar.fixed")) {
      useBodyStore().addBodyClassName("toolbar-fixed");
    }

    useBodyStore().addBodyClassName("toolbar-tablet-and-mobile-fixed");
  }

  /**
   * @description init aside
   */
  public static initAside(): void {
    if (!objectPath.get(config.value, "aside.display")) {
      return;
    }

    // Enable Aside
    useBodyStore().addBodyClassName("aside-enabled");

    // Minimized
    if (
      objectPath.get(config.value, "aside.minimized") &&
      objectPath.get(config.value, "aside.toggle")
    ) {
      useBodyStore().addBodyAttribute({
        qulifiedName: "data-kt-aside-minimize",
        value: "on",
      });
    }

    if (objectPath.get(config.value, "aside.fixed")) {
      // Fixed Aside
      useBodyStore().addBodyClassName("aside-fixed");
    }

    // Default minimized
    if (objectPath.get(config.value, "aside.minimized")) {
      useBodyStore().addBodyAttribute({
        qulifiedName: "data-kt-aside-minimize",
        value: "on",
      });
    }
  }

  /**
   * @description init footer
   */
  public static initFooter(): void {
    // Fixed header
    if (objectPath.get(config.value, "footer.width") === "fixed") {
      useBodyStore().addBodyClassName("footer-fixed");
    }
  }
}

export default LayoutService;
