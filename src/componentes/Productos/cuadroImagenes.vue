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
            max-width="350"
            height="350"
            :class="`elevation-${hover ? 10 : 4}`"
          >
            <v-img contain height="250" :src="dato.src_imagen">
              <v-layout align-center justify-center row>
                <v-flex xs12>
                  <v-card color="rgba(25, 25, 25, 0.6)">
                    <v-card-text
                      class="text-xs-center headline orange--text  font-weight-black"
                    >
                      <span>{{ dato.Nombre }}</span>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange lighten-1 v-card--reveal display-3 black--text"
                  style="height: 100%; text-decoration: none;"
                >
                  <v-container>
                    <v-btn icon dark fab color="black"
                      ><v-icon large>info</v-icon></v-btn
                    >
                  </v-container>
                </v-card>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pa-0" style="position: relative;">
              <Dialogos :item="dato">
                <v-btn
                  absolute
                  color="primary"
                  class="white--text"
                  fab
                  large
                  right
                  top
                  style="z-index: 0;"
                  slot="activador"
                >
                  <v-icon large>search</v-icon>
                </v-btn>
                <v-card-title class="headline font-weight-black">
                  {{ dato.Nombre }}
                </v-card-title>
                <v-card-text> {{ dato.Descripcion }} </v-card-text>
                <List :items="dato.caracteristicas">
                  <v-list-tile
                    style="width: 100%;"
                    slot="listName"
                    slot-scope="{
                      data,
                      index
                    }"
                  >
                    <v-list-tile-content width="250"
                      ><h4>{{ index }}:</h4>
                    </v-list-tile-content>

                    <v-list-tile>
                      <v-list-tile v-text="data"> </v-list-tile>
                    </v-list-tile>
                  </v-list-tile>
                </List>
              </Dialogos>
            </v-card-text>
            <v-card-text class="font-weight-light title mb-2 my-2">
              {{ dato.Descripcion }}
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
  top: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
<script>
import Dialogos from "./../UI/dialogos.vue";
import List from "./../UI/list.vue";
export default {
  components: { Dialogos, List },
  props: ["data"],
  data() {
    return {};
  }
};
</script>
