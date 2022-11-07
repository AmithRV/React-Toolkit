import { useReducer } from "react"

function UseReducerHook() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state?.count + 1 }
            case 'decrement':
                return { count: state?.count - 1 }
            default:
                return { state }
        }
    }

    const initialState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initialState);

    // a reducer is a function that we perform on our state to get new state.

    const increment = () => {
        dispatch({ type: 'increment' })
    }

    const decrement = () => {
        dispatch({ type: 'decrement' })
    }

    return (<>
        <div style={{ border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ height: '20px', width: '100px' }} onClick={increment}>+</button> &nbsp;&nbsp;&nbsp;
            <h1>{state.count}</h1>&nbsp;&nbsp;&nbsp;
            <button style={{ height: '20px', width: '100px' }} onClick={decrement}>-</button>
        </div>
    </>)
}

export default UseReducerHook