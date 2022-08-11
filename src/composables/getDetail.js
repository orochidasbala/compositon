import { def } from "@vue/shared"
import { ref } from "vue"

let getDetail = (id)=> {
    let detail = ref(null);
    let error = ref("");
    let load = async () =>{
        await new Promise((resolve,reject)=>{
            setTimeout(resolve, 2000)
        })
        let response = await fetch("http://localhost:3000/languages/"+id)
        try {
            if(response.status === 404) {
                throw new Error("files not found...")
            }
        let datas = await response.json()
        detail.value = datas
        } catch (err) {
            error.value = err.message;
        }       
    }
    return {detail, error, load};
}

export default getDetail;