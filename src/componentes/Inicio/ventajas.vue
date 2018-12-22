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
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/fTTn-resistente.png"
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
