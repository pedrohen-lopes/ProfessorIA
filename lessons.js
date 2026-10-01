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
  video:{id:"BXzKS1heLNU"},
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
},

"m2-l2": {
  objetivo:"Conhecer os tipos básicos (str, int, float, bool) e descobrir o tipo de um valor com type().",
  prereq:"Aula: Variáveis.",
  corpo:[
    "<p>Todo valor tem um <b>tipo</b>, que define o que dá para fazer com ele. Somar dois números é calcular; somar dois textos é juntá-los. O Python descobre o tipo sozinho.</p>",
    {code:`nome = "Ana"\nidade = 30\naltura = 1.65\nestudante = True\n\nprint(type(nome))      # str\nprint(type(idade))     # int\nprint(type(altura))    # float\nprint(type(estudante)) # bool`,nota:"<code>str</code> é texto, <code>int</code> é inteiro, <code>float</code> é decimal (com ponto, não vírgula) e <code>bool</code> é True ou False (com inicial maiúscula)."},
    {code:`print("2" + "3")  # 23 (juntou textos)\nprint(2 + 3)      # 5 (somou números)`,nota:`As aspas mudam tudo: <code>"2"</code> é texto, <code>2</code> é número.`}
  ],
  erros:["Usar vírgula em decimais: <code>1,65</code> não é float. Use <code>1.65</code>.","Escrever <code>true</code> minúsculo: o certo é <code>True</code>."],
  boas:["Use <code>type()</code> sempre que algo se comportar de um jeito inesperado."],
  quiz:[
    {q:`Qual é o tipo de <code>"10"</code>?`,o:["int","str","float"],r:1,d:"Repare nas aspas.",e:"Entre aspas é texto (str), mesmo parecendo número."},
    {q:"Qual é o tipo de <code>3.14</code>? (digite o nome)",r:"float",d:"Tem parte decimal.",e:"Números com ponto decimal são float."}
  ],
  desafio:"Crie uma variável de cada tipo e mostre o type() de cada uma.",
  resumo:["Os tipos básicos são str, int, float e bool.","<code>type()</code> mostra o tipo de um valor.","Aspas transformam qualquer coisa em texto."],
  checkpoint:["Por que <code>2 + 3</code> e <code>\"2\" + \"3\"</code> dão resultados diferentes?","Cite um exemplo de cada tipo."]
},

"m2-l3": {
  objetivo:"Receber dados do usuário com input() e converter tipos com int(), float() e str().",
  prereq:"Aula: Tipos de dados.",
  corpo:[
    "<p><code>input()</code> pausa o programa, espera o usuário digitar e devolve o que foi digitado. <b>Sempre como texto (str)</b>, mesmo que seja um número.</p>",
    {code:`nome = input("Seu nome: ")\nprint(f"Olá, {nome}!")`,nota:"O texto entre parênteses é a pergunta mostrada ao usuário."},
    {code:`idade = int(input("Sua idade: "))\nprint(f"Ano que vem você terá {idade + 1} anos")`,nota:"<code>int()</code> converte o texto em número. Sem isso, <code>idade + 1</code> daria TypeError, porque não se soma texto com número."},
    {code:`print(int("42"))   # 42\nprint(float("3.5")) # 3.5\nprint(str(10))     # "10"\nprint(int(7.9))    # 7 (corta o decimal)`,nota:"<code>int(\"abc\")</code> gera ValueError: nem todo texto vira número."}
  ],
  erros:["Fazer conta com o resultado do input sem converter.","Digitar vírgula e tentar converter com float: <code>float('3,5')</code> dá erro."],
  boas:["Converta na hora de receber: <code>idade = int(input('Idade: '))</code>."],
  quiz:[
    {q:"Que tipo o <code>input()</code> sempre devolve?",o:["int","str","Depende do que for digitado"],r:1,d:"Pense: o que o teclado envia?",e:"O input devolve sempre str. A conversão é por sua conta."},
    {q:"Quanto é <code>int(7.9)</code>? (digite o número)",r:"7",d:"O int não arredonda.",e:"int() corta a parte decimal, resultando em 7."}
  ],
  desafio:"Peça dois números ao usuário e mostre a soma deles.",
  resumo:["<code>input()</code> devolve sempre texto.","<code>int()</code>, <code>float()</code> e <code>str()</code> convertem tipos.","Converter vem antes de calcular."],
  checkpoint:["Por que <code>input('1º número: ') + input('2º número: ')</code> junta em vez de somar?","O que acontece com <code>int('oi')</code>?"]
},

