<script setup lang="ts">
import { onMounted } from 'vue';
import KTComponents from '@keenthemes/ktui';

onMounted(() => {
  // Setup standard initialization for ktui
  KTComponents.init();
});
</script>

<template>
  <div class="space-y-6 text-right" dir="rtl">
    <div class="bg-card p-6 rounded-xl shadow-sm border border-border">
      <h1 class="text-2xl font-bold text-primary mb-2">کامپوننت‌های KTUI</h1>
      <p class="text-muted-foreground">نمایش نمونه بیش از ۲۰ کامپوننت جذاب از Keenthemes (KTUI).</p>
      
      <!-- 1. Breadcrumb -->
      <nav class="mt-4">
        <ol class="kt-breadcrumb">
          <li class="kt-breadcrumb-item"><a href="#" class="kt-breadcrumb-link">خانه</a></li>
          <li class="kt-breadcrumb-separator"><i class="fa-solid fa-chevron-left text-[10px]"></i></li>
          <li class="kt-breadcrumb-item"><a href="#" class="kt-breadcrumb-link">کامپوننت‌ها</a></li>
          <li class="kt-breadcrumb-separator"><i class="fa-solid fa-chevron-left text-[10px]"></i></li>
          <li class="kt-breadcrumb-item"><span class="kt-breadcrumb-page">فهرست اصلی</span></li>
        </ol>
      </nav>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- 2. Card, 3. Button, 4. Badge -->
      <div class="kt-card">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۲. دکمه و ۳. تگ (نشان)</h3>
        </div>
        <div class="kt-card-content flex flex-col gap-4">
          <div class="flex flex-wrap gap-2">
            <button class="kt-btn kt-btn-primary">دکمه اصلی</button>
            <button class="kt-btn kt-btn-outline">حاشیه‌دار</button>
            <button class="kt-btn kt-btn-destructive kt-btn-sm">حذف</button>
            <button class="kt-btn kt-btn-ghost kt-btn-icon"><i class="fa-solid fa-gear"></i></button>
          </div>
          <div class="flex flex-wrap gap-2 mt-2">
            <span class="badge border border-primary text-primary px-2 py-1 rounded text-xs">جدید</span>
            <span class="badge bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">خطا</span>
            <span class="badge bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">در انتظار پردازش</span>
          </div>
        </div>
      </div>

      <!-- 5. Input, 6. Switch, 7. Checkbox, 8. Radio -->
      <div class="kt-card">
        <div class="kt-card-header">
          <h3 class="kt-card-title">فرم‌ها و ورودی‌ها</h3>
        </div>
        <div class="kt-card-content space-y-4">
          <div>
            <label class="font-medium text-sm text-foreground mb-1 block">نام کاربری</label>
            <input type="text" class="kt-input w-full px-3 py-2 border border-input rounded-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm bg-background" placeholder="نام خود را وارد کنید..." />
          </div>
          
          <div class="flex items-center gap-2">
            <input type="checkbox" class="w-4 h-4 text-primary rounded border-input focus:ring-primary" id="check1" checked />
            <label for="check1" class="text-sm font-medium">مرا به خاطر بسپار</label>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <input type="radio" name="opt" class="w-4 h-4 text-primary border-input focus:ring-primary" id="radio1" checked />
              <label for="radio1" class="text-sm font-medium">گزینه ۱</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="opt" class="w-4 h-4 text-primary border-input focus:ring-primary" id="radio2" />
              <label for="radio2" class="text-sm font-medium">گزینه ۲</label>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <!-- KTUI uses standard checkbox setup for toggles mostly or data-attributes. Assuming simple native for now with typical wrapper, but we will use standard HTML toggle -->
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked>
              <div class="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              <span class="mr-3 text-sm font-medium text-foreground">وضعیت</span>
            </label>
          </div>
        </div>
      </div>

      <!-- 9. Dropdown -->
      <div class="kt-card">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۹. منوی کشویی (Dropdown)</h3>
        </div>
        <div class="kt-card-content flex items-start h-40">
          <div class="relative inline-block" data-kt-dropdown="true">
            <button class="kt-btn kt-btn-outline" data-kt-dropdown-toggle="true">
              عملیات <i class="fa-solid fa-chevron-down mr-2 text-xs"></i>
            </button>
            <div class="hidden absolute top-full right-0 mt-2 w-48 bg-card rounded-md shadow-lg border border-border z-10" data-kt-dropdown-menu="true">
              <ul class="py-1">
                <li><a href="#" class="block px-4 py-2 text-sm text-foreground hover:bg-accent">ویرایش کاربر</a></li>
                <li><a href="#" class="block px-4 py-2 text-sm text-foreground hover:bg-accent">ارسال پیام</a></li>
                <li><div class="border-t border-border my-1"></div></li>
                <li><a href="#" class="block px-4 py-2 text-sm text-destructive hover:bg-destructive/10">حذف دائم</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 10. Alert -->
      <div class="kt-card md:col-span-2 lg:col-span-3">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۱۰. پیام‌های هشدار (Alert)</h3>
        </div>
        <div class="kt-card-content space-y-4">
          <div class="p-4 bg-primary/10 border border-primary/20 rounded-lg flex gap-3 text-primary">
            <i class="fa-solid fa-circle-info mt-0.5"></i>
            <div>
              <h4 class="font-bold mb-1">توجه کنید!</h4>
              <p class="text-sm">این یک نمونه هشدار با تم اصلی سیستم و استایل‌های Tailwind است.</p>
            </div>
          </div>
          
          <div class="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex gap-3 text-destructive">
            <i class="fa-solid fa-triangle-exclamation mt-0.5"></i>
            <div>
              <h4 class="font-bold mb-1">خطای پرداخت</h4>
              <p class="text-sm">اطلاعات کاربری نامعتبر است. لطفا مجدد تلاش کنید.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 11. Modal -->
      <div class="kt-card">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۱۱. مودال (Modal)</h3>
        </div>
        <div class="kt-card-content">
          <button class="kt-btn kt-btn-primary" data-kt-modal-toggle="#my-modal">باز کردن مودال</button>
          
          <!-- Modal markup -->
          <div id="my-modal" class="hidden fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/40" data-kt-modal="true">
            <div class="bg-card w-full max-w-md rounded-xl shadow-xl flex flex-col border border-border mx-4">
              <div class="flex justify-between items-center p-5 border-b border-border">
                <h3 class="font-bold text-lg">تایید عملیات</h3>
                <button class="text-muted-foreground hover:text-foreground" data-kt-modal-dismiss="true">
                  <i class="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
              <div class="p-5">
                <p class="text-muted-foreground">آیا از انجام این عملیات اطمینان دارید؟ تغییرات غیرقابل بازگشت است.</p>
              </div>
              <div class="p-5 border-t border-border flex justify-end gap-2">
                <button class="kt-btn kt-btn-outline" data-kt-modal-dismiss="true">انصراف</button>
                <button class="kt-btn kt-btn-primary">تایید</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 12. Tooltip -->
      <div class="kt-card">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۱۲. راهنما (Tooltip)</h3>
        </div>
        <div class="kt-card-content flex items-center gap-4">
          <button class="kt-btn kt-btn-secondary" data-kt-tooltip="true" title="این یک پیام راهنما برای کاربر است">هاور کنید</button>
          <span data-kt-tooltip="true" title="متن کمکی کوتاه"><i class="fa-solid fa-circle-question text-muted-foreground text-lg"></i></span>
        </div>
      </div>

      <!-- 13. Progress -->
      <div class="kt-card">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۱۳. نوار پیشرفت (Progress)</h3>
        </div>
        <div class="kt-card-content space-y-4">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span>در حال تکمیل پروفایل</span>
              <span class="font-medium">۶۵٪</span>
            </div>
            <div class="w-full bg-secondary rounded-full h-2">
              <div class="bg-primary h-2 rounded-full" style="width: 65%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 14. Tabs -->
      <div class="kt-card md:col-span-2">
        <div class="kt-card-header pb-0 border-b-0 space-y-2 flex-col items-start pt-4 px-0">
          <h3 class="kt-card-title px-5">۱۴. زبانه‌ها (Tabs)</h3>
          <div class="flex gap-2 border-b border-border w-full px-5" data-kt-tabs="true">
            <button class="pb-2 px-1 border-b-2 border-primary text-primary font-medium" data-kt-tab-toggle="#tab1">جزئیات حساب</button>
            <button class="pb-2 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground" data-kt-tab-toggle="#tab2">امنیت</button>
          </div>
        </div>
        <div class="kt-card-content">
          <div id="tab1" class="block">این بخش حاوی اطلاعات هویتی و حساب کاربری شخص می‌باشد.</div>
          <div id="tab2" class="hidden">تنظیمات رمز عبور و احراز هویت دو مرحله‌ای در این قسمت قرار دارد.</div>
        </div>
      </div>

      <!-- 15. Accordion -->
      <div class="kt-card md:col-span-2">
        <div class="kt-card-header">
          <h3 class="kt-card-title">۱۵. آکاردئون (Accordion)</h3>
        </div>
        <div class="kt-card-content px-0 py-0" data-kt-accordion="true">
          <div class="border-b border-border" data-kt-accordion-item="true">
            <button class="w-full flex justify-between items-center p-5 font-medium hover:bg-accent transition text-right" data-kt-accordion-toggle="true">
              <span>هزینه خدمات چگونه محاسبه می‌شود؟</span>
              <i class="fa-solid fa-chevron-down text-sm transition-transform"></i>
            </button>
            <div class="hidden p-5 pt-0 text-muted-foreground text-sm">محاسبات بر اساس زمان استفاده از سرور و حجم اطلاعات ذخیره شده انجام می‌پذیرد.</div>
          </div>
          <div data-kt-accordion-item="true">
            <button class="w-full flex justify-between items-center p-5 font-medium hover:bg-accent transition text-right" data-kt-accordion-toggle="true">
              <span>آیا اطلاعات من امن است؟</span>
              <i class="fa-solid fa-chevron-down text-sm transition-transform"></i>
            </button>
            <div class="hidden p-5 pt-0 text-muted-foreground text-sm">بله! ما از پیشرفته‌ترین الگوریتم‌های رمزنگاری داده‌ها استفاده می‌کنیم.</div>
          </div>
        </div>
      </div>

      <!-- 16. Avatar, 17. Rating, 18. Image Input, 19. Clipboard, 20. Scrollable -->
      <div class="kt-card md:col-span-2 lg:col-span-3">
        <div class="kt-card-header">
          <h3 class="kt-card-title">سایر کامپوننت‌ها (آواتار، امتیازدهی، کپی در کلیپ‌بورد، ورودی تصویر، اسکرول)</h3>
        </div>
        <div class="kt-card-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Avatar -->
          <div class="text-center space-y-2 border border-border p-4 rounded-xl">
            <h4 class="font-medium text-sm mb-4">آواتار شخصی</h4>
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=KtuiBoy" class="w-16 h-16 rounded-full mx-auto bg-secondary" alt="آواتار" />
            <div class="flex mx-auto justify-center -space-x-4 mt-2 ltr">
              <img class="w-8 h-8 rounded-full border-2 border-background z-10" src="https://api.dicebear.com/7.x/adventurer/svg?seed=A" alt="">
              <img class="w-8 h-8 rounded-full border-2 border-background z-20" src="https://api.dicebear.com/7.x/adventurer/svg?seed=B" alt="">
              <img class="w-8 h-8 rounded-full border-2 border-background z-30" src="https://api.dicebear.com/7.x/adventurer/svg?seed=C" alt="">
              <div class="w-8 h-8 rounded-full border-2 border-background z-40 bg-secondary flex items-center justify-center text-xs font-bold font-mono">+5</div>
            </div>
          </div>

          <!-- Rating -->
          <div class="text-center border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2">
            <h4 class="font-medium text-sm mb-2">امتیاز (Rating)</h4>
            <div class="flex gap-1 text-yellow-400 text-lg">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <span class="text-xs text-muted-foreground mt-1">۳.۵ از ۵</span>
          </div>

          <!-- Clipboard -->
          <div class="col-span-1 md:col-span-2 border border-border p-4 rounded-xl flex flex-col justify-center gap-4">
            <h4 class="font-medium text-sm text-center">کلیپ‌بورد (Clipboard)</h4>
            <div class="flex gap-2">
              <input type="text" id="api-key" class="kt-input w-full px-3 py-2 border border-input rounded-md text-sm text-left ltr" value="api_key_xxxxxxxxxxxxx12345" readonly />
              <button class="kt-btn kt-btn-secondary" data-kt-clipboard="true" data-kt-clipboard-target="#api-key">
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
            
            <h4 class="font-medium text-sm text-center mt-2">اسکرول (Scrollable)</h4>
            <div class="h-24 overflow-y-auto border border-border rounded-md p-2 text-sm text-muted-foreground bg-accent/20" data-kt-scrollable="true">
              <p>این یک باکس با اسکرول فعال است. متن‌های طولانی را اینجا قرار می‌دهیم...</p>
              <br/>
              <p>محتوای بیشتر برای الزام وجود نوار پیمایش...</p>
              <br/>
              <p>خط پایانی برای اسکرول.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
