import {ref} from 'vue'
import { defineStore } from 'pinia'

export  const useAuthStore = defineStore('auth', () => {
  const username = ref(null)
  const isAuthenticated = ref(false)


  return { username}
})