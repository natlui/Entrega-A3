import React, { useState } from "react";
import '../../assets/styles/chat.css'
import axios from "axios";

export default function Perguntas() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:4000/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="container container-sm p-1">
      <h1 className="title text-center text-darkGreen">Pergunta</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            className="shadow p-3 mb-5 bg-white rounded"
            type="text"
            placeholder="Digite a pergunta"
            value={prompt}
            onChange={handlePrompt}
          />
          <button type="button" className="btn btn-primary ml-auto" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </form>
      <div className="bg-darkGreen mt-2 p-1 border-5">
        <p className="text-light">
          {response ? response : "Esperando uma resposta..."}
        </p>
      </div>
    </div>
  );
}
