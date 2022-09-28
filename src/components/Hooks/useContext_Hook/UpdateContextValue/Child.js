import React, { useContext } from 'react'
import Store from './Store';

function Child() {
    const store = useContext(Store);

    return (
        <div style={{ border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ height: '20px', width: '100px' }} onClick={store.incrementCount}>+</button> &nbsp;&nbsp;&nbsp;
            <h1>{store.count}</h1>&nbsp;&nbsp;&nbsp;
            <button style={{ height: '20px', width: '100px' }} onClick={store.decrementCount}>-</button>
        </div>
    )
}

export default Child