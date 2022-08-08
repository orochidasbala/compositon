<template>
    <h1>Home Page</h1>
    <h3>Web Developing Languages</h3>
    <div v-if="languages.length > 0">
        <SingleType :filterLangs="filterLangs" />
        <div v-if="error">
            <p>{{ error }}</p>
        </div>
    </div>
    <div v-else>
        <p>Loading datas...</p>
    </div>
    <input type="search" v-model="search" placeholder="type to search" />

    <p>Search type : BackEnd Or FrontEnd</p>
</template>

<script>
import SingleType from "../components/SingleType";
import { computed } from "@vue/runtime-core";
import getLanguages from "../composables/getLanguages";

export default {
    components: { SingleType },
    setup() {
        let { languages, search, error, load } = getLanguages();
        load();

        let filterLangs = computed(() => {
            return languages.value.filter((name) => {
                return name.usage.includes(search.value);
            });
        });
        return { languages, search, filterLangs, error };
    },
};
</script>
<style scoped>
input {
    border: none;
    background-color: #eee;
    margin: 20px;
    padding: 10px 20px;
    border-radius: 10px;
}
input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #777;
}
</style>
