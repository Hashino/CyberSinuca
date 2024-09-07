import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  react.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'react/tsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'off',
    },
  },
];
