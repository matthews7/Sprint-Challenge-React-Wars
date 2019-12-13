import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./CharCard";
import './StarWars.css'




export default function CharList(){
    const [char, setChar] = useState([])

        useEffect( () => {
            axios.get("https://swapi.co/api/people/")
            .then(response => {
                
                // console.log(response.data.results);
                setChar(response.data.results)
            })
            .catch(err => {
                console.log(`there are no star wars characters ${err}`)
            })
        }, []);

       


    return(

        <div className="character-list"> 
            {char.map(chars =>{
                return(
                    <CharCard 
            key={chars.url}
            name={chars.name}
            weight={chars.mass}
            height={chars.height} 
            hair={chars.hair_color} 
            gender={chars.gender}
            birth={chars.birth_year}
            films={char.films}
            home={chars.homeworld} 
            />
                )
            })
        }
        
        </div>
    )
}