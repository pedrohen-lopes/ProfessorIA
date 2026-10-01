(() => {
"use strict";
const KEY="professor-ia:v1",app=document.getElementById("app");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const LEVELS=[
 {min:0,i:"🌱",n:"Iniciante"},{min:30,i:"📘",n:"Explorador"},{min:80,i:"🧩",n:"Praticante"},
 {min:160,i:"💻",n:"Desenvolvedor"},{min:280,i:"📊",n:"Analista"},{min:450,i:"🏆",n:"Especialista"}
];
const COURSES={python:{
 icon:"🐍",title:"Python",description:"Do primeiro programa até fundamentos de programação, arquivos e análise de dados.",
 modules:[
 {title:"Fundamentos",lessons:[
  ["m1-l1","O que é Python?"],["m1-l2","Seu primeiro programa"],["m1-l3","Sintaxe básica"],["m1-l4","Comentários"],["m1-l5","print()"],["m1-l6","Strings"]]},
 {title:"Variáveis e tipos",lessons:[
  ["m2-l1","Variáveis"],["m2-l2","Tipos de dados"],["m2-l3","Operadores matemáticos"],["m2-l4","Strings e booleanos"],["m2-l5","Conversão de tipos"],["m2-l6","input()"],["m2-l7","Comparações"]]},
 {title:"Decisões",lessons:[
  ["m3-l1","O que são condições?"],["m3-l2","if e else"],["m3-l3","elif"],["m3-l4","Comparações na prática"],["m3-l5","Operadores lógicos"],["m3-l6","Condições aninhadas"],["m3-l7","Exercícios de decisões"]]},
 {title:"Repetição",lessons:[
  ["m4-l1","O que são loops?"],["m4-l2","while"],["m4-l3","for"],["m4-l4","range()"],["m4-l5","break e continue"],["m4-l6","Loops aninhados"]]},
 {title:"Estruturas de dados",lessons:[
  ["m5-l1","Listas"],["m5-l2","Índices e slicing"],["m5-l3","Métodos de listas"],["m5-l4","Tuplas"],["m5-l5","Sets"],["m5-l6","Dicionários"]]},
 {title:"Funções",lessons:[
  ["m6-l1","O que é uma função?"],["m6-l2","Parâmetros e argumentos"],["m6-l3","return"],["m6-l4","Escopo"],["m6-l5","Funções práticas"]]},
 {title:"Arquivos e exceções",lessons:[
  ["m7-l1","open() e arquivos"],["m7-l2","Leitura e escrita"],["m7-l3","with"],["m7-l4","try e except"]]},
 {title:"Python para dados",lessons:[
  ["m8-l1","CSV e dados"],["m8-l2","Introdução ao Pandas"],["m8-l3","DataFrame"],["m8-l4","Limpeza de dados"],["m8-l5","Projeto: análise de vendas"]]}
 ],
 glossary:[
  ["Algoritmo","Sequência organizada de passos para resolver um problema."],["Argumento","Valor enviado para uma função no momento da chamada."],
  ["Boolean","Tipo lógico que representa True ou False."],["DataFrame","Estrutura tabular usada pelo Pandas."],["Função","Bloco reutilizável de código."],
  ["Índice","Posição usada para acessar um elemento de uma sequência."],["Iteração","Uma repetição de uma ação."],["Lista","Coleção ordenada e mutável de valores."],
  ["Loop","Estrutura usada para repetir código."],["Parâmetro","Nome definido na função para receber um valor."],["Python","Linguagem de programação de alto nível."],
  ["String","Tipo usado para representar texto."],["Variável","Nome associado a um valor."]
 ].map(x=>({t:x[0],d:x[1]}))
}};
COURSES.python.modules.forEach(m=>m.lessons=m.lessons.map(x=>({id:x[0],title:x[1]})));

const L={python:{}};
const add=(id,obj)=>L.python[id]=obj;
const q=(question,options,r,d,e)=>({q:question,o:options,r,d,e});
const input=(question,r,d,e)=>({q:question,r,d,e});

add("m1-l1",{
objetivo:"Entender o que é Python, para que serve e onde é usado.",prereq:"Nenhum.",
corpo:["<p><b>Python</b> é uma linguagem de programação: uma forma de escrever instruções que o computador consegue executar.</p>","<p>É usada em automação, análise de dados, inteligência artificial, ciência e desenvolvimento de aplicações.</p>",{code:`# Primeiro programa\nprint("Olá, mundo!")`,nota:"print() envia uma informação para a saída."}],
erros:["Achar que Python serve apenas para iniciantes.","Confundir Python com o editor onde o código é escrito."],
boas:["Pratique pequenos programas.","Leia as mensagens de erro."],
quiz:[q("Python é:",["Um navegador","Uma linguagem de programação","Um sistema operacional"],1,"Pense no que usamos para escrever instruções.","Python é uma linguagem de programação."),q("Python pode ser usado em análise de dados?",["Sim","Não"],0,"Pense no ecossistema de dados.","Sim, Python é muito usado em dados.")],
desafio:"Liste três tarefas do seu dia que poderiam ser automatizadas.",resumo:["Python é uma linguagem.","Pode ser usado em automação, dados e IA."],checkpoint:["O que é Python?","Cite duas áreas de uso."]
});
add("m1-l2",{
objetivo:"Escrever e executar seu primeiro programa.",prereq:"Aula anterior.",
corpo:["<p>A função <code>print()</code> mostra valores na saída.</p>",{code:`print("Olá, mundo!")\nprint("Meu nome é Pedro")\nprint("Soma:",2+3)`,nota:"Texto usa aspas; expressões sem aspas podem ser calculadas."}],
erros:["Usar Print() com P maiúsculo.","Esquecer aspas.","Esquecer parênteses."],boas:["Teste exemplos pequenos.","Leia a última linha dos erros."],
quiz:[input('Complete: ____("Olá")',"print","É a função que mostra algo.","A função é print."),q("Quanto aparece em print(2 + 3)?",["2 + 3","5","Erro"],1,"Sem aspas, Python calcula.","O resultado é 5.")],
desafio:"Mostre seu nome, cidade e idade.",resumo:["print() mostra informações.","Aspas indicam texto."],checkpoint:["Qual diferença entre print(\"2 + 3\") e print(2 + 3)?"]
});
add("m1-l3",{
objetivo:"Reconhecer a estrutura básica de uma instrução Python.",prereq:"print().",
corpo:["<p>Python diferencia maiúsculas de minúsculas e usa indentação para organizar blocos.</p>",{code:`nome="Ana"\nif nome:\n    print("Nome informado")`,nota:"A indentação faz parte da sintaxe."}],
erros:["Misturar indentação.","Esquecer dois-pontos depois de if.","Usar espaços em nomes."],boas:["Use quatro espaços.","Mantenha o código organizado."],
quiz:[q("Python diferencia maiúsculas e minúsculas?",["Sim","Não"],0,"Compare print e Print.","Sim, é case-sensitive.")],
desafio:"Crie duas variáveis e mostre seus valores.",resumo:["A sintaxe importa.","Indentação organiza blocos."],checkpoint:["Por que indentação é importante?"]
});
add("m1-l4",{
objetivo:"Usar comentários para documentar código.",prereq:"Sintaxe básica.",
corpo:["<p>Comentários são ignorados pelo interpretador e ajudam quem lê o código.</p>",{code:`# Calcula o total\npreco=10\nquantidade=3\ntotal=preco*quantidade\nprint(total)`}],
erros:["Comentar cada linha óbvia.","Usar comentários para esconder código quebrado."],boas:["Explique decisões.","Mantenha comentários atualizados."],
quiz:[q("Qual símbolo inicia um comentário?",["#","//","<!--"],0,"É o símbolo usado pelo Python.","# inicia comentário de uma linha.")],
desafio:"Adicione dois comentários úteis a um programa.",resumo:["# inicia comentário.","Comentários ajudam na manutenção."],checkpoint:["Para que serve um comentário?"]
});
add("m1-l5",{
objetivo:"Usar print() para exibir textos, números e resultados.",prereq:"Primeiro programa.",
corpo:["<p>print() aceita vários valores e parâmetros como <code>sep</code> e <code>end</code>.</p>",{code:`print("A","B","C",sep="-")\nprint("Carregando",end="...")`}],
erros:["Confundir texto com cálculo.","Não entender separadores."],boas:["Formate saídas pensando no usuário."],
quiz:[q("O que print(\"A\",\"B\",sep=\"-\") produz?",["A B","A-B","AB"],1,"sep define o separador.","O resultado é A-B.")],
desafio:"Mostre produto, quantidade e total formatados.",resumo:["print aceita vários valores.","sep muda o separador.","end muda o final."],checkpoint:["Para que serve sep?"]
});
add("m1-l6",{
objetivo:"Trabalhar com strings.",prereq:"print().",
corpo:["<p>String representa texto. Strings possuem métodos úteis para padronização.</p>",{code:`nome="Pedro"\nprint(nome.upper())\nprint(nome.lower())\nprint(len(nome))`}],
erros:["Confundir texto com número.","Esquecer de fechar aspas."],boas:["Use métodos de string.","Padronize entradas."],
quiz:[q("Qual é uma string?",["42","True","\"42\""],2,"String é texto.","\"42\" é texto.")],
desafio:"Mostre seu nome em maiúsculas e minúsculas.",resumo:["String representa texto.","Strings possuem métodos."],checkpoint:["Por que \"42\" e 42 são diferentes?"]
});
add("m2-l1",{
objetivo:"Criar, alterar e usar variáveis.",prereq:"print().",
corpo:["<p>Uma variável é um nome associado a um valor.</p>",{code:`nome="Pedro"\nidade=20\nprint(nome,idade)\nidade=21\nprint(nome,idade)`,nota:"= faz atribuição."}],
erros:["Usar variável antes de criá-la.","Começar nome com número.","Usar espaços."],boas:["Prefira snake_case.","Use nomes descritivos."],
quiz:[q("Qual nome é válido?",["2nota","nota final","nota_final"],2,"Sem espaço e sem número no início.","nota_final é válido."),input("Depois de x=5 e x=x+1, x vale?","6","Use o valor atual.","x passa a valer 6.")],
desafio:"Crie produto, preço e quantidade e calcule o total.",resumo:["Variáveis associam nomes a valores.","= atribui."],checkpoint:["O que significa atribuir um valor?"]
});
add("m2-l2",{
objetivo:"Distinguir tipos de dados básicos.",prereq:"Variáveis.",
corpo:["<p>Os tipos iniciais mais importantes são int, float, str e bool.</p>",{code:`idade=20\npreco=19.9\nnome="Ana"\nativo=True\nprint(type(idade))\nprint(type(preco))\nprint(type(nome))\nprint(type(ativo))`}],
erros:["Confundir número em texto com número.","Assumir que input retorna número."],boas:["Use type para investigar valores.","Converta explicitamente."],
quiz:[q("Qual o tipo de 10.5?",["int","float","str"],1,"Possui parte decimal.","10.5 é float.")],
desafio:"Crie uma variável de cada tipo e use type().",resumo:["int inteiro.","float decimal.","str texto.","bool lógico."],checkpoint:["Quais são quatro tipos básicos?"]
});
add("m2-l3",{
objetivo:"Realizar operações matemáticas.",prereq:"Tipos.",
corpo:["<p>Python possui +, -, *, /, //, % e **.</p>",{code:`a=10\nb=3\nprint(a+b)\nprint(a/b)\nprint(a//b)\nprint(a%b)\nprint(a**2)`}],
erros:["Confundir / com //.","Ignorar ordem das operações."],boas:["Use parênteses.","Dê nomes aos resultados."],
quiz:[q("Quanto vale 10 % 3?",["1","3","0"],0,"% retorna o resto.","10 dividido por 3 deixa resto 1.")],
desafio:"Crie uma calculadora de média de duas notas.",resumo:["% retorna resto.","// faz divisão inteira.","** faz potência."],checkpoint:["Quando % é útil?"]
});
add("m2-l4",{
objetivo:"Trabalhar com strings e booleanos.",prereq:"Tipos.",
corpo:["<p>bool representa True ou False. String representa texto.</p>",{code:`nome="Pedro"\naprovado=True\nprint(f"{nome}: {aprovado}")`}],
erros:["Usar \"True\" esperando bool.","Esquecer o f da f-string."],boas:["Use bool para estados.","Use f-strings para textos dinâmicos."],
quiz:[q("Qual é booleano?",["\"True\"","True","\"False\""],1,"Sem aspas é valor lógico.","True é bool.")],
desafio:"Crie aprovado e mostre uma frase.",resumo:["bool é lógico.","f-string insere valores no texto."],checkpoint:["Qual diferença entre True e \"True\"?"]
});
add("m2-l5",{
objetivo:"Converter valores entre tipos.",prereq:"Tipos.",
corpo:["<p>int(), float() e str() permitem conversões.</p>",{code:`idade_texto="20"\nidade=int(idade_texto)\npreco=float("19.90")\nprint(idade+1)\nprint(preco*2)`}],
erros:["Converter texto inválido.","Esquecer que input retorna string."],boas:["Valide entradas.","Converta explicitamente."],
quiz:[q("Qual converte \"25\" para inteiro?",["str(\"25\")","int(\"25\")","float(\"25\")"],1,"Você quer um inteiro.","int(\"25\") retorna 25.")],
desafio:"Peça dois números e calcule a soma.",resumo:["int converte para inteiro.","float para decimal.","str para texto."],checkpoint:["Por que converter input?"]
});
add("m2-l6",{
objetivo:"Receber informações com input().",prereq:"Variáveis e conversão.",
corpo:["<p>input() espera uma entrada e retorna texto.</p>",{code:`nome=input("Nome: ")\nidade=int(input("Idade: "))\nprint(f"Olá, {nome}! Você tem {idade}.")`}],
erros:["Não converter números.","Prompts pouco claros."],boas:["Explique o que deve ser digitado.","Valide entradas em sistemas reais."],
quiz:[q("Qual o tipo retornado por input()?",["str","int","bool"],0,"Mesmo digitando 20, ele chega como texto.","input retorna str.")],
desafio:"Peça nome, idade e cidade e apresente um resumo.",resumo:["input recebe texto.","Conversão é necessária para números."],checkpoint:["O que input retorna?"]
});
add("m2-l7",{
objetivo:"Construir comparações.",prereq:"Operadores matemáticos.",
corpo:["<p>==, !=, >, <, >= e <= produzem valores booleanos.</p>",{code:`idade=20\nprint(idade>=18)\nprint(idade==20)\nprint(idade!=15)`}],
erros:["Confundir = com ==.","Esquecer que comparação retorna bool."],boas:["Leia a expressão como uma pergunta."],
quiz:[q("Qual operador verifica igualdade?",["=","==","!="],1,"= atribui.","== compara igualdade.")],
desafio:"Crie comparações para verificar acesso.",resumo:["= atribui.","== compara.","Comparações retornam bool."],checkpoint:["Diferença entre = e ==?"]
});

const templates={
"m3-l1":["Entender como programas tomam decisões.","Comparações.","<p>Programas precisam escolher caminhos. <code>if</code> executa um bloco quando uma condição é verdadeira.</p>",`idade=20\nif idade>=18:\n    print("Acesso permitido")`,`if inicia uma condição.`],
"m3-l2":["Usar if e else.","Condições.","<p><code>else</code> representa o caminho alternativo.</p>",`saldo=100\nif saldo>=50:\n    print("Compra autorizada")\nelse:\n    print("Saldo insuficiente")`,`Teste os dois caminhos.`],
"m3-l3":["Usar elif para várias possibilidades.","if e else.","<p><code>elif</code> permite testar alternativas em sequência.</p>",`nota=82\nif nota>=90:\n    print("A")\nelif nota>=70:\n    print("B")\nelse:\n    print("C")`,`As condições são verificadas de cima para baixo.`],
"m3-l4":["Construir comparações para regras de negócio.","if, else e elif.","<p>Regras do mundo real podem ser transformadas em condições.</p>",`idade=22\ncadastro=True\nif idade>=18 and cadastro:\n    print("Liberado")`,`Escreva a regra em português antes do código.`],
"m3-l5":["Combinar condições com and, or e not.","Comparações.","<p><code>and</code> exige duas condições; <code>or</code> aceita alternativas; <code>not</code> inverte.</p>",`idade=20\nativo=True\nprint(idade>=18 and ativo)\nprint(idade<18 or ativo)\nprint(not ativo)`,`Use parênteses quando melhorarem a leitura.`],
"m3-l6":["Entender condições aninhadas.","Operadores lógicos.","<p>Uma condição pode conter outra condição. Use isso quando a segunda decisão depender da primeira.</p>",`ativo=True\nidade=20\nif ativo:\n    if idade>=18:\n        print("Liberado")`,`Evite níveis desnecessários de aninhamento.`],
"m3-l7":["Praticar decisões.","Módulo de decisões.","<p>Combine condições para resolver problemas de classificação.</p>",`nota=76\nif nota>=90:\n    print("Excelente")\nelif nota>=70:\n    print("Aprovado")\nelse:\n    print("Reprovado")`,`Teste também valores de limite.`],
"m4-l1":["Entender por que programas repetem tarefas.","Condições.","<p>Loops evitam copiar o mesmo código várias vezes.</p>",`contador=1\nwhile contador<=3:\n    print(contador)\n    contador+=1`,`Um loop precisa de uma condição de saída.`],
"m4-l2":["Usar while.","Loops.","<p><code>while</code> repete enquanto a condição for verdadeira.</p>",`n=1\nwhile n<=5:\n    print(n)\n    n+=1`,`Atualize a variável de controle.`],
"m4-l3":["Usar for para percorrer valores.","Loops.","<p><code>for</code> percorre elementos de uma sequência.</p>",`nomes=["Ana","João","Pedro"]\nfor nome in nomes:\n    print(nome)`,`A variável recebe um elemento por vez.`],
"m4-l4":["Gerar sequências com range().","for.","<p><code>range()</code> gera sequências numéricas. O limite final não é incluído.</p>",`for i in range(1,6):\n    print(i)`,`range(1,6) produz 1 até 5.`],
"m4-l5":["Controlar loops com break e continue.","for e while.","<p><code>break</code> encerra o loop; <code>continue</code> pula a iteração atual.</p>",`for n in range(1,6):\n    if n==3:\n        continue\n    print(n)`,`Use-os quando aumentarem a clareza.`],
"m4-l6":["Entender loops aninhados.","for.","<p>Um loop pode existir dentro de outro, formando combinações.</p>",`for linha in range(1,4):\n    for coluna in range(1,4):\n        print(linha,coluna)`,`Pense na quantidade total de execuções.`],
"m5-l1":["Criar e acessar listas.","Loops.","<p>Listas armazenam vários valores em uma coleção ordenada.</p>",`frutas=["maçã","banana","uva"]\nprint(frutas[0])\nprint(frutas[2])`,`O primeiro índice é 0.`],
"m5-l2":["Usar índices e slicing.","Listas.","<p>Índices acessam elementos e slices extraem partes da lista.</p>",`numeros=[10,20,30,40,50]\nprint(numeros[-1])\nprint(numeros[1:4])`,`O fim do slice é exclusivo.`],
"m5-l3":["Modificar listas com métodos.","Listas.","<p>Métodos como append, remove e sort ajudam a manipular listas.</p>",`produtos=["mouse","teclado"]\nprodutos.append("monitor")\nprodutos.sort()\nprint(produtos)`,`append adiciona ao final.`],
"m5-l4":["Conhecer tuplas.","Listas.","<p>Tuplas são coleções ordenadas que normalmente não são alteradas.</p>",`coordenadas=(10,20)\nprint(coordenadas[0])`,`Tuplas são imutáveis.`],
"m5-l5":["Entender sets.","Listas.","<p>Sets representam valores únicos.</p>",`numeros={1,2,2,3,3}\nprint(numeros)\nnumeros.add(4)`,`Sets são úteis para remover duplicidades.`],
"m5-l6":["Criar e acessar dicionários.","Estruturas de dados.","<p>Dicionários usam chave e valor e representam registros com facilidade.</p>",`produto={"nome":"Mouse","preco":89.90}\nprint(produto["nome"])`,`A chave identifica o valor.`],
"m6-l1":["Entender funções.","Variáveis e condições.","<p>Funções agrupam uma tarefa reutilizável.</p>",`def saudacao():\n    print("Olá!")\n\nsaudacao()`,`def cria a função.`],
"m6-l2":["Usar parâmetros e argumentos.","Funções.","<p>Parâmetros permitem que uma função receba dados.</p>",`def saudacao(nome):\n    print(f"Olá, {nome}!")\n\nsaudacao("Pedro")`,`nome é parâmetro.`],
"m6-l3":["Usar return.","Parâmetros.","<p>return envia um resultado de volta ao código que chamou a função.</p>",`def somar(a,b):\n    return a+b\n\nresultado=somar(10,5)\nprint(resultado)`,`return não é o mesmo que print.`],
"m6-l4":["Entender escopo.","Funções.","<p>Escopo define onde um nome pode ser acessado.</p>",`nome="Global"\ndef exemplo():\n    nome="Local"\n    print(nome)\nexemplo()\nprint(nome)`,`Prefira passar dados por parâmetros.`],
"m6-l5":["Combinar funções em problemas reais.","Funções.","<p>Programas maiores podem ser divididos em pequenas funções.</p>",`def total(preco,quantidade):\n    return preco*quantidade\n\nprint(total(25,3))`,`Uma função deve ter responsabilidade clara.`],
"m7-l1":["Ler arquivos com open().","Strings e funções.","<p>Programas podem ler arquivos de texto.</p>",`with open("dados.txt","r",encoding="utf-8") as arquivo:\n    conteudo=arquivo.read()\nprint(conteudo)`,`with ajuda a fechar o arquivo.`],
"m7-l2":["Escrever arquivos.","Leitura de arquivos.","<p>O modo w escreve e a adiciona ao final.</p>",`with open("log.txt","w",encoding="utf-8") as arquivo:\n    arquivo.write("Registro\\n")`,`w pode substituir conteúdo existente.`],
"m7-l3":["Usar with.","Arquivos.","<p>with gerencia o contexto de recursos como arquivos.</p>",`with open("dados.txt",encoding="utf-8") as arquivo:\n    for linha in arquivo:\n        print(linha.strip())`,`Prefira with para arquivos.`],
"m7-l4":["Tratar erros com try e except.","Conversão de tipos.","<p>try e except permitem tratar erros esperados.</p>",`try:\n    idade=int(input("Idade: "))\nexcept ValueError:\n    print("Digite um número.")`,`Capture exceções específicas.`],
"m8-l1":["Entender CSV.","Arquivos.","<p>CSV é comum para representar dados tabulares.</p>",`import csv\nwith open("vendas.csv",encoding="utf-8") as f:\n    leitor=csv.DictReader(f)\n    for linha in leitor:\n        print(linha)`,`Valide o separador e os tipos.`],
"m8-l2":["Conhecer Pandas.","CSV e Python.","<p>Pandas é uma biblioteca muito usada para análise de dados tabulares.</p>",`import pandas as pd\ndf=pd.DataFrame({"produto":["A","B"],"vendas":[10,20]})\nprint(df)`,`DataFrame representa uma tabela.`],
"m8-l3":["Trabalhar com DataFrame.","Pandas.","<p>Colunas podem ser selecionadas e agregadas.</p>",`import pandas as pd\ndf=pd.DataFrame({"vendas":[10,20,15]})\nprint(df["vendas"].sum())\nprint(df["vendas"].mean())`,`Explore os dados antes de concluir.`],
"m8-l4":["Conhecer limpeza de dados.","DataFrame.","<p>Dados reais podem ter duplicatas, ausências e inconsistências.</p>",`import pandas as pd\ndf=pd.DataFrame({"produto":["mouse","Mouse",None]})\ndf["produto"]=df["produto"].str.title()\nprint(df)`,`Limpeza deve ser justificada.`],
"m8-l5":["Aplicar Python em um projeto de vendas.","Pandas.","<p>Um projeto transforma dados em métricas e perguntas de negócio.</p>",`import pandas as pd\ndf=pd.DataFrame({"produto":["Mouse","Teclado"],"qtd":[3,2],"preco":[90,120]})\ndf["faturamento"]=df["qtd"]*df["preco"]\nprint(df["faturamento"].sum())`,`Faturamento não é o mesmo que lucro.`]
};

for(const [id,x] of Object.entries(templates)){
 const [objetivo,prereq,intro,src,nota]=x;
 add(id,{objetivo,prereq,corpo:[intro,{code:src,nota}],erros:["Não testar os casos de limite.","Ignorar mensagens de erro.","Usar código mais complexo do que o necessário."],boas:["Teste exemplos pequenos.","Use nomes claros.","Leia e entenda o erro antes de corrigir."],
 quiz:[q("Qual afirmação está correta?",["O conceito só funciona neste exemplo","O conceito pode ser reutilizado em outros programas","Python não permite esse conceito"],1,"Pense na finalidade do conteúdo da aula.","O conceito foi criado para ser reutilizado.")],
 desafio:"Crie um pequeno programa que use o conceito desta aula em uma situação real.",resumo:[objetivo,"Prática e testes são parte do aprendizado."],checkpoint:["Explique o conceito com suas próprias palavras.","Crie um exemplo diferente do apresentado."]});
}

let S={done:{},ok:{},last:null};
try{const x=JSON.parse(localStorage.getItem(KEY));if(x)S=Object.assign(S,x)}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const lessons=c=>COURSES[c].modules.flatMap(m=>m.lessons.map(l=>({...l,mt:m.title})));
const pts=()=>Object.keys(S.done).length*10+Object.keys(S.ok).length*5;
const lvl=()=>[...LEVELS].reverse().find(x=>pts()>=x.min)||LEVELS[0];
const bar=p=>`<div class="bar"><i style="width:${p}%"></i></div>`;

function hl(s){
 let o="",i=0;
 s.replace(/(#.*)|("[^"\n]*"|'[^'\n]*')|\b(if|elif|else|for|while|def|return|import|from|in|and|or|not|True|False|None|with|as|try|except|finally|class|break|continue)\b|\b(\d+(?:\.\d+)?)\b/g,
 (m,c,st,kw,n,off)=>{o+=esc(s.slice(i,off));i=off+m.length;o+=`<span class="${c?"c":st?"s":kw?"k":"n"}">${esc(m)}</span>`;return m});
 return o+esc(s.slice(i));
}
const code=s=>`<div class="code"><button data-copy>Copiar</button><pre><code>${hl(s)}</code></pre></div>`;
const list=(t,a)=>a?.length?`<h2>${t}</h2><ul>${a.map(x=>`<li>${x}</li>`).join("")}</ul>`:"";

function mods(c){return COURSES[c].modules.map((m,i)=>`<div class="mod"><h3>Módulo ${String(i+1).padStart(2,"0")} — ${m.title}</h3>${m.lessons.map(l=>`<a href="#/aula/${c}/${l.id}">${S.done[c+":"+l.id]?"✔":"○"} ${l.title}</a>`).join("")}</div>`).join("")}
function home(){
 const ls=lessons("python"),done=ls.filter(x=>S.done["python:"+x.id]).length,p=Math.round(done/ls.length*100),n=ls.find(x=>!S.done["python:"+x.id])||ls.at(-1),lv=lvl();
 return `<p class="mut">${lv.i} ${lv.n} · ${pts()} pontos</p><h1>Professor IA</h1><p>Aprenda passo a passo: explicação, exemplo, prática, exercício e desafio.</p>
 <div class="progress-grid"><div class="stat"><strong>${done}/${ls.length}</strong><span class="mut">aulas concluídas</span></div><div class="stat"><strong>${Object.keys(S.ok).length}</strong><span class="mut">exercícios corretos</span></div></div>
 <h2>🐍 Python</h2><p>${COURSES.python.description}</p>${bar(p)}<p class="mut">${p}% concluído</p><a class="btn" href="#/aula/python/${n.id}">${done?"Continuar estudando":"Começar Python"}</a>${mods("python")}
 <p class="mut">O nível representa seu progresso nesta plataforma. Não é uma certificação.</p>`;
}
function modulos(){return `<h1>Módulos</h1><p class="mut">Trilha completa de Python.</p>${mods("python")}`}
function aula(c,id){
 const ls=lessons(c),i=ls.findIndex(x=>x.id===id),l=ls[i],d=L[c]?.[id];
 if(!l)return `<h1>Aula não encontrada</h1><a href="#/modulos">Ver módulos</a>`;
 S.last=id;save();if(!d)return `<h1>${l.title}</h1><p>Conteúdo em breve.</p>`;
 const p=ls[i-1],n=ls[i+1];
 return `<p class="mut">${l.mt} · aula ${i+1} de ${ls.length}</p>${bar(Math.round((i+1)/ls.length*100))}<h1>${l.title}</h1>
 <div class="meta"><b>Objetivo:</b> ${d.objetivo}<br><b>Pré-requisitos:</b> ${d.prereq}</div><h2>Explicação</h2>
 ${d.corpo.map(b=>typeof b==="string"?b:code(b.code)+(b.nota?`<p class="note">${b.nota}</p>`:"")).join("")}
 ${list("Erros comuns",d.erros)}${list("Boas práticas",d.boas)}<h2>Exercícios</h2>
 ${d.quiz.map((x,j)=>`<div class="q" data-c="${c}" data-l="${id}" data-i="${j}" data-t="0"><p><b>${j+1}.</b> ${x.q}</p>${x.o?x.o.map((o,k)=>`<button class="opt" data-a="${k}">${o}</button>`).join(""):`<input placeholder="Sua resposta" aria-label="Resposta"> <button class="btn ol" data-a="f">Verificar</button>`}<div class="fb"></div></div>`).join("")}
 <h2>Desafio</h2><p>${d.desafio}</p>${list("Resumo",d.resumo)}${list("Checkpoint",d.checkpoint)}
 <p><button class="btn" id="done" data-k="${c}:${id}">${S.done[c+":"+id]?"✔ Aula concluída":"Concluir aula"}</button></p>
 <div class="nav2"><span>${p?`<a href="#/aula/${c}/${p.id}">← ${p.title}</a>`:""}</span><span>${n?`<a href="#/aula/${c}/${n.id}">${n.title} →</a>`:""}</span></div>`;
}
function gloss(){return `<h1>Glossário</h1><dl>${COURSES.python.glossary.sort((a,b)=>a.t.localeCompare(b.t,"pt")).map(g=>`<dt>${g.t}</dt><dd>${g.d}</dd>`).join("")}</dl>`}
function busca(qry){
 const qv=decodeURIComponent(qry||"").toLowerCase(),r=[];
 lessons("python").forEach(l=>{const d=L.python[l.id],txt=[l.title,d.objetivo,d.desafio,(d.resumo||[]).join(" "),d.corpo.map(x=>typeof x==="string"?x:x.code).join(" ")].join(" ").toLowerCase();if(txt.includes(qv))r.push(`<p><a href="#/aula/python/${l.id}">${l.title}</a><br><span class="mut">${l.mt}</span></p>`)});
 COURSES.python.glossary.forEach(g=>{if((g.t+" "+g.d).toLowerCase().includes(qv))r.push(`<p><b>${g.t}</b><br><span class="mut">${g.d}</span></p>`)});
 return `<h1>Busca</h1><p class="mut">${r.length} resultado(s) para “${esc(qv)}”</p>${r.join("")||"<p>Nenhum resultado encontrado.</p>"}`;
}

let pyodidePromise=null;
async function loadPyodideRuntime(){
 if(window.pyodide)return window.pyodide;
 if(!pyodidePromise)pyodidePromise=(async()=>{
  const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";document.head.appendChild(s);
  await new Promise((ok,bad)=>{s.onload=ok;s.onerror=()=>bad(new Error("Não foi possível carregar Pyodide."))});
  return window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"});
 })();
 return pyodidePromise;
}
async function runPython(src){
 const py=await loadPyodideRuntime();let out="";py.setStdout({batched:s=>out+=s});py.setStderr({batched:s=>out+=s});
 try{const r=await py.runPythonAsync(src);if(r!==undefined&&r!==null&&String(r)!=="None")out+=(out?"\n":"")+String(r);return out||"Programa executado sem saída."}catch(e){return String(e)}
}
function lab(){return `<h1>Laboratório Python</h1><p>Execute Python diretamente no navegador usando WebAssembly/Pyodide.</p><div class="status" id="py-status">Python ainda não carregado.</div>
<textarea id="code" spellcheck="false">print("Olá, Professor IA!")\nfor i in range(5):\n    print(i)</textarea>
<div class="actions" style="margin:.8rem 0"><button class="btn" id="run">▶ Executar</button><button class="btn ol" id="clear">Limpar saída</button><button class="btn ol" id="restore">Restaurar exemplo</button></div>
<h2>Saída</h2><div class="out" id="out">Sem saída.</div><p class="note">Ctrl + Enter executa. O Python roda no navegador.</p>`}

function check(t){
 const qel=t.closest(".q"),d=L[qel.dataset.c][qel.dataset.l].quiz[qel.dataset.i],fb=qel.querySelector(".fb"),free=t.dataset.a==="f";
 const value=free?qel.querySelector("input").value.trim().toLowerCase():+t.dataset.a;
 if(free?value===String(d.r).toLowerCase():value===d.r){S.ok[`${qel.dataset.c}:${qel.dataset.l}:${qel.dataset.i}`]=1;save();fb.className="fb ok";fb.innerHTML="Correto. "+d.e;qel.querySelectorAll("button,input").forEach(x=>x.disabled=true)}
 else{const tries=+qel.dataset.t+1;qel.dataset.t=tries;fb.className="fb no";fb.innerHTML="Ainda não. Dica: "+d.d+(tries>=2?"<br>Explicação: "+d.e:" Tente de novo.")}
}
document.addEventListener("click",e=>{
 const t=e.target;
 if(t.dataset.copy!==undefined){navigator.clipboard?.writeText(t.nextElementSibling.textContent);t.textContent="Copiado";setTimeout(()=>t.textContent="Copiar",1200)}
 else if(t.dataset.a!==undefined&&t.closest(".q"))check(t);
 else if(t.id==="done"){const k=t.dataset.k;S.done[k]?delete S.done[k]:S.done[k]=1;save();t.textContent=S.done[k]?"✔ Aula concluída":"Concluir aula"}
 else if(t.id==="run"){const out=document.getElementById("out"),st=document.getElementById("py-status"),btn=t;out.textContent="Carregando Python...";st.textContent="Carregando Python...";btn.disabled=true;runPython(document.getElementById("code").value).then(r=>{out.textContent=r;st.textContent="Python pronto ✓"}).catch(r=>{out.textContent=r.message;st.textContent="Erro ao carregar Python"}).finally(()=>btn.disabled=false)}
 else if(t.id==="clear"){document.getElementById("out").textContent="Sem saída."}
 else if(t.id==="restore"){document.getElementById("code").value='print("Olá, Professor IA!")\\nfor i in range(5):\\n    print(i)'}
});
document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.key==="Enter"&&document.getElementById("run"))document.getElementById("run").click()});
document.getElementById("q").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.value.trim())location.hash="#/busca/"+encodeURIComponent(e.target.value.trim())});
const routes=[[/^#\/modulos$/,modulos],[/^#\/aula\/(\w+)\/([\w-]+)$/,aula],[/^#\/glossario$/,gloss],[/^#\/lab$/,lab],[/^#\/busca\/(.*)$/,busca]];
function route(){const h=location.hash||"#/";let view=home,args=[];for(const[r,f]of routes){const m=h.match(r);if(m){view=f;args=m.slice(1);break}}app.innerHTML=view(...args);scrollTo(0,0)}
addEventListener("hashchange",route);route();
})();
