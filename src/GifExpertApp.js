import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Triforce zelda']);    
    
    // const handleAdd = () =>{
    //     // setCategories (['Shingeki No Kyojin',...categories]);
    //     setCategories (cats => [...cats,'Shingeki No Kyojin' ])    
    // }

    return (

        <div>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={ setCategories}/>
            {/* {<AddCategory />} */}
            <hr/>

            <ol>
                {
                    categories.map ( category => (
                    <GifGrid 
                        key = { category }
                        category ={ category }
                    />
                    ))
                }
            </ol>
        </div>
    )
} 