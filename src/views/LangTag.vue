<template>
    <h1>Result</h1>

    <div v-if="error">
        {{ error }}
    </div>
    <div v-if="languages.length" class="home">
        <LanguagePosts :language="filteredLangs"></LanguagePosts>
    </div>

    <div v-else>loading...</div>
</template>

<script>
import LanguagePosts from "../components/LanguagePosts";
import { computed } from "@vue/runtime-core";
import getLanguages from "../composables/getLanguages";

export default {
    components: { LanguagePosts },
    props: ["tag"],
    setup(props) {
        let { languages, search, error, load } = getLanguages();
        load();
        let filteredLangs = computed(() => {
            return languages.value.filter((language) => {
                return language.tags.includes(props.tag);
            });
        });
        return { languages, error, filteredLangs };
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    font-family: "Philosopher", sans-serif;
    text-align: center;
    margin: 20px;
    color: #777;
}
</style>
