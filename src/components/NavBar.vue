<template>
    <!-- <div class="nav"> -->
    <div class="navbarParent">
        <h1>Programming Languages and Deatils</h1>
        <div class="route">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'Addnew' }">Add New</router-link>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
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
    font-weight: 500;
}
.navbarParent div {
    margin: 0;
    padding: 0;
}
.route a {
    /* position: relative; */
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    color: crimson;
}
.route a.router-link-active {
    color: #23976b;
}
</style>
