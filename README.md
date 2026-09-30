# Professor IA — plataforma de estudos

HTML + CSS + JavaScript puros, sem dependências e sem backend. Primeiro curso: **Python do Zero ao Projeto**.

## Como executar
Abra `index.html` no navegador. Se preferir um servidor local: `python -m http.server` e acesse `http://localhost:8000`.

## Estrutura
- `js/data.js`: cursos, módulos, lista de aulas, glossário e níveis.
- `js/lessons.js`: conteúdo de cada aula e seus exercícios.
- `js/app.js`: rotas (`#/`, `#/modulos`, `#/aula/curso/id`, `#/glossario`, `#/lab`, `#/busca/termo`), progresso, exercícios e laboratório.
- `css/style.css`: visual. Para mudar o tema, edite as variáveis no topo do arquivo.

## Como adicionar conteúdo
- **Novo curso:** em `data.js`, inclua uma chave em `COURSES` (por exemplo `sql`) com `icon`, `title`, `description`, `modules` e `glossary`. Em `lessons.js`, inclua `sql: {}` com as aulas. O site mostra o curso automaticamente.
- **Novo módulo:** adicione um item em `modules` (`{id, title, lessons:[]}`).
- **Nova aula:** adicione `{id, title}` em `lessons` do módulo e crie `LESSONS[curso][id]` com `objetivo`, `prereq`, `corpo`, `erros`, `boas`, `quiz`, `desafio`, `resumo` e `checkpoint`. Use o `m1-l1` como modelo.
- **Novo exercício:** inclua um item em `quiz`. Com `o` (opções) e `r` (índice) vira múltipla escolha ou verdadeiro/falso; sem `o`, `r` é o texto esperado.

## Progresso
Fica no `localStorage` (chave `professor-ia:v1`): aulas concluídas, exercícios acertados e última aula. Cada aula vale 10 pontos e cada exercício 5. Os níveis (Iniciante a Profissional) são apenas uma representação do progresso, não uma certificação.

## Laboratório
O editor é visual. A função `runPython` em `js/app.js` ainda não executa nada e avisa isso na tela. Para ligar a execução, substitua-a por uma chamada ao [Pyodide](https://pyodide.org) (Python em WebAssembly) ou a uma API de backend.

## Roadmap
1. Avaliação de 10 questões ao final de cada módulo, com recomendação de revisão.
2. Exercícios de "encontrar o erro" e "escrever código".
3. Conectar o Pyodide ao laboratório.
4. Professor conversacional (perguntas como "não entendi variável"), que exige uma API de IA.
5. Módulos 3 a 12 e os projetos práticos.
6. Testes de responsividade em dispositivos reais.
