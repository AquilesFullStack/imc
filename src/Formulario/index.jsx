import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const calculaImc = () => {
        const alturaInt = altura / 100
        const imc = peso / (alturaInt * alturaInt);

        if (peso) {
            if (imc <= 18.5) {
                return (
                    <>
                        <p>O indice de sua massa corporal é de: {imc.toFixed(1)}</p>
                        <p>Classificação: Abaixo do peso</p>
                    </>
                )
            } else if (imc <= 24.9) {
                return (
                    <>
                        <p>O indice de sua massa corporal é de: {imc.toFixed(1)}</p>
                        <p>Classificação: Peso ideal</p>
                    </>
                )
            } else if (imc <= 29.9) {
                return (
                    <>
                        <p>O indice de sua massa corporal é de: {imc.toFixed(1)}</p>
                        <p>Classificação: Levemente acima do peso</p>
                    </>
                )
            } else if (imc <= 34.9) {
                return (
                    <>
                        <p>O indice de sua massa corporal é de: {imc.toFixed(1)}</p>
                        <p>Classificação: Obesidade grau 1</p>
                    </>
                )
            } else if (imc <= 39.9) {
                return (
                    <>
                        <p>O indice de sua massa corporal é de: {imc.toFixed(1)}</p>
                        <p>Classificação: Obesidade grau 2 severa</p>
                    </>
                )
            } else if (imc => 40) {
                return (
                    <>
                        <p>O indice de sua massa corporal é de: {imc.toFixed(1)}</p>
                        <p>Classificação: Obesidade III (Mórbida)</p>
                    </>
                )
            }
        }
    }

    return (
        <>
            <form class="container">
                <h2>
                    Calculadora de IMC
                </h2><br />
                <p>Digite seu peso e altura para calcularmos seu IMC</p>
                <div class="input">
                    <input type="number" name="peso" id="peso" placeholder="Digite aqui o seu peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
                    <input type="number" name="Altura" id="altura" placeholder="Altura em cm" onChange={evento => setAltura(parseInt(evento.target.value))} />
                </div>
                <div class="resposta">
                    {calculaImc()}
                </div>
            </form>
        </>
    )
}

export default Formulario;