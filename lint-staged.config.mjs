export default {
  '*.{js,mjs,cjs,ts,jsx,tsx}': ['biome format --write --no-errors-on-unmatched'],
  '*.json': ['biome format --write --no-errors-on-unmatched'],
}
