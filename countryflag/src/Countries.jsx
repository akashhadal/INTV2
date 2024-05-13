import {React, useState, useEffect} from "react";
import { countryFlags } from "./api";
import Tile from "./Tile";

export default function Countries() {

    const [countries, setCountires] = useState([]);

    const getFlagsData=async()=>{
        try{
          const res= await countryFlags();
        setCountires(res);
        }
        catch(error){
          console.log(error);
          return null;
        } 
      }

    useEffect(() => {
        getFlagsData();
    },[]);

    console.log(countries);
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems :"center",
            height:"100vh",
            flexWrap:"wrap"
        }}>
            {countries.map((country) => <Tile flagUrl={country.flags.png} name={country.name.common} altFlag={country.flags.alt} /> )}
        </div>
    )
}