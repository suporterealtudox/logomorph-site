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
index.html        o site inteiro: HTML, estilos e animações
public/img/       as logos do portfólio e a marca da LogoMorph
vite.config.js    build (caminhos relativos: funciona na raiz e em subpasta)
vercel.json       configuração de deploy na Vercel
```

Não tem framework nem passo de compilação de código: é HTML, CSS e JavaScript.
As animações usam [GSAP](https://gsap.com) + ScrollTrigger, carregados por CDN.

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
| Telefone do WhatsApp | procure por `5562999283581` |
| Instagram | procure por `logo_morph3` |
| Preços | seção `<!-- SERVIÇOS -->` |
| Trabalhos do portfólio | seção `<!-- PORTFÓLIO -->` + imagens em `public/img/` |
| Cores | bloco `:root` no topo do `<style>` |

### Para adicionar um trabalho novo

1. Coloque a imagem em `public/img/`.
2. Copie um bloco `<figure class="folio">` na seção do portfólio.
3. Troque o `src`, o `alt`, o nome, a categoria e o `data-tipo`
   (`times`, `empresas` ou `comida` — é o que os filtros usam).
