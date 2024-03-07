import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import ResultCard from "./ResultCard";

function Add() {
    const [results, setResults] = useState([])
 
    function onChange(e) {
        setQuery(e.target.value)
    }

    const [query, setQuery] = useState("")
    
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c403766026c3979a7f4923232d969c4a&include_adult=false&language=en-US&page=1&query=${query}`).then(res => res.json()).then(data=>setResults(data.results))
    
    
    return ( 
        <>
            <div className="add">
                <div className="addDiv">
                    <h1>MovieApp</h1>
                    <p>Milyonlarca Filmi Keşfedin</p>
                    
                    
                    <input value={query} onChange={onChange} className="addDivinput" type="text" placeholder="Hangi Film" />
                   
                    
                </div>
                <div className="card">
                    {results.map((movie ,index)=>{
                        return <ResultCard key={index} movie={movie}/>
                    })}
                </div>
            </div>
        </>
     );
}

export default Add;