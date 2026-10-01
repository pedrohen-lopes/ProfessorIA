/* Conteúdo completo da trilha Desenvolvedor Júnior. Formato compatível com LESSONS do ProfessorIA. */
window.LESSONS = Object.assign(window.LESSONS || {}, {
  "dev-junior": {
    "m1-l1": {
      "objetivo": "Entender a relação entre CPU, memória, armazenamento e execução de programas.",
      "prereq": "Nenhum.",
      "corpo": [
        "<p>Um programa é um conjunto de instruções. A CPU busca e executa instruções, usando registradores e memória para trabalhar com dados. A RAM é uma memória de trabalho rápida e volátil; SSD/HDD preservam arquivos mesmo depois que o computador é desligado. O sistema operacional coordena o acesso aos recursos e fornece serviços para os programas.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Para um desenvolvedor, isso explica por que uma aplicação pode ficar lenta por CPU, por falta de memória, por I/O de disco ou por espera de rede. Não é necessário decorar a arquitetura de um processador: o objetivo é saber identificar em qual recurso um problema está acontecendo.</p>",
        "<p><b>Prática guiada:</b> Faça um teste simples: abra um editor, um navegador e um terminal. Observe no monitor do sistema o consumo de CPU e memória e associe cada mudança a uma ação.</p>",
        {
          "code": "console.log('Um programa transforma entradas em processamento e saídas');",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Confundir RAM com armazenamento permanente.",
        "Achar que a CPU é o único recurso que afeta desempenho.",
        "Medir desempenho apenas pela sensação de lentidão."
      ],
      "boas": [
        "Use o Monitor do Sistema/Gerenciador de Tarefas para observar processos.",
        "Diferencie tempo de CPU de tempo esperando I/O ou rede.",
        "Ao investigar desempenho, formule uma hipótese e meça antes de otimizar."
      ],
      "quiz": [
        {
          "q": "Qual componente executa instruções do programa?",
          "o": [
            "SSD",
            "CPU",
            "RAM"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é CPU."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "cpu",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é CPU."
        }
      ],
      "desafio": "Explique, com um exemplo, a diferença entre RAM e armazenamento.",
      "resumo": [
        "CPU executa instruções; RAM mantém dados de trabalho; armazenamento mantém dados persistentes.",
        "O sistema operacional coordena o acesso aos recursos.",
        "Desempenho depende do recurso que está limitando a aplicação."
      ],
      "checkpoint": [
        "Por que um programa pode usar mais RAM sem necessariamente usar mais CPU?",
        "Qual recurso você investigaria primeiro em uma aplicação que espera uma resposta HTTP lenta?"
      ]
    },
    "m1-l2": {
      "objetivo": "Entender processos, permissões, diretórios e o papel do sistema operacional.",
      "prereq": "Aula: Como um computador executa um programa.",
      "corpo": [
        "<p>O sistema operacional gerencia processos, memória, dispositivos e arquivos. Um processo é um programa em execução com seu próprio contexto de execução. Arquivos vivem em uma hierarquia de diretórios e seguem regras de nome, caminho e permissão. Em Linux, caminhos são sensíveis a maiúsculas e minúsculas e permissões são parte importante do modelo de segurança.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> No desenvolvimento, problemas comuns são executar o arquivo no diretório errado, confundir caminho relativo com absoluto e tentar gravar em uma pasta sem permissão. Aprenda a ler o caminho de uma aplicação e a identificar qual processo está usando uma porta ou arquivo.</p>",
        "<p><b>Prática guiada:</b> Crie uma pasta de projeto com subpastas `src`, `tests` e `docs`. Abra dois programas que usem o mesmo arquivo e observe que cada um é um processo independente.</p>",
        {
          "code": "# Linux\npwd\nls -la\nps aux | head",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Tratar processo como sinônimo de arquivo.",
        "Usar caminhos absolutos em todo lugar.",
        "Ignorar permissões e origem dos arquivos."
      ],
      "boas": [
        "Prefira caminhos relativos dentro do projeto.",
        "Use nomes de arquivos previsíveis e sem espaços quando isso facilitar automação.",
        "Dê ao processo apenas as permissões de que ele precisa."
      ],
      "quiz": [
        {
          "q": "O que representa uma instância de um programa em execução?",
          "o": [
            "arquivo",
            "processo",
            "diretório"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é processo."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "processo",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é processo."
        }
      ],
      "desafio": "Encontre um processo do seu editor/terminal e descreva o que significa ele estar em execução.",
      "resumo": [
        "Processo é uma instância em execução de um programa.",
        "O sistema operacional gerencia recursos e acesso a arquivos.",
        "Permissões controlam operações permitidas a usuários/processos."
      ],
      "checkpoint": [
        "Qual é a diferença entre um caminho relativo e um absoluto?",
        "Por que permissões são importantes em um servidor?"
      ]
    },
    "m1-l3": {
      "objetivo": "Usar o terminal para navegar, criar arquivos, executar programas e diagnosticar problemas simples.",
      "prereq": "Aula: Sistema operacional, processos e arquivos.",
      "corpo": [
        "<p>O terminal é uma interface para executar comandos. Em Linux, `pwd`, `ls`, `cd`, `mkdir`, `cp`, `mv`, `rm`, `cat`, `grep` e `find` resolvem boa parte das tarefas do dia a dia. Redirecionamento (`>` e `>>`) e pipes (`|`) permitem combinar comandos. O terminal vira uma ferramenta de automação quando os comandos são encadeados em scripts.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> O objetivo não é memorizar dezenas de comandos. É aprender a ler o que está sendo feito, consultar `man`/`--help` e montar pequenas sequências reproduzíveis. Nunca execute comandos destrutivos sem entender o alvo.</p>",
        "<p><b>Prática guiada:</b> Pratique: crie uma pasta, três arquivos, liste apenas os arquivos `.js`, procure uma palavra em todos eles e salve o resultado em outro arquivo.</p>",
        {
          "code": "mkdir projeto\ncd projeto\ntouch app.js data.js README.md\ngrep -R \"README\" .",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Executar `rm -rf` sem conferir o caminho.",
        "Assumir que todo comando existe em qualquer sistema.",
        "Copiar comandos sem entender entrada e saída."
      ],
      "boas": [
        "Use `--help` e `man`.",
        "Leia o caminho atual antes de comandos destrutivos.",
        "Prefira scripts pequenos quando uma tarefa é repetitiva."
      ],
      "quiz": [
        {
          "q": "Qual comando mostra o diretório atual no Linux?",
          "o": [
            "pwd",
            "cd",
            "ls"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é pwd."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "pwd",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é pwd."
        }
      ],
      "desafio": "Crie uma pasta de laboratório e documente cinco comandos que você usou.",
      "resumo": [
        "O terminal permite combinar comandos e automatizar tarefas.",
        "Pipes e redirecionamentos conectam entrada e saída de comandos.",
        "Segurança no terminal começa por saber exatamente qual caminho será alterado."
      ],
      "checkpoint": [
        "Como `|` muda o fluxo de dados entre comandos?",
        "Qual cuidado você teria antes de usar `rm`?"
      ]
    },
    "m1-l4": {
      "objetivo": "Entender a jornada de uma requisição web do navegador até uma aplicação.",
      "prereq": "Aula: Terminal e linha de comando.",
      "corpo": [
        "<p>Quando você abre uma página, um cliente faz uma requisição para um servidor. DNS ajuda a descobrir o endereço associado a um domínio; a conexão usa IP e uma porta; HTTP define a forma das mensagens. Métodos como GET, POST, PUT, PATCH e DELETE comunicam a intenção da operação. A resposta inclui status, cabeçalhos e, normalmente, um corpo.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Pense no fluxo: navegador → DNS → servidor → rota → regra de negócio → banco/serviço → resposta. Esse mapa é útil para interpretar erros como 404, 401, 403, 500 e problemas de CORS.</p>",
        "<p><b>Prática guiada:</b> Abra o DevTools do navegador, aba Network, carregue uma página e observe método, URL, status, request headers e response. Faça a mesma análise para um formulário.</p>",
        {
          "code": "GET /usuarios/42 HTTP/1.1\nHost: api.exemplo.com\nAccept: application/json",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Confundir URL com domínio.",
        "Achar que HTTP e HTML são a mesma coisa.",
        "Interpretar qualquer erro como problema do frontend."
      ],
      "boas": [
        "Leia o status HTTP antes de alterar código aleatoriamente.",
        "Identifique se o erro está no cliente, na rede, no servidor ou nos dados.",
        "Aprenda a usar o DevTools Network desde cedo."
      ],
      "quiz": [
        {
          "q": "Qual código HTTP indica que o recurso não foi encontrado?",
          "o": [
            "200",
            "404",
            "500"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é 404."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "404",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é 404."
        }
      ],
      "desafio": "Explique o caminho de uma requisição GET até a resposta do servidor.",
      "resumo": [
        "Cliente envia requisição; servidor processa e retorna status, headers e corpo.",
        "DNS resolve nomes; IP/porta direcionam a conexão.",
        "Status HTTP ajudam a localizar a camada do problema."
      ],
      "checkpoint": [
        "O que diferencia 401 de 403?",
        "Quando um 500 costuma indicar problema do servidor?"
      ]
    },
    "m2-l1": {
      "objetivo": "Aprender a transformar problemas grandes em passos claros e testáveis.",
      "prereq": "Nenhum.",
      "corpo": [
        "<p>Algoritmo é uma sequência finita e ordenada de passos para produzir um resultado. Antes da sintaxe de uma linguagem, defina entrada, processamento, saída e regras. Decomposição quebra um problema em partes menores; abstração permite ignorar detalhes irrelevantes; casos de teste verificam se o algoritmo funciona em situações diferentes.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Um bom hábito é escrever primeiro em linguagem natural ou pseudocódigo. Exemplo: receber notas, validar faixa, calcular média, decidir situação e produzir mensagem. Depois transforme cada passo em código.</p>",
        "<p><b>Prática guiada:</b> Escreva o algoritmo de uma lista de tarefas: adicionar, listar, concluir e remover. Só depois escolha a linguagem.</p>",
        {
          "code": "INÍCIO\nler tarefa\nse tarefa vazia -> rejeitar\nsenão -> adicionar à lista\nFIM",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Começar digitando código sem entender o problema.",
        "Misturar validação e regra de negócio sem separar.",
        "Testar somente o caminho feliz."
      ],
      "boas": [
        "Liste entradas e saídas antes da implementação.",
        "Quebre funções grandes em pequenas etapas.",
        "Crie casos normais, extremos e inválidos."
      ],
      "quiz": [
        {
          "q": "O que uma boa decomposição procura fazer?",
          "o": [
            "aumentar o código",
            "quebrar o problema",
            "evitar testes"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é quebrar o problema."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "quebrar o problema",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é quebrar o problema."
        }
      ],
      "desafio": "Descreva em pseudocódigo o fluxo de cadastro de um usuário com validação de idade.",
      "resumo": [
        "Algoritmos descrevem passos para chegar a um resultado.",
        "Decomposição reduz complexidade e facilita teste.",
        "Pseudocódigo ajuda a separar raciocínio de sintaxe."
      ],
      "checkpoint": [
        "Qual seria a entrada, processamento e saída de uma calculadora?",
        "Que caso de borda você testaria em um cadastro de idade?"
      ]
    },
    "m2-l2": {
      "objetivo": "Representar dados corretamente e realizar operações básicas.",
      "prereq": "Aula: Algoritmos e decomposição de problemas.",
      "corpo": [
        "<p>Variável é um nome associado a um valor. Tipos descrevem a natureza desse valor: texto, número, booleano, coleção etc. Operadores combinam valores em expressões. A conversão explícita entre tipos evita muitos bugs, especialmente quando dados chegam como texto por um formulário ou terminal.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Imagine o programa como uma transformação: entrada textual → validação → conversão → processamento → saída formatada. Nomes de variáveis devem explicar o que representam, como `idade`, `preco_unitario` e `quantidade`.</p>",
        "<p><b>Prática guiada:</b> Escreva um pequeno programa que leia preço e quantidade, converta os valores para números, calcule o total e mostre o resultado com duas casas decimais.</p>",
        {
          "code": "preco = float(input('Preço: '))\nquantidade = int(input('Quantidade: '))\ntotal = preco * quantidade\nprint(f'Total: R$ {total:.2f}')",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar string onde deveria haver número.",
        "Aceitar entrada inválida sem validar.",
        "Dar nomes genéricos como `x`, `a`, `coisa` em código de produção."
      ],
      "boas": [
        "Faça conversões perto da entrada.",
        "Valide dados externos antes de aplicar regras.",
        "Prefira nomes que expressem intenção."
      ],
      "quiz": [
        {
          "q": "Qual tipo representa uma condição de verdadeiro/falso?",
          "o": [
            "string",
            "booleano",
            "lista"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é booleano."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "booleano",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é booleano."
        }
      ],
      "desafio": "Faça um programa que receba duas notas, valide de 0 a 10 e calcule a média.",
      "resumo": [
        "Tipos e conversões determinam como os operadores se comportam.",
        "Entrada externa deve ser tratada como não confiável até ser validada.",
        "Nomes claros reduzem o custo de manutenção."
      ],
      "checkpoint": [
        "Por que `input()` costuma exigir conversão em cálculos?",
        "O que deve acontecer com uma nota de 12?"
      ]
    },
    "m2-l3": {
      "objetivo": "Usar condições para escolher comportamentos diferentes.",
      "prereq": "Aula: Variáveis, tipos, operadores e entrada/saída.",
      "corpo": [
        "<p>Condicionais modelam regras: se uma condição for verdadeira, um bloco é executado; caso contrário, outro caminho pode ser seguido. Comparações, operadores lógicos e negação permitem expressar regras compostas. Uma decisão deve representar uma regra de negócio clara e testável.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Evite condições gigantes. Quando a regra cresce, extraia partes para funções com nomes significativos, como `pode_agendar()` ou `senha_valida()`. Ordem das condições importa quando elas são exclusivas ou quando a primeira correspondência encerra a decisão.</p>",
        "<p><b>Prática guiada:</b> Modele um desconto: cliente com cupom válido recebe 10%; cliente VIP recebe 15%; o restante não recebe desconto. Defina antes qual regra tem prioridade quando as duas forem verdadeiras.</p>",
        {
          "code": "idade = 17\nif idade >= 18:\n    mensagem = 'Maior de idade'\nelse:\n    mensagem = 'Menor de idade'",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Criar condições contraditórias.",
        "Esconder regras em expressões ilegíveis.",
        "Esquecer o caminho `else` quando há entradas inesperadas."
      ],
      "boas": [
        "Escreva as regras em linguagem natural antes de codificar.",
        "Teste cada ramo da decisão.",
        "Evite aninhar `if` sem necessidade."
      ],
      "quiz": [
        {
          "q": "Qual estrutura representa uma escolha baseada em uma condição?",
          "o": [
            "for",
            "if",
            "import"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é if."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "if",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é if."
        }
      ],
      "desafio": "Crie uma regra de acesso que valide idade e convite, incluindo casos inválidos.",
      "resumo": [
        "Condicionais escolhem caminhos de execução.",
        "Operadores lógicos permitem combinar regras.",
        "Cada ramo precisa ser coberto por testes."
      ],
      "checkpoint": [
        "Como você testaria uma regra com `idade >= 18`?",
        "Quando um `elif` pode ser mais claro que vários `if` independentes?"
      ]
    },
    "m2-l4": {
      "objetivo": "Automatizar tarefas repetidas e organizar lógica reutilizável.",
      "prereq": "Aula: Condições e decisões.",
      "corpo": [
        "<p>Laços repetem uma operação sobre uma sequência ou enquanto uma condição for verdadeira. Coleções armazenam vários valores; listas são comuns quando a ordem importa. Funções encapsulam comportamento, recebem parâmetros e podem retornar valores. A combinação desses recursos permite transformar problemas maiores em partes pequenas e reutilizáveis.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Escolha o tipo de repetição pelo problema. `for` é natural quando você percorre elementos; `while` é útil quando a repetição depende de uma condição. Evite loops infinitos garantindo uma condição de saída clara.</p>",
        "<p><b>Prática guiada:</b> Crie uma função `calcular_total(itens)` que percorra produtos e some preço × quantidade. Depois use essa função em mais de um ponto do programa.</p>",
        {
          "code": "def calcular_total(itens):\n    total = 0\n    for item in itens:\n        total += item['preco'] * item['quantidade']\n    return total",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Alterar uma coleção durante a iteração sem entender o efeito.",
        "Criar função que faz várias coisas diferentes.",
        "Usar `while` sem condição de saída."
      ],
      "boas": [
        "Funções devem ter uma responsabilidade principal.",
        "Escolha estruturas de dados pelo comportamento necessário.",
        "Dê nomes a funções como ações: `calcular_total`, `validar_email`."
      ],
      "quiz": [
        {
          "q": "Qual recurso encapsula uma unidade reutilizável de comportamento?",
          "o": [
            "função",
            "variável",
            "operador"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é função."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "função",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é função."
        }
      ],
      "desafio": "Implemente uma função que receba uma lista de números e retorne o maior valor, tratando lista vazia.",
      "resumo": [
        "Loops repetem operações de forma controlada.",
        "Funções reduzem repetição e melhoram a organização.",
        "Casos de borda, como coleção vazia, precisam de decisão explícita."
      ],
      "checkpoint": [
        "O que deve acontecer se `itens` estiver vazio?",
        "Qual é a vantagem de retornar um valor em vez de imprimir dentro da função?"
      ]
    },
    "m3-l1": {
      "objetivo": "Criar projetos Python isolados e reproduzíveis.",
      "prereq": "Aula: Repetições, coleções e funções.",
      "corpo": [
        "<p>Cada projeto pode depender de versões diferentes de bibliotecas. Um ambiente virtual isola essas dependências do Python global. Ferramentas como `venv` criam o ambiente; `pip` instala pacotes; um arquivo de requisitos registra o conjunto esperado. Essa separação evita que uma atualização de um projeto quebre outro.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Um fluxo simples: criar pasta, criar `.venv`, ativar, instalar, congelar requisitos e executar. O ambiente virtual não deve ir para o Git; o arquivo de dependências deve ir.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para ambientes virtuais e dependências, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "python -m venv .venv\nsource .venv/bin/activate\npip install requests\npip freeze > requirements.txt",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Instalar tudo no Python global.",
        "Versionar `.venv`.",
        "Não registrar dependências e esperar que outra máquina funcione igual."
      ],
      "boas": [
        "Adicione `.venv/` ao `.gitignore`.",
        "Fixe versões quando o projeto exigir reprodução.",
        "Documente como ativar e instalar dependências."
      ],
      "quiz": [
        {
          "q": "Qual ferramenta padrão do Python cria ambientes virtuais?",
          "o": [
            "venv",
            "pytest",
            "npm"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é venv."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "venv",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é venv."
        }
      ],
      "desafio": "Crie um projeto Python isolado com uma dependência externa e documente sua instalação.",
      "resumo": [
        "Ambientes virtuais isolam dependências por projeto.",
        "`requirements.txt` ajuda a reproduzir o ambiente.",
        "O ambiente local não é o código-fonte e não deve ser versionado."
      ],
      "checkpoint": [
        "Por que um projeto pode funcionar no seu PC e falhar em outro sem um arquivo de dependências?",
        "O que você colocaria no `.gitignore` para um projeto Python?"
      ]
    },
    "m3-l2": {
      "objetivo": "Separar código em módulos e definir responsabilidades claras.",
      "prereq": "Aula: Ambientes virtuais e dependências.",
      "corpo": [
        "<p>Um módulo Python é um arquivo que pode ser importado. Pacotes organizam módulos relacionados. `import` cria dependências entre partes do sistema; por isso, nomes, caminhos e responsabilidades precisam ser claros. Um projeto pequeno pode começar com `src/`, `tests/` e `README.md` e crescer conforme a necessidade.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Evite um arquivo gigante com cadastro, cálculo, acesso a banco e interface juntos. Separe por responsabilidade. Quando uma função precisa de dados de outro módulo, importe a interface necessária em vez de copiar código.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para módulos, imports e organização de código, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "# calculos.py\ndef soma(a, b):\n    return a + b\n\n# app.py\nfrom calculos import soma\nprint(soma(2, 3))",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Criar ciclos de importação.",
        "Mover tudo para módulos pequenos demais.",
        "Usar `from modulo import *`, escondendo de onde os nomes vieram."
      ],
      "boas": [
        "Defina módulos por responsabilidade.",
        "Prefira imports explícitos.",
        "Mantenha o ponto de entrada da aplicação claro."
      ],
      "quiz": [
        {
          "q": "Qual palavra-chave carrega um módulo em Python?",
          "o": [
            "import",
            "module",
            "include"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é import."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "import",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é import."
        }
      ],
      "desafio": "Separe um script de cadastro em três módulos: validação, regras e entrada/saída.",
      "resumo": [
        "Módulos ajudam a separar responsabilidades.",
        "Imports criam dependências que precisam ser compreensíveis.",
        "Estrutura deve crescer conforme a complexidade real."
      ],
      "checkpoint": [
        "O que é uma dependência circular?",
        "Quando vale a pena criar um novo módulo?"
      ]
    },
    "m3-l3": {
      "objetivo": "Tratar falhas previsíveis e persistir dados simples em arquivos.",
      "prereq": "Aula: Módulos, imports e organização de código.",
      "corpo": [
        "<p>Exceções representam situações anormais que o programa pode capturar e tratar. Use `try/except` para lidar com erros conhecidos e deixe erros inesperados aparecerem durante o desenvolvimento. Para arquivos, o `with open(...)` garante fechamento correto do recurso. JSON é um formato comum para representar dados estruturados entre sistemas.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Nunca capture `Exception` e ignore o erro sem registrar contexto. Valide o conteúdo antes de usar. Para dados externos, considere o que acontece se o arquivo não existir, estiver vazio ou estiver malformado.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para exceções, arquivos e json, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "import json\n\nwith open('dados.json', encoding='utf-8') as f:\n    dados = json.load(f)\n\ntry:\n    idade = int(dados['idade'])\nexcept (KeyError, ValueError):\n    idade = None",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar `except:` vazio.",
        "Apagar exceções sem registrar nada.",
        "Abrir arquivo sem contexto de encoding ou sem fechar.",
        "Confiar que JSON sempre tem os campos esperados."
      ],
      "boas": [
        "Capture exceções específicas.",
        "Valide dados carregados antes de processá-los.",
        "Registre erro com contexto quando necessário."
      ],
      "quiz": [
        {
          "q": "Qual formato é comum para troca de dados estruturados entre aplicações web?",
          "o": [
            "CSV",
            "JSON",
            "PNG"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é JSON."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "json",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é JSON."
        }
      ],
      "desafio": "Leia um JSON com usuários, trate arquivo ausente e campo inválido, e produza uma mensagem clara.",
      "resumo": [
        "Exceções devem tratar falhas previsíveis sem esconder bugs.",
        "`with open` gerencia o ciclo de vida do arquivo.",
        "JSON precisa ser validado como qualquer entrada externa."
      ],
      "checkpoint": [
        "Por que `except Exception: pass` é perigoso?",
        "Que erros podem acontecer ao ler JSON?"
      ]
    },
    "m3-l4": {
      "objetivo": "Conhecer orientação a objetos suficiente para modelar responsabilidades e criar scripts reutilizáveis.",
      "prereq": "Aula: Exceções, arquivos e JSON.",
      "corpo": [
        "<p>Classe define comportamento e estrutura; objeto é uma instância concreta. Encapsulamento e composição ajudam a manter regras organizadas. Para um Júnior, o importante é saber identificar quando uma classe melhora o modelo e quando uma função ou módulo simples é suficiente.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Não transforme tudo em classe. Uma classe faz sentido quando existe uma entidade com estado e comportamentos relacionados, como `Pedido` com itens e método para calcular total. Em scripts, mantenha `main()` pequeno e deixe regras testáveis fora dele.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para classes, objetos e scripts úteis, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "class Pedido:\n    def __init__(self, itens):\n        self.itens = itens\n\n    def total(self):\n        return sum(i['preco'] * i['quantidade'] for i in self.itens)\n\nif __name__ == '__main__':\n    print(Pedido([]).total())",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Criar hierarquias de herança desnecessárias.",
        "Colocar toda a lógica em `__init__`.",
        "Usar classe apenas para agrupar funções sem estado relacionado."
      ],
      "boas": [
        "Prefira composição quando objetos colaboram.",
        "Mantenha métodos pequenos.",
        "Teste comportamento, não detalhes internos."
      ],
      "quiz": [
        {
          "q": "O que é um objeto em Python?",
          "o": [
            "arquivo JSON",
            "instância de uma classe",
            "pacote"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é instância de uma classe."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "instância de uma classe",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é instância de uma classe."
        }
      ],
      "desafio": "Modele um `Produto` com nome, preço e um método que aplique desconto sem aceitar preço negativo.",
      "resumo": [
        "Classes modelam entidades quando estado e comportamento estão relacionados.",
        "Nem todo código precisa de orientação a objetos.",
        "`__main__` permite executar um módulo como script sem disparar sua rotina de entrada ao importá-lo."
      ],
      "checkpoint": [
        "Qual regra deve impedir um preço negativo?",
        "Quando uma função simples seria melhor que uma classe?"
      ]
    },
    "m4-l1": {
      "objetivo": "Controlar versões de código de forma segura e rastreável.",
      "prereq": "Aula: Classes, objetos e scripts úteis.",
      "corpo": [
        "<p>Git registra mudanças em um repositório distribuído. O fluxo básico é editar, `git status`, selecionar mudanças com `git add` e registrar um commit com `git commit`. Um commit deve representar uma unidade lógica de mudança; mensagens úteis explicam o que mudou.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Use o histórico para entender evolução e voltar a estados anteriores. `git diff` mostra mudanças antes do commit. Evite commits que misturem refatoração, nova funcionalidade e arquivos temporários sem relação.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para git, commits e histórico, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "git status\ngit diff\ngit add src/\ngit commit -m \"feat: adicionar validação de cadastro\"",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar `git add .` sem revisar.",
        "Fazer commits com mensagens como `coisas`.",
        "Trabalhar sempre na branch principal sem considerar o fluxo da equipe."
      ],
      "boas": [
        "Revise o diff antes do commit.",
        "Faça commits pequenos e coerentes.",
        "Escreva mensagens que descrevam a intenção da mudança."
      ],
      "quiz": [
        {
          "q": "Qual comando cria um registro de alterações no histórico?",
          "o": [
            "git status",
            "git commit",
            "git pull"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é git commit."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "git commit",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é git commit."
        }
      ],
      "desafio": "Crie um repositório, faça duas mudanças lógicas e registre dois commits claros.",
      "resumo": [
        "Git mantém histórico distribuído.",
        "`status` e `diff` ajudam a revisar antes do commit.",
        "Commits pequenos facilitam revisão e rollback."
      ],
      "checkpoint": [
        "Por que revisar `git diff` antes de commitar?",
        "O que torna uma mensagem de commit útil?"
      ]
    },
    "m4-l2": {
      "objetivo": "Trabalhar em mudanças paralelas usando branches e resolver conflitos conscientemente.",
      "prereq": "Aula: Git, commits e histórico.",
      "corpo": [
        "<p>Branch é uma linha de desenvolvimento que permite isolar uma tarefa. Ao terminar, mudanças podem ser integradas por merge ou pull request. Conflitos acontecem quando duas alterações atingem a mesma região de arquivos e o Git precisa que uma pessoa escolha a versão final.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Resolver conflito não é simplesmente apagar os marcadores `<<<<<<<`. Leia as duas versões, entenda a intenção de cada mudança, componha a solução e rode testes antes de concluir o merge.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para branches, merge e conflitos, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "git switch -c feat/login\n# editar e commitar\ngit switch main\ngit merge feat/login",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Criar branch com nome confuso.",
        "Resolver conflito apagando uma das partes sem entender.",
        "Fazer merge sem testar depois."
      ],
      "boas": [
        "Nomeie branches por intenção.",
        "Atualize a branch antes de abrir PR quando o fluxo da equipe exigir.",
        "Depois do merge, rode testes e revise o diff final."
      ],
      "quiz": [
        {
          "q": "O que uma branch ajuda a isolar?",
          "o": [
            "um banco de dados",
            "uma linha de desenvolvimento",
            "um processo"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é uma linha de desenvolvimento."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "uma linha de desenvolvimento",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é uma linha de desenvolvimento."
        }
      ],
      "desafio": "Simule um conflito em um arquivo de texto e documente como escolheu a versão final.",
      "resumo": [
        "Branches isolam trabalho paralelo.",
        "Conflitos são decisões de integração, não apenas problemas de sintaxe.",
        "Sempre valide o estado final após resolver conflitos."
      ],
      "checkpoint": [
        "Por que um conflito pode exigir entendimento da regra de negócio?",
        "Que comandos ajudam a verificar o estado antes do merge?"
      ]
    },
    "m4-l3": {
      "objetivo": "Usar GitHub para colaboração e revisão de mudanças.",
      "prereq": "Aula: Branches, merge e conflitos.",
      "corpo": [
        "<p>GitHub hospeda repositórios Git e adiciona recursos de colaboração. Pull Request (PR) propõe uma mudança para revisão. Code Review procura defeitos, riscos, clareza e aderência ao requisito. Um bom PR explica contexto, mudança, como testar e limitações.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Review não é competição. Comentários devem ser específicos, reproduzíveis e ligados ao código. Como autor, responda com evidências e altere o necessário. Como revisor, procure comportamento incorreto e casos não cobertos, além de estilo.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para github, pull request e code review, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "Título: `feat: adicionar autenticação`\nDescrição:\n- Contexto\n- O que mudou\n- Como testar\n- Riscos/limitações",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Abrir PR enorme.",
        "Aprovar sem ler.",
        "Comentar apenas preferências pessoais.",
        "Não informar como testar."
      ],
      "boas": [
        "Mantenha PRs pequenos.",
        "Inclua passos de teste.",
        "Diferencie defeito funcional de preferência de estilo."
      ],
      "quiz": [
        {
          "q": "Para que serve um Pull Request?",
          "o": [
            "apagar histórico",
            "revisar e integrar mudanças",
            "criar usuário"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é revisar e integrar mudanças."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "revisar e integrar mudanças",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é revisar e integrar mudanças."
        }
      ],
      "desafio": "Escreva a descrição de um PR para uma correção de bug, incluindo como reproduzir e testar.",
      "resumo": [
        "PRs facilitam revisão e integração.",
        "Code Review deve buscar riscos e defeitos com contexto.",
        "Uma boa descrição reduz o custo de entender a mudança."
      ],
      "checkpoint": [
        "O que você pediria a um autor antes de aprovar uma mudança que não sabe testar?",
        "Qual a diferença entre comentário de estilo e problema funcional?"
      ]
    },
    "m4-l4": {
      "objetivo": "Apresentar projetos de forma profissional e evitar arquivos inadequados no repositório.",
      "prereq": "Aula: GitHub, Pull Request e Code Review.",
      "corpo": [
        "<p>O README é a porta de entrada do projeto: deve explicar objetivo, stack, requisitos, instalação, execução, estrutura e limitações. `.gitignore` evita versionar artefatos locais, segredos e pastas geradas. Um portfólio bom mostra problemas resolvidos e evidências de funcionamento.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Um repositório profissional deve ser executável por outra pessoa seguindo instruções razoáveis. Inclua screenshots ou link de demonstração quando úteis, mas não esconda limitações. Segredos como tokens e senhas nunca devem entrar no Git.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para readme, .gitignore e portfólio no github, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "# ProfessorIA\n\n## Como executar\n1. Clone\n2. Abra o `index.html`\n3. Para desenvolvimento, use um servidor local\n\n## Tecnologias\nHTML, CSS, JavaScript",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Colocar senha de API no README.",
        "Versionar `.env`.",
        "README só com uma frase.",
        "Deixar projeto sem instruções de execução."
      ],
      "boas": [
        "Documente pré-requisitos e passos reais.",
        "Use `.env.example` para demonstrar variáveis sem revelar segredos.",
        "Mantenha README atualizado quando a execução mudar."
      ],
      "quiz": [
        {
          "q": "Qual arquivo normalmente registra padrões de arquivos que o Git deve ignorar?",
          "o": [
            "README.md",
            ".gitignore",
            "package.json"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é .gitignore."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": ".gitignore",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é .gitignore."
        }
      ],
      "desafio": "Pegue um dos seus projetos e escreva um README com objetivo, stack, instalação, uso, estrutura, decisões e limitações.",
      "resumo": [
        "README reduz a barreira para executar e entender um projeto.",
        "`.gitignore` evita rastrear arquivos locais inadequados.",
        "Portfólio técnico é evidência de trabalho, não apenas lista de tecnologias."
      ],
      "checkpoint": [
        "Por que `.env.example` é útil?",
        "Quais informações mínimas outra pessoa precisaria para rodar seu projeto?"
      ]
    },
    "m5-l1": {
      "objetivo": "Estruturar páginas com HTML semântico e hierarquia de conteúdo.",
      "prereq": "Aula: README, .gitignore e portfólio no GitHub.",
      "corpo": [
        "<p>HTML descreve estrutura e significado. O navegador interpreta elementos como `header`, `nav`, `main`, `section`, `article` e `footer`. Headings (`h1` a `h6`) organizam a hierarquia. O CSS controla apresentação e o JavaScript adiciona comportamento; separar essas responsabilidades melhora manutenção.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Escolha a tag pelo significado, não para conseguir um visual específico. Use `div` quando não houver elemento semântico apropriado. Uma página deve ter uma estrutura compreensível mesmo sem CSS.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para estrutura html e semântica, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "<main>\n  <article>\n    <h1>Como criar uma API</h1>\n    <p>Conteúdo da aula.</p>\n  </article>\n</main>",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar `div` para tudo.",
        "Pular de `h1` para `h4` apenas pelo tamanho.",
        "Usar tags sem entender o significado."
      ],
      "boas": [
        "Comece pela estrutura antes do estilo.",
        "Mantenha uma hierarquia de headings coerente.",
        "Use elementos semânticos para comunicar intenção."
      ],
      "quiz": [
        {
          "q": "Qual elemento representa o conteúdo principal de uma página?",
          "o": [
            "main",
            "span",
            "br"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é main."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "main",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é main."
        }
      ],
      "desafio": "Converta uma página cheia de `div`s em uma estrutura semântica.",
      "resumo": [
        "HTML organiza significado e estrutura.",
        "CSS não deve ser usado para definir a estrutura semântica.",
        "Semântica melhora manutenção e acessibilidade."
      ],
      "checkpoint": [
        "Por que `article` pode ser melhor que `div` para uma publicação?",
        "Uma página pode ter vários `section`? Em que condição?"
      ]
    },
    "m5-l2": {
      "objetivo": "Usar elementos de navegação e mídia com significado e acessibilidade.",
      "prereq": "Aula: Estrutura HTML e semântica.",
      "corpo": [
        "<p>Links levam o usuário a recursos ou destinos; botões disparam ações. Imagens informativas precisam de `alt` útil; imagens decorativas podem ter `alt` vazio. Listas (`ul`, `ol`) representam conjuntos de itens. Áudio e vídeo devem considerar controles, legendas quando disponíveis e desempenho.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> O atributo `href` define o destino de um link. Não use `javascript:` como destino de navegação. Em imagens, descreva o que importa para entender o conteúdo, não detalhes desnecessários.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para links, imagens, listas e mídia, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "<nav>\n  <a href=\"/cursos\">Cursos</a>\n</nav>\n<img src=\"python.png\" alt=\"Logo do Python\">",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar botão para navegação.",
        "Deixar `alt` com o nome do arquivo.",
        "Abrir tudo em nova aba sem necessidade."
      ],
      "boas": [
        "Use links para navegação e botões para ações.",
        "Escreva `alt` conforme a finalidade da imagem.",
        "Evite mídia automática que prejudique a experiência."
      ],
      "quiz": [
        {
          "q": "Qual atributo fornece texto alternativo para uma imagem?",
          "o": [
            "src",
            "alt",
            "href"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é alt."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "alt",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é alt."
        }
      ],
      "desafio": "Crie uma página de cursos com navegação, lista ordenada, imagem e um link para cada curso.",
      "resumo": [
        "Links são para navegação; botões, para ações.",
        "Mídia precisa de contexto e acessibilidade.",
        "Texto alternativo descreve a função informativa da imagem."
      ],
      "checkpoint": [
        "Quando `alt=\"\"` é apropriado?",
        "Por que um link e um botão não são intercambiáveis?"
      ]
    },
    "m5-l3": {
      "objetivo": "Construir formulários acessíveis com validação nativa e entender seus limites.",
      "prereq": "Aula: Links, imagens, listas e mídia.",
      "corpo": [
        "<p>Formulários coletam dados. `label` associa um texto ao campo; `name` identifica o valor enviado; `type` orienta o navegador; atributos como `required`, `min`, `max`, `pattern` e `autocomplete` melhoram a entrada. A validação do navegador é uma camada de UX, não uma fronteira de segurança.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Tudo que chega ao backend deve ser validado novamente. Um usuário pode desligar JavaScript, alterar uma requisição ou chamar a API diretamente. O servidor é responsável por regras de integridade e autorização.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para formulários e validação no navegador, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "<label for=\"email\">E-mail</label>\n<input id=\"email\" name=\"email\" type=\"email\" required autocomplete=\"email\">\n<button type=\"submit\">Cadastrar</button>",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar placeholder como rótulo.",
        "Confiar apenas na validação do browser.",
        "Esquecer `name` e depois não saber qual campo será enviado."
      ],
      "boas": [
        "Associe `label` e `input`.",
        "Use tipos de campo semânticos.",
        "Repita regras de validação no servidor."
      ],
      "quiz": [
        {
          "q": "Qual atributo identifica o nome do valor enviado de um campo?",
          "o": [
            "id",
            "name",
            "class"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é name."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "name",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é name."
        }
      ],
      "desafio": "Crie um formulário de cadastro com nome, e-mail, senha e idade, incluindo validações apropriadas.",
      "resumo": [
        "Formulários devem ser acessíveis e semânticos.",
        "Validação do cliente melhora UX; validação do servidor garante integridade.",
        "`name` é importante para o envio dos valores."
      ],
      "checkpoint": [
        "Por que `required` sozinho não protege uma API?",
        "Qual é a função do `autocomplete`?"
      ]
    },
    "m5-l4": {
      "objetivo": "Aplicar fundamentos de acessibilidade e otimização técnica básica para páginas.",
      "prereq": "Aula: Formulários e validação no navegador.",
      "corpo": [
        "<p>Acessibilidade inclui teclado, foco, contraste, semântica, labels e nomes acessíveis para controles. SEO técnico básico inclui título da página, descrição, headings coerentes, links rastreáveis e conteúdo útil. A melhor base para os dois é uma página semanticamente correta e rápida.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Teste uma interface sem mouse. Use Tab para navegar, Enter/Espaço para ativar controles e verifique se o foco é visível. Em SEO, não tente manipular rankings com texto escondido ou repetição artificial de palavras-chave.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para acessibilidade e seo básico, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "<title>Curso de Desenvolvimento | Professor IA</title>\n<meta name=\"description\" content=\"Trilha prática de desenvolvimento web.\">",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Remover outline de foco.",
        "Usar texto só em imagens.",
        "Criar vários `h1` apenas para melhorar SEO.",
        "Esconder conteúdo para buscadores."
      ],
      "boas": [
        "Teste com teclado.",
        "Use texto e headings que descrevam o conteúdo real.",
        "Prefira semântica nativa antes de ARIA."
      ],
      "quiz": [
        {
          "q": "Qual teste simples revela muitos problemas de acessibilidade de teclado?",
          "o": [
            "desligar o monitor",
            "navegar só com teclado",
            "aumentar o volume"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é navegar só com teclado."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "navegar só com teclado",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é navegar só com teclado."
        }
      ],
      "desafio": "Faça uma auditoria de teclado da sua página e registre pelo menos cinco achados ou evidências de que os fluxos estão acessíveis.",
      "resumo": [
        "Acessibilidade inclui navegação, foco, semântica e nomes acessíveis.",
        "SEO básico começa com estrutura e conteúdo úteis.",
        "Semântica correta reduz a necessidade de soluções artificiais."
      ],
      "checkpoint": [
        "Um botão que não recebe foco por teclado tem qual problema?",
        "O que um bom `title` deve comunicar?"
      ]
    },
    "m6-l1": {
      "objetivo": "Entender como CSS escolhe elementos e calcula dimensões.",
      "prereq": "Aula: Acessibilidade e SEO básico.",
      "corpo": [
        "<p>CSS aplica regras aos elementos do HTML. A cascata decide qual declaração ganha quando existem conflitos, considerando origem, importância, especificidade e ordem. O Box Model divide o tamanho em conteúdo, padding, border e margin. `box-sizing: border-box` costuma tornar o cálculo mais previsível.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Ao depurar estilo, confira primeiro o elemento correto, depois a regra que ganhou no DevTools, depois dimensões e herança. Evite resolver tudo com `!important`; isso costuma criar novos conflitos.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para seletores, cascata e box model, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "* { box-sizing: border-box; }\n.card {\n  padding: 16px;\n  border: 1px solid #ddd;\n  margin: 8px;\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Resolver conflito com `!important`.",
        "Esquecer herança.",
        "Calcular largura sem considerar padding e border."
      ],
      "boas": [
        "Mantenha seletores simples.",
        "Use DevTools para descobrir qual regra venceu.",
        "Padronize `box-sizing` no projeto."
      ],
      "quiz": [
        {
          "q": "Qual modelo define conteúdo, padding, border e margin?",
          "o": [
            "DOM",
            "Box Model",
            "REST"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é Box Model."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "box model",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é Box Model."
        }
      ],
      "desafio": "Crie três cartões e varie margin, padding e border observando o tamanho total.",
      "resumo": [
        "Cascata determina quais regras prevalecem.",
        "Box Model ajuda a prever dimensões.",
        "DevTools é uma ferramenta de diagnóstico, não só de inspeção."
      ],
      "checkpoint": [
        "O que muda quando se usa `box-sizing: border-box`?",
        "Por que `!important` pode piorar manutenção?"
      ]
    },
    "m6-l2": {
      "objetivo": "Usar Flexbox para layouts em uma dimensão.",
      "prereq": "Aula: Seletores, cascata e Box Model.",
      "corpo": [
        "<p>Flexbox organiza elementos ao longo de um eixo principal e um eixo cruzado. `display:flex`, `justify-content`, `align-items`, `gap`, `flex-direction` e `flex-wrap` resolvem muitos layouts de navegação e cartões. Pense primeiro em qual é o eixo principal e qual espaço você quer distribuir.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Flexbox não substitui toda técnica de layout. Ele é excelente para alinhar e distribuir itens em uma dimensão. Quando a página precisa de linhas e colunas independentes, Grid pode expressar melhor a intenção.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para flexbox e alinhamento, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": ".menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar margens manuais para cada item.",
        "Esquecer `flex-wrap`.",
        "Confundir `justify-content` com `align-items`."
      ],
      "boas": [
        "Defina a direção antes de ajustar alinhamento.",
        "Use `gap` para espaçamento entre itens.",
        "Teste tamanhos diferentes de viewport."
      ],
      "quiz": [
        {
          "q": "Qual propriedade distribui itens no eixo principal?",
          "o": [
            "align-items",
            "justify-content",
            "position"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é justify-content."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "justify-content",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é justify-content."
        }
      ],
      "desafio": "Construa uma barra de navegação que se reorganize quando a largura diminuir.",
      "resumo": [
        "Flexbox trabalha principalmente em uma dimensão.",
        "`justify-content` e `align-items` operam em eixos diferentes.",
        "`gap` reduz a necessidade de margens artificiais."
      ],
      "checkpoint": [
        "O que acontece com o eixo principal ao usar `flex-direction: column`?",
        "Quando `flex-wrap` é útil?"
      ]
    },
    "m6-l3": {
      "objetivo": "Usar CSS Grid para estruturar páginas com linhas e colunas.",
      "prereq": "Aula: Flexbox e alinhamento.",
      "corpo": [
        "<p>Grid trabalha em duas dimensões. `grid-template-columns`, `grid-template-rows`, `gap`, `minmax()` e unidades fracionárias criam estruturas flexíveis. Grid é adequado para dashboards, galerias e páginas em que linhas e colunas precisam ser coordenadas.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Comece com uma estrutura simples e responda: quais são as áreas principais? Depois transforme isso em colunas. `minmax(0, 1fr)` pode evitar overflow em itens extensos dentro de grades.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para grid e layouts de páginas, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": ".layout {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(240px, 1fr);\n  gap: 24px;\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Fixar larguras em pixels para tudo.",
        "Criar uma grade complexa sem necessidade.",
        "Ignorar conteúdo que pode estourar a coluna."
      ],
      "boas": [
        "Use Grid para estrutura bidimensional.",
        "Prefira unidades flexíveis.",
        "Teste conteúdo real, não só placeholders."
      ],
      "quiz": [
        {
          "q": "Qual modelo CSS é orientado a duas dimensões?",
          "o": [
            "Flexbox",
            "Grid",
            "Float"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é Grid."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "grid",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é Grid."
        }
      ],
      "desafio": "Monte um dashboard com área principal e sidebar usando Grid, tornando a sidebar empilhada em telas estreitas.",
      "resumo": [
        "Grid expressa linhas e colunas de forma direta.",
        "Unidades flexíveis tornam o layout adaptável.",
        "Conteúdo real revela problemas de overflow."
      ],
      "checkpoint": [
        "Quando Grid comunica melhor a intenção que Flexbox?",
        "O que `minmax()` permite controlar?"
      ]
    },
    "m6-l4": {
      "objetivo": "Criar interfaces que funcionem em diferentes tamanhos e condições de tela.",
      "prereq": "Aula: Grid e layouts de páginas.",
      "corpo": [
        "<p>Responsividade adapta layout, tipografia, espaçamento e interação ao espaço disponível. Media queries aplicam regras condicionais. Uma estratégia comum é começar pela estrutura simples e adicionar comportamento quando o conteúdo precisa, em vez de escolher dezenas de larguras de aparelhos.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Use o DevTools para simular larguras, mas também redimensione manualmente. Observe onde texto quebra, botões ficam pequenos, tabelas vazam e menus perdem acessibilidade. Responsividade não é só esconder elementos.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para responsividade e media queries, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "@media (max-width: 768px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n  .menu {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Projetar apenas para um modelo de celular.",
        "Esconder conteúdo importante em mobile.",
        "Usar muitos breakpoints sem uma necessidade de conteúdo."
      ],
      "boas": [
        "Use breakpoints orientados pelo conteúdo.",
        "Garanta que ações importantes continuem acessíveis.",
        "Teste orientação e diferentes densidades de tela."
      ],
      "quiz": [
        {
          "q": "Qual recurso CSS aplica estilos de acordo com características do viewport?",
          "o": [
            "media query",
            "JSON",
            "event listener"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é media query."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "media query",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é media query."
        }
      ],
      "desafio": "Deixe uma página de curso confortável em 360px, 768px e desktop, registrando o que mudou em cada faixa.",
      "resumo": [
        "Responsividade é adaptação ao espaço e contexto.",
        "Breakpoints devem responder a necessidades do layout.",
        "Conteúdo e acessibilidade importam tanto quanto estética."
      ],
      "checkpoint": [
        "Qual é um sinal de que o breakpoint foi escolhido pelo conteúdo?",
        "Por que esconder uma informação não é a mesma coisa que reorganizá-la?"
      ]
    },
    "m7-l1": {
      "objetivo": "Usar JavaScript moderno para modelar dados e comportamento no frontend.",
      "prereq": "Aula: Responsividade e media queries.",
      "corpo": [
        "<p>`const` e `let` tornam a intenção sobre mutabilidade mais clara. Objetos agrupam dados relacionados; arrays representam coleções. Funções podem ser declaradas, atribuídas a variáveis e passadas como argumentos. `map`, `filter` e `find` ajudam a expressar transformações sem loops manuais em muitos casos.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Evite mutar objetos compartilhados sem necessidade. Ao transformar dados, prefira criar uma nova coleção quando isso deixar o fluxo mais previsível. Desestruturar objetos pode tornar código mais legível quando usado com moderação.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para javascript moderno: variáveis, objetos e funções, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "const produtos = [{nome:'Teclado', preco:120}, {nome:'Mouse', preco:80}];\nconst caros = produtos.filter(p => p.preco >= 100);\nconst nomes = produtos.map(p => p.nome);",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar `var` sem entender escopo.",
        "Alterar arrays compartilhados em vários lugares.",
        "Usar `map` quando a intenção é apenas verificar uma condição."
      ],
      "boas": [
        "Prefira `const` quando a referência não muda.",
        "Nomeie funções por comportamento.",
        "Escolha `map`, `filter`, `find` conforme a intenção."
      ],
      "quiz": [
        {
          "q": "Qual método cria uma nova lista com os itens que atendem a uma condição?",
          "o": [
            "map",
            "filter",
            "find"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é filter."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "filter",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é filter."
        }
      ],
      "desafio": "Modele um catálogo de produtos e gere uma lista filtrada e uma lista só com nomes.",
      "resumo": [
        "JavaScript moderno favorece `const`, `let` e funções pequenas.",
        "Arrays e objetos são estruturas centrais no frontend.",
        "Métodos de coleção tornam intenção explícita."
      ],
      "checkpoint": [
        "Qual é a diferença entre `map` e `filter`?",
        "Quando `find` é mais adequado que `filter`?"
      ]
    },
    "m7-l2": {
      "objetivo": "Manipular elementos da página e reagir a ações do usuário.",
      "prereq": "Aula: JavaScript moderno: variáveis, objetos e funções.",
      "corpo": [
        "<p>O DOM representa o documento como uma árvore de nós. JavaScript pode selecionar elementos, alterar texto, atributos e classes, e registrar eventos. `addEventListener` é a forma padrão de conectar comportamento. O objetivo é mudar o estado da interface sem duplicar estrutura HTML desnecessariamente.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Separe dados de apresentação quando possível. Um clique pode atualizar um objeto de estado e depois renderizar parte da interface. Em formulários, prefira ouvir `submit` e chamar `preventDefault()` quando a página não deve navegar.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para dom e eventos, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "const button = document.querySelector('#salvar');\nbutton.addEventListener('click', () => {\n  document.body.classList.toggle('dark');\n});",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Adicionar vários listeners desnecessários.",
        "Usar `onclick` inline em todo lugar.",
        "Buscar elementos antes de o DOM existir."
      ],
      "boas": [
        "Selecione elementos por identificadores estáveis.",
        "Centralize comportamento em listeners.",
        "Pense em eventos como entrada para uma mudança de estado."
      ],
      "quiz": [
        {
          "q": "Qual API representa a árvore do documento no navegador?",
          "o": [
            "DOM",
            "SQL",
            "DNS"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é DOM."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "dom",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é DOM."
        }
      ],
      "desafio": "Crie um contador com botões +1, -1 e reset, atualizando o texto sem recarregar a página.",
      "resumo": [
        "DOM é a representação manipulável do documento.",
        "Eventos conectam ações do usuário ao código.",
        "`addEventListener` separa comportamento do HTML."
      ],
      "checkpoint": [
        "Por que `preventDefault()` pode ser necessário em formulários?",
        "O que pode acontecer se você selecionar um elemento inexistente?"
      ]
    },
    "m7-l3": {
      "objetivo": "Capturar entradas do usuário e persistir pequenas preferências no navegador.",
      "prereq": "Aula: DOM e eventos.",
      "corpo": [
        "<p>O estado é a informação que a interface precisa para saber o que mostrar. Para dados simples entre recarregamentos, `localStorage` armazena strings no navegador. Objetos/arrays precisam ser serializados com JSON. Antes de usar uma chave, valide o conteúdo recuperado porque ele pode estar ausente ou inconsistente.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Não use `localStorage` para segredos, senhas ou dados críticos. Ele é acessível ao JavaScript da origem. Para um rascunho de formulário, tema e preferências simples, é útil; para autenticação segura e dados centrais, use uma arquitetura adequada no servidor.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para formulários, estado local e localstorage, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "const KEY = 'professor-ia:tema';\nlocalStorage.setItem(KEY, 'dark');\nconst tema = localStorage.getItem(KEY);",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Guardar senha/token no `localStorage`.",
        "Assumir que sempre haverá valor.",
        "Salvar objeto diretamente sem `JSON.stringify`."
      ],
      "boas": [
        "Defina chaves estáveis.",
        "Valide dados recuperados.",
        "Nunca trate `localStorage` como cofre de segredos."
      ],
      "quiz": [
        {
          "q": "Qual API permite armazenar pequenas informações persistentes no navegador?",
          "o": [
            "session",
            "localStorage",
            "fetch"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é localStorage."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "localstorage",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é localStorage."
        }
      ],
      "desafio": "Salve a preferência de tema e restaure-a quando a página abrir.",
      "resumo": [
        "`localStorage` armazena strings e persiste entre recarregamentos.",
        "JSON permite serializar objetos para armazenamento.",
        "Dados sensíveis não devem depender de `localStorage`."
      ],
      "checkpoint": [
        "Por que `JSON.stringify` e `JSON.parse` aparecem juntos?",
        "Por que token em `localStorage` exige cuidado?"
      ]
    },
    "m7-l4": {
      "objetivo": "Consumir uma API HTTP de forma assíncrona e tratar estados da interface.",
      "prereq": "Aula: Formulários, estado local e localStorage.",
      "corpo": [
        "<p>Uma requisição HTTP é assíncrona porque a resposta pode chegar depois. `fetch()` retorna uma Promise. Com `async/await`, o fluxo fica parecido com código sequencial, mas ainda é assíncrono. Verifique `response.ok` e o status antes de assumir que o corpo é válido.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Uma interface que consome API normalmente tem pelo menos quatro estados: carregando, sucesso, vazio e erro. Separar esses estados melhora UX e facilita debug. Em produção, trate timeout, indisponibilidade e respostas inesperadas.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para fetch, promises e apis no navegador, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "async function carregarUsuarios() {\n  const response = await fetch('/api/usuarios');\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Assumir que `fetch` rejeita para todo HTTP 4xx/5xx.",
        "Esquecer `await response.json()`.",
        "Mostrar tela vazia enquanto a API ainda está carregando."
      ],
      "boas": [
        "Cheque `response.ok`.",
        "Mostre estado de carregamento e erro.",
        "Evite disparar várias requisições iguais sem necessidade."
      ],
      "quiz": [
        {
          "q": "Qual objeto o `fetch()` retorna imediatamente?",
          "o": [
            "Promise",
            "DOMNode",
            "SQLRow"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é Promise."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "promise",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é Promise."
        }
      ],
      "desafio": "Consuma uma API pública de teste e mostre loading, sucesso, vazio e erro.",
      "resumo": [
        "`fetch` retorna uma Promise.",
        "HTTP 4xx/5xx pode chegar como resposta normal, então `response.ok` deve ser verificado.",
        "UX precisa representar o estado assíncrono."
      ],
      "checkpoint": [
        "Por que `fetch` não deve ser usado sem tratamento de erro?",
        "Quais estados mínimos uma tela de busca deveria representar?"
      ]
    },
    "m8-l1": {
      "objetivo": "Modelar dados relacionais usando tabelas, chaves e relacionamentos.",
      "prereq": "Aula: Fetch, Promises e APIs no navegador.",
      "corpo": [
        "<p>Banco relacional organiza dados em tabelas. Uma linha representa um registro e uma coluna representa um atributo. Primary Key identifica uma linha de forma única. Foreign Key referencia a chave de outra tabela e cria relacionamento. Uma tabela de junção costuma representar relacionamentos muitos-para-muitos.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Antes de criar tabelas, liste entidades e relações. Por exemplo: `clientes` e `pedidos`; um cliente pode ter muitos pedidos. Evite duplicar dados se isso cria inconsistência, mas não normalize cegamente sem compreender o acesso que a aplicação precisa.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para modelo relacional, tabelas e chaves, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "CREATE TABLE clientes (\n  id INTEGER PRIMARY KEY,\n  nome TEXT NOT NULL\n);\n\nCREATE TABLE pedidos (\n  id INTEGER PRIMARY KEY,\n  cliente_id INTEGER NOT NULL,\n  FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Colocar dados repetidos em dezenas de linhas.",
        "Usar o mesmo campo como chave de duas tabelas sem compreender relação.",
        "Esquecer restrições `NOT NULL` e `FOREIGN KEY`."
      ],
      "boas": [
        "Modele entidades antes das consultas.",
        "Defina chaves e restrições explícitas.",
        "Nomeie tabelas e colunas de forma consistente."
      ],
      "quiz": [
        {
          "q": "Qual chave identifica unicamente um registro?",
          "o": [
            "Foreign Key",
            "Primary Key",
            "Index"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é Primary Key."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "primary key",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é Primary Key."
        }
      ],
      "desafio": "Modele as tabelas de uma pequena escola com alunos, cursos e matrículas.",
      "resumo": [
        "Primary Key identifica registros.",
        "Foreign Key cria referências entre tabelas.",
        "Modelagem reduz inconsistências e clarifica relações."
      ],
      "checkpoint": [
        "Como representar muitos alunos em muitos cursos?",
        "Por que `NOT NULL` pode ser importante?"
      ]
    },
    "m8-l2": {
      "objetivo": "Consultar e resumir dados com SQL.",
      "prereq": "Aula: Modelo relacional, tabelas e chaves.",
      "corpo": [
        "<p>`SELECT` escolhe colunas; `WHERE` filtra linhas; `ORDER BY` ordena; funções como `COUNT`, `SUM`, `AVG`, `MIN` e `MAX` agregam. `GROUP BY` cria grupos para calcular agregados por categoria. Pense em uma consulta como uma transformação previsível do conjunto de linhas.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Evite `SELECT *` em código de aplicação quando você conhece as colunas necessárias. Use filtros seletivos e sempre confirme o que acontece com `NULL` e condições compostas.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para select, where, order by e agregações, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "SELECT status, COUNT(*) AS total\nFROM pedidos\nWHERE criado_em >= '2026-01-01'\nGROUP BY status\nORDER BY total DESC;",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Confundir `WHERE` com `HAVING`.",
        "Ordenar sem critério explícito.",
        "Buscar todas as colunas sem necessidade."
      ],
      "boas": [
        "Selecione apenas o que a aplicação precisa.",
        "Teste consultas pequenas antes de combiná-las.",
        "Use aliases claros para agregações."
      ],
      "quiz": [
        {
          "q": "Qual cláusula filtra linhas antes da agregação?",
          "o": [
            "WHERE",
            "GROUP BY",
            "ORDER BY"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é WHERE."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "where",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é WHERE."
        }
      ],
      "desafio": "Liste os cinco clientes com maior número de pedidos usando `GROUP BY` e `ORDER BY`.",
      "resumo": [
        "`SELECT` escolhe dados e expressões.",
        "`WHERE` filtra linhas; `GROUP BY` agrupa; `ORDER BY` ordena.",
        "Agregações permitem resumir grandes conjuntos de dados."
      ],
      "checkpoint": [
        "Por que `HAVING` não substitui `WHERE`?",
        "O que `COUNT(*)` mede?"
      ]
    },
    "m8-l3": {
      "objetivo": "Modificar dados com segurança e entender transações.",
      "prereq": "Aula: SELECT, WHERE, ORDER BY e agregações.",
      "corpo": [
        "<p>`INSERT` cria registros; `UPDATE` altera; `DELETE` remove. O perigo maior em alterações é atingir mais linhas do que o esperado. `WHERE` precisa ser validado antes de executar. Transações agrupam operações para que uma mudança complexa seja confirmada ou desfeita como uma unidade.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Antes de um `UPDATE`/`DELETE`, rode o mesmo filtro em um `SELECT` para conferir o conjunto de linhas. Em operações relacionadas, use transação para evitar estado parcialmente atualizado.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para insert, update, delete e transações, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "BEGIN;\nUPDATE contas SET saldo = saldo - 100 WHERE id = 1;\nUPDATE contas SET saldo = saldo + 100 WHERE id = 2;\nCOMMIT;",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Executar `DELETE` sem `WHERE`.",
        "Atualizar chave errada.",
        "Fazer duas operações relacionadas sem transação quando a consistência exige atomicidade."
      ],
      "boas": [
        "Teste o `WHERE` com `SELECT` primeiro.",
        "Use transações para operações que precisam ser atômicas.",
        "Faça backup antes de operações destrutivas em dados reais."
      ],
      "quiz": [
        {
          "q": "Qual comando altera registros existentes?",
          "o": [
            "UPDATE",
            "SELECT",
            "CREATE"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é UPDATE."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "update",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é UPDATE."
        }
      ],
      "desafio": "Simule uma transferência entre duas contas usando transação e valide o saldo final.",
      "resumo": [
        "Comandos de escrita precisam de filtros cuidadosos.",
        "Transações protegem operações que devem ser atômicas.",
        "Operações destrutivas exigem verificação prévia."
      ],
      "checkpoint": [
        "Por que testar `WHERE` com `SELECT` antes do `DELETE`?",
        "O que significa atomicidade em uma transação?"
      ]
    },
    "m8-l4": {
      "objetivo": "Relacionar tabelas, manter integridade e entender o papel de índices.",
      "prereq": "Aula: INSERT, UPDATE, DELETE e transações.",
      "corpo": [
        "<p>`JOIN` combina linhas de tabelas relacionadas. `INNER JOIN` retorna correspondências; `LEFT JOIN` preserva registros da tabela da esquerda mesmo sem correspondência. Índices aceleram buscas em colunas usadas com frequência, mas aumentam custo de escrita e espaço. Restrições protegem integridade dos dados no banco, mesmo se a aplicação errar.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Não crie índice para toda coluna. Comece pelas consultas reais e use o plano de execução da base para entender gargalos. Integridade deve existir no banco e nas regras da aplicação em camadas complementares.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para join, índices, integridade e desempenho básico, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "SELECT c.nome, COUNT(p.id) AS pedidos\nFROM clientes c\nLEFT JOIN pedidos p ON p.cliente_id = c.id\nGROUP BY c.id, c.nome;",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Criar índice sem medir.",
        "Usar JOIN sem condição correta.",
        "Confiar apenas na validação do frontend para integridade."
      ],
      "boas": [
        "Modele relacionamentos explicitamente.",
        "Use `EXPLAIN`/plano de execução quando investigar consultas.",
        "Mantenha restrições do banco coerentes com as regras."
      ],
      "quiz": [
        {
          "q": "Qual JOIN mantém todos os registros da tabela à esquerda?",
          "o": [
            "INNER JOIN",
            "LEFT JOIN",
            "CROSS JOIN"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é LEFT JOIN."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "left join",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é LEFT JOIN."
        }
      ],
      "desafio": "Faça uma consulta que mostre todos os clientes, inclusive os que ainda não possuem pedidos.",
      "resumo": [
        "JOIN relaciona dados de tabelas diferentes.",
        "Índices são ferramentas de otimização com trade-offs.",
        "Restrições do banco são uma camada importante de integridade."
      ],
      "checkpoint": [
        "Por que um índice pode deixar `INSERT` mais caro?",
        "Quando `LEFT JOIN` é necessário?"
      ]
    },
    "m9-l1": {
      "objetivo": "Entender o backend como camada de regras, dados e integração.",
      "prereq": "Aula: JOIN, índices, integridade e desempenho básico.",
      "corpo": [
        "<p>Backend recebe requisições, autentica usuários, aplica regras, acessa dados e produz respostas. Uma API REST costuma modelar recursos e usar HTTP de forma semântica. Uma arquitetura simples pode separar rota/controlador, serviço/regra e repositório/acesso a dados, evitando concentrar tudo em um arquivo.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Imagine `POST /pedidos`: a rota valida formato, o serviço verifica estoque e autorização, o repositório persiste, e a API retorna um status apropriado. A divisão torna cada parte mais testável e facilita troca de banco ou regra.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para o papel do backend, http e arquitetura de api, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "POST /pedidos\nContent-Type: application/json\n\n{\n  \"produto_id\": 10,\n  \"quantidade\": 2\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Colocar SQL diretamente em toda rota.",
        "Retornar 200 para qualquer situação.",
        "Confundir autenticação com autorização."
      ],
      "boas": [
        "Defina contratos claros de entrada e saída.",
        "Separe transporte de regra de negócio.",
        "Escolha status HTTP coerentes com o resultado."
      ],
      "quiz": [
        {
          "q": "Qual camada normalmente concentra regras de negócio?",
          "o": [
            "service",
            "HTML",
            "CSS"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é service."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "service",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é service."
        }
      ],
      "desafio": "Desenhe o fluxo de um `POST /pedidos` separando rota, serviço e persistência.",
      "resumo": [
        "Backend aplica regras, integra dados e responde clientes.",
        "Separação por camadas facilita manutenção.",
        "Status HTTP comunicam resultado da operação."
      ],
      "checkpoint": [
        "O que deveria impedir um cliente sem permissão de cancelar um pedido?",
        "Por que uma rota com 300 linhas é um sinal de possível problema arquitetural?"
      ]
    },
    "m9-l2": {
      "objetivo": "Criar endpoints básicos com FastAPI e entender sua documentação automática.",
      "prereq": "Aula: O papel do backend, HTTP e arquitetura de API.",
      "corpo": [
        "<p>FastAPI usa Python e type hints para declarar rotas e validar parâmetros. Path parameters vêm da URL; query parameters refinam a consulta; body representa dados enviados para a operação. A aplicação também pode gerar documentação interativa para os endpoints.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Comece com endpoints pequenos. Para `GET /usuarios/{id}`, diferencie recurso inexistente de erro interno. Para listas, use query parameters de busca e paginação quando necessário.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para fastapi: rotas, parâmetros e documentação, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/usuarios/{usuario_id}')\ndef buscar_usuario(usuario_id: int):\n    return {'id': usuario_id}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Misturar parâmetros de path e query sem entender o contrato.",
        "Aceitar tudo como string.",
        "Não documentar erros esperados."
      ],
      "boas": [
        "Use type hints claros.",
        "Defina respostas previsíveis.",
        "Use `/docs` para testar contratos durante o desenvolvimento."
      ],
      "quiz": [
        {
          "q": "Qual decorator define uma rota GET em FastAPI?",
          "o": [
            "@app.get",
            "@app.sql",
            "@app.html"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é @app.get."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "@app.get",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é @app.get."
        }
      ],
      "desafio": "Crie três endpoints: listar usuários, buscar um usuário por id e filtrar por nome.",
      "resumo": [
        "FastAPI usa decorators para declarar rotas.",
        "Type hints participam da validação e documentação.",
        "Contratos previsíveis facilitam integração com frontend."
      ],
      "checkpoint": [
        "Qual diferença entre path parameter e query parameter?",
        "Por que documentação automática é útil para o frontend?"
      ]
    },
    "m9-l3": {
      "objetivo": "Construir CRUD com modelos de entrada/saída e validação.",
      "prereq": "Aula: FastAPI: rotas, parâmetros e documentação.",
      "corpo": [
        "<p>Schemas definem o formato esperado de dados. Uma boa API diferencia o modelo recebido do modelo retornado, evitando expor campos internos. CRUD cobre criar, ler, atualizar e excluir; cada operação precisa de validação, tratamento de inexistência e regras de negócio.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Validação deve responder com erro claro. Não aceite preço negativo, quantidade zero ou e-mail inválido só porque o frontend já validou. O backend precisa continuar correto quando chamado diretamente.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para schemas, validação e crud, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "from pydantic import BaseModel, Field\n\nclass ProdutoCreate(BaseModel):\n    nome: str = Field(min_length=2)\n    preco: float = Field(gt=0)",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar o mesmo schema para tudo.",
        "Expor campos internos.",
        "Confiar no cliente para validação.",
        "Retornar objeto apagado como se ainda existisse."
      ],
      "boas": [
        "Separe entrada e saída quando necessário.",
        "Valide invariantes no backend.",
        "Defina comportamento claro para 404 e conflitos."
      ],
      "quiz": [
        {
          "q": "Qual objetivo principal de um schema de entrada?",
          "o": [
            "renderizar CSS",
            "validar dados",
            "criar DNS"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é validar dados."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "validar dados",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é validar dados."
        }
      ],
      "desafio": "Implemente o desenho de um CRUD de produtos com schemas de criação e atualização.",
      "resumo": [
        "Schemas tornam contratos explícitos.",
        "CRUD exige tratar validação e ausência de registros.",
        "O backend deve permanecer correto mesmo sem frontend."
      ],
      "checkpoint": [
        "Por que usar um schema de resposta separado do de criação?",
        "Qual status você esperaria ao buscar um id inexistente?"
      ]
    },
    "m9-l4": {
      "objetivo": "Diferenciar identidade, permissão e configuração segura de uma API.",
      "prereq": "Aula: Schemas, validação e CRUD.",
      "corpo": [
        "<p>Autenticação responde “quem é você?”; autorização responde “o que você pode fazer?”. Uma aplicação pode usar sessão ou tokens. JWT é um formato de token assinado, mas assinatura não torna o token secreto. Senhas devem ser armazenadas com hash apropriado e nunca em texto puro.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Segredos e chaves devem vir de variáveis de ambiente ou secret managers. O backend deve verificar permissões em cada operação sensível, não apenas esconder botões no frontend.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para autenticação, autorização, jwt e configuração, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "from os import getenv\n\nSECRET_KEY = getenv('SECRET_KEY')\nif not SECRET_KEY:\n    raise RuntimeError('SECRET_KEY não configurada')",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Salvar senha em texto.",
        "Embutir segredo no código.",
        "Confundir token assinado com criptografia.",
        "Autorizar operações apenas porque o botão não aparece no frontend."
      ],
      "boas": [
        "Use hashing apropriado para senhas.",
        "Separe autenticação de autorização.",
        "Falhe cedo quando segredos obrigatórios não estiverem configurados."
      ],
      "quiz": [
        {
          "q": "Autorização decide o quê?",
          "o": [
            "identidade",
            "permissões",
            "HTML"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é permissões."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "permissões",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é permissões."
        }
      ],
      "desafio": "Desenhe o fluxo de login e de uma rota protegida que diferencia usuário comum de administrador.",
      "resumo": [
        "Autenticação identifica; autorização controla acesso.",
        "JWT assinado não significa token secreto.",
        "Segredos devem ser configurados fora do código."
      ],
      "checkpoint": [
        "Por que o backend precisa checar autorização mesmo com frontend ocultando botões?",
        "O que fazer quando uma variável secreta não está configurada?"
      ]
    },
    "m10-l1": {
      "objetivo": "Construir interfaces React como composição de componentes.",
      "prereq": "Aula: Autenticação, autorização, JWT e configuração.",
      "corpo": [
        "<p>React organiza a interface em componentes reutilizáveis. JSX mistura marcação e JavaScript de forma declarativa. Props entram no componente; o componente deve tratá-las como dados recebidos. Componentes menores são úteis quando possuem responsabilidade clara.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Evite componente “Deus” que gerencia toda a tela. Quebre por responsabilidade: `Header`, `UserList`, `UserCard`, `SearchInput`. Reutilização não significa criar abstrações para qualquer detalhe.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para componentes e jsx, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "function UserCard({ user }) {\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <p>{user.email}</p>\n    </article>\n  );\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Mutar props.",
        "Criar componentes enormes.",
        "Usar abstração genérica antes de haver repetição real."
      ],
      "boas": [
        "Props entram, eventos saem.",
        "Componentes devem ter responsabilidades compreensíveis.",
        "Crie abstrações depois que um padrão realmente apareceu."
      ],
      "quiz": [
        {
          "q": "Como dados são normalmente passados de um componente pai para um filho?",
          "o": [
            "props",
            "SQL",
            "headers"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é props."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "props",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é props."
        }
      ],
      "desafio": "Transforme três cartões de usuário repetidos em um componente `UserCard`.",
      "resumo": [
        "Componentes encapsulam pedaços da interface.",
        "Props representam dados recebidos.",
        "JSX é declarativo e expressa o que deve ser renderizado."
      ],
      "checkpoint": [
        "Por que mutar uma prop é um problema?",
        "Quando um componente merece ser separado em outro?"
      ]
    },
    "m10-l2": {
      "objetivo": "Gerenciar estado local e efeitos em componentes React.",
      "prereq": "Aula: Componentes e JSX.",
      "corpo": [
        "<p>Estado representa dados que podem mudar e precisam atualizar a interface. `useState` cria estado local; `useEffect` sincroniza o componente com sistemas externos, como APIs, timers ou listeners. A regra importante é não colocar em `useEffect` cálculos que podem ser feitos diretamente durante a renderização.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Dependências do `useEffect` devem refletir os valores usados pelo efeito. Atualizações de estado são agendadas e podem ser agrupadas; evite assumir que mudar estado atualiza a variável instantaneamente na mesma execução.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para estado e hooks essenciais, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "import { useEffect, useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar `useEffect` para tudo.",
        "Esquecer dependências.",
        "Atualizar estado baseado em valor antigo sem função de atualização quando há múltiplas mudanças."
      ],
      "boas": [
        "Use `useState` para estado local.",
        "Use `useEffect` para sincronização externa.",
        "Quando o próximo estado depende do anterior, use o formulário funcional."
      ],
      "quiz": [
        {
          "q": "Qual hook gerencia estado local?",
          "o": [
            "useState",
            "useRoute",
            "useSQL"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é useState."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "usestate",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é useState."
        }
      ],
      "desafio": "Construa um contador e um campo de busca cujo valor seja mantido por estado.",
      "resumo": [
        "Estado dispara nova renderização quando muda.",
        "Effects sincronizam com sistemas externos.",
        "Dependências do effect são parte do contrato."
      ],
      "checkpoint": [
        "Quando `useEffect` seria desnecessário?",
        "Por que usar `setCount(c => c + 1)`?"
      ]
    },
    "m10-l3": {
      "objetivo": "Criar listas e formulários controlados em React.",
      "prereq": "Aula: Estado e hooks essenciais.",
      "corpo": [
        "<p>Listas são renderizadas com `map`. Cada item precisa de uma `key` estável para ajudar o React a identificar o elemento entre renderizações. Inputs controlados usam estado como fonte do valor; isso permite validação e regras de interface de forma previsível.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Evite usar índice do array como key quando a lista pode ser reordenada, inserida ou removida. Use um identificador estável do próprio dado. Em formulários, valide antes de enviar e mostre erro próximo do campo quando possível.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para formulários, listas e chaves, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "function UserList({ users }) {\n  return users.map(user => (\n    <li key={user.id}>{user.name}</li>\n  ));\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Usar `Math.random()` como key.",
        "Usar índice sem entender as consequências.",
        "Deixar input controlado sem `value`/`onChange` coerentes."
      ],
      "boas": [
        "Use IDs estáveis como key.",
        "Modele erros de campo explicitamente.",
        "Mantenha a fonte de verdade do formulário clara."
      ],
      "quiz": [
        {
          "q": "Para que serve a `key` de uma lista React?",
          "o": [
            "definir CSS",
            "identificar itens entre renderizações",
            "autenticar"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é identificar itens entre renderizações."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "identificar itens entre renderizações",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é identificar itens entre renderizações."
        }
      ],
      "desafio": "Crie um formulário de cadastro e uma lista de registros com edição e remoção local.",
      "resumo": [
        "Keys ajudam o React a reconciliar listas.",
        "Inputs controlados usam estado como fonte de verdade.",
        "Formulários precisam de validação e feedback."
      ],
      "checkpoint": [
        "Por que índice pode ser uma key ruim em listas mutáveis?",
        "O que significa input controlado?"
      ]
    },
    "m10-l4": {
      "objetivo": "Integrar frontend React com backend e organizar múltiplas telas.",
      "prereq": "Aula: Formulários, listas e chaves.",
      "corpo": [
        "<p>Uma aplicação frontend real precisa lidar com navegação, carregamento, sucesso, erro e ausência de dados. Uma biblioteca de roteamento pode mapear URLs para telas. Uma camada simples de serviços pode centralizar chamadas `fetch` e manter componentes focados na interface.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Não esconda erros de rede. Mostre mensagem útil e permita nova tentativa. Quando uma página depende de parâmetros da URL, trate parâmetros inválidos. Para dados compartilhados por várias telas, considere um contexto ou biblioteca de estado apenas quando a necessidade aparecer.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para consumo de api, roteamento e estados de interface, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "async function listarProdutos() {\n  const r = await fetch('/api/produtos');\n  if (!r.ok) throw new Error('Falha ao carregar produtos');\n  return r.json();\n}",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Fazer fetch diretamente em muitos componentes com lógica duplicada.",
        "Deixar estado de loading implícito.",
        "Criar gerenciamento global de estado para qualquer variável."
      ],
      "boas": [
        "Centralize regras repetidas de API.",
        "Represente loading/sucesso/erro/vazio.",
        "Escolha a menor ferramenta que resolva o problema."
      ],
      "quiz": [
        {
          "q": "Qual estado não deve ser confundido com ‘lista vazia’: a requisição ainda está acontecendo?",
          "o": [
            "loading",
            "404",
            "DELETE"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é loading."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "loading",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é loading."
        }
      ],
      "desafio": "Monte a arquitetura de uma SPA com páginas de login, dashboard e detalhes, incluindo estados de API.",
      "resumo": [
        "Frontend integra rotas, estado e API.",
        "Estados assíncronos precisam ser explícitos.",
        "Abstração deve nascer de repetição ou necessidade real."
      ],
      "checkpoint": [
        "Por que lista vazia e erro não podem compartilhar a mesma UI?",
        "Quando um contexto global de estado pode ser justificado?"
      ]
    },
    "m11-l1": {
      "objetivo": "Diagnosticar bugs com método e registrar contexto suficiente nos logs.",
      "prereq": "Aula: Consumo de API, roteamento e estados de interface.",
      "corpo": [
        "<p>Debugging é um processo: reproduzir, reduzir, formular hipótese, observar evidência, corrigir e testar novamente. Logs registram eventos relevantes do sistema. Um log útil inclui contexto, como operação, identificador e tipo do erro, sem vazar segredos ou dados desnecessários.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Use stack trace para localizar origem. Coloque breakpoints quando a execução precisa ser observada. Diferencie sintoma de causa: uma tela vazia pode ser um erro de API, filtro incorreto ou estado não atualizado.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para debugging, logs e investigação de bugs, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "try:\n    resultado = processar_pedido(pedido)\nexcept ValueError as exc:\n    logger.warning('Pedido inválido: id=%s erro=%s', pedido.id, exc)\n    raise",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Adicionar `print` aleatório até o bug sumir.",
        "Registrar senha/token.",
        "Mudar várias coisas ao mesmo tempo e perder a causa real."
      ],
      "boas": [
        "Reproduza antes de corrigir.",
        "Faça uma mudança por hipótese sempre que possível.",
        "Logs devem ter contexto sem dados sensíveis."
      ],
      "quiz": [
        {
          "q": "Qual passo vem antes de corrigir um bug com confiança?",
          "o": [
            "apagar código",
            "reproduzir o problema",
            "fazer deploy"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é reproduzir o problema."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "reproduzir o problema",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é reproduzir o problema."
        }
      ],
      "desafio": "Pegue um bug simples de um projeto e registre hipótese, evidência, correção e teste de regressão.",
      "resumo": [
        "Debugging orientado por hipótese é mais previsível.",
        "Logs precisam de contexto.",
        "Testes de regressão evitam que o mesmo bug volte."
      ],
      "checkpoint": [
        "Por que ‘funcionou na minha máquina’ não encerra um diagnóstico?",
        "Quais dados nunca deveriam aparecer em logs?"
      ]
    },
    "m11-l2": {
      "objetivo": "Escrever testes que protejam regras importantes.",
      "prereq": "Aula: Debugging, logs e investigação de bugs.",
      "corpo": [
        "<p>Teste unitário verifica uma unidade isolada, como uma função de cálculo. Teste de integração verifica a colaboração entre partes, como API + banco. Bons testes descrevem comportamento esperado. Não precisam testar cada linha: priorize regras, caminhos críticos e casos de borda.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Um teste útil falha por um motivo claro. Evite depender de horário, rede externa ou ordem global quando não for necessário. Para integrações, use ambientes controlados ou bancos temporários conforme a stack.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para testes unitários e de integração, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "def test_desconto():\n    assert calcular_desconto(100, 10) == 90\n\n\ndef test_nao_aceita_percentual_negativo():\n    with pytest.raises(ValueError):\n        calcular_desconto(100, -1)",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Testar implementação em vez de comportamento.",
        "Testes frágeis que dependem de ambiente.",
        "Usar mock para tudo e nunca verificar integração real."
      ],
      "boas": [
        "Dê nomes de teste que expressem o cenário.",
        "Cubra sucesso e falhas relevantes.",
        "Mantenha testes rápidos e determinísticos."
      ],
      "quiz": [
        {
          "q": "O que um teste unitário normalmente isola?",
          "o": [
            "todo o sistema",
            "uma unidade de comportamento",
            "o monitor"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é uma unidade de comportamento."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "uma unidade de comportamento",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é uma unidade de comportamento."
        }
      ],
      "desafio": "Escreva uma estratégia de testes para um endpoint de criação de usuário, incluindo sucesso, duplicidade e entrada inválida.",
      "resumo": [
        "Testes protegem comportamento esperado.",
        "Integração verifica colaboração entre componentes.",
        "Casos de borda são importantes para regras de negócio."
      ],
      "checkpoint": [
        "Por que teste de integração não substitui todo teste unitário?",
        "Qual teste você criaria para e-mail duplicado?"
      ]
    },
    "m11-l3": {
      "objetivo": "Reconhecer vulnerabilidades comuns e aplicar defesas básicas.",
      "prereq": "Aula: Testes unitários e de integração.",
      "corpo": [
        "<p>Entradas de usuário são não confiáveis. SQL Injection ocorre quando dados alteram uma consulta sem parametrização; XSS quando conteúdo não confiável é interpretado como script; CSRF explora confiança em autenticação baseada em navegador. Boas defesas incluem queries parametrizadas, escape/encoding adequado, validação, autorização e HTTPS.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Segurança não é apenas esconder código. Segredo deve ficar fora do repositório, autorização deve ser verificada no servidor, e bibliotecas devem ser atualizadas conforme política do projeto. Para cada entrada, pergunte: quem envia, qual formato, qual tamanho, quem pode usar e o que acontece com o valor depois.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para segurança básica para aplicações, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "# SQL parametrizado\ncursor.execute('SELECT * FROM users WHERE email = ?', (email,))",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Concatenar input em SQL.",
        "Renderizar HTML com entrada crua.",
        "Armazenar segredos no Git.",
        "Dar permissões por padrão amplo."
      ],
      "boas": [
        "Valide e normalize entradas conforme a regra.",
        "Use mecanismos seguros de acesso a banco.",
        "Adote menor privilégio e autenticação forte."
      ],
      "quiz": [
        {
          "q": "Qual vulnerabilidade envolve concatenar entrada do usuário em SQL?",
          "o": [
            "XSS",
            "SQL Injection",
            "DNS"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é SQL Injection."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "sql injection",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é SQL Injection."
        }
      ],
      "desafio": "Faça uma checklist de segurança para um formulário de login e uma API de cadastro.",
      "resumo": [
        "Entrada externa deve ser tratada como não confiável.",
        "SQL parametrizado reduz risco de injeção.",
        "Autorização e segredos são responsabilidades de backend."
      ],
      "checkpoint": [
        "Por que validação não substitui parametrização SQL?",
        "Qual a diferença entre autenticação e autorização?"
      ]
    },
    "m11-l4": {
      "objetivo": "Entender containers, acesso remoto e execução consistente de aplicações.",
      "prereq": "Aula: Segurança básica para aplicações.",
      "corpo": [
        "<p>Docker empacota uma aplicação e suas dependências em uma imagem; um container é uma instância dessa imagem. `Dockerfile` descreve como construir a imagem. Compose pode orquestrar múltiplos serviços em desenvolvimento. SSH permite acessar máquinas remotas com segurança.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Container não é máquina virtual completa. Dados persistentes precisam de volumes ou serviços externos apropriados. Em produção, segredos devem entrar por configuração segura. Linux é importante porque muitos ambientes de servidor usam esse sistema.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para linux, docker, ssh e execução consistente, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD [\"python\", \"app.py\"]",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Colocar segredos na imagem.",
        "Assumir que dados em container são persistentes.",
        "Usar `latest` sem estratégia de atualização.",
        "Abrir SSH para qualquer origem sem necessidade."
      ],
      "boas": [
        "Use imagens pequenas e versões conhecidas.",
        "Separe dados persistentes do ciclo de vida do container.",
        "Aplique atualizações e restrições de acesso."
      ],
      "quiz": [
        {
          "q": "Qual arquivo normalmente descreve os passos para construir uma imagem Docker?",
          "o": [
            "Dockerfile",
            "README.bin",
            "main.css"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é Dockerfile."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "dockerfile",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é Dockerfile."
        }
      ],
      "desafio": "Containerize uma pequena API e documente como construir e executar a aplicação localmente.",
      "resumo": [
        "Imagem é um artefato; container é uma instância em execução.",
        "Docker ajuda a reduzir diferenças de ambiente.",
        "SSH fornece acesso remoto seguro quando configurado corretamente."
      ],
      "checkpoint": [
        "Por que não colocar `.env` dentro da imagem?",
        "O que deve continuar existindo depois que um container for removido?"
      ]
    },
    "m12-l1": {
      "objetivo": "Planejar um projeto full stack antes de escrever código.",
      "prereq": "Aula: Linux, Docker, SSH e execução consistente.",
      "corpo": [
        "<p>Um projeto final começa com problema e usuário, não com framework. Transforme necessidade em requisitos funcionais e não funcionais. Defina o MVP: menor conjunto de funcionalidades que entrega valor. Depois desenhe dados, endpoints, telas e responsabilidades das partes.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Uma especificação simples pode conter: objetivo, usuários, casos de uso, modelo de dados, API, telas, regras, riscos e critérios de aceite. Planejar não significa prever tudo; significa reduzir ambiguidade antes de investir tempo de implementação.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para requisitos, arquitetura e planejamento do projeto final, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "# MVP — Agenda de atendimentos\n- Cadastrar cliente\n- Criar horário\n- Listar agenda\n- Cancelar horário\n\nFora do MVP: pagamentos, app mobile e notificações avançadas.",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Começar pelo banco sem definir o problema.",
        "Tentar lançar 30 funcionalidades.",
        "Misturar requisito com solução sem validar necessidade."
      ],
      "boas": [
        "Priorize o fluxo central do usuário.",
        "Escreva critérios de aceite testáveis.",
        "Registre explicitamente o que ficará fora do MVP."
      ],
      "quiz": [
        {
          "q": "O que significa MVP neste contexto?",
          "o": [
            "produto sem testes",
            "menor versão que entrega valor",
            "produto final completo"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é menor versão que entrega valor."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "menor versão que entrega valor",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é menor versão que entrega valor."
        }
      ],
      "desafio": "Crie um documento de uma página para seu projeto final com problema, público, MVP, entidades, endpoints e critérios de aceite.",
      "resumo": [
        "MVP reduz escopo inicial sem abandonar o valor principal.",
        "Requisitos devem ser claros e testáveis.",
        "Arquitetura é consequência das necessidades do sistema."
      ],
      "checkpoint": [
        "Qual funcionalidade você removeria primeiro para reduzir escopo?",
        "Como saber se um requisito está testável?"
      ]
    },
    "m12-l2": {
      "objetivo": "Integrar frontend, backend e banco em um fluxo completo.",
      "prereq": "Aula: Requisitos, arquitetura e planejamento do projeto final.",
      "corpo": [
        "<p>No MVP, implemente uma fatia vertical: uma funcionalidade que atravesse interface, API e persistência. Isso revela cedo problemas de contrato, autenticação, modelagem e experiência. Depois repita para os fluxos seguintes.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Use Git por pequenas entregas: tela → endpoint → banco → teste → integração. Evite construir todo frontend antes do backend ou vice-versa. O sistema precisa funcionar de ponta a ponta em pequenos incrementos.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para construindo o mvp full stack, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "Fluxo:\nReact form → POST /appointments → service.validate() → repository.insert() → 201 Created → atualização da lista",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Construir tudo de uma vez.",
        "Contratos diferentes entre frontend e backend.",
        "Deixar banco sem migração ou dados de teste.",
        "Não testar a jornada completa."
      ],
      "boas": [
        "Implemente vertical slices.",
        "Defina contrato de API antes da integração.",
        "Use dados de teste reproduzíveis."
      ],
      "quiz": [
        {
          "q": "O que é uma fatia vertical de implementação?",
          "o": [
            "apenas CSS",
            "fluxo completo ponta a ponta",
            "somente banco"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é fluxo completo ponta a ponta."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "fluxo completo ponta a ponta",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é fluxo completo ponta a ponta."
        }
      ],
      "desafio": "Implemente uma funcionalidade de cadastro ponta a ponta e registre o fluxo desde o formulário até o banco.",
      "resumo": [
        "MVP funciona em pequenos fluxos completos.",
        "Contratos reduzem atrito entre camadas.",
        "Integração deve acontecer cedo e continuamente."
      ],
      "checkpoint": [
        "Por que implementar uma fatia vertical reduz risco?",
        "Qual evidência mostraria que a funcionalidade está realmente integrada?"
      ]
    },
    "m12-l3": {
      "objetivo": "Publicar um projeto, documentar execução e transformar o resultado em evidência profissional.",
      "prereq": "Aula: Construindo o MVP full stack.",
      "corpo": [
        "<p>Deploy coloca a aplicação em um ambiente acessível. Um fluxo básico envolve build, configuração, banco, variáveis, domínio/URL e monitoramento. Documentação deve explicar como rodar localmente, como testar e quais decisões foram tomadas.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Para portfólio, mostre problema, solução, arquitetura, stack, screenshots, link da aplicação, testes e limitações. Evite afirmar domínio que o projeto não demonstra. Um projeto publicado com documentação clara é mais útil como evidência do que uma lista de tecnologias sem contexto.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para deploy, documentação e portfólio profissional, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "## Projeto\nDemo: https://exemplo\nStack: React + FastAPI + PostgreSQL\n\n### Rodar localmente\n1. Configure `.env`\n2. Suba serviços\n3. Rode migrations\n4. Execute frontend e backend",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Publicar segredo.",
        "Colocar banco de produção sem backup/monitoramento.",
        "README não refletir o deploy.",
        "Apresentar projeto de tutorial como produto próprio sem contextualização."
      ],
      "boas": [
        "Use variáveis de ambiente e configuração por ambiente.",
        "Documente o caminho feliz e os problemas conhecidos.",
        "Mantenha a demo alinhada com o código do repositório."
      ],
      "quiz": [
        {
          "q": "O que deve acompanhar um projeto de portfólio além do código?",
          "o": [
            "apenas o código",
            "contexto e evidências",
            "nenhuma documentação"
          ],
          "r": 1,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é contexto e evidências."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "contexto e evidências",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é contexto e evidências."
        }
      ],
      "desafio": "Prepare uma página de projeto com problema, solução, stack, arquitetura, demo, instalação, testes e limitações.",
      "resumo": [
        "Deploy transforma o projeto em algo verificável.",
        "Documentação reduz o esforço de avaliação.",
        "Portfólio deve mostrar evidência do que foi realmente construído."
      ],
      "checkpoint": [
        "Quais variáveis nunca devem aparecer no README?",
        "Que evidência ajuda alguém a validar a aplicação?"
      ]
    },
    "m12-l4": {
      "objetivo": "Usar IA para acelerar desenvolvimento sem terceirizar o julgamento técnico.",
      "prereq": "Aula: Deploy, documentação e portfólio profissional.",
      "corpo": [
        "<p>IA generativa pode explicar código, sugerir implementações, criar testes, refatorar e ajudar a investigar bugs. O desenvolvedor continua responsável por requisitos, segurança, comportamento e revisão. Um prompt útil fornece contexto, objetivo, restrições, arquivos envolvidos e critérios de aceite.</p>",
        "<p><b>Conexão com o trabalho de um Júnior:</b> Um fluxo seguro é: 1) pedir uma mudança pequena; 2) revisar diff; 3) executar testes; 4) verificar comportamento; 5) documentar decisões. Para tarefas maiores, agentes como Claude Code/Codex podem operar sobre o repositório, mas devem receber escopo e critérios claros.</p>",
        "<p><b>Prática guiada:</b> Abra um pequeno laboratório para ia como copiloto: prompting, revisão e agentes, altere pelo menos um valor do exemplo e registre o que mudou no resultado.</p>",
        {
          "code": "Prompt:\n\"No arquivo X, implemente Y. Não altere a API pública. Adicione testes para A, B e C. Explique riscos antes de editar. Ao final, mostre os arquivos modificados e como validar.\"",
          "nota": "Altere o exemplo, execute e observe o que acontece. O objetivo é entender o comportamento, não apenas copiar o código."
        }
      ],
      "erros": [
        "Aceitar código gerado sem testar.",
        "Fornecer segredo no prompt.",
        "Pedir mudanças gigantes sem critérios.",
        "Tratar resposta da IA como prova de correção."
      ],
      "boas": [
        "Peça mudanças pequenas e verificáveis.",
        "Nunca envie segredos desnecessários.",
        "Use testes e revisão humana como barreiras de qualidade."
      ],
      "quiz": [
        {
          "q": "Qual é a responsabilidade que continua com o desenvolvedor ao usar IA?",
          "o": [
            "validar o resultado",
            "ignorar testes",
            "expor segredos"
          ],
          "r": 0,
          "d": "Escolha a alternativa que corresponde ao conceito explicado na aula.",
          "e": "A resposta correta é validar o resultado."
        },
        {
          "q": "Digite a palavra-chave principal desta aula.",
          "r": "validar o resultado",
          "d": "Use o conceito central apresentado no conteúdo.",
          "e": "A resposta esperada é validar o resultado."
        }
      ],
      "desafio": "Use uma IA para refatorar uma função de um projeto, exija testes e compare o diff antes/depois.",
      "resumo": [
        "IA pode acelerar várias tarefas, mas não substitui validação.",
        "Prompts eficazes incluem contexto, restrições e critérios de aceite.",
        "Revisão, testes e segurança continuam sendo responsabilidade humana."
      ],
      "checkpoint": [
        "Que contexto você daria a um agente antes de editar um repositório?",
        "Como você comprovaria que o código gerado pela IA está correto?"
      ]
    }
  }
});
