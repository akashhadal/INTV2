import axios from "axios";
const BACKEND_ENPOINT="https://restcountries.com/v3.1/all";

export const countryFlags =async()=>{
    try{
        const res= await axios.get(BACKEND_ENPOINT);
        return res.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
    
}