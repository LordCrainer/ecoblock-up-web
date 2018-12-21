<style scoped>
.valor {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    45deg,
    rgba(75, 150, 225, 1) 12%,
    rgba(0, 25, 100, 1) 12%,
    rgba(0, 25, 100, 1) 50%,
    rgba(75, 150, 225, 1) 50%,
    rgba(0, 25, 100, 1) 100%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <v-layout app justify-center>
    <v-flex>
      <v-card color="rgba(255,255,255,1)" flat>
        <v-card-text class="display-1 pa-5"> <h3>VENTAJAS</h3></v-card-text>

        <v-container fluid grid-list-xl app>
          <v-layout wrap justify-center row fill-height>
            <v-flex
              lg4
              md4
              sm6
              xs12
              v-for="(valor, ind_valor) in valores"
              :key="ind_valor"
            >
              <div data-aos="fade-up">
                <v-container>
                  <v-layout align-center justify-center row fill-height>
                    <v-hover>
                      <v-card
                        slot-scope="{
                          hover
                        }"
                        height="175"
                        width="200"
                        style="min-width:200px; border-radius: 6%"
                        class="black--text"
                        color="rgba(255,255,255,0.9)"
                        :class="`elevation-${hover ? 5 : 0}`"
                      >
                        <v-avatar
                          style="border-radius: 50%"
                          transition="slide-y-reverse-transition"
                          size="100"
                          :color="
                            hover
                              ? 'rgba(0,175,0,0.85)'
                              : 'rgba(255, 111, 2,.85)'
                          "
                        >
                          <img
                            contain
                            :src="valor.src_avatar"
                            alt="avatar"
                            @click=""
                          />
                        </v-avatar>

                        <v-card-text class="title">
                          {{ valor.titulo.toUpperCase() }}
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </v-layout>
                </v-container>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      valores: [
        {
          titulo: "ES RAPIDO DE INSTALAR",
          text:
            "Cada curso se aplica una combinación de estrategias didácticas para acoplarnos al educando",
          src_avatar:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/8m9M-RAPIDO.png"
        },
        {
          titulo: "RESISTENTE",
          text:
            "Enfatizamos el trabajo en equipo al formar pequeños grupos en cada capacitación",
          src_avatar:
            "data:image/png;base64,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"
        },
        {
          titulo: "PRECIO ECONOMICO",
          text: "Promovemos constantemente el autoaprendizaje en todo momento",
          src_avatar: "https://image.flaticon.com/icons/png/512/595/595924.png"
        },
        {
          titulo: "ECOLOGICO",
          text:
            "Usamos diferentes herramientas para que el desarrollo de las clases y la comunicación se logre de manera efectiva",
          src_avatar:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/f5vf-Earth_eco_ecology_globe_planet_protect-512.png"
        },
        {
          titulo: "MODULAR",
          text:
            "Mostramos un fuerte desarrollo académico, día a día buscamnos nuevas formas de enseñanza",
          src_avatar:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/6jjs-building_blocks_toy_lego_construction_cube-512.png"
        },
        {
          titulo: "NO NECESITA HORNOS",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar: "https://image.flaticon.com/icons/png/512/421/421633.png"
        }
      ]
    };
  }
};
</script>
