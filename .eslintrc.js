module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "no-console"],
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	rules: {
		"no-console": ["error", { allow: ["warn", "error"] }],
	},
};