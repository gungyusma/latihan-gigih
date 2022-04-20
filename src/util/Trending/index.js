import React from 'react';
import '../../css/home.css';
import { useState , useEffect } from 'react';
function Trending() {
    const [Result, setResult] = useState([]);

    useEffect(() => {
        //event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=K8VaxtSYhx7B7iHXvyaljeLlVghH7Sho&limit=30`)
        .then((response) => response.json())
        .then((lists) =>
           setResult(lists.data)
        ).catch((error) => console.log(error))
    })
 

    return (
        <div className='cari'>
            <h1>Trending now!</h1>
            {Result.map((item) => <img className='imagegif' key={item.id} src={item.images.fixed_width.url} alt={item.title}/>)}
        </div>
    )
}

export default Trending;