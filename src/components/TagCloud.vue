<template>
    <h1>Tag Cloud</h1>
    <div class="layout">
        <p v-for="tag in uniqueTags" :key="tag" class="tags">
            <router-link :to="{ name: 'Tag', params: { tag } }">{{
                tag
            }}</router-link>
        </p>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
    props: ["languages"],
    setup(props) {
        let tags = ref([]);
        props.languages.forEach((language) => {
            language.tags.forEach((tag) => {
                tags.value.push(tag);
            });
        });
        let uniqueTags = tags.value.filter((tag, index, array) => {
            return array.indexOf(tag) === index;
        });

        return { uniqueTags };
    },
};
</script>

<style scoped>
h1 {
    font-family: "Poppins", sans-serif;
    color: #aaa;
    text-align: right;
    margin: 10px;
    border-bottom: 1px solid #eee;
}
.layout {
    text-align: right;
}
.tags {
    display: inline-block;

    padding: 10px;
}
.tags a {
    background-color: transparent;
    text-decoration: none;
    color: #aaa;
    font-weight: 500;
}
.tags a.router-link-active {
    color: #23976b;
    font-weight: 600;
}
</style>
