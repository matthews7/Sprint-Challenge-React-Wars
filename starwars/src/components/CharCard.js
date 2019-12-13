import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap"
import axios from "axios";




export default function CharCard(props){
    const [planet, setPlanet] = useState([])

    // useEffect(() =>{
    //     axios.get("https://swapi.co/api/planets/")
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.log(`there are no star wars planets ${err}`)
    //     })
    // }, []);

    const Wrapper= styled.div`
        border: 1px solid blue;
        box-shadow: 5px 5px 2px blue;
        border-radius: 10px;
        margin-bottom: 2%;
        padding: 1%;
        color: blue;
        
    `;

    const Title = styled.h1`
        text-decoration: underline
        
    `;

    const P = styled.p`
        
        font-weight: 600;
    `;

    return(
            <Wrapper className="character-card">
                    <Title> {props.name} </Title>
                

                
                    <P>Height: {props.height}cm</P>
                    <P>Weight: {props.weight}kg </P>
                    <P>Hair Color: {props.hair} </P>
                    <P>Gender: {props.gender}</P>
                    <P>Birth Year:  {props.birth}</P>
               
           
            
            {/* <p>Home Planet: {planet}</p> */}
            </Wrapper>
       
       
    )
}