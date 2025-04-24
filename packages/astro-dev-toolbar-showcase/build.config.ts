import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: ["src/index.ts", "src/astro-dev-toolbar-showcase.ts"],
	clean: true,
	declaration: true,
	rollup: {
		esbuild: {
			minify: true,
		},
	},
});
