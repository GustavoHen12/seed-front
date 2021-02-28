# frontend

[prototipo](https://www.figma.com/file/eXz78buSrvEoI1Xnm3KVH9/Seed?node-id=0%3A1)

## Regras gerais

### component

- Importar:

``` js

import pageInWork from '@/components/view/pg-inwork.vue'

```

- Cada componente deve estar dentro de uma pasta que representa a sua "classe". Exemplo: buttons, layout, general, partial_views

- nomenclatura: _"[tipo]-[nome].vue"_. Ex: btn-main.vue

### scss

[structure-sass](http://thesassway.com/beginner/how-to-structure-a-sass-project)

``` txt
css/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _reset.scss       # reset
|   ...
|
`-- main.scss            # primary Sass file
```

### Tamanho da tela (responsividade)

- [Microsoft - design responsivo](https://docs.microsoft.com/pt-br/windows/uwp/design/layout/screen-sizes-and-breakpoints-for-responsive-design)

## Regras de Responsabilidade

- Cabe ao filho de readaptar dependendo do contexto em que esta inserido

- Cabe ao pai passar o contexto ao filho, alem de posicionalo corretamente
