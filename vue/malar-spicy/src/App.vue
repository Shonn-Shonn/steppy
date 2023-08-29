<script>
  const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
  }

  export default {
  data() {
    return {
      rawHtml : '<span style="color: red">This should be red.</span>',
      link: 'https://www.google.com',
      isChecked: false,
      objectOfAttrs : {
            id: 'container',
            class: 'wrapper'
      },
      number: 1,
      ok: true,
      message: 'Hello, Vue!',
      id: 1,
    };
  }
};
</script>

<template>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <a :href="link">www.google.com</a>
  <input type="checkbox" :checked="isChecked">

  <div>
    <p>Number + 1 : {{number + 1}}</p>
    <p>{{ok ? 'YES' : 'No'}}</p>
    <p>Reversed Message: {{message.split('').reverse().join('')}}</p>
    <div :id="`list-${id}`">Dynamic ID: {{id}}</div>
  </div>

  <div class="ai" v-bind="objectOfAttrs">
    {{ objectOfAttrs.class }}
  </div>
</template>

<style scoped>

</style>

//v-bind 
