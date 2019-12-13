import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./CharCard";





export default function CharList(){
    const [char, setChar] = useState([])

        useEffect( () => {
            axios.get("https://swapi.co/api/people/")
            .then(response => {
                
                console.log(response.data.results);
                setChar(response.data.results)
            })
            .catch(err => {
                console.log(`there are no star wars characters ${err}`)
            })
        }, []);

        let characters = char.map( chars => {
            console.log(chars.name, chars.height, chars.hair_color, chars.gender)
        })


    return(

        <div>
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