import { ref } from "vue";

let getLanguages = ()=> {
    let languages = ref([]);
    let search = ref("");
    let error = ref("");
    let load = async () => {
        try {
            let response = await fetch("http://localhost:3000/languages");
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
    return {languages, search, error, load};
}

export default getLanguages;