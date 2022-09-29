<template>
    <div class="card">
        <img class="card-img-top" :src="user.image" :alt="user.name">
        <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.description}}</p>
            <span class="text-danger font-weight-bold">${{user.price}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: ['user']
    }
</script>

<style scoped>
    .card {
        cursor: pointer;
        margin-bottom: 8px;
    }
</style>