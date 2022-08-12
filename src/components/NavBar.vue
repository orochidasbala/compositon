<template>
    <div class="navbarParent">
        <h1>Programming Languages and Deatils</h1>
        <div class="route">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'Addnew' }">Add New</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.navbarParent {
    font-family: "Philosopher", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #23976b;
    z-index: 1;
}
.navbarParent h1 {
    font-size: 30px;
    color: #fff;
}

.route a {
    position: relative;
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    color: #fff;
}
.route a.router-link-active {
    color: #000;
}

/* .route {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
} */
</style>
