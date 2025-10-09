import { useState } from 'react';
import './MyForm.css';

function Formulario() {
  const [nome, setName] = useState(""); // ✅ hook dentro do componente
  const [email, setEmail] = useState(""); // ✅ hook dentro do componente

 const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  // console.log(nome);
  console.log(email);
  // On Submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Enviando o formulário "+nome);
  // }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // if(nome.trim() === "" || email.trim() === ""){
      //   console.log("Por favor, preencha os campos");
      //   return;
      // }
      nome.trim() === "" ? alert("Por favor, preencha o campo nome") : alert("Enviando o formulário "+nome);
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome} // controla o input
          onChange={handleChange}
        />
        <input type="text" id="email" name="email" value={email}  onChange={handleEmailChange}/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Formulario;
