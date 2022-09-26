import React, { useContext } from "react";
import AuthContext from "./auth-context";

const Node = () => {

    // Now all the data stored in the context can be accessed with the auth variable

    const auth = useContext(AuthContext);

    return (
        <div>
            <h1>FROM NODE : {auth?.status}</h1>
        </div>
    );
};
export default Node