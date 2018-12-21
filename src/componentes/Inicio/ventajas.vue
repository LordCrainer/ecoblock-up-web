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
      <v-card style="min-width:250px;" color="rgba(255,255,255,1)" flat>
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
                        hover
                        :class="`elevation-${hover ? 10 : 0}`"
                      >
                        <v-hover>
                          <v-avatar
                            transition="slide-y-reverse-transition"
                            slot-scope="{
                              hover
                            }"
                            size="100"
                            color="rgba(255,255,255,0.5)"
                          >
                            <img
                              :src="valor.src_avatar"
                              alt="avatar"
                              @click=""
                            />
                          </v-avatar>
                        </v-hover>
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
            "https://www.cife.edu.mx/assets/media/pasos/evaluacion.svg"
        },
        {
          titulo: "AMIGABLE CON EL AMBIENTE",
          text:
            "Enfatizamos el trabajo en equipo al formar pequeños grupos en cada capacitación",
          src_avatar: "http://ccamty.com/images/iconos/handshake.png"
        },
        {
          titulo: "PRECIO ECONOMICO",
          text: "Promovemos constantemente el autoaprendizaje en todo momento",
          src_avatar:
            "https://epise.com/wp-content/uploads/2016/11/aprendizaje-3.png"
        },
        {
          titulo: "ECOLOGICO",
          text:
            "Usamos diferentes herramientas para que el desarrollo de las clases y la comunicación se logre de manera efectiva",
          src_avatar:
            "http://www.teletrabajo.gov.co/622/articles-8384_grafica_autoevaluacion_tecnologica.png"
        },
        {
          titulo: "RESISTENTE Y MODULAR",
          text:
            "Mostramos un fuerte desarrollo académico, día a día buscamnos nuevas formas de enseñanza",
          src_avatar:
            "data:image/png;base64,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"
        },
        {
          titulo: "NO NECESITA HORNOS",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar:
            "http://gringroovegt.com/wp-content/uploads/2015/08/icono-servicios-3.png"
        }
      ]
    };
  }
};
</script>
