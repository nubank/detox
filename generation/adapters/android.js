const t = require("babel-types");
const generator = require("../core/generator");

const { isNumber, isString } = require("../core/type-checks");

const typeCheckInterfaces = {
	Integer: isNumber,
	double: isNumber,
	String: isString
};

module.exports = generator({
	typeCheckInterfaces,
	supportedContentSanitizersMap: {},
	supportedTypes: ["Integer", "int", "double", "String"],
	renameTypesMap: {
		int: "Integer" // TODO: add test
	},
	classValue: ({ package: pkg, name }) => `${pkg}.${name}`
});
