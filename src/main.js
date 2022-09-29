import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { moment } from "vue-moment";
import store from './store'
import config from "./config"
import VueLazyload from 'vue-lazyload';
import VueSimpleAlert from "vue3-simple-alert";
import Notifications from '@kyvg/vue3-notification'
import { UploadMedia, UpdateMedia } from 'vue-media-upload';
import './index.css'
;
// import Larasocket from 'larasocket-js';
// Import Swiper styles
import "./swiper.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App)
    .use(router)
    .use(store)
    .use(config)
    .use(VueSimpleAlert)
    .use(Notifications)
    .use(VueLazyload, {
        lazyComponent: true
      })
    .use(UploadMedia)
    .use(UpdateMedia)
    .use(VueSweetalert2)
     //.use(Echo)
    //.use(Larasocket)
    .use(moment)
    .mount('#app')
