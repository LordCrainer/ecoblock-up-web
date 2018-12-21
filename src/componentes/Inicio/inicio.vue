<template>
  <div>
    <slot></slot>
    <Parallax
      height="550"
      srcImagen="https://ren.org.ni/wp-content/uploads/2016/07/Orange-Abstract-Computer-Backgrounds-HD.jpg"
    >
      <v-container>
        <v-layout justify-center>
          <v-card flat color="rgba(255,255,255,0)">
            <v-card-title class="font-weight-bold display-3">
              <h3>LADRILLO DE LA DIFERENCIA</h3>
            </v-card-title></v-card
          ></v-layout
        >
      </v-container>
    </Parallax>
    <Parallax
      :item="rutaActual"
      srcImagen="https://www.tendencias.kpmg.es/wp-content/uploads/2018/05/GettyImages-672310452-e1525335107388.jpg"
    ></Parallax>
    <Valores> </Valores> <Comentarios></Comentarios>
    <Parallax
      srcImagen="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/YqGSkmb/plexus-fantasy-abstract-technology-and-engineering-background-with-original-organic-motion_eqy4lpzde__F0012.png"
    ></Parallax>
  </div>
</template>
<script>
import Jumbo from "./jumbotron.vue";
import Valores from "./valores.vue";
import Comentarios from "./comentarios.vue";
import Parallax from "./../UI/parallax.vue";

export default {
  components: {
    Jumbo,
    Valores,
    Comentarios,
    Parallax
  },
  data() {
    return {};
  }
};
</script>
