import axios from "axios";
import CountryDataType from "../types/CountryDataType";

export default async function(): Promise<CountryDataType>{
    try{
        const res = await axios.get("https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes");
        return res.data;
    }catch(err){
        console.error(err.reponse.data);
        throw new Error(err.reponse.data);
    }
}