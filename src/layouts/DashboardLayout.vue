<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 flex transition-colors duration-200">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-slate-800 border-l border-gray-200 dark:border-slate-700 hidden md:block">
      <div class="p-4 border-b border-gray-200 dark:border-slate-700">
        <h1 class="text-xl font-bold text-[var(--primary)]"><i class="fa-solid fa-leaf ml-2"></i> قالب سازمانی</h1>
      </div>
      <nav class="p-4 space-y-2">
        <router-link to="/example" class="block p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition" active-class="bg-gray-100 dark:bg-slate-700 text-[var(--primary)] text-bold">
          <i class="fa-solid fa-vial ml-2 text-gray-500"></i>
          سامانه و پلاگین‌ها
        </router-link>
        <router-link to="/primevue" class="block p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition" active-class="bg-gray-100 dark:bg-slate-700 text-[var(--primary)] text-bold">
          <i class="fa-solid fa-cubes ml-2 text-gray-500"></i>
          کامپوننت‌های PrimeVue
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Navbar -->
      <header class="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 p-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <button class="md:hidden p-2"><i class="fa-solid fa-bars"></i></button>
          <h2 class="font-semibold text-lg">داشبورد</h2>
        </div>
        <div>
          <button @click="themeStore.toggleTheme()" class="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center justify-center transition">
            <i class="fa-solid" :class="themeStore.isDark ? 'fa-sun text-yellow-400' : 'fa-moon text-slate-600'"></i>
          </button>
        </div>
      </header>
      
      <!-- Page Content -->
      <main class="p-6 flex-1 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
