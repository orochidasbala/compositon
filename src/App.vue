<template>
    <div class="nav">
        <NavBar />
    </div>
    <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
export default {
    components: { NavBar },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(247, 245, 245);
}
#app {
    font-family: "Poppins", sans-serif;
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}
.nav {
    border-bottom: 1px solid #ddd;
    max-width: 1000px;
    margin: 20px auto;
}
</style>
