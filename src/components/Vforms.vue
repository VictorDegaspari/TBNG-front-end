<template>
  <div class="formulario">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Seu nome:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="member.nome"
          type="text"
          placeholder="Seu nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Seu apelido:"
        label-for="input-2"
        description="Pode ser do LOL, Discord, etc."
      >
        <b-form-input
          id="input-2"
          v-model="member.nickname"
          placeholder="Seu apelido"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Data de entrada:"
        label-for="input-2"
      >
        <b-form-input
          id="input-3"
          v-model="member.created_at"
          type="date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox v-model="member.vip" :value="'0'">Vip</b-form-checkbox>
      <b-form-checkbox v-model="member.vip" :value="'1'"
        >Apenas um membro</b-form-checkbox
      >

      <b-button @click.prevent="onSubmit()" variant="primary">Submit</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import apiClient from "../utils/apiClient";

export default {
  data() {
    return {
      member: {}
    };
  },
  methods: {
    async onSubmit() {
      await apiClient.createMember(this.member);
      alert("Usuário criado com sucesso!");
    }
  }
};
</script>
<style lang="css" scoped>
.formulario {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
