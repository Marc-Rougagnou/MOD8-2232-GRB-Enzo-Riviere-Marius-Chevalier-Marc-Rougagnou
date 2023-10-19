<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import commentService from '../services/comment-service.js';
import { watch } from 'vue';
import useAuthenticationService from "../services/authentication-service.js";
import accountService from "../services/account-service.js";


const { sheet_init } = defineProps({
  sheet_init: Object
})

const route = useRoute();
let sheetId = parseInt(route.path.split('/')[2]);
const user = useAuthenticationService().user;

const comments = ref([]);
const filteredList = ref([]);

const users = ref([]);

onMounted(async () => {
  console.log("comment onMounted")
  const response = await commentService.findComments();
  comments.value = response.comments;
  let response3 = await accountService.findAccounts();
  users.value = response3.users;

  console.log(users.value)
  filterList();
});

function findUserForComment(comment) {

  return (users.value.find((user_) => user_.id === comment.id_user))?.username ?? null;
}

function filterList() {
  filteredList.value = comments.value.filter((comment) => comment.id_sheet === sheetId);
}

watch([comments], () => {
  console.log("comments changed");
});


function addComment(comment_) {
  console.log(comment_);
  commentService.createComment(user.value.id, sheetId, comment_);
  comments.value.push({ id_user: user.value.id, id_sheet: sheetId, text: comment_ })
  filterList();
}

</script>
<template>
  <ul v-if="filteredList.length > 0">
    <li v-for="comment in filteredList" :key="comment.text">
      From' {{ findUserForComment(comment) }}' :
      {{ comment.text }}
    </li>
  </ul>
  <p v-else>No comments yet</p>
  <section v-if="user">
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
  margin-top: 1%;
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