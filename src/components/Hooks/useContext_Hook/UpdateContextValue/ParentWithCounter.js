import React, { useState } from 'react'
import Child from './Child'
import Store from './Store'

function ParentWithCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <Store.Provider value={{ count: count, incrementCount: incrementCount, decrementCount: decrementCount }}>
            <Child />
        </Store.Provider>
    )
}

export default ParentWithCounter 