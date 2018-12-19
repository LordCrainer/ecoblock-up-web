<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list v-for="(item, index) in items" :key="index" dense>
          <v-list-group
            :key="item.title"
            no-action
            :append-icon="
              item.items == undefined || item.items.length == 0
                ? ''
                : 'keyboard_arrow_down'
            "
            @click=""
            @input=""
          >
            <v-list-tile
              slot="activator"
              :to="
                item.items == undefined || item.items.length == 0
                  ? item.path
                  : ''
              "
            >
              <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }} </v-list-tile-title>
              </v-list-tile-content>
              <v-btn icon v-if="item.items != undefined">
                <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
            </v-list-tile>

            <v-list-tile
              no-action
              style="margin-left: 15px;"
              v-for="subItem in item.items"
              v-if="subItem.items == undefined"
              :key="subItem.title"
              :append-icon="
                item.items == undefined || item.items.length == 0
                  ? ''
                  : 'keyboard_arrow_down'
              "
              :to="subItem.path"
              @click=""
            >
              <v-list-tile-action>
                <v-icon>{{ subItem.action }} </v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ subItem.title }} 2.1</v-list-tile-title>
            </v-list-tile>
            <ListGroup v-else :subItem="subItem"> </ListGroup>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import ListGroup from "./listGroup.vue";
export default {
  components: { ListGroup },
  props: ["data"],
  name: "subSubList",
  data() {
    return {
      show: "false",
      useMacroTask: "false",
      //{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
      items: [
        {
          action: "home",
          title: "Inicio",
          path: "/"
        },
        {
          action: "school",
          title: "Cursos",
          path: "/cursos",

          items: [
            { action: "school", title: "Todos", path: "/cursos" },
            {
              action: "restaurant",
              title: "Ingenería",
              items: [
                { action: "build", title: "Mecánica" },
                { title: "Electrónica" }
              ]
            },
            {
              title: "Informática",
              items: [
                { title: "Lenguaje de programación" },
                { title: "Base de Datos" }
              ]
            },
            {
              action: "",
              title: "Sistemas Embebidos"
            }
          ]
        },
        {
          action: "school",
          title: "Blog",
          path: "/blog"
        },
        {
          action: "directions_run",
          title: "Nostros",
          path: "/nosotros"
        },
        {
          action: "healing",
          title: "Contacto",
          path: "/contacto"
        }
      ]
    };
  }
};
</script>
