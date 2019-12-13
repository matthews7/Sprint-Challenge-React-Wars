import React, {useState, useEffect} from "react"



export default function SearchBar (props){
 const [search, setSearch] = useState()
    // setSearch(props.set)
 const change = event => {
     setSearch(props);

 };

 const submit = (event) => {
     event.preventDefault();
     console.log(search)
 }
 
    return(
       <div> 
           {console.log(change)}
        
        <form onSubmit = {event => submit(event)}>

            <label>
          {/* <input type="text" /> */}
          <input type="text" onChange={event => change(event)} />
          <button>Submit</button>
        </label>
      </form>
    </div>  
    )
}