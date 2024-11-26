module.exports = {
    extends: 'next/core-web-vitals',
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        '@next/next/no-img-element': 'off',
        'react/no-unescaped-entities': 'off'
    }
}