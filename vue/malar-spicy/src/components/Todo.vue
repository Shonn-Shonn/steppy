<template>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const newTodo = ref('');
      const todos = ref([]);
  
      const addTodo = () => {
        if (newTodo.value.trim() !== '') {
          todos.value.push(newTodo.value);
          newTodo.value = '';
        }
      };
  
      const removeTodo = (index) => {
        todos.value.splice(index, 1);
      };
  
      return {
        newTodo,
        todos,
        addTodo,
        removeTodo,
      };
    },
  };
  </script>
  