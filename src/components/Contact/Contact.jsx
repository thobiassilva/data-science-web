import React from "react";
import styled from "styled-components";
import { ButtonContact } from "./ButtonContact";

export const ContactStyle = styled.div`
  .ContactStyle {
    margin: 55px 0;
  }
  h2 {
    font-size: 40px;
    color: #0b03c2;
    text-align: left;
    margin-left: 50px;
  }

  .Container {
    display: flex;
    width: 100%;
  }

  .Label {
    color: #333;
    width: 50%;
    font-size: 30px;
    display: flex;
    flex-direction: column;
  }

  .inputbox {
    position: relative;
    width: 38%;
  }

  .FormInputs {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .labelInput {
    color: #808080;
    position: absolute;
    top: 0.375rem;
    left: 0.75rem;
    pointer-events: none;
    transition: 0.5s;
  }

  .FormInputs:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }

  .FormInputs:focus ~ .labelInput,
  .FormInputs:valid ~ .labelInput {
    top: -20px;
    font-size: 12px;
    color: #808080;
    left: 0;
  }

  .FormComponent {
    margin: 20px 0 30px 0;
  }

  textarea {
    color: #808080;
    font-size: 19px;
  }
`;

function Contact() {
  return (
    <ContactStyle>
      <div className="ContactStyle">
        <h2>Contato</h2>
        <div className="Container">
          <div className="Label">
            <p>
              Ficou com alguma dúvida? <br /> Nos envie uma mensagem!
            </p>
          </div>

          <section className="inputbox">
            <div>
              <input
                type="text"
                name="email"
                id="email"
                className="FormInputs"
                required
              ></input>
              <label htmlFor="email" className="labelInput">
                Email
              </label>
            </div>

            <div className="FormComponent">
              <textarea
                className="FormInputs"
                aria-invalid="false"
                name="duvida"
                id="duvida"
                rows="10"
                placeholder="Escreva aqui sua dúvida"
              ></textarea>
            </div>

            <ButtonContact />
          </section>
        </div>
      </div>
    </ContactStyle>
  );
}

export { Contact };
