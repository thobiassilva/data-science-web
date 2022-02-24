import React from "react";
import { InfosStyle } from "./styles/InfosStyle";
import { Coluna1 } from "./Colunas/Coluna1";
import { Coluna2 } from "./Colunas/Coluna2";


function Infos() {
  return (
    <InfosStyle>
          <div className="InfosStyle">
            <h2>Informações</h2>
            
            <div className="Col">
              <Coluna1 />
              <Coluna2 />
            </div>

            <div className="Aviso">
              <h3>Dedicação média de 20h semanais, distribuídas entre as aulas síncronas e as atividades e desafios disponibilizados na plataforma! É puxado mesmo!</h3>
            </div>
        </div>
        </InfosStyle>
  );
}

export { Infos };
