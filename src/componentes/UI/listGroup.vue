<template>
  <v-list-group
    sub-group
    style="margin-left: 15px;"
    :key="subItem.title"
    prepend-icon="keyboard_arrow_down"
  >
    <v-list-tile slot="activator">
      <v-list-tile-action>
        <v-icon>{{ subItem.action }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ subItem.title }} 3</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      style="margin-left: 15px;"
      v-for="subItem in subItem.items"
      v-if="subItem.items == undefined"
      :key="subItem.title"
      @click=""
    >
      <v-list-tile-action>
        <v-icon>{{ subItem.action }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ subItem.title }} 3.1</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <ListGroup v-else :subItem="subItem"> </ListGroup>
  </v-list-group>
</template>
<script>
export default {
  props: ["subItem"],
  name: "ListGroup"
};
</script>
