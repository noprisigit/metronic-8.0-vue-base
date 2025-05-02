<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <div class="card">
      <div class="card-body">
        <div  v-if="loading" class="placeholder-glow">
          <p class="placeholder placeholder-lg col-6"></p>
          <p class="placeholder placeholder-lg col-4"></p>
          <p class="placeholder placeholder-lg col-8"></p>
        </div>
        <div v-else>
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "main-dashboard",
  setup() {
    const loading = ref<boolean>(false);

    onMounted(() => {
      setCurrentPageTitle("Dashboard");

      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 5000);
    });

    return {
      loading,
    }
  },
});
</script>
