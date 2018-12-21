<template>
  <div>
    <v-parallax :src="srcImagen" :height="altura">
      <v-layout align-center justify-center>
        <div>
          <h1 v-if="comparar(item)" style="font-size: 50px; color: black;">
            {{ item }}
          </h1>
        </div>
        <slot></slot>
      </v-layout>
    </v-parallax>
  </div>
</template>
<script>
export default {
  props: ["item", "srcImagen", "height"],
  data() {
    return {
      altura: 350
    };
  },
  created() {
    this.comparar(this.item);
  },
  methods: {
    comparar(item) {
      if (this.item !== undefined) {
        if (item !== "INICIO" && item !== "/") {
          this.altura = 400;
          return true;
        } else {
          return false;
        }
      } else {
        this.altura = this.height;
      }
    }
  }
};
</script>
