import { App } from "vue";
import InlineSvg from "vue-inline-svg";

console.log('HIIIIIIIIIIIIIIIII')
/**
 * Initialize Inline-Svg component
 * @param app vue instance
 */
export function initInlineSvg(app: App<Element>) {
  app.component("inline-svg", InlineSvg);
}
