// A Nasa pediu um programa que vai receber as informações de asteroides num array separado por vírgulas, pedindo um algoritmo que retorne um arquivo JSON no formato:
//[asteroide 1 ={"nome": asteroideNome, "velocidadeKmh": numberInt, "distanciaMilhoesKm": numberFloat, "diametros": numberInt} ,
//asteroide 2 = {"nome": asteroideNome, "velocidadeKmh": numberInt, "distanciaMilhoesKm": numberFloat, "diametros": numberInt}]

function processarAsteroide(dados) {
    const [nome, velocidadeStr, distanciaStr, diametroStr] = dados.split(";");
  
    const velocidadeKmh = parseFloat(velocidadeStr);
    const distanciaMilhoesKm = parseFloat(distanciaStr);
    const diametroMetros = parseFloat(diametroStr);
  
    let risco = "Baixo";
  
    if (distanciaMilhoesKm < 10 || velocidadeKmh > 50000) {
      risco = "Alto";
    } else if (velocidadeKmh > 30000 && velocidadeKmh <= 50000 && distanciaMilhoesKm >= 10) {
      risco = "Moderado";
    }
  
    // Aumentar o risco se o diâmetro for maior que 500m
    if (diametroMetros > 500) {
      if (risco === "Baixo") risco = "Moderado";
      else if (risco === "Moderado") risco = "Alto";
    }
  
    return {
      asteroide: nome,
      velocidadeKmh: velocidadeKmh,
      distanciaMilhoesKm: distanciaMilhoesKm.toFixed(2),
      diametroMetros: diametroMetros,
      risco: risco
    };
  }
  
  // Exemplo de uso
const entrada = "AsteroideX;60000;8.5;1200";
console.log(processarAsteroide(entrada));
const entrada1 = "AsteroideY;30000;15.2;950";
console.log(processarAsteroide(entrada1));



// Cálculo de bets, quanto menor o resulado anterior do time maior suas chances (odds) de ganhar
function apostasInteligentes(timesOdds) {
    const resultados = {};
    
    // Primeiro calculamos todas as probabilidades
    for (const [time, odd] of timesOdds) {
        const probabilidade = 100 / odd;
        
        // Formata a probabilidade com 2 casas decimais apenas se necessário
        let probFormatada;
        if (Number.isInteger(probabilidade)) {
            probFormatada = `${Math.round(probabilidade)}%`;
        } else {
            probFormatada = `${probabilidade.toFixed(2)}%`.replace('.00%', '%');
        }
        
        // Determina se é ALTA ou BAIXA probabilidade
        const status = probabilidade >= 50 ? "ALTA" : "BAIXA";
        
        resultados[time] = `probabilidade de vitória de ${probFormatada} (${status})`;
    }
    
    // Ordena os times por probabilidade decrescente e, em caso de empate, por nome
    const timesOrdenados = Object.keys(resultados).sort((a, b) => {
        const probA = 100 / timesOdds.find(([time]) => time === a)[1];
        const probB = 100 / timesOdds.find(([time]) => time === b)[1];
        
        if (probB !== probA) {
            return probB - probA; // Ordena por probabilidade decrescente
        }
        return a.localeCompare(b); // Em caso de empate, ordena alfabeticamente
    });
    
    // Cria um novo objeto ordenado
    const resultadoOrdenado = {};
    for (const time of timesOrdenados) {
        resultadoOrdenado[time] = resultados[time];
    }
    
    return resultadoOrdenado;
}




// Algoritmo que retorna área de desmatamento da Amazônia legal em hectares
function analisarDesmatamentoPorDecada(dados) {
    // 1. Consolidar dados somando valores de anos repetidos
    const consolidado = {};
    dados.forEach(([ano, valor]) => {
        consolidado[ano] = (consolidado[ano] || 0) + valor;
    });

    // 2. Agrupar por década e calcular totais
    const decadas = {};
    Object.entries(consolidado).forEach(([ano, valor]) => {
        const anoNum = parseInt(ano);
        const decadaInicio = Math.floor(anoNum / 10) * 10;
        // Formato correto sem espaços: "XXXX-XXXX"
        const decadaKey = `${decadaInicio}-${decadaInicio + 9}`;
        
        if (!decadas[decadaKey]) {
            decadas[decadaKey] = { total: 0, anos: 0 };
        }
        
        decadas[decadaKey].total += valor;
        decadas[decadaKey].anos += 1;
    });

    // 3. Formatando o resultado final
    return Object.entries(decadas)
        .map(([decada, { total, anos }]) => ({
            decada,
            total,
            media: parseFloat((total / anos).toFixed(2))
        }))
        .sort((a, b) => 
            parseInt(a.decada.split('-')[0]) - parseInt(b.decada.split('-')[0])
        );
}