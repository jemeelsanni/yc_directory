module.exports = {
    extends: 'next/core-web-vitals',
    rules: {
      // Add any custom rules here
    },
    // Add this section to ignore specific files and directories
    ignorePatterns: [
      '.next/**/*',
      'node_modules/**/*',
      'public/**/*',
      '*.config.js',
      '*.config.ts'
    ]
  };