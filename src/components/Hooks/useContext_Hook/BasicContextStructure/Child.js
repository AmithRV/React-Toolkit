import React, { useContext } from "react";
import AuthContext from "./auth-context";
import Node from "./Node";

const Child = () => {
    // Now all the data stored in the context can be accessed with the auth variable

    const auth = useContext(AuthContext);

    return (
        <div>
            <h1>FROM CHILD : {auth?.status}</h1>
            <Node />
        </div>
    );
};
export default Child