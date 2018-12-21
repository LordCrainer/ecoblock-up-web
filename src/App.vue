<template>
  <v-app style="background-color: transparent; margin:0px;  min-width:250px;">
    <Headerw :menus="menu_principal"></Headerw>
    <section>
      <Parallax
        height="550"
        srcImagen="https://ren.org.ni/wp-content/uploads/2016/07/Orange-Abstract-Computer-Backgrounds-HD.jpg"
      >
        <v-container>
          <v-layout justify-center>
            <v-card flat color="rgba(255,255,255,0)">
              <router-link to="/">
                <v-img
                  contain
                  src="https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/meF6-EBU_lOGO_BLOQUE.png"
                  aspect-ratio="4"
                  height="50%"
                ></v-img>
              </router-link>
              <v-card-title class="font-weight-bold display-2 white--text">
                <h4>LADRILLO DE LA DIFERENCIA</h4>
              </v-card-title></v-card
            ></v-layout
          >
        </v-container>
      </Parallax>
    </section>
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
          ruta: "/productos",
          nombre: "productos"
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
    rgb(237, 109, 50) 15%,
    rgb(255, 80, 0) 15%,
    rgb(255, 80, 0) 85%,
    rgb(237, 109, 50) 85%
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
