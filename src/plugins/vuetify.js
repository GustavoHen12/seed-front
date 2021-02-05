import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import iconInfo from '../components/icons/icon-info.vue';
import iconPlus from '../components/icons/icon-plus.vue';
import iconMinus from '../components/icons/icon-minus.vue';
import iconCircle from '../components/icons/icon-circle.vue';
import iconBag from '../components/icons/icon-bag.vue';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            background: "#F8F8F8",
            primary: '#3726A6',
            secondary: '#b0bec5',
            anchor: '#8c9eff',
          },
        },
        options: {
            customProperties: true
        },
      },
    icons: {
      values: {
        iconInfo: {
          component: iconInfo,
        },
        iconPlus: {
          component: iconPlus,
        },
        iconMinus: {
          component: iconMinus,
        },
        iconCircle: {
          component: iconCircle,
        },
        iconBag: {
          component: iconBag,
        },
      },
    }
});