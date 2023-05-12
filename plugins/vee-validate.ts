import { configure } from "vee-validate";


// Updating default vee-validate configuration
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
});