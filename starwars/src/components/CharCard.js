import React from "react";
import styled from "styled-components";





export default function CharCard(props){


    return(
        <div>
            <h1>Character Name: {props.name} </h1>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight} </p>
            <p>Hair Color: {props.hair} </p>
            <p>Gender: {props.gender}</p>
            <p>Birth Year:  {props.birth}</p>
            <p>Films: {props.films}</p>
            <p>Home Plans: {props.home}</p>

        </div>
    )
}