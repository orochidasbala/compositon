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
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
    max-width: 1000px;
}
.navbarParent h1 {
    font-size: 30px;
    color: crimson;
}

.route a {
    position: relative;
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    color: crimson;
}
.route a.router-link-active {
    color: #23976b;
}
</style>
