# Fera Pyrenees Mountain Gravel web

- [Estructura d'arxius per modificar](#estructura-darxius-per-modificar)
- [Github: guia per modificar arxius](#github-guia-per-modificar-arxius)
- [Markdown: guia per formatar el text](#markdown-guia-per-formatar-el-text)
- [Editar pàgines](#editar-pàgines)
- [Editar rutes](#editar-rutes)
- [Editar caus de la fera](#editar-caus-de-la-fera)
- [Editar marxandatge](#editar-marxandatge)

## Estructura d'arxius per modificar

```bash
- 📁 content
  - 📁 ca
    - 📁 caus
    - 📁 marxandatge
    - 📁 rutes
    - 📄 acces.md
    - 📄 agencia.md
    - 📄 ...
  - 📁 en
  - 📁 es

- 📁 public
  - 📁 img
    - 📁 galeria-caus
    - 📁 galeria-fera500
    - 📁 ...
```

## Github: guia per modificar arxius

Els textos estan a la carpeta `content` i les imatges estan a la carpeta `public/img`

Només cal modificar les carpetes d'imatge que comencen per `galeria-`

- **Crear arxiu de text:** clica a <kbd>Add file</kbd>, <kbd>+ Create new file</kbd>, posa-li nom primer (recorda afegir l'extensió `.md`), i un cop editat clica <kbd>Commit changes</kbd> dues vegades

- **Editar arxiu de text:** clica el llapis <kbd>✏️</kbd> (a dalt a la dreta), edita el text i clica <kbd>Commit changes</kbd> dues vegades

- **Afegir imatge:** clica <kbd>Add file</kbd> i després <kbd>Upload files</kbd>. Arrossega una o vàries imatges i clica <kbd>Commit changes</kbd>

- **Esborrar una imatge:** obre la imatge i clica <kbd>...</kbd> (a dalt a la dreta), després <kbd>Delete file</kbd>, finalment clica <kbd>Commit changes</kbd>

- **Crear carpeta:** Github no deixa crear una carpeta buida, la manera de fer-ho és clicant a <kbd>Add file</kbd> i <kbd>+ Create new file</kbd>, i on hi escriuries el nom de l'arxiu, escrius el nom de la carpeta i després posa-hi una barra `/`. Això crea una carpeta però t'obliga a crear un arxiu, li poses el nom que vulguis, fas <kbd>Commit changes</kbd> dues vegades i ja tens la carpeta. Finalment, hi afegeixes els arxius que hi voldràs tenir abans d'esborrar l'arxiu provisional que has creat.

Cada cop que cliques a "Commit changes" has modificat el web! 👏 espera uns minuts i apareixeran les canvis

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

- Sempre posar linies en blanc entre elements, paragrafs, titols, etc

- Per mostrar un caràcter en el text dels que afecten en el format de Markdown, posar-hi primer una barra cap a l'esquerra `\`. Per exemple, per posar un asterisc: ` \*LINK PROVISIONAL` i mostrarà \*LINK PROVISIONAL

## Editar pàgines

- Les pàgines tenen l'arxiu a l'arrel de la carpeta `content/idioma`

- Algunes pàgines tenen més d'un arxiu

## Editar rutes

- Les rutes estan a la carpeta `content/idioma/rutes`

- Per afegir variants de la ruta 150:

  - Afegir un arxiu que de nom comenci per `fera150-` i després el nom de la ruta, amb extensió `.md`. Exemple: `fera150-boumort.md`

  - El contingut ha de tenir obligatòriament aquest format

  ```bash
  ---
  nom: "Nom de la variant."
  ---

  # text de la ruta...
  ```

  - Afegir una carpeta nova on hi ha les galeries d'imatges, amb el nom que comenci per `galeria-` i segueixi amb el mateix nom que l'arxiu. Exemple: `galeria-fera150-boumort`

## Editar caus de la fera

- Cada cau necessita un arxiu de text a `content/idioma/caus` i una imatge amb el mateix nom a `public/img/galeria-caus`

- L'arxiu de text pot tenir el nom que sigui, però ha d'acabar amb l'extensió `.md`

- La imatge ha de tenir el mateix nom i pot estar en qualsevol format d'imatge

- Exemple:

  - `content/ca/caus/labasseta.md`
  - `public/img/galeria-caus/labasseta.jpg`

- Els arxius de text han de tenir obligatòriament aquest format:

```bash
---
nom: "Nom del local"
localitat: "Localitat del local"
link: "https://www.linkdellocal.com" # opcional
---

# el text va aquí...
```

## Editar marxandatge

- Igual que els caus, cada botiga ha de tenir un text a `content/idioma/marxandatge` i una imatge amb el mateix nom a `public/img/galeria-marxandatge`

- L'arxiu de text pot tenir el nom que sigui, però ha d'acabar amb l'extensió `.md`

- La imatge ha de tenir el mateix nom i pot estar en qualsevol format d'imatge

- Exemple:

  - `content/ca/marxandatge/nomadaprineu.md`
  - `public/img/galeria-marxandatge/nomadaprineu.jpg`

- Els arxius de text han de tenir obligatòriament aquest format:

```bash
---
nom: "Nom de la botiga"
link: "https://www.linkdelabotiga.com" # opcional
---

# el text va aquí...
```
