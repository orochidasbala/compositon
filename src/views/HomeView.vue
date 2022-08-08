<template>
    <h1>Home Page</h1>
    <h3>Web Developing Languages</h3>
    <div v-if="search">
        <SingleType :filterLangs="filterLangs" />
        <div v-if="error">
            <p>{{ error }}</p>
        </div>
    </div>
    <input type="search" v-model="search" placeholder="type to search" />

    <p>Search type : BackEnd Or FrontEnd</p>
</template>

<script>
import SingleType from "../components/SingleType";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
    components: { SingleType },
    setup() {
        let languages = ref([]);
        let search = ref("");
        let error = ref("");

        let load = async () => {
            try {
                let response = await fetch(" http://localhost:3000/languages");
                if (response.status === 404) {
                    throw new Error(
                        "Ur link is something wrong! Datas not found"
                    );
                }
                let datas = await response.json();
                languages.value = datas;
            } catch (err) {
                error.value = err.message;
            }
        };
        load();

        let filterLangs = computed(() => {
            return languages.value.filter((name) => {
                return name.usage.includes(search.value);
            });
        });
        console.log(error.value);
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
