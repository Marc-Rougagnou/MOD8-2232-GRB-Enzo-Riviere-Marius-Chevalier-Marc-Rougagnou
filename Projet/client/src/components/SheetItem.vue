<script setup>
    defineProps({
        id: Number
    })

</script>

<template>
    <div class="item">
        <slot name = "info">
            No sheet information passed yet
        </slot>

    <router-link :to= "'/sheet-detail/' + id">
        <slot name="details">
            No link passed yet
        </slot>
    </router-link>
</div>
</template>

<style scoped>

</style>