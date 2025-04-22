import type { AstroIntegration } from "astro";

export default function myAstroIntegration(): AstroIntegration {
	return {
		name: "astro-dev-toolbar-showcase",
		hooks: {
			"astro:config:setup": ({ addDevToolbarApp }) => {
				addDevToolbarApp({
					id: "astro-dev-toolbar-showcase",
					name: "Astro Dev Toolbar Showcase",
					icon: "astro:logo",
					entrypoint: new URL(
						"./astro-dev-toolbar-showcase.mjs",
						import.meta.url,
					),
				});
			},
		},
	};
}
