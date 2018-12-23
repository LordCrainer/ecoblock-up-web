<template>
  <v-layout app justify-center>
    <v-flex>
      <v-card>
        <v-container>
          <v-layout>
            <v-flex xs6 right>
              <v-text-field
                prepend-icon="search"
                label="Buscar producto"
                v-model="buscar"
              ></v-text-field>
            </v-flex>
            <v-flex xs12> </v-flex>
          </v-layout>
        </v-container>
        <CuadroImagenes :data="BusquedaCursos"> </CuadroImagenes>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CuadroImagenes from "./cuadroImagenes.vue";

export default {
  components: { CuadroImagenes },
  data() {
    return {
      buscar: "",
      data: [
        {
          Nombre: "LADRILLO CREP",
          Precio: 0.4,
          Descripcion: "Estructural y para levantamiento de paredes",
          src_imagen:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/em4f-PRODUCTO_BLOQUE_CREP.png",

          caracteristicas: {
            Resistencia: "10 MP",
            Dimensiones: "30x15x7 cm",
            Colores: "Rojo y Cafe"
          }
        },
        {
          Nombre: "LADRILLO VI",
          Precio: 120,
          Descripcion: "Canaleta",
          src_imagen:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/mLpb-PRODUCTO_BLOQUE_vi.png",

          caracteristicas: {
            Resistencia: "10 MP",
            Dimensiones: "30x15x7 cm",
            Colores: "Rojo y Cafe"
          }
        },
        {
          Nombre: "ADOQUIN",
          Precio: 120,
          Descripcion: "Para el piso, con dos tipos, para peatones y vehicular",
          src_imagen:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/aEJO-PRODUCTO_ADOQUIN.png",

          caracteristicas: {
            Resistencia: "10 MP",
            Dimensiones: "30x15x7 cm",
            Colores: "Rojo y Cafe"
          }
        }
      ]
    };
  },
  methods: {
    busqueda(buscar) {
      this.data = this.data.filter(post => {
        return post.title.match(buscar);
      });
    }
  },
  computed: {
    BusquedaCursos: function() {
      return this.data.filter(cursos => {
        return cursos.Nombre.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
    filteredList() {
      return this.data.filter(post => {
        return post.Nombre.toLowerCase().includes(this.buscar);
      });
    }
  }
};
</script>
