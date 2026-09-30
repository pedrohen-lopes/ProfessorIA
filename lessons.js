/* Vídeo opcional por aula: video:{id:"IDdoVideo"} ou video:{list:"IDdaPlaylist"}.
   Conteúdo das aulas: LESSONS[curso][idDaAula]. Tipos de exercício:
   {q,o:[opções],r:índiceCorreto,d:dica,e:explicação}  -> múltipla escolha / verdadeiro-falso
   {q,r:"texto",d:dica,e:explicação}                   -> completar (resposta digitada) */
window.LESSONS = { python: {

"m1-l1": {
  objetivo:"Entender o que é Python, para que serve e onde é usado.",
  prereq:"Nenhum. Só curiosidade.",
  video:{id:"NRFZFXT1JvM"},
  corpo:[
    "<p><b>Python</b> é uma linguagem de programação: uma forma de escrever instruções que o computador consegue executar. Pense em uma receita de bolo. Você escreve os passos em ordem e quem executa (o computador) segue tudo à risca.</p>",
    "<p>Criada por Guido van Rossum e lançada em 1991, foi desenhada para ser legível. Um código em Python se parece com texto simples em inglês.</p>",
    "<h3>Onde Python é usado</h3><p>Análise de dados, automação de tarefas, sites (parte do servidor), inteligência artificial, ciência e pequenos scripts do dia a dia.</p>",
    {code:`# Isto é um comentário: o Python ignora esta linha\nprint("Olá, mundo!")`,nota:"<code>print()</code> mostra algo na tela. O texto entre aspas é chamado de <i>string</i>."},
    "<p>Por que começar por ele? A sintaxe é enxuta, então você gasta energia aprendendo a pensar como programador, não decorando símbolos.</p>"
  ],
  erros:["Achar que Python é só para iniciantes. Grandes empresas o usam em produção.","Confundir a linguagem (Python) com o editor onde você escreve (por exemplo, o VS Code)."],
  boas:["Leia o código em voz alta. Se faz sentido como frase, você está no caminho certo.","Use comentários para explicar o porquê, não o óbvio."],
  quiz:[
    {q:"Python é:",o:["Um editor de texto","Uma linguagem de programação","Um navegador"],r:1,d:"Lembre da analogia da receita de bolo.",e:"Python é uma linguagem para escrever instruções para o computador."},
    {q:"Verdadeiro ou falso: Python só serve para criar sites.",o:["Verdadeiro","Falso"],r:1,d:"Releia a lista de onde Python é usado.",e:"Python também é usado em dados, automação, IA e ciência."}
  ],
  desafio:"Liste 3 tarefas do seu dia que um programa poderia automatizar. Para cada uma, escreva os passos como uma receita.",
  resumo:["Python é uma linguagem legível e versátil.","Um programa é uma sequência de instruções.","<code>print()</code> mostra informações na tela."],
  checkpoint:["Com suas palavras, o que é uma linguagem de programação?","Cite duas áreas em que Python é usado."]
},

"m1-l2": {
  objetivo:"Escrever e executar seu primeiro programa usando print().",
  prereq:"Python instalado (python.org) e um editor, como o VS Code.",
  corpo:[
    "<p>Para conferir a instalação, abra o terminal e digite <code>python --version</code>. No Linux e no macOS, pode ser <code>python3 --version</code>.</p>",
    {code:`print("Olá, mundo!")`,nota:"Salve como <code>ola.py</code> e rode no terminal com <code>python ola.py</code>."},
    "<p>Você pode usar vários <code>print()</code> e até fazer contas:</p>",
    {code:`print("Olá!")\nprint("Meu nome é Pedro")\nprint("Soma:", 2 + 3)`,nota:"Cada <code>print()</code> começa uma nova linha. Sem aspas, o Python calcula: <code>2 + 3</code> vira <code>5</code>."}
  ],
  erros:["Esquecer as aspas: <code>print(Olá)</code> gera NameError.","Abrir com um tipo de aspa e fechar com outro.","Escrever <code>Print</code> com P maiúsculo. Python diferencia maiúsculas de minúsculas."],
  boas:["Nomes de arquivo sem espaços, como <code>ola_mundo.py</code>.","Leia a mensagem de erro de baixo para cima: a última linha diz o que aconteceu."],
  quiz:[
    {q:'Complete para mostrar Olá na tela: <code>____("Olá")</code>',r:"print",d:"É a função que mostra textos na tela.",e:"A função é print."},
    {q:"O que aparece com <code>print(2 + 3)</code>?",o:["2 + 3","5","Erro"],r:1,d:"Sem aspas, o Python calcula.",e:"Sem aspas, 2 + 3 é calculado e o resultado, 5, é mostrado."}
  ],
  desafio:"Escreva um programa que mostre seu nome, sua cidade e sua idade, cada um em uma linha.",
  resumo:["<code>print()</code> mostra valores na tela.","Textos vão entre aspas; contas não.","Python diferencia maiúsculas de minúsculas."],
  checkpoint:["Por que <code>print(Olá)</code> dá erro?","Qual a diferença entre <code>print(\"2 + 3\")</code> e <code>print(2 + 3)</code>?"]
},

"m2-l1": {
  objetivo:"Entender o que é uma variável e aprender a criar, alterar e usar variáveis.",
  prereq:"Aula: Seu primeiro programa.",
  corpo:[
    "<p>Uma <b>variável</b> é como uma caixa com etiqueta. A etiqueta é o nome, e dentro da caixa fica um valor. Na memória, o Python guarda o valor em algum lugar e o nome passa a apontar para ele.</p>",
    {code:`nome = "Pedro"\nidade = 20\nprint(nome, idade)\n\nidade = 21  # alterando o valor\nprint(nome, idade)`,nota:"O sinal <code>=</code> não é igualdade de matemática. Ele significa: guarde este valor neste nome."},
    "<p>Variáveis servem para reutilizar e combinar valores. Com uma f-string, você coloca variáveis dentro de um texto:</p>",
    {code:`produto = "Caderno"\npreco = 12.5\nquantidade = 3\nprint(f"{quantidade}x {produto} = R$ {preco * quantidade}")`,nota:"O <code>f</code> antes das aspas permite escrever variáveis entre chaves."},
    "<p><b>Regras de nome:</b> use letras, números e <code>_</code>; não comece com número; não use espaços. Por convenção, escreva em <code>snake_case</code>.</p>"
  ],
  erros:["Usar a variável antes de criá-la (NameError).","Começar o nome com número: <code>1nota = 10</code>.","Colocar espaço no nome: <code>meu nome = 1</code>. Use <code>meu_nome</code>."],
  boas:["Use nomes que dizem o que guardam: <code>preco_total</code>, não <code>x</code>.","Padronize em <code>snake_case</code>."],
  quiz:[
    {q:"Qual é um nome de variável válido?",o:["2nota","nota final","nota_final"],r:2,d:"Sem número no início e sem espaços.",e:"nota_final segue todas as regras."},
    {q:"Depois de <code>x = 5</code> e <code>x = x + 1</code>, quanto vale x? (digite o número)",r:"6",d:"Calcule primeiro o lado direito usando o valor atual de x.",e:"x valia 5, então x + 1 é 6, e esse valor é guardado em x."},
    {q:"Verdadeiro ou falso: em Python, <code>=</code> compara dois valores.",o:["Verdadeiro","Falso"],r:1,d:"Pense no que o = faz em <code>idade = 21</code>.",e:"O = atribui um valor. Para comparar, usa-se ==."}
  ],
  desafio:"Crie as variáveis produto, preco e quantidade e mostre uma frase com o total da compra.",
  resumo:["Variável é um nome que aponta para um valor.","<code>=</code> atribui; reatribuir troca o valor.","Use nomes claros em snake_case."],
  checkpoint:["O que acontece com o valor antigo quando você reatribui uma variável?","Por que <code>total_da_compra</code> é melhor que <code>t</code>?"]
}

}};
