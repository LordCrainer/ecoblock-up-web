<template>
  <div>
    <slot></slot> <Productos></Productos>
    <Parallax
      srcImagen="https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/zsvi-4eea78_IMG_20180910_144303278_HDR.jpg"
    ></Parallax>
    <Ventajas> </Ventajas>

    <Carousel></Carousel> <Comentarios></Comentarios>
  </div>
</template>
<script>
import Jumbo from "./jumbotron.vue";
import Productos from "./productos.vue";
import Ventajas from "./ventajas.vue";
import Comentarios from "./comentarios.vue";
import Parallax from "./../UI/parallax.vue";
import Carousel from "./carusel.vue";

export default {
  components: {
    Jumbo,
    Ventajas,
    Comentarios,
    Parallax,
    Carousel,
    Productos
  },
  data() {
    return {};
  }
};
</script>
