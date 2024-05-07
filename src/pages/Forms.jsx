import React from "react";
import Nav from "./Nav";
import "../index.css";
import './styles.css';

export default function Forms() {
  return (
    <div>
      <div className="form-container">
      <Nav />
      <form id="survey-form">
      <h1>Formulário de Pesquisa Acadêmico</h1>
        <div className="form-group">
          <label htmlFor="name" className="titulo_label">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="titulo_label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number" className="titulo_label">
            Idade
          </label>
          <input
            type="number"
            id="number"
            name="age"
            placeholder="Digite sua idade..."
            min="18"
            max="100"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropdown" className="titulo_label">
            Grau de Escolaridade:
          </label>
          <select id="dropdown" name="option" required>
            <option value="">Selecione uma opção</option>
            <option value="opcao1">Ensino Fundamental Incompleto</option>
            <option value="opcao2">Ensino Fundamental Completo</option>
            <option value="opcao3">Ensino Médio Incompleto</option>
            <option value="opcao4">Ensino Médio Completo</option>
            <option value="opcao5">Ensino Superior Incompleto</option>
            <option value="opcao6">Ensino Superior Completo</option>
            <option value="opcao7">Pós-Graduação</option>
            <option value="opcao8">Mestrado</option>
            <option value="opcao9">Doutorado</option>
          </select>
        </div>
        <div className="form-group">
          <fieldset>
            <legend className="titulo_label">Escolha uma:</legend>
            <input
              type="radio"
              className="radio"
              name="choice"
              value="escolha1"
              checked
            />
            <label htmlFor="radio1" className="colorTitle">Somente Estudo</label>
            <br />
            <input
              type="radio"
              className="radio"
              name="choice"
              value="escolha2"
            />
            <label htmlFor="radio1" className="colorTitle">Somente Trabalho</label>
            <br />
            <input
              type="radio"
              className="radio"
              name="choice"
              value="escolha3"
            />
            <label htmlFor="radio1" className="colorTitle">Estudo e Trabalho</label>
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset className="checkbox-group">
            <legend className="titulo_label">
              Escolha várias, sobre as tecnologias que você estuda:
            </legend>
            <input
              type="checkbox"
              id="checkbox1"
              name="option[]"
              value="opcao1"
            />
            <label htmlFor="checkbox1" className="colorTitle">HTML/CSS/JS</label>
            <br />
            <input
              type="checkbox"
              id="checkbox2"
              name="option[]"
              value="opcao2"
            />
            <label htmlFor="checkbox2" className="colorTitle">Python</label>
            <br />
            <input
              type="checkbox"
              id="checkbox3"
              name="option[]"
              value="opcao3"
            />
            <label htmlFor="checkbox3" className="colorTitle">Java</label>
            <br />
            <input
              type="checkbox"
              id="checkbox4"
              name="option[]"
              value="opcao4"
            />
            <label htmlFor="checkbox4" className="colorTitle">C/C++/C#</label>
          </fieldset>
        </div>

        <div className="form-group">
          <label htmlFor="comments" className="titulo_label">
            Comentários:
          </label>
          <br />
          <textarea
            id="comments"
            name="comments"
            rows="4"
            placeholder="Fale um pouco sobre sua experiência com programação..."
          ></textarea>
        </div>
        <button type="submit" id="submit" className="button">
          Enviar
        </button>
      </form>
    </div>
    </div>
  );
}
