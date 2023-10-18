<script setup>
import {computed,onMounted,ref} from 'vue';
import {state,id_comment} from "../store.js";
import {useRoute} from 'vue-router';
import commentService from '../services/comment-service.js';
import { watch } from 'vue';

const currentuser = computed(()=>state.current_user)

const {sheet_init} = defineProps({
    sheet_init: Object
})

const route = useRoute();
let sheetId = parseInt(route.path.split('/')[2]);

const comments = ref([]);
const filteredList = ref([]);

onMounted(async () => {
    const response = await commentService.findComments();
    comments.value = response.comments;
    filterList();
});

function filterList(){
  filteredList.value = comments.value.filter((comment) => comment.id_sheet === sheetId);
}

watch([comments], () => {
  console.log("comments changed");
});


function addComment(comment_){
  console.log(comment_);
  commentService.createComment(currentuser.value.id, sheetId, comment_);  
  comments.value.push({id_user:currentuser.value.id, id_sheet:sheetId, text:comment_})
  filterList();
}

</script>
<template>
    <ul v-if="filteredList.length>0">
        <li v-for="comment in filteredList" :key="comment.text">
          <!-- From '{{ state.users[state.users.findIndex((user) => user.id == comment.id_user)].username }}': -->
            {{comment.text}}
        </li>
    </ul>
    <p v-else>No comments yet</p>
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
  border: 1px solid var(--color-border);
  padding: 10px;
  background-color: var(--color-white);
  color: var(--color-grey);
}

section {
  margin-top: 20px;
}

input[type="text"] {
  width: 50%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  margin: 0 auto;
}
button {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: var(--color-white);
  color: #666;
  cursor: pointer;
}
button:hover {
  background-color: var(--color-border);
}

p {
  color: var(--color-red);
  font-weight: bold;
  margin-top: 10px;
}

</style>