<template>
    <div class="table">
        <table>
            <tr>
                <th>No.</th>
                <th>Language</th>
                <th>Usage</th>
            </tr>
            <tr v-for="lang in language" :key="lang.id">
                <td>{{ lang.id }}</td>
                <td>
                    <router-link
                        class="linkText"
                        :to="{ name: 'Detail', params: { id: lang.id } }"
                        >{{ lang.languageName }}</router-link
                    >
                </td>
                <td>
                    {{ lang.usage }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
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
.linkText {
    text-decoration: none;
}
.table {
    display: flex;
    justify-content: center;
    align-items: center;
}
table {
    /* align-items: center; */
    font-family: "Poppins", sans-serif;
    /* border-collapse: collapse; */
    width: 70%;
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
.table table tr td a {
    color: #197e57;
}
table,
th,
td {
    border-radius: 10px;
    margin: 5px;
}
</style>
