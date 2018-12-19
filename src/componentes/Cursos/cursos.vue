<template>
  <v-container grid-list-xl>
    <v-layout wrap row justify-center align-center>
      <v-flex xs12 sm6 md6 v-for="dato in data" :key="dato.Nombre">
        <v-hover>
          <v-card
            slot-scope="{
              hover,
              active,
              toggle
            }"
            class="mx-auto"
            max-width="440"
            height="440"
            :class="`elevation-${hover ? 10 : 2}`"
          >
            <v-img contain :aspect-ratio="16 / 9" :src="dato.src_imagen">
              <v-expand-transition>
                <router-link
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-1 v-card--reveal display-3 black--text"
                  style="height: 100%; text-decoration: none;"
                  to="/"
                >
                  Ir al Curso
                </router-link>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4" style="position: relative;">
              <v-btn
                absolute
                color="green"
                class="white--text"
                fab
                large
                right
                top
              >
                <v-icon>school</v-icon>
              </v-btn>
              <h3 class="display-1 font-weight-light orange--text my-2">
                {{ dato.Nombre }}
              </h3>
              <div class="font-weight-light title mb-2">
                {{ dato.Descripcion }}
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      data: [
        {
          Nombre: "Introducción a Arduino",
          Precio: 60,
          Descripcion: "Crea prototipos electrónicos de manera sencilla",
          src_imagen:
            "https://fabricadigital.org/wp-content/uploads/arduinouno_back_1.jpg"
        },
        {
          Nombre: "Introducción a Raspberry Pi",
          Precio: 120,
          Descripcion:
            "Desarrolla proyectos de mayor alcance usando este miniordenador",
          src_imagen:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Raspberry_Pi_3_Model_B.png"
        },
        {
          Nombre: "Desarrollo Web",
          Precio: 120,
          Descripcion:
            "Desarrolla tu propia página web y aplicaciones usando el stack MEVN",
          src_imagen: "https://i.ytimg.com/vi/ARIzrNwA5HQ/maxresdefault.jpg"
        }
      ]
    };
  }
};
</script>
