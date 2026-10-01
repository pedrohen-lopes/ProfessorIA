(() => {
const C = COURSES, L = LESSONS, KEY = "professor-ia:v1", app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- Progresso (localStorage) ---------- */
let S = {done:{}, ok:{}, last:null};
try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY))); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const lessons = c => C[c].modules.flatMap(m => m.lessons.map(l => ({...l, mt: m.title})));
const pts = () => Object.keys(S.done).length * 10 + Object.keys(S.ok).length * 5;
const lvl = () => [...LEVELS].reverse().find(l => pts() >= l.min);
const bar = p => `<div class="bar"><i style="width:${p}%"></i></div>`;

/* ---------- Código: destaque de sintaxe simples ---------- */
const hl = s => {
  let o = "", i = 0;
  s.replace(/(#.*)|("[^"\n]*"|'[^'\n]*')|\b(if|elif|else|for|while|def|return|import|from|in|and|or|not|True|False|None)\b|\b(\d+(?:\.\d+)?)\b/g,
    (m, c, st, kw, n, off) => { o += esc(s.slice(i, off)); i = off + m.length; o += `<span class="${c?"c":st?"s":kw?"k":"n"}">${esc(m)}</span>`; return m; });
  return o + esc(s.slice(i));
};
const code = s => `<div class="code"><button data-copy>Copiar</button><pre><code>${hl(s)}</code></pre></div>`;

/* ---------- Páginas ---------- */
const mods = c => C[c].modules.map((m, i) => `<div class="mod"><h3>Módulo ${String(i+1).padStart(2,"0")} — ${m.title}</h3>` +
  (m.lessons.length ? m.lessons.map(l => `<a href="#/aula/${c}/${l.id}">${S.done[c+":"+l.id] ? "✔" : "○"} ${l.title}</a>`).join("") : `<span class="mut">Em breve</span>`) + `</div>`).join("");

const home = () => {
  const l = lvl();
  return `<p class="mut">${l.i} ${l.n}, ${pts()} pontos</p><h1>Professor IA</h1><p>Aprenda passo a passo: explicação, exemplo, prática, exercício e desafio.</p>` +
  Object.entries(C).map(([c, k]) => {
    const ls = lessons(c), d = ls.filter(x => S.done[c+":"+x.id]).length, p = ls.length ? Math.round(d / ls.length * 100) : 0;
    const nx = ls.find(x => x.id === S.last && !S.done[c+":"+x.id]) || ls.find(x => !S.done[c+":"+x.id]) || ls[0];
    return `<h2>${k.icon} ${k.title}</h2><p>${k.description}</p>${bar(p)}<p class="mut">${d}/${ls.length} aulas concluídas (${p}%)</p>` +
      `<a class="btn" href="#/aula/${c}/${nx.id}">${d ? "Continuar estudando" : "Começar"}</a>${mods(c)}`;
  }).join("") + `<p class="mut" style="margin-top:2.5rem">O nível representa seu progresso nesta plataforma. Não é uma certificação.</p>`;
};

const modulos = () => `<h1>Módulos</h1>` + Object.keys(C).map(c => `<h2>${C[c].icon} ${C[c].title}</h2>${mods(c)}`).join("");

const vid = v => { const src = v.list ? "videoseries?list=" + v.list : v.id, url = v.list ? "https://www.youtube.com/playlist?list=" + v.list : "https://www.youtube.com/watch?v=" + v.id;
  return `<h2>Vídeo de apoio</h2><div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${src}" title="Vídeo de apoio" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p class="note">${v.nota ? v.nota + " " : ""}Se o vídeo não carregar, <a href="${url}" target="_blank" rel="noopener">abra no YouTube</a>.</p>`; };
const list = (t, a) => a && a.length ? `<h2>${t}</h2><ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>` : "";

const aula = (c, id) => {
  if (!C[c]) return `<h1>Curso não encontrado</h1><a href="#/modulos">Ver módulos</a>`;
  const ls = lessons(c), i = ls.findIndex(l => l.id === id), l = ls[i], d = (L[c] || {})[id];
  if (!l) return `<h1>Aula não encontrada</h1><a href="#/modulos">Ver módulos</a>`;
  S.last = id; save();
  if (!d) return `<h1>${l.title}</h1><p>Conteúdo em breve.</p>`;
  const p = ls[i-1], n = ls[i+1];
  return `<p class="mut">${l.mt}, aula ${i+1} de ${ls.length}</p>${bar(Math.round((i+1) / ls.length * 100))}<h1>${l.title}</h1>
  <div class="meta"><b>Objetivo:</b> ${d.objetivo}<br><b>Pré-requisitos:</b> ${d.prereq}</div>
  <h2>Explicação</h2>${d.corpo.map(b => typeof b === "string" ? b : code(b.code) + (b.nota ? `<p class="note">${b.nota}</p>` : "")).join("")}${d.video ? vid(d.video) : ""}
  ${list("Erros comuns", d.erros)}${list("Boas práticas", d.boas)}
  <h2>Exercícios</h2>${d.quiz.map((q, j) => `<div class="q" data-c="${c}" data-l="${id}" data-i="${j}" data-t="0"><p><b>${j+1}.</b> ${q.q}</p>` +
    (q.o ? q.o.map((o, x) => `<button class="opt" data-a="${x}">${o}</button>`).join("") : `<input placeholder="Sua resposta" aria-label="Resposta"> <button class="btn ol" data-a="f">Verificar</button>`) + `<div class="fb"></div></div>`).join("")}
  <h2>Desafio</h2><p>${d.desafio}</p>${list("Resumo", d.resumo)}${list("Checkpoint", d.checkpoint)}
  <p style="margin-top:2rem"><button class="btn" id="done" data-k="${c}:${id}">${S.done[c+":"+id] ? "✔ Aula concluída" : "Concluir aula"}</button></p>
  <div class="nav2"><span>${p ? `<a href="#/aula/${c}/${p.id}">Anterior: ${p.title}</a>` : ""}</span><span>${n ? `<a href="#/aula/${c}/${n.id}">Próxima: ${n.title}</a>` : ""}</span></div>`;
};

const gloss = () => `<h1>Glossário</h1><dl>` + Object.values(C).flatMap(k => k.glossary).sort((a, b) => a.t.localeCompare(b.t, "pt"))
  .map(g => `<dt>${g.t}</dt><dd>${g.d}</dd>`).join("") + `</dl>`;

const busca = q => {
  q = decodeURIComponent(q).toLowerCase(); const r = [];
  for (const c in C) {
    lessons(c).forEach(l => { const d = (L[c] || {})[l.id] || {};
      const txt = [l.title, d.objetivo, (d.resumo || []).join(" "), (d.quiz || []).map(x => x.q).join(" ")].join(" ").toLowerCase();
      if (txt.includes(q)) r.push(`<p><a href="#/aula/${c}/${l.id}">${l.title}</a><br><span class="mut">Aula do ${l.mt}</span></p>`); });
    C[c].glossary.forEach(g => { if ((g.t + " " + g.d).toLowerCase().includes(q)) r.push(`<p><b>${g.t}</b><br><span class="mut">${g.d}</span></p>`); });
  }
  return `<h1>Busca</h1><p class="mut">${r.length} resultado(s) para “${esc(q)}”</p>${r.join("")}`;
};

/* ---------- Laboratório ---------- */
/* Ponto de integração: troque pelo Pyodide (WASM) ou por uma API de backend. */
const runPython = async code => { throw new Error("A execução de Python ainda não está conectada. Nada foi executado."); };
const lab = () => `<h1>Laboratório</h1><p>Escreva seu código aqui. A execução real será ligada depois; veja o README.</p>
<textarea id="code" spellcheck="false" aria-label="Editor">nome = input("Qual é o seu nome? ")\nprint(f"Olá, {nome}!")</textarea>
<p><button class="btn" id="run">▶ Executar</button></p><h2>Saída</h2><div class="out" id="out">Sem saída.</div>`;

/* ---------- Exercícios: o professor dá dica antes da resposta ---------- */
function check(t) {
  const q = t.closest(".q"), d = L[q.dataset.c][q.dataset.l].quiz[q.dataset.i], fb = q.querySelector(".fb");
  const f = t.dataset.a === "f", v = f ? q.querySelector("input").value.trim().toLowerCase() : +t.dataset.a;
  if (f ? v === String(d.r).toLowerCase() : v === d.r) {
    S.ok[q.dataset.c + ":" + q.dataset.l + ":" + q.dataset.i] = 1; save();
    fb.className = "fb ok"; fb.innerHTML = "Correto. " + d.e;
    q.querySelectorAll("button,input").forEach(b => b.disabled = true);
  } else {
    const n = +q.dataset.t + 1; q.dataset.t = n;
    fb.className = "fb no"; fb.innerHTML = "Ainda não. Dica: " + d.d + (n >= 2 ? "<br>Explicação: " + d.e : " Tente de novo.");
  }
}

/* ---------- Eventos e rotas ---------- */
document.addEventListener("click", e => {
  const t = e.target;
  if ("copy" in t.dataset) { navigator.clipboard && navigator.clipboard.writeText(t.nextElementSibling.textContent); t.textContent = "Copiado"; setTimeout(() => t.textContent = "Copiar", 1200); }
  else if (t.dataset.a !== undefined && t.closest(".q")) check(t);
  else if (t.id === "done") { const k = t.dataset.k; S.done[k] ? delete S.done[k] : S.done[k] = 1; save(); t.textContent = S.done[k] ? "✔ Aula concluída" : "Concluir aula"; }
  else if (t.id === "run") { const o = document.getElementById("out"); runPython(document.getElementById("code").value).then(r => o.textContent = r).catch(err => o.textContent = err.message); }
});
document.getElementById("q").addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.value.trim()) location.hash = "#/busca/" + encodeURIComponent(e.target.value.trim());
});
const routes = [[/^#\/modulos$/, modulos], [/^#\/aula\/([\w-]+)\/([\w-]+)$/, aula], [/^#\/glossario$/, gloss], [/^#\/lab$/, lab], [/^#\/busca\/(.*)$/, busca]];
function route() {
  const h = location.hash || "#/"; let v = home, a = [];
  for (const [r, f] of routes) { const m = h.match(r); if (m) { v = f; a = m.slice(1); break; } }
  app.innerHTML = v(...a); scrollTo(0, 0);
}
addEventListener("hashchange", route); route();
})();
