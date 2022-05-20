import React from "react";
import GlobalStyled from "./styles/global";
import RouteApp from "./routes";
import { AuthProvider } from "./contexts/auth";

const App = () => (

        <AuthProvider>
        <RouteApp/>
        <GlobalStyled/>
        </AuthProvider>
    );
 export default App