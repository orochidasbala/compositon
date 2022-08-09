<template>
    <div v-if="detail">
        <h1>{{ detail.languageName }}</h1>
        <h3>Detail</h3>
        <p>{{ detail.usage }} language</p>
        <p>{{ detail.body }}</p>
    </div>
    <div v-else>loading..</div>
</template>

<script>
import getDetail from "../composables/getDetail";

export default {
    props: ["id"],
    setup(props) {
        let { detail, error, load } = getDetail(props.id);
        load();
        return { detail, error, load };
    },
};
</script>

<style></style>
