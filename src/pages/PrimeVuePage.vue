<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/select'; // In v4 Select replaced Dropdown
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';
import Slider from 'primevue/slider';
import Rating from 'primevue/rating';
import Knob from 'primevue/knob';
import ColorPicker from 'primevue/colorpicker';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import Message from 'primevue/message';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';

const toast = useToast();

const textVal = ref('');
const passwordVal = ref('');
const numVal = ref(50);
const textareaVal = ref('');
const checkboxVal = ref(true);
const radioVal = ref('A');
const switchVal = ref(true);
const sliderVal = ref(40);
const ratingVal = ref(3);
const knobVal = ref(60);
const colorVal = ref('10b981');
const dialogVisible = ref(false);

const selectedCity = ref(null);
const cities = [
    { name: 'تهران', code: 'THR' },
    { name: 'اصفهان', code: 'ISF' },
    { name: 'شیراز', code: 'SYZ' },
    { name: 'مشهد', code: 'MHD' },
    { name: 'تبریز', code: 'TBZ' }
];

const showToast = () => {
    toast.add({ severity: 'success', summary: 'عملیات موفق', detail: 'این یک پیام آزمایشی از PrimeVue است', life: 3000 });
};
</script>

<template>
  <div class="space-y-6">
    <div class="bg-card dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border dark:border-slate-700">
      <h1 class="text-2xl font-bold text-primary mb-2">کامپوننت‌های PrimeVue</h1>
      <p class="text-muted-foreground dark:text-gray-400">نمایش بیش از ۲۰ کامپوننت قدرتمند PrimeVue (نسخه ۴) با استایل‌های پیش‌فرض Aura.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      <!-- 1. Button -->
      <Card>
        <template #title>۱. دکمه‌ها (Button)</template>
        <template #content>
          <div class="flex flex-wrap gap-2">
            <Button label="اصلی" />
            <Button label="ثانویه" severity="secondary" />
            <Button label="موفقیت" severity="success" />
            <Button label="اطلاعات" severity="info" outlined />
            <Button icon="pi pi-check" aria-label="Submit" />
            <Button label="لغو" severity="danger" text />
          </div>
        </template>
      </Card>

      <!-- 2. InputText -->
      <Card>
        <template #title>۲. ورودی متن (InputText)</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <label for="username">نام کاربری</label>
            <InputText id="username" v-model="textVal" placeholder="متن خود را وارد کنید..." />
            <small class="text-muted-foreground">متن فعلی: {{ textVal }}</small>
          </div>
        </template>
      </Card>

      <!-- 3. Password -->
      <Card>
        <template #title>۳. رمز عبور (Password)</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <label for="password">رمز عبور امن</label>
            <Password v-model="passwordVal" toggleMask promptLabel="رمز عبور را وارد کنید" weakLabel="ضعیف" mediumLabel="متوسط" strongLabel="قوی" />
          </div>
        </template>
      </Card>

      <!-- 4. InputNumber -->
      <Card>
        <template #title>۴. ورودی عدد (InputNumber)</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <label for="number">مبلغ (تومان)</label>
            <InputNumber v-model="numVal" inputId="number" mode="currency" currency="IRR" locale="fa-IR" />
          </div>
        </template>
      </Card>

      <!-- 5. Textarea -->
      <Card>
        <template #title>۵. متن چند خطی (Textarea)</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <label for="address">آدرس پستی</label>
            <Textarea v-model="textareaVal" rows="3" cols="30" class="w-full" />
          </div>
        </template>
      </Card>

      <!-- 6. Select (Dropdown) -->
      <Card>
        <template #title>۶. انتخاب از لیست (Select)</template>
        <template #content>
          <div class="flex flex-col gap-2">
            <label for="city">انتخاب شهر</label>
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="یک شهر انتخاب کنید" class="w-full" />
          </div>
        </template>
      </Card>

      <!-- 7. Checkbox -->
      <Card>
        <template #title>۷. چک باکس (Checkbox)</template>
        <template #content>
          <div class="flex items-center gap-2 mt-4">
            <Checkbox v-model="checkboxVal" binary inputId="check" />
            <label for="check" class="cursor-pointer">با قوانین کاربری سایت موافقم</label>
          </div>
        </template>
      </Card>

      <!-- 8. RadioButton -->
      <Card>
        <template #title>۸. دکمه رادیویی (RadioButton)</template>
        <template #content>
          <div class="flex flex-wrap gap-4 mt-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="radioVal" inputId="radioA" value="A" />
              <label for="radioA">گزینه الف</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="radioVal" inputId="radioB" value="B" />
              <label for="radioB">گزینه ب</label>
            </div>
          </div>
        </template>
      </Card>

      <!-- 9. ToggleSwitch -->
      <Card>
        <template #title>۹. سوییچ (ToggleSwitch)</template>
        <template #content>
          <div class="flex items-center gap-4 mt-4">
            <ToggleSwitch v-model="switchVal" inputId="switch1" />
            <label for="switch1" class="font-medium">وضعیت: {{ switchVal ? 'فعال' : 'غیرفعال' }}</label>
          </div>
        </template>
      </Card>

      <!-- 10. Slider -->
      <Card>
        <template #title>۱۰. اسلایدر (Slider)</template>
        <template #content>
          <div class="flex flex-col gap-6 mt-4">
            <Slider v-model="sliderVal" class="w-full" />
            <span class="text-sm font-medium">مقدار انتخاب شده: {{ sliderVal }}</span>
          </div>
        </template>
      </Card>

      <!-- 11. Rating -->
      <Card>
        <template #title>۱۱. امتیاز دهی (Rating)</template>
        <template #content>
          <div class="flex flex-col gap-3 mt-4">
            <label class="text-foreground">کیفیت خدمات</label>
            <Rating v-model="ratingVal" :cancel="false" />
          </div>
        </template>
      </Card>

      <!-- 12. Knob -->
      <Card>
        <template #title>۱۲. ناب (Knob)</template>
        <template #content>
          <div class="flex justify-center mt-2">
            <Knob v-model="knobVal" :size="100" />
          </div>
        </template>
      </Card>

      <!-- 13. ColorPicker -->
      <Card>
        <template #title>۱۳. انتخابگر رنگ (ColorPicker)</template>
        <template #content>
          <div class="flex flex-col gap-2 mt-4">
            <label class="text-foreground">رنگ دلخواه خود را انتخاب کنید</label>
            <div class="flex gap-4 items-center mt-2">
              <ColorPicker v-model="colorVal" />
              <span class="text-sm font-mono" dir="ltr">#{{ colorVal }}</span>
            </div>
          </div>
        </template>
      </Card>

      <!-- 14. Badge -->
      <Card>
        <template #title>۱۴. نشان (Badge)</template>
        <template #content>
          <div class="flex gap-4 mt-4 items-center">
            <Badge value="2" size="large"></Badge>
            <Badge value="8" severity="success" size="large"></Badge>
            <Badge value="4" severity="info" size="large"></Badge>
            <Badge value="12" severity="warn" size="large"></Badge>
            <Badge value="3" severity="danger" size="large"></Badge>
          </div>
        </template>
      </Card>

      <!-- 15. Avatar -->
      <Card>
        <template #title>۱۵. آواتار (Avatar)</template>
        <template #content>
          <div class="flex gap-4 mt-4 items-center">
            <Avatar label="P" size="xlarge" shape="circle" />
            <Avatar icon="pi pi-user" size="large" style="background-color: #2196F3; color: white" shape="circle" />
            <Avatar image="https://api.dicebear.com/7.x/adventurer/svg?seed=Prime" size="large" shape="circle" />
          </div>
        </template>
      </Card>

      <!-- 16. Message -->
      <Card class="md:col-span-2 xl:col-span-3">
        <template #title>۱۶. پیام‌ها (Message)</template>
        <template #content>
          <div class="flex flex-col mt-2">
            <Message severity="success" icon="pi pi-check" :closable="false">این یک پیام موفقیت آمیز است</Message>
            <Message severity="info" icon="pi pi-info-circle" :closable="false">این پیام جهت اطلاع رسانی است</Message>
            <Message severity="warn" icon="pi pi-exclamation-triangle" :closable="false">هشدار! موردی نیاز به بررسی دارد</Message>
            <Message severity="error" icon="pi pi-times-circle" :closable="false">خطا در انجام درخواست شما</Message>
          </div>
        </template>
      </Card>

      <!-- 17. ProgressBar -->
      <Card class="md:col-span-2">
        <template #title>۱۷. نوار پیشرفت (ProgressBar)</template>
        <template #content>
          <div class="flex flex-col gap-4 mt-4">
            <label class="text-foreground">در حال ارسال اطلاعات...</label>
            <ProgressBar :value="numVal" />
          </div>
        </template>
      </Card>

      <!-- 18. Tag -->
      <Card>
        <template #title>۱۸. تگ (Tag)</template>
        <template #content>
          <div class="flex flex-wrap gap-2 mt-4">
            <Tag value="اصلی"></Tag>
            <Tag severity="success" value="موفق"></Tag>
            <Tag severity="info" value="اطلاعات"></Tag>
            <Tag severity="warning" value="هشدار"></Tag>
            <Tag severity="danger" value="خطر"></Tag>
          </div>
        </template>
      </Card>

      <!-- 19. Toast (via Button) -->
      <Card>
        <template #title>۱۹. توست (Toast)</template>
        <template #content>
          <div class="flex justify-center mt-4">
            <Button label="نمایش توست" severity="success" @click="showToast" />
          </div>
        </template>
      </Card>

      <!-- 20. Dialog -->
      <Card>
        <template #title>۲۰. دیالوگ (Dialog)</template>
        <template #content>
          <div class="flex justify-center mt-4">
            <Button label="نمایش دیالوگ" icon="pi pi-external-link" @click="dialogVisible = true" />
          </div>
          
          <Dialog v-model:visible="dialogVisible" modal header="تایید عملیات" :style="{ width: '25rem' }">
            <span class="p-text-secondary block mb-5 text-foreground leading-relaxed mt-4">آیا از انجام این عملیات اطمینان دارید؟ تغییرات قابل بازگشت نیستند.</span>
            <div class="flex justify-end gap-2 mt-6">
                <Button type="button" label="انصراف" severity="secondary" @click="dialogVisible = false"></Button>
                <Button type="button" label="تایید" @click="dialogVisible = false"></Button>
            </div>
          </Dialog>
        </template>
      </Card>

    </div>
  </div>
</template>
