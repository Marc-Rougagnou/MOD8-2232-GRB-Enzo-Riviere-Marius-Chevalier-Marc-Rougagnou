<script setup>
import {computed,ref} from 'vue';
import {state,id_comment} from "../store.js";
import {useRoute} from 'vue-router';
const currentuser = computed(()=>state.current_user)
const {sheet_init} = defineProps({
    sheet_init: Object
})
const route = useRoute();
const sheetId = route.path.split('/')[2];

const filterList = computed(() => {
  return state.comments.filter((comment) => comment.id_sheet === sheet_init.id);
});

function addComment(comment_){
    const comment = {
        id: id_comment.value++,
        id_user: state.current_user.id,
        id_sheet: sheet_init.id,
        text: comment_
    }
    state.comments.push(comment);
}

</script>
<template>
    <ul v-if="filterList.length>0">
        <li v-for="comment in filterList" :key="comment.id">
            De '{{ state.users[state.users.findIndex((user) => user.id == comment.id_user)].username }}':
            {{comment.text}}
        </li>
    </ul>
    <section v-if="currentuser.id!==0">
        <input type="text" v-model="comment_" placeholder="Write a comment here">
        <button @click="addComment(comment_)">Add a comment</button>
    </section>
    <section v-else>
        <p>You are not logged to add a comment</p>
    </section>
</template>
<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin-top:1%;
}

li {
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
  color: #666;
}

section {
  margin-top: 20px;
}

input[type="text"] {
  width: 50%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 auto;
}
button {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #666;
  cursor: pointer;
}
button:hover {
  background-color: #ddd;
}

p {
  color: #f00;
  font-weight: bold;
  margin-top: 10px;
}

</style>