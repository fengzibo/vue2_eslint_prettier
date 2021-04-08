module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']],
        'scope-empty': [1, 'never'],
        'subject-case': [0, 'always'],
        'scope-case': [0],
    },
}
