import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import reactPlugin from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly', 
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      react: reactPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      '@typescript-eslint/no-explicit-any': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'react/react-in-jsx-scope': 'off', 
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off', 
    },
  },
]
