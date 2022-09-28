import React from "react";
import Child from "./Child";
import AuthContext from "./auth-context";

const Parent = () => {
    //using the state to dynamicallly pass the values to the context

    return (
        <AuthContext.Provider value={{ status: 'success' }}>
            <Child />
        </AuthContext.Provider>
    );
};
export default Parent;