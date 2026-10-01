/* Catálogo de cursos. Para criar uma disciplina nova: adicione uma chave aqui
   e o conteúdo correspondente em js/lessons.js. */
window.LEVELS = [
  {min:0,i:"🟢",n:"Iniciante"},{min:50,i:"🔵",n:"Básico"},{min:150,i:"🟣",n:"Intermediário"},
  {min:300,i:"🟠",n:"Avançado"},{min:500,i:"🔴",n:"Profissional"}
];
window.COURSES = {
  python: {
    icon:"🐍", title:"Python do Zero ao Projeto",
    description:"Do primeiro print() ao projeto final. Cada conceito vem com explicação, exemplo, exercício e desafio.",
    modules:[
      {id:"m1",title:"Introdução ao Python",lessons:[{id:"m1-l1",title:"O que é Python"},{id:"m1-l2",title:"Seu primeiro programa: print()"}]},
      {id:"m2",title:"Variáveis e Tipos",lessons:[{id:"m2-l1",title:"Variáveis"},{id:"m2-l2",title:"Tipos de dados e type()"},{id:"m2-l3",title:"Conversão de tipos e input()"}]},
      {id:"m3",title:"Operadores",lessons:[{id:"m3-l1",title:"Operadores aritméticos, de comparação e lógicos"}]},
      {id:"m4",title:"Condicionais",lessons:[{id:"m4-l1",title:"if, elif e else"}]},
      {id:"m5",title:"Repetição",lessons:[{id:"m5-l1",title:"for e range()"},{id:"m5-l2",title:"while, break e continue"}]},
      {id:"m6",title:"Estruturas de Dados",lessons:[{id:"m6-l1",title:"Listas e dicionários"}]},
      {id:"m7",title:"Funções",lessons:[{id:"m7-l1",title:"Criando funções com def"}]},
      {id:"m8",title:"Tratamento de Erros",lessons:[]},
      {id:"m9",title:"Arquivos",lessons:[]},
      {id:"m10",title:"Programação Orientada a Objetos",lessons:[]},
      {id:"m11",title:"Bibliotecas",lessons:[{id:"m11-l1",title:"import, módulos e bibliotecas"}]},
      {id:"m12",title:"Projeto Final",lessons:[]}
    ],
    glossary:[
      {t:"Variável",d:"Nome que aponta para um valor guardado na memória."},
      {t:"String",d:"Texto, sempre entre aspas. Exemplo: \"Olá\"."},
      {t:"Inteiro (int)",d:"Número sem parte decimal. Exemplo: 42."},
      {t:"Float",d:"Número com parte decimal. Exemplo: 3.14."},
      {t:"Booleano (bool)",d:"Valor que é True (verdadeiro) ou False (falso)."},
      {t:"Função",d:"Bloco de código com nome que pode ser executado quando você quiser."},
      {t:"Lista",d:"Coleção ordenada e alterável de valores."},
      {t:"Dicionário",d:"Coleção de pares chave e valor."},
      {t:"Loop",d:"Repetição de um bloco de código."},
      {t:"Comentário",d:"Linha iniciada com # que o Python ignora; serve para explicar o código."},
      {t:"Sintaxe",d:"Regras de escrita que a linguagem exige."},
      {t:"Classe",d:"Molde para criar objetos."},
      {t:"Objeto",d:"Item criado a partir de uma classe, com dados e comportamentos."},
      {t:"def",d:"Palavra que define uma função."},
      {t:"import",d:"Palavra que traz um módulo ou biblioteca para o seu código."},
      {t:"Parâmetro",d:"Variável da função que recebe um valor. Fica entre os parênteses do def."},
      {t:"Argumento",d:"Valor enviado a uma função quando ela é chamada."},
      {t:"Módulo",d:"Arquivo Python com funções e variáveis que podem ser importadas."},
      {t:"Índice",d:"Posição de um item em uma lista. Começa em 0."},
      {t:"Indentação",d:"Recuo no início da linha que mostra a que bloco o código pertence."}
    ]
  }
};

