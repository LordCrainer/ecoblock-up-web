<template>
  <div>
    <slot></slot> <Valores> </Valores> <Comentarios></Comentarios>
    <Parallax
      srcImagen="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/YqGSkmb/plexus-fantasy-abstract-technology-and-engineering-background-with-original-organic-motion_eqy4lpzde__F0012.png"
    ></Parallax>
  </div>
</template>
<script>
import Valores from "./valores.vue";
import Comentarios from "./comentarios.vue";
import Parallax from "./../UI/parallax.vue";
export default {
  components: {
    Valores,
    Comentarios,
    Parallax
  },
  data() {
    return {};
  }
};
</script>
