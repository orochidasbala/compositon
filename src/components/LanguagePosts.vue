<template>
    <div v-for="lang in language" :key="lang.id" class="all">
        <h3>
            <router-link :to="{ name: 'Detail', params: { id: lang.id } }">
                {{ lang.languageName }}
            </router-link>
        </h3>
        <p>{{ lang.usage }}</p>
        <span v-for="tag in lang.tags" :key="tag">
            <router-link :to="{ name: 'Tag', params: { tag } }" class="tags">{{
                tag
            }}</router-link>
        </span>
        <hr />
    </div>
</template>

<script scoped>
export default {
    props: ["language"],
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.all {
    font-family: "Poppins", sans-serif;
    max-width: 1000px;
    margin: 30px auto;
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
    /* color: #444; */
}
.all h3 a {
    color: #23976b;
    text-decoration: none;
}
.all span a {
    text-decoration: none;
    /* color: #777; */
    color: #23976b;
}
hr {
    border-top: 1px solid #eee;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
