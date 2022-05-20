import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/userAuth";
import * as C from "./styles";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();


    return(
        <C.Contairne>
            <C.title>HOME</C.title>
            <Button text="sair" onClick={() => [signout(), navigate("/")]}>
                sair
            </Button>
        </C.Contairne>
        
    );
};
 export default Home