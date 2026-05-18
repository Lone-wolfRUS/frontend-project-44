import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
 
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'semi': ['error', 'never'],
      'no-console': 'off',
      '@stylistic/no-trailing-spaces': 'error',
    },
  },
]
