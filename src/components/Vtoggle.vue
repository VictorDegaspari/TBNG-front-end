<template>
  <div class="btn-group btn-group-toggle" data-toggle="buttons">
    <label class="btn btn-secondary">
      <input
        type="radio"
        name="options"
        value="um"
        v-model="um"
        id="option2"
        checked
      />
      {{ txt1 }}
    </label>
    <label class="btn btn-secondary">
      <input
        type="radio"
        name="options"
        value="dois"
        v-model="dois"
        id="option3"
      />
      {{ txt2 }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    txt1: String,
    txt2: String
  }
};
</script>
