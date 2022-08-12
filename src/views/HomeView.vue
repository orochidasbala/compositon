<template>
    <div class="home">
        <h1>Web Developing Languages</h1>
        <div v-if="languages.length > 0">
            <SingleType :filterLangs="filterLangs" />
            <div v-if="error">
                <p>{{ error }}</p>
            </div>
        </div>
        <div v-else>
            <p>
                <SpiNner></SpiNner>
            </p>
        </div>
        <p>Search</p>
        <input type="search" v-model="search" placeholder="type to search" />
    </div>
</template>

<script>
import SpiNner from "../components/SpiNner";
import SingleType from "../components/SingleType";
import { computed } from "@vue/runtime-core";
import getLanguages from "../composables/getLanguages";

export default {
    components: {
        SpiNner,
        SingleType,
    },
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}
.home {
    display: flex;
    flex-direction: column;
}
h1 {
    font-family: "Philosopher", sans-serif;
    text-align: center;
    margin: 30px;
    color: #777;
}
input {
    width: 50%;
    border: none;
    background-color: #eee;
    margin: 20px auto;
    padding: 10px 20px;
    border-radius: 10px;
}
input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #777;
}
p {
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
}
</style>
