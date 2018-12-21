<style>
.v-carousel__next button,
.v-carousel__prev button {
  background-color: rgba(0, 0, 0, 0.65);
}
.v-carousel__controls .v-item-group .v-btn--active .v-btn__content i {
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
}
.v-carousel__controls .v-item-group .v-btn--active {
  height: 30px;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<template>
  <v-carousel>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <!--
        <v-container fill-height fluid grid-list-xl>
          <v-layout align-start justify-center row>
            <v-flex  sm12 xs12>
              <v-card color="rgba(255, 255, 255, 0.5)" >
                <v-card-text class="text-xs-center">
                  <span class="display-1 black--text  font-weight-black">{{
                    item.text
                  }}</span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      -->
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    //v-btn v-btn--icon v-btn--small theme--dark v-carousel__controls__item
    return {
      vacio: "",
      //class="v-btn v-btn--active v-btn--icon v-btn--small theme--dark v-carousel__controls__item"
      items: [
        {
          text: "CASA ARMADA",
          src:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/Hhqk-OBRAS_CASA.jpg"
        },
        {
          text: "CERRAMIENTO",
          src:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/0QjY-OBRAS_CERRADURA.jpg"
        },
        {
          text: "ARMADO",
          src:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/cVlw-OBRAS_REFORZAMIENTO.jpg"
        }
      ]
    };
  }
};
</script>
