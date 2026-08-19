# LogoMorph — Site

Landing page da **LogoMorph**, estúdio de logotipos 3D hiper-realistas do designer Patrício.
Site de uma página só, com o portfólio real e conversão direta pelo WhatsApp.

**No ar:** https://promobit-ac.com.br/logomorph/

---

## Rodar na sua máquina

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar a versão de produção

```bash
npm run build
```

Sai tudo pronto na pasta `dist/` (o `index.html` e a pasta `img/`).
Para conferir antes de publicar: `npm run preview`.

---

## Como está organizado

```
src/data/            preço, portfólio, passos e contato
src/components/      uma peça por seção da página
src/hooks/useMotion  todas as animações num lugar só
src/index.css        o CSS da marca (metal, ouro, relevo)
public/img/          as logos do portfólio e a marca
```

React + TypeScript + Vite + Tailwind, com [GSAP](https://gsap.com) e ScrollTrigger
nas animações. Essa é a stack que o [Lovable](https://lovable.dev) edita.

## Publicar

- **Vercel** — importe o repositório. Ele detecta o Vite sozinho (build `npm run build`, saída `dist`).
- **Hospedagem comum (cPanel/FTP)** — rode `npm run build` e mande o conteúdo de `dist/` para a pasta do site.

Como o build usa caminhos relativos, funciona tanto na raiz do domínio quanto dentro de uma subpasta.

---

## Detalhes que importam

- **As animações começam sozinhas** ao abrir a página, sem depender da configuração de movimento do sistema.
- **Três travas anti-tela-vazia:** se o navegador congelar uma animação (aba aberta em segundo plano, celular fraco), o conteúdo aparece de qualquer jeito — em especial os botões de WhatsApp.
- **Todo botão leva ao WhatsApp** com a mensagem já escrita. Na galeria, a mensagem cita o nome da logo que a pessoa clicou.

### Onde mexer no básico

| O quê | Onde |
|---|---|
| Telefone do WhatsApp e Instagram | `src/data/contato.ts` |
| Preços e o que cada serviço inclui | `src/data/servicos.ts` |
| Trabalhos do portfólio | `src/data/trabalhos.ts` |
| Os três passos do "Simples assim" | `src/data/passos.ts` |
| Cores | bloco `:root` em `src/index.css` (e `tailwind.config.js`) |
| Animações | `src/hooks/useMotion.ts` |

Repare que preço, telefone e portfólio ficam em arquivos de dados: dá para
mudar sem entender o resto do código.

### Para adicionar um trabalho novo

1. Coloque a imagem em `public/img/`.
2. Abra `src/data/trabalhos.ts` e copie um bloco.
3. Troque o arquivo, o nome, o tipo e a categoria
   (`times`, `empresas` ou `comida` — é o que os filtros usam).

## Editar no Lovable

Em [lovable.dev](https://lovable.dev): **New Project → Import from GitHub**,
autorize o app do Lovable e escolha este repositório. Alterações feitas lá
voltam para o GitHub, e a Vercel republica sozinha.
