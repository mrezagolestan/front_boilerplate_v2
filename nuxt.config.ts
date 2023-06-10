// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt'
    ],
    css: [
        'bootstrap-icons/font/bootstrap-icons.css',
        //'apexcharts/dist/apexcharts.css',
        'quill/dist/quill.snow.css',
        'animate.css',
        'sweetalert2/dist/sweetalert2.css',
        'nouislider/distribute/nouislider.css',
        '@fortawesome/fontawesome-free/css/all.min.css',
        'socicon/css/socicon.css',
        'line-awesome/dist/line-awesome/css/line-awesome.css',
        'dropzone/dist/dropzone.css',
        '@vueform/multiselect/themes/default.css',
        'prism-themes/themes/prism-shades-of-purple.css',
        'element-plus/dist/index.css',

        // Main demo style scss
        '@/assets/sass/element-ui.dark.scss',
        '@/assets/sass/plugins.scss',
        '@/assets/sass/style.scss',

    ],

    app: {
        head: {
            title: 'Test',
            script: [
                {src: "/js/bootstrap.min.js", type: 'text/javascript'},
            ],
        }
    }
});