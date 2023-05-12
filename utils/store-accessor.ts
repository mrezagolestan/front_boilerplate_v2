import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AuthMod from '~/store/AuthModule'

let AuthModule: AuthMod

function initialiseStores(store: Store<any>): void {
    AuthModule = getModule(AuthMod, store)
}

export { initialiseStores, AuthModule }