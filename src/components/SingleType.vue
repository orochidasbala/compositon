<template>
    <h1>Languages</h1>
    <LanguagePosts :language="filterLangs" />
</template>

<script>
import { computed } from "@vue/runtime-core";
import LanguagePosts from "./LanguagePosts";
export default {
    props: ["filterLangs"],
    components: { LanguagePosts },
    setup(props) {
        // console.log(props.filterLangs);
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1 {
    font-family: "Poppins", sans-serif;
    color: #aaa;
}
</style>
