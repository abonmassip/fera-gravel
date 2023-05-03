# Fera Pyrenees Mountain Gravel web

- [Desenvolupar](#desenvolupar)
- [Estructura d'arxius](#estructura-darxius-per-modificar)
- [Github: guia per modificar arxius](#github-guia-per-modificar-arxius)
- [Markdown: guia per formatar el text](#markdown-guia-per-formatar-el-text)
- [Editar pàgines](#editar-pàgines)
- [Editar rutes](#editar-rutes)
- [Editar caus de la fera](#editar-caus-de-la-fera)
- [Editar marxandatge](#editar-marxandatge)

## Desenvolupar

Projecte desenvolupat amb [Next.js](https://nextjs.org/) i arrancat amb [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Documentació de Next.js](https://nextjs.org/docs)

[Aprendre Next.js](https://nextjs.org/learn)

## Estructura d'arxius per modificar

```bash
- 📁 content # TEXTOS
  - 📁 ca
    - 📁 caus
    - 📁 marxandatge
    - 📁 rutes
    - 📄
  - 📁 en
  - 📁 es

- 📁 public
  - 📁 img # IMATGES
    - 📁 galeria-caus
    - 📁 galeria-fera500
    - 📁 ...
```

## Github: guia per modificar arxius

### Text

- entra a la carpeta `content`, localitza i obre l'arxiu
- clica el llapis <kbd>✏️</kbd> (a dalt a la dreta) per editar
- després de modificar el text, clica el botó verd <kbd>Commit changes...</kbd> i al pop-up clica <kbd>Commit changes</kbd>
- i ja està! 👏 espera uns minuts i la web estarà actualitzada

per crear un arxiu nou, clica a <kbd>Add file</kbd>, <kbd>+ Create new file</kbd>, posa-li nom primer (recorda afegir l'extensió `.md`), i un cop editat clica <kbd>Commit changes</kbd>

### Imatges

- entra a la carpeta `public`, després a `img`, i finalment a la carpeta que vols modificar. només cal modificar les carpetes que comencen per `galeria-...`
- **afegir imatge:** clica <kbd>Add file</kbd> i després <kbd>Upload files</kbd>. Arrossega una o vàries imatges i clica el botó verd <kbd>Commit changes</kbd>
- **esborrar una imatge:** obre la imatge i clica <kbd>...</kbd> (a dalt a la dreta), després <kbd>Delete file</kbd>, finalment clica el botó verd <kbd>Commit changes</kbd>
- i ja està! 👏 espera uns minuts i la web estarà actualitzada

## Markdown: guia per formatar el text

| Element                      | Syntax        |
| ---------------------------- | ------------- |
| titol                        | # text        |
| subtitol                     | ## text       |
| sub-subtitol                 | ### text      |
| linia horitzontal sota titol | ---           |
| negreta                      | \*\*text\*\*  |
| cursiva                      | \*text\*      |
| cita                         | > text        |
| llista ordenada              | 1. text       |
| llista no ordenada           | - text        |
| enllaç dins un text          | \[text\](url) |
| enllaç directament           | \<url\>       |

- sempre posar linies en blanc entre elements, paragrafs, titols, etc
- per mostrar un caràcter en el text dels que afecten en el format de Markdown, posar-hi primer una barra cap a l'esquerra `\`. Per exemple, per posar un asterisc: ` \*LINK PROVISIONAL` i mostrarà \*LINK PROVISIONAL

## Editar pàgines

- les pàgines tenen l'arxiu a l'arrel de la carpeta `content/idioma`

- algunes pàgines tenen més d'un arxiu

## Editar rutes

- les rutes estan a la carpeta `content/idioma/rutes`
- per afegir variants de la ruta 150 cal afegir arxius que es diguin `fera150-` i el nom de la ruta, i acabarlos amb la extensió `.md`. Exemple: `fera150-boumort.md`
- les variants de la ruta 150 han de tenir obligatòriament aquest format (mirar la `fera150-boumort.md` com a referència)

```bash
---
nom: "Nom de la variant."
---

# text de la ruta...
```

## Editar caus de la fera

- cada cau necessita un arxiu de text a `content/idioma/caus` i una imatge amb el mateix nom a `public/img/galeria-caus`
- l'arxiu de text pot tenir el nom que sigui, però ha d'acabar amb l'extensió `.md`
- la imatge ha de tenir el mateix nom i pot estar en qualsevol format d'imatge
- Exemple:
  - `content/ca/caus/labasseta.md`
  - `public/img/galeria-caus/labasseta.jpg`
- els arxius de text han de tenir obligatòriament aquest format:

```bash
---
nom: "Nom del local"
localitat: "Localitat del local"
link: "https://www.linkdellocal.com"
---

# el text va aquí...
```

## Editar marxandatge

- igual que els caus, cada botiga ha de tenir un text a `content/idioma/marxandatge` i una imatge amb el mateix nom a `public/img/galeria-marxandatge`
- l'arxiu de text pot tenir el nom que sigui, però ha d'acabar amb l'extensió `.md`
- la imatge ha de tenir el mateix nom i pot estar en qualsevol format d'imatge
- Exemple:
  - `content/ca/marxandatge/nomadaprineu.md`
  - `public/img/galeria-marxandatge/nomadaprineu.jpg`
- els arxius de text han de tenir obligatòriament aquest format:

```bash
---
nom: "Nom de la botiga"
link: "https://www.linkdelabotiga.com"
---

# el text va aquí...
```
