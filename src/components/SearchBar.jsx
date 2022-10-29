import React from 'react';
import {FaTimes} from "react-icons/fa";
import { useState } from 'react';


function SearchBar({handleGetText}) {

    
    let [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };
    
    const handleClick = () => {
       setText("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        handleGetText(text);
    }
   


   

  return (
    
        <div>
        <form onSubmit={handleSubmit}>
              <div className='mt-10 flex justify-between'>
        <div className='form-group w-full relative'>
            <input type="text" onChange={handleChange} value={text} className='input input-lg focus:outline-0 bg-gray-200 w-full placeholder-gray-500 font-bold' placeholder='Enter to search food...!'/>

            {text !== "" && (<FaTimes color={"red"} className="inline-block absolute right-2 top-5" size={24} onClick={handleClick}/>)}
            
        </div>

        <div className='form-group'>
            <button type="submit" className='btn btn-lg bg-sky-500 focus:outline-0 hover:bg-gray-600'> Search </button>
        </div>
        </div>
        </form>
        </div>
       

  )
}

export default SearchBar