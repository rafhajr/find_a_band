const sideEffectsSortRules = ['^\\u0000'];
const packageSortRules = ['^react', '^@?\\w'];
const internalPackageGroupRules = [
  ['^(@ui)(/.*|$)'],
  ['^(@app)(/.*|$)'],
  ['^(@backoffice)(/.*|$)'],
  ['^(@fido)(/.*|$)']
];
const parentImportSortRules = ['^\\.\\.(?!/?$)', '^\\.\\./?$'];
const relativeImportRules = ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'];
const styleImportsSortRules = ['^.+\\.s?css$'];

const importSortGroupRules = [
  sideEffectsSortRules,
  packageSortRules,
  ...internalPackageGroupRules,
  parentImportSortRules,
  relativeImportRules,
  styleImportsSortRules
];
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'next/core-web-vitals'
  ],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      extends: ['plugin:@typescript-eslint/recommended'],
      env: {
        commonjs: true
      },
      rules: {
        'no-console': 'error',
        'prefer-arrow-callback': 'error',
        curly: 'error',
        'no-nested-ternary': 'error',
        'consistent-return': 'error',
        'no-extra-boolean-cast': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: importSortGroupRules
          }
        ]
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-console': 'error',
        'prefer-arrow-callback': 'error',
        curly: 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-nested-ternary': 'error',
        'consistent-return': 'error',
        'no-extra-boolean-cast': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: importSortGroupRules
          }
        ]
      }
    },
    {
      files: ['support/cypress/plugins/Login.tsx', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ]
};
