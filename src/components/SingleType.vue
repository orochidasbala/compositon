<template>
    <LanguagePosts :language="filterLangs" />
</template>

<script>
import { computed } from "@vue/runtime-core";
import LanguagePosts from "./LanguagePosts";
export default {
    props: ["filterLangs"],
    components: { LanguagePosts },
    setup(props) {
        console.log(props.filterLangs);
    },
};
</script>

<style></style>
