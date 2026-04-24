<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/theme';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

const route = useRoute();
const layout = computed(() => route.meta.layout || DashboardLayout);
const themeStore = useThemeStore();
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
