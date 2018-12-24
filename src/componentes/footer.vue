<template>
  <v-footer dark height="auto">
    <v-card
      width="100%"
      flat
      tile
      color="rgb(210, 70, 0)"
      class="white--text text-xs-center"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <v-container grid-list-xl>
          <v-layout justify-space-around align-start>
            <v-flex xs12 sm4>
              <v-layout column justify-center align-center>
                <h3>EMPRESA</h3>
                <router-link
                  v-for="menu in link_empresa"
                  :key="menu.nombre"
                  :to="menu.ruta"
                >
                  <v-btn flat round class="my-0">{{ menu.nombre }} </v-btn>
                </router-link>
              </v-layout>
            </v-flex>
            <v-flex xs12 sm4>
              <v-layout column justify-center align-center>
                <h3>PRINCIPAL</h3>
                <router-link
                  v-for="menu in menus"
                  :key="menu.nombre"
                  :to="menu.ruta"
                >
                  <v-btn flat round class="my-0">{{ menu.nombre }} </v-btn>
                </router-link>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-text>
        <v-layout row>
          <v-flex>
            <a style="text-decoration: none;" class="white--text">
              <v-btn icon @click.stop.prevent="copyTestingCode">
                <v-icon large>phone</v-icon></v-btn
              >
              <h3 @click.stop.prevent="copyTestingCode">{{ telefono }}</h3>
              <input type="hidden" id="telefono_copy" :value="telefono" />
            </a>
          </v-flex>
          <v-flex>
            <a
              style="text-decoration: none;"
              class="white--text"
              :href="'mailto:' + correo + '?subject=INFORMACION&body='"
              ><v-btn icon><v-icon large>mail</v-icon></v-btn>
              <h3>{{ correo }}</h3></a
            >
          </v-flex>
        </v-layout></v-card-text
      >
      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 —
        <a
          style="text-decoration: none;"
          class="white--text"
          href="adcaplus.com"
          ><strong>ADCAPLUS</strong></a
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  //correo + '?subject=Email%20Subject&body=Email%20Body%20Text'
  props: ["menus"],
  data() {
    return {
      correo: "info@ecoblock-up.com",
      telefono: "+593992958873",
      comentario: "Este es una prueba",
      titulo: ["EMPRESA", "PRINCIPAL"],
      api: "https://web.whatsapp.com/send?phone=" + this.telefono,
      otro: "google.com",
      link_empresa: [
        { ruta: "/nosotros", nombre: "Misión" },
        { ruta: "/nosotros", nombre: "Visión" }
      ],
      icons: [
        "fab fa-facebook-square",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      text:
        "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    };
  },
  methods: {
    remplazar_texto(texto) {
      return texto.replace(/ /g, "%20");
    },
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#telefono_copy");
      testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "exitosamente" : "sin exito";
        alert("El número fue copiado " + msg);
      } catch (err) {
        alert("Oops, no se ha podido copiar el número");
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    }
  }
};
</script>
