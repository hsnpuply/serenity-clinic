<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useToast } from 'vue-toastification';
import Swal from 'sweetalert2';
import VChart from 'vue-echarts';
import { useThemeStore } from '@/stores/theme';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import lottie from 'lottie-web';
import moment from 'jalali-moment';
import SmoothCounter from 'smooth-counter';

// Setup Echarts
use([CanvasRenderer, LineChart, BarChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent]);

const themeStore = useThemeStore();
const toast = useToast();

// 1. Chart Data
const chartOptions = ref({
  tooltip: { trigger: 'axis' },
  legend: { data: ['فروش', 'سود'] },
  xAxis: { type: 'category', data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'] },
  yAxis: { type: 'value' },
  series: [
    { name: 'فروش', type: 'bar', data: [120, 200, 150, 80, 70, 110], itemStyle: { color: 'var(--color-primary-500)' } },
    { name: 'سود', type: 'line', data: [20, 50, 30, 10, 5, 20], itemStyle: { color: '#f59e0b' } }
  ]
});

// 2. Lightbox
const visibleLightbox = ref(false);
const imgs = ref([
  'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=600&auto=format&fit=crop'
]);
const showLightbox = () => { visibleLightbox.value = true; };

// 3. Print
const printObj = {
  id: "printMe",
  popTitle: 'گزارش سامانه'
};

// 4. Form Validation (vee-validate + yup)
const schema = yup.object({
  username: yup.string().required('نام کاربری الزامی است').min(3, 'حداقل ۳ کاراکتر'),
  email: yup.string().email('ایمیل نامعتبر').required('ایمیل الزامی است'),
});

const { handleSubmit, errors } = useForm({ validationSchema: schema });
const { value: username } = useField('username');
const { value: email } = useField('email');

const onSubmit = handleSubmit((values) => {
  toast.success('فرم با موفقیت ارسال شد!');
});

// 5. SweetAlert
const showAlert = () => {
  Swal.fire({
    title: 'آیا مطمئن هستید؟',
    text: "این عملیات غیرقابل بازگشت است!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'var(--color-primary-600)',
    cancelButtonColor: '#d33',
    confirmButtonText: 'بله',
    cancelButtonText: 'خیر'
  }).then((result) => {
    if (result.isConfirmed) {
      toast.info('عملیات تایید شد');
    }
  });
};

// 6. Jalali Moment
const jalaliDate = ref('');
const datePickerValue = ref('');

onMounted(() => {
  jalaliDate.value = moment().locale('fa').format('YYYY/MM/DD');
  
  // 7. Vanilla Lottie-web demo
  lottie.loadAnimation({
    container: document.getElementById('lottie-vanilla'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animation.json' // the path to the animation json
  });
});

</script>

<template>
  <div class="space-y-6">
    <!-- Header info -->
    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm flex flex-wrap gap-4 items-center justify-between border border-gray-100 dark:border-slate-700">
      <div>
        <h1 class="text-2xl font-bold text-[var(--primary)] mb-2">نمونه کامپوننت‌های سازمانی</h1>
        <p class="text-gray-500 dark:text-gray-400">تاریخ امروز: {{ jalaliDate }}</p>
      </div>
      <div>
        <button v-print="printObj" class="border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-4 py-2 rounded-lg transition">
          <i class="fa-solid fa-print ml-2"></i> چاپ صفحه
        </button>
      </div>
    </div>

    <div id="printMe" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <!-- Chart -->
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 min-h-[400px]">
        <h3 class="font-bold mb-4 border-b pb-2 dark:border-slate-700">نمودار فروش (ECharts)</h3>
        <v-chart class="h-64 mt-4" :option="chartOptions" :theme="themeStore.isDark ? 'dark' : 'light'" autoresize />
      </div>

      <!-- Form (VeeValidate + Yup) -->
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
        <h3 class="font-bold mb-4 border-b pb-2 dark:border-slate-700">اعتبارسنجی فرم (VeeValidate & Yup)</h3>
        <form @submit.prevent="onSubmit" class="space-y-4">
          <div>
            <label class="block mb-1 text-sm">نام کاربری</label>
            <input v-model="username" type="text" class="w-full p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 outline-none focus:border-[var(--primary)]">
            <span class="text-red-500 text-xs">{{ errors.username }}</span>
          </div>
          <div>
            <label class="block mb-1 text-sm">ایمیل</label>
            <input v-model="email" type="email" class="w-full p-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 outline-none focus:border-[var(--primary)]">
            <span class="text-red-500 text-xs">{{ errors.email }}</span>
          </div>
          
          <div>
             <label class="block mb-1 text-sm">انتخابگر تاریخ شمسی</label>
             <!-- vue3-persian-datetime-picker -->
             <date-picker v-model="datePickerValue" format="jYYYY/jMM/jDD" color="#0ba55d" />
          </div>

          <button type="submit" class="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 w-full transition">ثبت فرم و نمایش Toast</button>
        </form>
      </div>

      <!-- Swiper & Lightbox -->
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
        <h3 class="font-bold mb-4 border-b pb-2 dark:border-slate-700 flex justify-between">
          <span>گالری (Swiper & Lightbox)</span>
          <button @click="showLightbox" class="text-sm text-[var(--primary)]">مشاهده تمام صفحه (Lightbox)</button>
        </h3>
        
        <swiper :modules="[Navigation, Pagination]" :navigation="{}" :pagination="{}" dir="rtl" class="w-full h-48 rounded-lg overflow-hidden">
          <swiper-slide v-for="(img, idx) in imgs" :key="idx">
            <img :src="img" class="w-full h-full object-cover cursor-pointer" @click="showLightbox" />
          </swiper-slide>
        </swiper>

        <vue-easy-lightbox :visible="visibleLightbox" :imgs="imgs" @hide="visibleLightbox = false" />
      </div>

      <!-- Utilities (Lottie, SweetAlert, FontAwesome) -->
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
        <h3 class="font-bold mb-4 border-b pb-2 dark:border-slate-700">ابزارهای دیگر</h3>
        
        <div class="flex flex-wrap gap-4 mb-6">
           <button @click="showAlert" class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
             نمایش SweetAlert <i class="fa-regular fa-bell mr-2"></i>
           </button>
           
           <div class="flex px-4 py-2 items-center gap-2 bg-gray-100 dark:bg-slate-700 rounded-lg">
             <span>شمارنده نرم: </span>
             <SmoothCounter class="font-bold text-[var(--primary)] text-xl" :value="1250" :duration="2000" />
           </div>
        </div>

        <div class="grid grid-cols-2 gap-4 border-t pt-4 dark:border-slate-700">
           <!-- DotLottieVue -->
           <div class="flex flex-col items-center">
             <span class="text-sm mb-2">DotLottie Vue</span>
             <div class="w-24 h-24 bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden">
               <DotLottieVue style="height: 100%; width: 100%" autoplay loop src="/animation.json" />
             </div>
           </div>
           
           <!-- Lottie Web -->
           <div class="flex flex-col items-center">
             <span class="text-sm mb-2">Lottie Web</span>
             <div id="lottie-vanilla" class="w-24 h-24 bg-gray-50 dark:bg-slate-700 rounded-lg overflow-hidden"></div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional component scoping if missing */
</style>
