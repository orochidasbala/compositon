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
                <td>{{ lang.usage }}</td>
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
.linkText {
    text-decoration: none;
    text-align: left;
}
.table {
    display: flex;
    justify-content: center;
    align-items: center;
}
table {
    align-items: center;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 70%;
}
th {
    text-align: center;
    border: 1px solid #dddddd;
    padding: 10px;
    background-color: #54d1a1;
}
td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
