if (process.platform === "darwin") {
	const path = `${__dirname}/build_framework.ios.sh`.replace(/(\s+)/g, '\\$1');
	require("child_process").execFileSync(path, {
		stdio: "inherit"
	});
}
