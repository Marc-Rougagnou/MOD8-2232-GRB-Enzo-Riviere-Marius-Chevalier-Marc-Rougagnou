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
    <ul>
        <li v-for="comment in filterList" :key="comment.id">
            De '{{ state.users[state.users.findIndex((user) => user.id == comment.id_user)].username }}':
            {{comment.text}}
        </li>
    </ul>
    <section v-if="currentuser.id!==0">
        <input type="text" v-model="comment_" placeholder="your comment">
        <button @click="addComment(comment_)">Add a comment</button>
    </section>
    <section v-else>
        <p>You are not logged to add a comment</p>
    </section>  
</template>
<style scoped>
</style>