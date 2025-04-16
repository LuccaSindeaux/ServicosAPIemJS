# ServicosAPIemJS
Aulas de API (em JavaScript) do SenacRS

- Não há aula 2.


- Aula 5 sobre o Repository foi usado o comando npm install para adiconar a biblioteca jest. Isto criou uma pasta node_module, com todos os módulos do node que podem ser usado. O pacote é pesado, criando mais de 600 commits caso o código fosse subir ao github, para não pesar no repositório ele deve ser colocado no gitignore.
    Histórico de instalação:
        npm init -y:
        - serve para criar o package.json (arquivo voltado para dar início a um projeto Node.js)

        npm install <module>
        - serve para importar a biblioteca (<module>) e suas dependências 
        - neste caso foi usado o npm install jest

        npm install <module> --save-dev
        - normalmente voltado para importar ferramentas (nesse caso, o <module>).
        - mais uma vez foi usado o jest

        npm start, npm test, npm run <comando>
        - comandos de execução que se encontram normalmente nos "scripts" do package.json.
        - o start  e o test são definidos no meu package.json:
            . linha 7 falei que o comando "node main.js' foi substituído por "start", ou seja, 'npm start'
            . linha 8 falei que a biblioteca jest que baixei é o equivalente ao 'npm run test', minhas ferramentas do jest estão dentro deste comando de terminal.

      Depois que o package.json já estiver instalado, basta abrir o arquivo/pasta onde ele está, e digitar no terminal o comando "npm install", e isto trará para o workspace os arquivos node_modules e lock.json. Neste caso o jest é o pacote de ferramentas instalado.


    Comando npm init: 
        Cria um package.json vinculada ao diretório aberto. o json é o arquivo de configuração do nosso JS.
    
    module.exports:
        Exporta as funções para serem chamadas numa importação em outro arquivo. Ele é chamado com require('./NomeArquivo.js'); aula05 e 06

    jest --coverage:
        no json, cria-se o script "cover": "jest --coverage", ele cria um "relatório" mais completo num index.html que pode ser acessado sobre nossos testes. Ele é inicializado com "npm run cover", e cria uma pastaa coverage, com outra pasta "Icov-report" com este index.html. 

