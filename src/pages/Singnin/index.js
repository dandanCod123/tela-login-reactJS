import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

const Signin= () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setErro] = useState("");

    const handleLogin = () => {
        if(!email | !senha){
            setErro("preencha todos os campos");
            return;
        
    }
    const res = signin(email, senha);

    if (res) {
      setErro(res);
      return;
    }

    navigate("/home");
  };

    return(
      <C.Container>
          <C.Label>SISTEMA DE LOGIN</C.Label>
          <C.Content>
              <Input
                type="email"
                placeholder="digite se email"
                value={email}
                onChange={(e) => [setemail(e.target.value), setErro("")]}
              />
              <Input
                type="password"
                placeholder="digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setErro("")]}
              />
              <C.LabelError>{error}</C.LabelError>
              <Button text="entrar" onClick={handleLogin} />
              <C.LabelSignup>
                  Nao tem conta?
                  <C.Strong>
                      <Link to= "/signup"> &nbsp;Registre-se </Link>
                  </C.Strong>
              </C.LabelSignup>
          </C.Content>

      </C.Container>   
        
    );
};
 export default Signin