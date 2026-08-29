// ESLint 9 resolves `eslint.config.*` from the working directory upwards and does not
// look inside `.config/`, so every invocation has to name the config explicitly.
const eslintFix = 'eslint --config .config/eslint.config.mjs --fix';

export default {
  '*.{ts,mjs,js}': [eslintFix],
  '*.{yaml,yml}': [eslintFix],
  '!(package)*.json': [eslintFix],
  'package*.json': ['npm dedupe', 'npx sort-package-json', eslintFix],
  // A single entry for Markdown, so the documentation checks always run before formatting
  // rather than racing a second ESLint pass from an overlapping pattern.
  '*.md': [
    () => 'npm run docs:check-links',
    () => 'npm run docs:sort-glossary',
    eslintFix,
  ],
};
