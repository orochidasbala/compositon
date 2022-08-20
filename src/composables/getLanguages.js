import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { ref } from "vue";
import {db} from "../firebase/config"

let getLanguages = ()=> {
    let languages = ref([]);
    let search = ref("");
    let error = ref("");
    let load = async () => {
        try {
            const response = await getDocs(collection(db, "languages"))
            languages.value = response.docs.map((doc)=>{
                return {id:doc.id, ...doc.data()}
            })
        } catch (err) {
            error.value = err.message;
        }
    };
    return {languages, search, error, load};
}

export default getLanguages;