<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" width="500">
      <slot name="activador" slot="activator"></slot>

      <v-card class="pa-3">
        <v-layout align-center justify-center>
          <v-img
            contain
            :src="item.src_imagen"
            width="400"
            aspect-ratio="1"
          ></v-img>
        </v-layout>
        <slot :data="item"></slot> <slot name="titulo"></slot>

        <slot name="descripcion"> </slot>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <slot name="action_boton"></slot>
          <v-btn color="primary" flat @click="dialog = false;"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>
