<template>
    <div class="home">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="languages.length" class="layout">
            <div>
                <SingleType :filterLangs="filterLangs" />
            </div>
            <div>
                <TagCloud :languages="languages"></TagCloud>
            </div>
        </div>
        <div v-else>
            <p>
                <SpiNner></SpiNner>
            </p>
        </div>
        <!-- <p>Search</p>
        <input type="search" v-model="search" placeholder="type to search" /> -->
    </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import SpiNner from "../components/SpiNner";
import SingleType from "../components/SingleType";
import { computed } from "@vue/runtime-core";
import getLanguages from "../composables/getLanguages";

export default {
    components: {
        TagCloud,
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
    font-family: "Poppins", sans-serif;
}
.home {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
}
h1 {
    font-family: "Poppins", sans-serif;
    color: #777;
}
input {
    width: 50%;
    border: none;
    background-color: #eee;
    padding: 10px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
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
.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
}
</style>
