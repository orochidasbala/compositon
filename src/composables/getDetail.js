import { def } from "@vue/shared"
import { collection, doc, getDoc } from "firebase/firestore";
import { ref } from "vue"
import {db} from "../firebase/config"

let getDetail = (id)=> {
    let detail = ref(null);
    let error = ref("");
    let load = async () =>{
        try {
            let document = await getDoc(doc(db,"languages", id))
            detail.value = {id:document.id,...document.data()}
            console.log(detail.value)
        } catch (err) {
            error.value = err.message;
        }       
    }
    return {detail, error, load};
}

export default getDetail;