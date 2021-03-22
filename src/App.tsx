import React, { useRef } from "react";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import { SubmitHandler, FormHandles } from "@unform/core";
import "./App.css";

import Input from "./components/Form/input";

interface FormData {
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    neighborhood: string;
    number: number;
  };
}

const initialData = {
  name: "Diego Fernandes",
  password: "011228Mota",
  email: "diego@rocketseat.com.br",
  address: {
    city: "Fortaleza",
  },
};
function App() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = data => {
    if (data.name === "") {
      formRef.current?.setFieldError("name", "O nome é obrigatório");
    }
    console.log(data);
    console.log(formRef.current);
  };

  return (
    <div className="App">
      <h1>hello World</h1>
      <Form initialData={initialData} ref={formRef} onSubmit={handleSubmit}>
        <Input name={"name"} />
        <Input type="email" name={"email"} />
        <Input type="password" name={"password"} />
        <Scope path="address">
          <Input name={"street"} placeholder={"Rua"} />
          <Input name={"neighborhood"} placeholder={"Bairro"} />
          <Input name={"city"} placeholder={"Cidade"} />
          <Input name={"state"} placeholder={"Estado"} />
          <Input name={"number"} placeholder={"Número"} />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
