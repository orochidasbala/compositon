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
}
.layout {
    text-align: right;
}
.tags {
    display: inline-block;
    width: auto;
    margin: 10px 10px 0 0;
    padding: 10px;
    background-color: #ddd;
    border-radius: 15px;
    font-size: 12px;
}
.tags a {
    background-color: transparent;
    text-decoration: none;
    color: #23976b;
    font-weight: 500;
}
</style>
