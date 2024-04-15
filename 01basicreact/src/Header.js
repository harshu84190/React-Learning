// import { useState } from 'react';

// import React from 'react'

// function Header() {
//     const [name, setName] = useState("");
//     const valFunc = (e)=>{
//         e.preventDefault()
//         setName(e.target.value);

//     }
//     return (
//         <div>
//             <form onClick={valFunc}>
//                 <input type="text" ></input>
//                 <button>Submit</button>
//             </form>
//             <h1>Hello {name}</h1>
//         </div>
//     )
// }

// export default Header

import React, { useState } from 'react';

function Header() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the name state when the submit button is clicked
        setName(name);
    };

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name} 
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
            <h1>Hello {name}</h1>
            </>
    );
}

export default Header;
