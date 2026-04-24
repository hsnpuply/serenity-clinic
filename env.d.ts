/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-persian-datetime-picker' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'sweetalert2/dist/sweetalert2.min.css';
declare module 'swiper/css';
declare module 'vue-toastification/dist/index.css';

declare module 'vue-easy-lightbox';
declare module 'vue3-print-nb';
declare module 'smooth-counter';
