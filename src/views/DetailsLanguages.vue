<template>
    <div v-if="detail" class="post">
        <h1>{{ detail.languageName }} Detail</h1>
        <p>{{ detail.usage }} language</p>
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

<style>
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
</style>
