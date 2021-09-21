import { Http } from "./Http"

export const getSingleContact=(id)=>{
    return Http.get(`/contact/${id}`)
}