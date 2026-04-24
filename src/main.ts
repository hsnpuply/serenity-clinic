import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Styling
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css';
import 'vue-toastification/dist/index.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'primeicons/primeicons.css';

// Plugins
import Toast from 'vue-toastification';
import VueSweetalert2 from 'vue-sweetalert2';
import VueEasyLightbox from 'vue-easy-lightbox';
import print from 'vue3-print-nb';
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Toast, { rtl: true });
app.use(VueSweetalert2);
app.use(VueEasyLightbox);
app.use(print);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark'
        }
    }
});
app.use(ToastService);
app.component('DatePicker', Vue3PersianDatetimePicker);

app.mount('#root');
