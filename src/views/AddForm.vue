<template>
    <h1>Add New Languages</h1>
    <form class="parent" @submit.prevent="addNew">
        <label>Language</label>
        <input type="text" v-model="languageName" required />

        <label>Usage</label>
        <input type="text" v-model="usage" />

        <label>Detail</label>
        <textarea v-model="detail" rows="6"></textarea>

        <label>Usage <span>( one or more )</span></label>
        <input
            type="text"
            v-model="tag"
            @keydown.enter.prevent="handleKeydown"
        />
        <div v-for="tag in tags" :key="tag" class="tags">
            <div>{{ tag }}</div>
        </div>

        <button type="submit">Add</button>
    </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
    setup() {
        let router = useRouter(); //this.$router
        let languageName = ref("");
        let detail = ref("");
        let usage = ref("");
        let tag = ref("");
        let tags = ref([]);

        let handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tags.value.push(tag.value);
            }
            tag.value = "";
            console.log(tags);
        };

        let addNew = async () => {
            await fetch("http://localhost:3000/languages", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    languageName: languageName.value,
                    detail: detail.value,
                    usage: usage.value,
                    tags: tags.value,
                }),
            });
            router.push("/");
        };

        return {
            languageName,
            detail,
            tag,
            tags,
            handleKeydown,
            addNew,
            usage,
        };
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
h1 {
    text-align: center;
    margin: 10px;
    color: #aaa;
    font-weight: 500;
}
.parent {
    /* display: ; */
    /* flex-direction: column; */
    width: 50%;
    height: 100%;
    background-color: #eee;
    margin: 30px auto;
    padding: 50px 50px;
    border-radius: 15px;
}
span {
    font-size: 12px;
    text-transform: lowercase;
    letter-spacing: 1px;
    background-color: transparent;
    color: #777;
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
.parent label {
    width: 100%;
    display: block;
    text-align: left;
    margin: 10px 0 10px 0;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #777;
    font-weight: 400;
    background-color: transparent;
}
input,
textarea {
    width: 100%;
    display: block;
    border: none;
    /* border-radius: 15px; */
    background-color: transparent;
    padding: 15px;
    font-size: 14px;
    color: #444;
    border-bottom: 1px solid #aaa;
}
button {
    display: block;
    width: 100%;
    padding: 15px;
    margin: 20px auto;
    background-color: #23976b;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
}
</style>
