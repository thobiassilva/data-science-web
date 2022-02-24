import React from "react";
import styled from "styled-components";


const LiStyle = styled.div`
    .LiStyle {
        display: flex;
        margin-bottom: 30px;
    }

    .Icone {
        display: flex;
        margin-right: 10px;
    }

    .Icone span {
        color: #0b03c2;
        font-size: 35px;
    }

    .Titulo {
        color: #0b03c2;
        font-size: 30px;
        margin: 0;
    }

    .Texto {
        color: #808080;
        font-size: 20px;
        margin: 0;
    }
   
`;

function Li(props) {
    return (
        <LiStyle>
            <div className="LiStyle">
                <div className="Icone">
                    <span>{props.children}</span> 
                </div>
                
                <div>
                    <h4 className="Titulo">{props.titulo}</h4>
                    <p className="Texto">{props.texto}</p>
                </div>
            </div>
        </LiStyle>
    );
};
export { Li };