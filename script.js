const fatoresParaMetro = {
    m: 1,
    km: 1000,
    cm: 0.01,
    in: 0.0254,
    ft: 0.3048
};

const nomesUnidades = {
    m: 'metro(s)',
    km: 'quilometro(s)',
    cm: 'centimetro(s)',
    in: 'polegada(s)',
    ft: 'pe(s)'
};

function converterComprimento(valor, unidadeOrigem, unidadeDestino) {
    const valorEmMetros = valor * fatoresParaMetro[unidadeOrigem];
    const valorConvertido = valorEmMetros / fatoresParaMetro[unidadeDestino];
    return valorConvertido;
}

const inputValor = document.getElementById('valor');
const selectOrigem = document.getElementById('unidadeOrigem');
const selectDestino = document.getElementById('unidadeDestino');    
const botao = document.getElementById('btnConverter');
const resultado = document.getElementById('resultado');

function executarConversao() {
    const valor = parseFloat(inputValor.value);
    
    if (isNaN(valor)) {
        resultado.textContent = 'Por favor, insira um valor numérico válido.';
        return;
    }


    const origem = selectOrigem.value;
    const destino = selectDestino.value;
    const convertido = converterComprimento(valor, origem, destino);

    resultado.textContent = 
    `${valor} ${nomesUnidades[origem]} é igual a ${convertido.toFixed(2)} ${nomesUnidades[destino]}.`;
}

botao.addEventListener('click', executarConversao); 

executarConversao();