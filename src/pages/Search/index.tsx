import React from "react";
import { useState } from "react";
import '../../css/home.css';
//import SearchBar from "../../component/SearchBar";
import { useSelector , useDispatch } from "react-redux";
import { setSearchQuery } from "../../util/search-slice"
import { GiphyType, SearchSlice } from '../../util/types';
import AppImage from "../../component/AppImage";

function Search(): JSX.Element {

    const searchQuery = useSelector((state: SearchSlice) => state.searchQuery.value)
    const dispatch = useDispatch();
    const [Result, setResult] = useState<GiphyType[]>([]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=K8VaxtSYhx7B7iHXvyaljeLlVghH7Sho&q=${searchQuery}&limit=12`)
        .then((response) => response.json())
        .then((lists) =>
           {setResult(lists.data)}
        ).catch((error) => console.log(error))
    }  
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value))
    }

    return (
        <div className="cari">
            <div>
                <form onSubmit={(event) => handleSearch(event)} data-testid="search-bar">
                    <input className="searchbar" 
                    placeholder="Search something" 
                    data-testid="input"
                    onChange={(event) => handleChange(event)}
                    ></input>

                    <button>Search</button>
                </form>
            </div>
            
        {Result.map((item) => 
           <AppImage item={item} key={item.id}/>
        )
        }
        </div>
    )
    
}

export default Search;
