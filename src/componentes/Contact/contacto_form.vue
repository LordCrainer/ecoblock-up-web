<template>
  <v-layout align-center justify-center>
    <v-card style="min-width: 350px; width:500px;" class="mx-auto ">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="pa-3 pt-4 elevation-5"
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <!--
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>
        -->

        <!--
          <v-radio-group v-model="radio" row>
            <v-radio
              label="Servicio al Cliente"
              value="Servicio al Cliente"
            ></v-radio>
            <v-radio label="Soporte" value="Soporte Técnico"></v-radio>
            <v-radio label="Cobranza" value="Cobranza"></v-radio>
          </v-radio-group>
        -->
        <v-textarea
          label="Comentario"
          v-model="textArea"
          :rules="textAreaRules"
          auto-grow
          box
          rows="3"
          :counter="500"
        ></v-textarea>
        <!--
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        -->

        <v-btn :disabled="!valid" @click="submit"> submit </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-card>
  </v-layout>
</template>
<script>
import axios from "axios";
import * as emailjs from "emailjs-com";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Nombre requerido",
      v => (v && v.length <= 10) || "Nombre debe ser menor a 10 carácteres"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail requerido",
      v => /.+@.+/.test(v) || "E-mail debe ser válido"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    radio: "Servicio al Cliente",
    textAreaRules: [
      v => !!v || "Escriba un comentario",
      v => (v && v.length > 1) || "Digite un comentario"
    ],
    textArea: null,
    user: "user_ANaMPedZDtBmrIV2T25NV",
    template: "mailRespuesta"
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        emailjs
          .sendForm("<YOUR SERVICE ID>", this.template, "#myForm", this.user)
          .then(
            response => {
              console.log("SUCCESS!", response.status, response.text);
            },
            err => {
              console.log("FAILED...", err);
            }
          );
        // Native form submission is not yet supported
        /*axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });*/
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
