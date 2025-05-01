<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "main-dashboard",
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
