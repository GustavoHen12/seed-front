import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { bag } from './bag.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    bag,
  }
});
