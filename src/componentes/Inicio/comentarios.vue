<template>
  <v-carousel hide-delimiters height="200" class="comentario">
    <v-carousel-item v-for="(data, i) in datos" :key="i">
      <v-layout align-center column justify-center fill-height>
        <h1 class="display-1 font-weight-bold mb-3 white--text">
          {{ data.titulo }}
        </h1>
        <h3 class="subheading white--text">{{ data.text }}</h3>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      datos: [
        {
          titulo: "Construye tu lugar en poco tiempo",
          text: ""
        },
        {
          titulo: "Te permite economizar en materiales de construcción",
          text: ""
        },
        {
          titulo: "Ladrillos ecológicos y económicos",
          text: ""
        },
        {
          titulo: "Ladrillo de la diferencia",
          text: ""
        }
      ]
    };
  }
};
</script>
<style scoped>
.comentario {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    135deg,
    rgb(237, 109, 50) 5%,
    rgb(225, 80, 0) 15%,
    rgb(225, 80, 0) 75%,
    rgb(237, 109, 50) 85%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
