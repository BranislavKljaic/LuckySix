module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-param-reassign': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': 0,
    'linebreak-style': 0,
    'react/prop-types': 'off',
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'operator-linebreak': 0,
    'nonblock-statement-body-position': 0,
    'curly': 0,
  },
};
