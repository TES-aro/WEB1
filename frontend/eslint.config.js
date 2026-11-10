import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      indent: ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			quotes: ['error',  'single', { 'avoidEscape': true }],
			semi: ['error', 'always', { 'omitLastInOneLineBlock': true }],
			eqeqeq: 'error',
			'no-trailing-spaces': 'error',
			'object-curly-spacing': ['error', 'always'],
			'arrow-spacing': ['error', { before: true, after: true }],
			'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ]
    }
  },
])
