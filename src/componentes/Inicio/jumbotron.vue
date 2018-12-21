<template>
  <v-jumbotron :gradient="gradient" dark>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h2 class="display-3 font-weight-bold">LADRILLO DE LA DIFERENCIA</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
<script>
export default {
  data() {
    return {
      gradient: "to top, rgb(255, 90, 0), rgb(248, 145, 0)"
    };
  }
};
</script>
