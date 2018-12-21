<template>
  <div>
    <slot></slot>

    <Parallax
      :item="rutaActual"
      srcImagen="https://www.tendencias.kpmg.es/wp-content/uploads/2018/05/GettyImages-672310452-e1525335107388.jpg"
    ></Parallax>
    <Ventajas> </Ventajas> <Comentarios></Comentarios>
    <Parallax
      srcImagen="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/YqGSkmb/plexus-fantasy-abstract-technology-and-engineering-background-with-original-organic-motion_eqy4lpzde__F0012.png"
    ></Parallax>
  </div>
</template>
<script>
import Jumbo from "./jumbotron.vue";
import Ventajas from "./ventajas.vue";
import Comentarios from "./comentarios.vue";
import Parallax from "./../UI/parallax.vue";

export default {
  components: {
    Jumbo,
    Ventajas,
    Comentarios,
    Parallax
  },
  data() {
    return {};
  }
};
</script>
