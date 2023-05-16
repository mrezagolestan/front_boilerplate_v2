// import {
//   MenuComponent,
//   ScrollComponent,
//   StickyComponent,
//   ToggleComponent,
//   DrawerComponent,
//   SwapperComponent,
// } from "@/assets/ts/components";
// import { ThemeModeComponent } from "@/assets/ts/layout";
//
//
// console.log('KeenTheme');
//
//
// /**
//  * @description Initialize KeenThemes custom components
//  */
// const initializeComponents = () => {
//   ThemeModeComponent.init();
//   setTimeout(() => {
//     ToggleComponent.bootstrap();
//     StickyComponent.bootstrap();
//     MenuComponent.bootstrap();
//     ScrollComponent.bootstrap();
//     DrawerComponent.bootstrap();
//     SwapperComponent.bootstrap();
//   }, 0);
// };
//
// /**
//  * @description Reinitialize KeenThemes custom components
//  */
// const reinitializeComponents = () => {
//   ThemeModeComponent.init();
//   setTimeout(() => {
//     ToggleComponent.reinitialization();
//     StickyComponent.reInitialization();
//     MenuComponent.reinitialization();
//     reinitializeScrollComponent().then(() => {
//       ScrollComponent.updateAll();
//     });
//     DrawerComponent.reinitialization();
//     SwapperComponent.reinitialization();
//     console.log('dsdfsdfsdfsdsf');
//   }, 0);
// };
//
// const reinitializeScrollComponent = async () => {
//   await ScrollComponent.reinitialization();
// };
//
//
// reinitializeComponents();
//
// // export {
// //   initializeComponents,
// //   reinitializeComponents,
// //   reinitializeScrollComponent,
// // };
