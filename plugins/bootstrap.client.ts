// import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min"
//
// export default defineNuxtPlugin(nuxtApp => {
//     nuxtApp.vueApp.component('bootstrap', bootstrap)
// })

import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            bootstrap: bootstrap
        }
    }
})