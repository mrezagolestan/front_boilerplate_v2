import Vuex from 'vuex';
import ThemeModeModule from '@/store/ThemeModeModule';
import AuthModule from '@/store/AuthModule';
import BodyModule from '@/store/BodyModule';
import ConfigModule from '@/store/ConfigModule';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      ThemeModeModule: ThemeModeModule,
      AuthModule: AuthModule,
      BodyModule: BodyModule,
      ConfigModule: ConfigModule,
    }
  });
};
// const createStore = new Vuex.Store({
//   namespaced: true,
//   modules: {
//     ThemeModeModule: ThemeModeModule,
//     AuthModule: AuthModule,
//     BodyModule: BodyModule,
//     ConfigModule: ConfigModule,
//   }
// });
export default createStore