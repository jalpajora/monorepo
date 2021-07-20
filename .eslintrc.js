module.exports = {
  extends: ['get-off-my-lawn', 'plugin:import/react'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 'off',
    'node/no-extraneous-import': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'ignore',
        props: 'ignore',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
