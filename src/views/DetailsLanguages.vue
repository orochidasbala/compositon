<template>
    <div v-if="detail" class="post">
        <h1>Detail of {{ detail.languageName }}</h1>
        <p>{{ detail.usage }} language</p>
        <div v-for="tag in detail.tags" :key="tag" class="tags">
            {{ tag }}
        </div>
        <p>{{ detail.detail }}</p>
    </div>
    <div v-else>
        <SpiNner></SpiNner>
    </div>
</template>

<script>
import SpiNner from "../components/SpiNner";
import getDetail from "../composables/getDetail";
import { useRoute } from "vue-router";

export default {
    components: { SpiNner },
    // props: ["id"],
    setup() {
        let route = useRoute();
        let { detail, error, load } = getDetail(route.params.id);
        load();
        return { detail, error, load };
    },
};
</script>

<style scoped>
.post {
    max-width: 1000px;
    margin: 20px auto;
}
.post h1 {
    margin-bottom: 20px;
}
.post p {
    margin-top: 20px;
}
.tags {
    display: inline-block;
    text-align: left;
    width: auto;
    margin: 10px 10px 0 0;
    padding: 10px;
    background-color: #ddd;
    border-radius: 15px;
    font-size: 12px;
    color: #444;
}
</style>
