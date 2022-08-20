<template>
    <div class="home">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="languages.length" class="layout">
            <div>
                <SingleType :filterLangs="filteredLangs"></SingleType>
            </div>
            <div>
                <TagCloud :languages="languages"></TagCloud>
            </div>
        </div>

        <div v-else>
            <SpiNner></SpiNner>
        </div>
    </div>
</template>

<script>
import SpiNner from "../components/SpiNner";
import TagCloud from "../components/TagCloud";
import SingleType from "../components/SingleType";
import { computed } from "@vue/runtime-core";
import getLanguages from "../composables/getLanguages";

export default {
    components: {
        SpiNner,
        TagCloud,
        SingleType,
    },
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
    max-width: 1000px;
    margin: 0 auto;
}
.layout {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 20px;
}
</style>
