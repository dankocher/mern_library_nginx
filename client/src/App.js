import React from "react";
import isAdmin from "./utils/isAdmin";
import Admin from "./Admin";
import Site from "./Site";

const App = () => {
    if (isAdmin()) return <Admin/>
    return <Site/>
};

export default App;
