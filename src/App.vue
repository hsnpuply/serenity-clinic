<script setup lang="ts">
import { computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import KTComponents from '@keenthemes/ktui';

const route = useRoute();
const layout = computed(() => route.meta.layout || DashboardLayout);
const themeStore = useThemeStore();

watch(() => route.path, () => {
  setTimeout(() => {
    KTComponents.init();
  }, 100);
});

onMounted(() => {
  KTComponents.init();
});
</script>

<template>
  <div dir="rtl" class="w-full text-right" style="min-height: 100vh;">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style scoped>
</style>
