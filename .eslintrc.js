module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
        'generator-star-spacing': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: false }], //没有使用的参数，不会报错。因为个人觉的把可用的参数写上去 有利于以后的维护。
        'space-before-function-paren': 'off',

        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        // 'vue/html-self-closing': 'off',
        'vue/require-default-prop': 'off',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
    },
}