"m3-l1": {
  objetivo:"Usar operadores aritméticos, de comparação, lógicos e de atribuição.",
  prereq:"Aula: Conversão de tipos e input().",
  corpo:[
    "<p>Operadores são os símbolos que fazem o Python calcular ou comparar. Começando pelos aritméticos:</p>",
    {code:`print(7 + 2)   # 9\nprint(7 / 2)   # 3.5 (divisão normal)\nprint(7 // 2)  # 3 (divisão inteira)\nprint(7 % 2)   # 1 (resto)\nprint(7 ** 2)  # 49 (potência)`,nota:"O <code>%</code> é muito usado para saber se um número é par: <code>n % 2 == 0</code>."},
    "<p>Os de comparação sempre devolvem <code>True</code> ou <code>False</code>:</p>",
    {code:`idade = 20\nprint(idade >= 18)  # True\nprint(idade == 20)  # True (igual a)\nprint(idade != 20)  # False (diferente de)`,nota:"Um <code>=</code> guarda valor; dois <code>==</code> comparam."},
    {code:`maior = idade >= 18\ntem_ingresso = True\nprint(maior and tem_ingresso)  # True\nprint(maior or False)          # True\nprint(not maior)               # False`,nota:"<code>and</code> exige os dois verdadeiros, <code>or</code> exige pelo menos um, <code>not</code> inverte."},
    {code:`print(2 + 3 * 4)    # 14\nprint((2 + 3) * 4)  # 20\n\npontos = 10\npontos += 5  # o mesmo que pontos = pontos + 5`,nota:"A multiplicação vem antes da soma. Use parênteses para deixar a ordem clara."}
  ],
  erros:["Usar <code>=</code> onde deveria ser <code>==</code>.","Esquecer que <code>/</code> sempre devolve float: <code>4 / 2</code> é <code>2.0</code>."],
  boas:["Use parênteses em contas longas, mesmo quando não são obrigatórios."],
  quiz:[
    {q:"Quanto é <code>7 % 2</code>?",o:["3","1","3.5"],r:1,d:"É o resto da divisão.",e:"7 dividido por 2 dá 3 e sobra 1."},
    {q:"Quanto é <code>10 // 3</code>? (digite o número)",r:"3",d:"Divisão sem a parte decimal.",e:"10 // 3 dá 3."},
    {q:"Verdadeiro ou falso: <code>==</code> guarda um valor em uma variável.",o:["Verdadeiro","Falso"],r:1,d:"Qual símbolo você usa em <code>idade = 20</code>?",e:"== compara. Quem guarda é o =."}
  ],
  desafio:"Peça um número e mostre se ele é par ou ímpar usando % e uma comparação (o resultado será True ou False).",
  resumo:["Aritméticos: + - * / // % **.","Comparação devolve True ou False.","and, or e not combinam condições."],
  checkpoint:["Qual a diferença entre <code>/</code> e <code>//</code>?","Quando <code>a and b</code> é verdadeiro?"]
},

