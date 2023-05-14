import objectPath from "object-path";
import { useBodyStore } from "@/store/body";
import { config } from "@/core/helpers/config";

const bodyStore = useBodyStore();

class LayoutService {
  /**
   * @description initialize default layout
   */
  public static init(): void {
    //empty body element classes and attributes
    LayoutService.emptyElementClassesAndAttributes(document.body);

    LayoutService.initLayout();
    LayoutService.initHeader();
    LayoutService.initToolbar();
    LayoutService.initAside();
    LayoutService.initSidebar();
    LayoutService.initFooter();
  }

  /**
   * @description init layout
   */
  public static initLayout(): void {
    bodyStore.addBodyAttribute({
      qualifiedName: "id",
      value: "kt_body",
    });

    if (objectPath.get(config.value, "loader.display")) {
      bodyStore.addBodyClassName("page-loading-enabled");
      bodyStore.addBodyClassName("page-loading");
    }
  }

  /**
   * @description init header
   */
  public static initHeader(): void {
    if (objectPath.get(config.value, "header.fixed.desktop")) {
      bodyStore.addBodyClassName("header-fixed");
    }

    if (objectPath.get(config.value, "header.fixed.tabletAndMobile")) {
      bodyStore.addBodyClassName("header-tablet-and-mobile-fixed");
    }
  }

  /**
   * @description init toolbar
   */
  public static initToolbar(): void {
    if (!objectPath.get(config.value, "toolbar.display")) {
      return;
    }

    bodyStore.addBodyClassName("toolbar-enabled");

    if (objectPath.get(config.value, "toolbar.fixed")) {
      bodyStore.addBodyClassName("toolbar-fixed");
    }

    bodyStore.addBodyClassName("toolbar-tablet-and-mobile-fixed");
  }

  /**
   * @description init aside
   */
  public static initAside(): void {
    if (!objectPath.get(config.value, "aside.display")) {
      return;
    }

    // Enable Aside
    bodyStore.addBodyClassName("aside-enabled");

    if (objectPath.get(config.value, "aside.fixed")) {
      // Fixed Aside
      bodyStore.addBodyClassName("aside-fixed");
    }

    // Default minimized
    if (objectPath.get(config.value, "aside.minimized")) {
      bodyStore.addBodyAttribute({
        qualifiedName: "data-kt-aside-minimize",
        value: "on",
      });
    }
  }

  /**
   * @description init sidebar
   */
  public static initSidebar(): void {
    if (!objectPath.get(config.value, "sidebar.display")) {
      return;
    }

    // Enable Sidebar
    bodyStore.addBodyClassName("sidebar-enabled");
  }

  /**
   * @description init footer
   */
  public static initFooter(): void {
    // Fixed header
    if (objectPath.get(config.value, "footer.width") === "fixed") {
      bodyStore.addBodyClassName("footer-fixed");
    }
  }

  public static enableSidebar(): void {
    config.value.sidebar.display = true;

    // Enable Sidebar
    bodyStore.addBodyClassName("sidebar-enabled");
  }

  public static disableSidebar(): void {
    config.value.sidebar.display = false;

    // Disable Sidebar
    bodyStore.removeBodyClassName("sidebar-enabled");
  }

  public static emptyElementClassesAndAttributes(element: HTMLElement): void {
    element.className = "";
    for (let i = element.attributes.length; i-- > 0; )
      element.removeAttributeNode(element.attributes[i]);
  }
}

export default LayoutService;
