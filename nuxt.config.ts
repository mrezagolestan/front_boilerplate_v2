// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt','@vee-validate/nuxt',
    ],
    css: [
        "bootstrap-icons/font/bootstrap-icons.css",
        //"apexcharts/dist/apexcharts.css",
        "quill/dist/quill.snow.css",
        "animate.css",
        "sweetalert2/dist/sweetalert2.css",
        "nouislider/distribute/nouislider.css",
        "@fortawesome/fontawesome-free/css/all.min.css",
        "socicon/css/socicon.css",
        "line-awesome/dist/line-awesome/css/line-awesome.css",
        "dropzone/dist/dropzone.css",
        "@vueform/multiselect/themes/default.css",
        "prism-themes/themes/prism-shades-of-purple.css",
        "element-plus/dist/index.css",

        // Main demo style scss
        "@/assets/sass/element-ui.dark.scss",
        "@/assets/sass/plugins.scss",
        "@/assets/sass/style.scss",

    ],
    veeValidate: {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
            Form: 'VeeForm',
            Field: 'VeeField',
            FieldArray: 'VeeFieldArray',
            ErrorMessage: 'VeeErrorMessage',
        },
    },
    app: {
        head: {
            title: 'Test',
            script: [
                {src: "/js/bootstrap.min.js", type: 'text/javascript'},
            ],
        }
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000/',
        apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000/',
    },
    build: {
        loaders:  {
            vue: {
                prettify: false
            }
        },
        terser: {
            // https://github.com/terser/terser#compress-options
            terserOptions: {
                compress: {
                    drop_console: false
                }
            }
        },
        build: {
            transpile: ["class-validator"],
        },
        vite: {
            optimizeDeps: {
                exclude: ['class-validator']
            }
        },
    }
});