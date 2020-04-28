module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:vue/recommended",
		"eslint-config-prettier",
		"eslint-config-prettier/vue",
		"eslint-config-prettier/@typescript-eslint"
	],
	plugins: ["vue", "prettier"],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	rules: {
		"vue/component-name-in-template-casing": ["error", "PascalCase"],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "always",
					normal: "always",
					component: "always"
				},
				svg: "always",
				math: "always"
			}
		],
		"no-unused-vars": "warn",
		'no-console': "off"
	}
};
