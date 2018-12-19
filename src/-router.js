import Vue from "vue";
import Router from "vue-router";

/*import App from "./App.vue";

import Header from "./componentes/header.vue";
import Footer from "./componentes/footer.vue";*/
import Error404 from "./componentes/error404.vue";
import Pagina_Inicio from "./componentes/Inicio/inicio.vue";
import Carousel from "./componentes/Inicio/carusel.vue";
import Cursos from "./componentes/Cursos/cursos.vue";
import Contact from "./componentes/Contact/contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      name: "INICIO",
      path: "/",
      components: {
        default: Pagina_Inicio,
        carousel: Carousel
      }
    },
    {
      name: "CURSOS",
      path: "/cursos",
      components: { default: Cursos }
    },
    {
      name: "CONTACTO",
      path: "/contacto",
      components: {
        default: Contact
      }
    },
    {
      name: "ERROR404",
      path: "*",
      components: { default: Error404 }
    }
  ]
});
