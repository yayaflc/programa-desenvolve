<p align="center"> <img src="../CSS/assets/images/logo_css.png" width="108">

<h1 align="center"> CSS </h1>

CSS (Cascading Style Sheets) é uma linguagem de estilo que permite que o HTML interprete o visual de uma página da web.
Cada declaração inclui um nome de propriedade CSS e um valor, sendo declarado da seguinte maneira:
``` html
seletor {propriedade: valor;}
```

#### COMO INCLUIR?
 O código pode ser escrito dentro de uma tag de abertura de um elemento HTML, incorporado em uma seção do cabeçalho do documento, ou em um arquivo separado, sendo importado ou linkado na página.
- **INLINE**: utilizado para dar estilo a um elemento HTML específico.
``` html
<p style="..."> ... </p>
```

- **INTERNO**: requer que adicione as tags `<style>` na seção `<head>` do HTML.
``` html
<head>
    <style> ... </style>
</head>
```

- **EXTERNO**: deverá linkar as páginas da internet com um arquivo `.css` externo.
``` html
<link href=".css" rel="stylesheet">
```
O método mais utilizado e recomendado é a integração **externa**.

---

#### SELETORES DE ELEMENTOS
- **TAG**: escolhe todos os elementos que correspondem ao nome fornecido.
    - HTML
    ``` html
    <p> ... </p>
    ```

    - CSS
    ``` css
    p{...}
    ```
- **CLASSE**: escolhe elementos baseados no valor de seu atributo `classe`.
    - HTML
    ``` html
    <p class="minha-classe"> ... </p>
    ```

    - CSS
    ``` css
    .minha-classe{...}
    ```

- **ID**: escolhe nós baseados no valor do atributo `id`.
    - HTML
    ``` html
    <p id="meu-id"> ... </p>
    ```

    - CSS
    ``` css
    #meu-id{...}
    ```

    **Continue sua leitura aqui: [Box-Model](../CSS/box-model.md)*