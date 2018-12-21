<template>
  <v-layout justify-center>
    <v-flex>
      <v-card>
        <v-card-text class="display-1 pa-5"> <h3>PRODUCTOS</h3></v-card-text>

        <v-container fluid grid-list-xl app>
          <v-layout wrap justify-center row fill-height>
            <v-flex
              lg4
              md4
              sm6
              xs12
              v-for="producto in productos"
              :key="producto.titulo"
            >
              <div data-aos="fade-up">
                <v-hover>
                  <v-card
                    slot-scope="{
                      hover
                    }"
                    :class="`elevation-${hover ? 5 : 0}`"
                    style="border-radius: 5%"
                  >
                    <img
                      style="max-width: 350px; width: 100%"
                      :src="producto.src_Imagen"
                      alt=""
                    />
                    <v-divider></v-divider>
                    <v-card-text class="font-weight-black">
                      {{ producto.titulo }}
                    </v-card-text>
                  </v-card>
                </v-hover>
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
      productos: [
        {
          titulo: "LADRILLO CREP",
          src_Imagen:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/em4f-PRODUCTO_BLOQUE_CREP.png"
        },
        {
          titulo: "LADRILLO VI",
          src_Imagen:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/mLpb-PRODUCTO_BLOQUE_vi.png"
        },
        {
          titulo: "ADOQUIN",
          src_Imagen:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/aEJO-PRODUCTO_ADOQUIN.png"
        }
      ]
    };
  }
};
</script>
