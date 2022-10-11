<script>
import { useAuthStore } from "../stores/login.js";
import Pagination from "../components/Pagination.vue";
export default {
  components: {
    Pagination,
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
};
</script>

<template>
  <p>{{ this.authStore.username }}</p>
  <pagination
    :totalPages="20"
    :perPage="10"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  />
</template>
