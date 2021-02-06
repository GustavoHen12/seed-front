module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      //'plugin:vue/vue3-recommended',
      'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
      'plugin:vue/strongly-recommended',
      'plugin:vue/recommended',
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    overrides: [
      {
        files: ['*.vue', '**/*.vue', '**/*.js', '*.js'],
        rules: {
            indent: 0,
            'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }],
            'vue/html-indent': ['error', 4, { baseIndent: 1 }],
            'vue/html-quotes': ['error', 'single'],
            'vue/singleline-html-element-content-newline': 2,
            'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: { max: 1 } }],
            'vue/html-closing-bracket-newline': 2,
            'vue/attributes-order': ['error', { order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT'] }],
            'vue/prop-name-casing': 'off',
            'vue/require-prop-types': 'error',
            'vue/require-default-prop': 'error',
            'vue/no-multi-spaces': 'error',
            'vue/attribute-hyphenation': 'error',
            'vue/no-template-shadow': 'error',
            'vue/name-property-casing': 'error',
            'vue/mustache-interpolation-spacing': ['error', 'never'],
            'vue/html-end-tags': 'error',
            'vue/html-closing-bracket-spacing': 'error',
            'vue/this-in-template': 'error',
            'vue/no-spaces-around-equal-signs-in-attribute': 'error',
            'vue/order-in-components': 'error',
            'vue/html-quotes': ['error', 'single'],
        },
      },
    ]
  }