"m4-l1": {
  objetivo:"Fazer o programa tomar decisões com if, elif e else.",
  prereq:"Aula: Operadores.",
  corpo:[
    "<p>Programas precisam decidir. Na vida: se está chovendo, leve o guarda-chuva; senão, deixe em casa. Em Python, isso é o <code>if</code>.</p>",
    {code:`nota = 7.5\n\nif nota >= 7:\n    print("Aprovado")\nelif nota >= 5:\n    print("Recuperação")\nelse:\n    print("Reprovado")`,nota:"Cada condição termina com <code>:</code> e o bloco abaixo é indentado (4 espaços). Python executa só o primeiro bloco cuja condição for verdadeira."},
    "<p>A <b>indentação</b> faz parte da sintaxe: é ela que mostra o que pertence ao <code>if</code>. Você pode combinar condições com <code>and</code> e <code>or</code>, e colocar um <code>if</code> dentro de outro.</p>",
    {code:`idade = 20\ntem_cnh = True\n\nif idade >= 18 and tem_cnh:\n    print("Pode dirigir")\nelse:\n    print("Não pode dirigir")`,nota:"Os dois precisam ser verdadeiros, por causa do <code>and</code>."}
  ],
  erros:["Esquecer os dois-pontos no fim da linha do if.","Esquecer de indentar o bloco: IndentationError.","Usar <code>=</code> em vez de <code>==</code> na condição."],
  boas:["Ordene os elif do caso mais específico para o mais geral.","Use 4 espaços por nível e nunca misture com tab."],
  quiz:[
    {q:"Com <code>nota = 6</code> no código da aula, o que aparece?",o:["Aprovado","Recuperação","Reprovado"],r:1,d:"6 não é >= 7, mas é >= 5.",e:"A primeira condição falha e a segunda (>= 5) é verdadeira."},
    {q:"Complete para testar se idade é igual a 18: <code>if idade ___ 18:</code>",r:"==",d:"É o operador de comparação.",e:"Comparar igualdade exige dois sinais: ==."}
  ],
  desafio:"Peça uma idade e mostre se a pessoa é criança (até 12), adolescente (13 a 17), adulta (18 a 59) ou idosa (60 ou mais).",
  resumo:["<code>if</code>, <code>elif</code> e <code>else</code> escolhem um caminho.","A indentação define o bloco.","Só o primeiro bloco verdadeiro roda."],
  checkpoint:["O que acontece se duas condições forem verdadeiras em um if/elif?","Para que serve o <code>else</code>?"]
},

"m5-l1": {
  objetivo:"Repetir ações com for e range().",
  prereq:"Aula: if, elif e else.",
  corpo:[
    "<p>Imagine escrever <code>print</code> mil vezes. O <code>for</code> repete um bloco para cada item de uma sequência.</p>",
    {code:`for i in range(5):\n    print(i)  # 0 1 2 3 4`,nota:"<code>range(5)</code> gera de 0 até 4: começa em 0 e para antes do 5."},
    {code:`for n in range(1, 6):\n    print(n)  # 1 a 5\n\nfor n in range(0, 10, 2):\n    print(n)  # 0 2 4 6 8`,nota:"<code>range(início, fim, passo)</code>. O fim nunca é incluído."},
    {code:`total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)  # 15`,nota:"<code>total</code> é um <b>acumulador</b>: guarda o resultado parcial a cada volta. Padrão muito usado."}
  ],
  erros:["Achar que <code>range(5)</code> inclui o 5.","Esquecer de indentar o corpo do for."],
  boas:["Dê nomes claros à variável do loop quando possível: <code>for aluno in alunos</code>."],
  quiz:[
    {q:"O que <code>range(3)</code> gera?",o:["1, 2, 3","0, 1, 2","0, 1, 2, 3"],r:1,d:"Começa em 0 e para antes do 3.",e:"range(3) gera 0, 1 e 2."},
    {q:"Quantas vezes roda <code>for i in range(4):</code>? (digite o número)",r:"4",d:"Conte: 0, 1, 2, 3.",e:"São 4 voltas."}
  ],
  desafio:"Mostre a tabuada do 7, de 7 x 1 até 7 x 10.",
  resumo:["<code>for</code> repete para cada item.","<code>range(início, fim, passo)</code> gera números, sem incluir o fim.","Acumuladores guardam resultados parciais."],
  checkpoint:["O que <code>range(2, 10, 3)</code> gera?","Para que serve um acumulador?"]
},

