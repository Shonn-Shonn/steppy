<script>
  export default {
  data() {
    return {
      rawHtml : '<span style="color: red">This should be red.</span>',
      link: 'https://www.google.com',
      isChecked: false,
    };
  }
};
</script>

<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <a v-bind:href="link">www.google.com</a>
  <input type="checkbox" :checked="isChecked">
</template>

<style scoped>

</style>
