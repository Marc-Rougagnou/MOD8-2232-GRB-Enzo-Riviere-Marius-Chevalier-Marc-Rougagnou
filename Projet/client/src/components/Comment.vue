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
const curuser=ref([])
const users = ref([]);


onMounted(async () => {

  //We get the comments into a list
  const response = await commentService.findComments();
  comments.value = response.comments;
  //We get the users into a list to find who created which comments
  let response3 = await accountService.findAccounts();
  users.value = response3.users;
  //We search the current user only if he is authenticated
  if(user.value!==null){
    
    curuser.value=await accountService.findAccountByUsername(user.value.username);
  }
  filterList();
});

//We find the user who created the comment
function findUserForComment(comment) {

  return (users.value.find((user_) => user_.id === comment.id_user))?.username ?? null;
}

//We filter the comments to only show the ones for the current sheet
function filterList() {
  filteredList.value = comments.value.filter((comment) => comment.id_sheet === sheetId);
}

//We add a comment to the database and to the list so that the user can see it without refreshing the page
function addComment(comment_) {
  commentService.createComment(curuser.value.id, sheetId, comment_);
  comments.value.push({ id_user: curuser.value.id, id_sheet: sheetId, text: comment_ })
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