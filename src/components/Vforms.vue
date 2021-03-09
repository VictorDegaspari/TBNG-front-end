<template>
  <div class="formulario">
    <b-form>
      <b-form-group
        v-scrollanimation
        id="input-group-1"
        label="Seu nome:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          v-scrollanimation
          id="input-1"
          v-model="member.nome"
          type="text"
          placeholder="Seu nome"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        v-scrollanimation
        id="input-group-2"
        label="Seu apelido:"
        label-for="input-2"
        description="Pode ser do LOL, Discord, etc."
      >
        <b-form-input
          v-scrollanimation
          id="input-2"
          v-model="member.nickname"
          placeholder="Seu apelido"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox v-model="member.vip" :value="'Sim'">Vip</b-form-checkbox>
      <b-form-checkbox v-model="member.vip" :value="'Não'"
        >Apenas um membro</b-form-checkbox
      >

      <b-button @click.prevent="onSubmit()" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import apiClient from "../utils/apiClient";

export default {
  components: {},
  data() {
    return {
      member: {}
    };
  },
  methods: {
    makeToast(variant = null) {
      if (variant == "success") {
        this.$bvToast.toast("Usuário criado com sucesso!", {
          title: "Sucesso",
          variant: variant,
          solid: true
        });
      }
      if (variant == "danger") {
        this.$bvToast.toast(
          "Erro ao criar usuário, lembre-se de preencher os campos corretamente.",
          {
            title: "Erro!",
            variant: variant,
            solid: true
          }
        );
      }
    },
    async onSubmit() {
      try {
        await apiClient.createMember(this.member);
        this.makeToast("success");
      } catch (err) {
        if (err.data != null) {
          this.error = err.data;
          this.makeToast("danger");
        } else {
          this.error = null;
        }
      }
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
.before-enter {
  opacity: 0;
  transition: all 0.5s ease-out;
  transform: translateX(30px);
}
.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
