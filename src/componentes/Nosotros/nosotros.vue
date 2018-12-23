<template>
<v-card>
  <v-container>
  <v-layout wrap row justify-space-between align-center>
  <v-flex xs12 sm4>
    <img width="250" aspect-radio="1" :src="src_imagen"></img>
  </v-flex>
  
  <v-flex xs12 sm7>
  <v-container grid-list-xl>
    <v-layout wrap row justify-center>
      <v-flex xs12>
        <v-card>
        <v-card-title class="headline grey lighten-2 text-xs-center">
        OBJETIVOS

        </v-card-title>
        <v-card-text>
        {{objetivos}}
        </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
        <v-card-title class="headline grey lighten-2 text-xs-center">
        VISIÓN

        </v-card-title>
        <v-card-text>
        {{valores}}
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </v-flex>
 </v-layout>
  </v-container>
  </v-card>
</template>
<script>
export default {
  data(){
    return{
      src_imagen: "https://www.grupostudio.es/wp-content/uploads/2014/08/icono-calidad1.png",
      objetivos: "El objetivo principal es brindarles a todos nuestros clientes la mayor satisfacción posible al obtener nuestro producto de tal forma que podamos consolidarnos en el mercado tanto local como nacional.",
      valores: "Ecoblock-up planea posicionarse en el mercado como la empresa líder en la fabricación de ladrillos ecológicos en capacidad de producción y venta, utilizando materia prima reciclable y la más moderada tecnología, satisfaciendo a nuestros clientes con calidad, cumplimiento y seriedad. "
    }
  }
}
</script>

