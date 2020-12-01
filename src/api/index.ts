import axios from "axios";

export default async function(){
    try{
        return await axios.get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes");
    }catch(err){
        console.error(err.reponse.data);
        throw new Error(err.reponse.data);
    }
}