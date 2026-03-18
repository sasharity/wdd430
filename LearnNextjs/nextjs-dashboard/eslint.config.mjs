// import { defineConfig, globalIgnores } from 'eslint/config';
// import nextVitals from 'eslint-config-next/core-web-vitals';

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
// ]);

// export default eslintConfig;


// eslint.config.mjs

import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
]