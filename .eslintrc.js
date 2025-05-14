module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
'@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off'    },
    // Add this section to ignore specific files and directories
    ignorePatterns: [
      '.next/**/*',
      'node_modules/**/*',
      'public/**/*',
      '*.config.js',
      '*.config.ts'
    ]
  };