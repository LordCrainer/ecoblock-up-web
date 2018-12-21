<template>
  <v-app style="background-color: transparent; margin:0px;  min-width:250px;">
    <Headerw :menus="menu_principal"></Headerw>
    <section></section>
    <section><router-view @epath="nombreRuta($event);"></router-view></section>
    <FooterW :menus="menu_principal"></FooterW>
  </v-app>
</template>

<script>
import Headerw from "./componentes/header.vue";
import FooterW from "./componentes/footer.vue";
import Parallax from "./componentes/UI/parallax.vue";
import Jumbo from "./componentes/Inicio/jumbotron.vue";
//import Carusel from "./componentes/Inicio/carusel.vue";
//import Hosting from "./componentes/hosting/hostings.vue";
//import datePicker from "./componentes/date-picker.vue";
//import subtab from "./componentes/subtab.vue";
//https://ren.org.ni/wp-content/uploads/2016/07/Orange-Abstract-Computer-Backgrounds-HD.jpg
export default {
  components: {
    Headerw,
    FooterW,
    Parallax,
    Jumbo
  },
  data() {
    return {
      rutaActual: "",
      menu_principal: [
        {
          ruta: "/",
          nombre: "Inicio"
        },
        {
          ruta: "/cursos",
          nombre: "Cursos"
        },
        {
          ruta: "/blog",
          nombre: "Blog"
        },
        {
          ruta: "/nosotros",
          nombre: "Nosotros"
        },
        {
          ruta: "/contacto",
          nombre: "Contacto"
        }
      ]
    };
  },
  created() {
    this.getPath();
  },
  watch: {
    $route() {
      this.rutaActual = this.$route.name;
      //.path.toUpperCase().split("/")[1]
    }
  },
  methods: {
    getPath() {
      this.rutaActual = this.$route.name;
    },
    nombreRuta(ruta) {
      this.rutaActual = ruta;
    }
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
body {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    135deg,
    rgba(0, 25, 100, 1) 25%,
    rgba(75, 150, 225, 1) 25%,
    rgba(75, 150, 225, 1) 60%,
    rgba(0, 25, 100, 1) 60%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
.page {
  position: fixed;
  width: inherit;
}
</style>
