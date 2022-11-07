import React, { useState, useTransition } from 'react'

function UseTransitionHook() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const [isPending, startTransition] = useTransition(); // isPending is true/false depending on if the data is currently beign rendered 

    const handleChange = (value) => {
        setInput(value?.target?.value)

        startTransition(() => {   // we change the priority of the action.
            const arr = [];

            for (let i = 0; i < 20000; i++) {  // a time intensive computation.
                arr.push(value?.target?.value);
            }
            setList(arr)
        })

    }

    return (
        <div>
            <input type={'text'} value={input} onChange={handleChange} autoFocus />

            {
                (isPending) ? (<div>Loading ...</div>) : (
                    list.map((value, index) => {
                        return (<div key={index}>{value}</div>)
                    })
                )
            }
        </div>
    )
}

export default UseTransitionHook