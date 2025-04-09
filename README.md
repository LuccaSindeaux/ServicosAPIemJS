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


