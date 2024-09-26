<script>

import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
  },
  data() {
    return {
      BodyElement: null,
      btn_value: null,
      theme: localStorage.getItem('theme')
    }
  },
  mounted() {
    this.BodyElement = document.body

    if (this.theme === 'light') {
      this.BodyElement.classList.add('theme_Light')
      this.btn_value = true
    }

  },
  methods: {
    toggleTheme() {

      this.BodyElement.classList.toggle("theme_Light")

      if(this.BodyElement.classList.contains("theme_Light")) {
        console.log("dark")
        this.btn_value = true

        localStorage.setItem('theme', 'light')
      } else {
        console.log("light")
        this.btn_value = false

        localStorage.setItem('theme', 'dark')
      }
    }
  }
}

</script>

<template>

  <TheHeader :functionCick="toggleTheme" :value_btn_theme="btn_value"/>

  <TheMain />

</template>

<style>

</style>