"m5-l2": {
  objetivo:"Usar while, break e continue para controlar repetições.",
  prereq:"Aula: for e range().",
  corpo:[
    "<p>O <code>for</code> serve quando você sabe quantas voltas. O <code>while</code> repete <b>enquanto</b> uma condição for verdadeira.</p>",
    {code:`contador = 3\nwhile contador > 0:\n    print(contador)\n    contador -= 1\nprint("Fim!")`,nota:"Algo dentro do loop precisa mudar a condição. Se não mudar, o loop é infinito (no terminal, pare com Ctrl+C)."},
    {code:`while True:\n    senha = input("Senha: ")\n    if senha == "python":\n        break\nprint("Acesso liberado")`,nota:"<code>break</code> encerra o loop na hora. Aqui, <code>while True</code> repete até acertar a senha."},
    {code:`for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n)  # 1 2 4 5`,nota:"<code>continue</code> pula o resto da volta atual e vai para a próxima."}
  ],
  erros:["Esquecer de atualizar a variável da condição: loop infinito.","Confundir break (sai do loop) com continue (só pula uma volta)."],
  boas:["Antes de rodar um while, pergunte: o que faz esta condição virar falsa?"],
  quiz:[
    {q:"O que o <code>break</code> faz?",o:["Pula a volta atual","Encerra o loop","Reinicia o programa"],r:1,d:"Pense em quebrar o ciclo.",e:"break sai do loop imediatamente."},
    {q:"Verdadeiro ou falso: um while sempre termina sozinho.",o:["Verdadeiro","Falso"],r:1,d:"E se a condição nunca mudar?",e:"Se a condição nunca ficar falsa, o loop é infinito."}
  ],
  desafio:"Peça números até o usuário digitar 0 e, no fim, mostre a soma de todos.",
  resumo:["<code>while</code> repete enquanto a condição for verdadeira.","<code>break</code> encerra o loop.","<code>continue</code> pula para a próxima volta."],
  checkpoint:["Quando usar for e quando usar while?","Como evitar um loop infinito?"]
},

"m6-l1": {
  objetivo:"Guardar vários valores com listas e dicionários.",
  prereq:"Aula: for e range().",
  corpo:[
    "<p>Uma <b>lista</b> é como uma prateleira numerada: guarda vários itens em ordem, e você pode alterá-la.</p>",
    {code:`frutas = ["maçã", "banana"]\nfrutas.append("uva")   # adiciona no fim\nprint(frutas[0])       # maçã\nprint(len(frutas))     # 3\n\nfor f in frutas:\n    print(f)`,nota:"A contagem de posições (índices) começa em 0. Outros métodos úteis: <code>remove()</code> e <code>sort()</code>."},
    "<p>Um <b>dicionário</b> é como uma agenda: guarda pares <code>chave: valor</code> e você busca pela chave, não pela posição.</p>",
    {code:`aluno = {"nome": "Ana", "idade": 20}\nprint(aluno["nome"])      # Ana\naluno["idade"] = 21       # alterar\naluno["curso"] = "Python" # adicionar\n\nfor chave, valor in aluno.items():\n    print(chave, valor)`,nota:"Use lista quando a ordem importa e dicionário quando cada dado tem um nome."}
  ],
  erros:["Pedir um índice que não existe: lista de 3 itens e <code>lista[3]</code> dá IndexError.","Buscar uma chave inexistente: KeyError."],
  boas:["Use <code>for item in lista</code> em vez de índices quando não precisar da posição."],
  quiz:[
    {q:`Em <code>letras = ["a", "b", "c"]</code>, o que é <code>letras[1]</code>?`,o:["a","b","c"],r:1,d:"O primeiro índice é 0.",e:"Índice 0 é a, índice 1 é b."},
    {q:"Quanto vale <code>len([10, 20, 30])</code>? (digite o número)",r:"3",d:"len conta os itens.",e:"A lista tem 3 itens."}
  ],
  desafio:"Crie uma lista com 5 notas e mostre a média usando 
