import React from 'react';
import styled from '@emotion/styled';

const Campo = styled.div `
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.div `
    flex: 0 0 100px; 
`;

const Select = styled.select `
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
    -webkit-appearance: none;
`;

const ImputRadio = styled.input `
    margin: 0 1rem;

`;

const Boton = styled.button `
    background-color: #2e922b;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #7CC644;
    }
`;

const Formulario = () => {
    return (
        <form>
            <Campo>
                <Label for="">Marca</Label>
                <Select>
                    <option value="">Selecione</option>
                        <option value="americado">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label for="">Marca</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label for="">Plan</Label>
                <ImputRadio 
                    type="radio" 
                    name='plan'
                    value='basico'
                /> Básico
                <ImputRadio 
                    type="radio" 
                    name='plan'
                    value='completo'
                /> Completo
            </Campo>

            <Boton type='button'>Cotizar</Boton>
        </form>      
    );
};

export default Formulario;