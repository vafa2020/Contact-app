import { Http } from "./Http"

export const getAllContact=()=>{
    return Http.get('/contact')
}