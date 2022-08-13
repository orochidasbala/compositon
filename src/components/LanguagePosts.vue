<template>
    <div class="table">
        <table>
            <tr>
                <th>No.</th>
                <th>Language</th>
                <th>Usage</th>
                <th>Tags</th>
            </tr>
            <tr v-for="lang in language" :key="lang.id">
                <td class="no">{{ lang.id }}</td>
                <td width="200px">
                    <router-link
                        class="linkText"
                        :to="{ name: 'Detail', params: { id: lang.id } }"
                        >{{ lang.languageName }}</router-link
                    >
                </td>
                <td>
                    {{ lang.usage }}
                </td>
                <td>
                    <span v-for="tag in lang.tags" :key="tag">
                        <router-link
                            :to="{ name: 'Tag', params: { tag } }"
                            class="tags"
                            >{{ tag }}</router-link
                        >
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script scoped>
export default {
    props: ["language"],
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.no {
    text-align: center;
}
.linkText {
    text-decoration: none;
}
table {
    /* align-items: center; */
    font-family: "Poppins", sans-serif;
    /* border-collapse: collapse; */
}
th {
    border: 1px solid #dddddd;
    padding: 10px;
    background-color: #54d1a1;
}
td {
    border: 1px solid #dddddd;
    padding: 8px;
}

tr:nth-child(odd) {
    background-color: #dddddd;
    border-radius: 10px;
}
tr:nth-child(even) {
    background-color: transparent;
    border-radius: 10px;
}
.table table tr td a {
    color: #197e57;
}
.table table tr td span a {
    color: #197e57;
    text-decoration: none;
}

th,
td {
    border-radius: 10px;
    margin: 5px;
}
.tags {
    display: inline-block;
    text-align: left;
    width: auto;
    margin: auto 5px;
    padding: 10px;
    background-color: #ddd;
    border-radius: 10px;
    font-size: 12px;
    color: #444;
}
</style>
