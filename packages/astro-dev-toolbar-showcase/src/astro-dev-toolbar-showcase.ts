import type { DevToolbarApp } from "astro";
import type { DevToolbarWindow } from "astro/runtime/client/dev-toolbar/ui-library/index.js";
import { defineToolbarApp } from "astro/toolbar";

export default defineToolbarApp({
	init(canvas) {
		const windowElement = document.createElement("astro-dev-toolbar-window");
		windowElement.style.overflow = "auto";

		const style = document.createElement("style");
		style.textContent = `
      h1 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: rgb(255, 255, 255);
        margin: 0px;
        font-size: 22px;
      }

      h2 {
        font-size: 16px;
        font-weight: 400;
        color: white;
        margin-top: 0px;
        margin-bottom: 16px;
      }

      code {
        color: rgba(224, 204, 250, 1);
        border-color: #343841;
        border-style: solid;
        border-width: 1px;
        border-radius: .4em;
        background-color: #24262D;
        padding: .3em;
      }

      p {
        margin: 0.5em 0;
      }
    `;
		windowElement.appendChild(style);

		const header = document.createElement("header");
		const title = document.createElement("h1");
		title.textContent = "Astro Dev Toolbar Showcase";
		header.appendChild(title);
		windowElement.appendChild(header);

		appendHr(windowElement);
		appendButtons(windowElement);
		appendHr(windowElement);
		appendBadges(windowElement);
		appendHr(windowElement);
		appendCards(windowElement);
		appendHr(windowElement);
		appendToggles(windowElement);
		appendHr(windowElement);
		appendRadioCheckboxes(windowElement);
		appendHr(windowElement);
		appendHighlights(windowElement);
		appendHr(windowElement);
		appendTooltips(windowElement);
		appendHr(windowElement);
		appendIcons(windowElement);

		canvas.appendChild(windowElement);
	},
}) satisfies DevToolbarApp;

function appendHr(windowElement: DevToolbarWindow) {
	const hr = document.createElement("hr");
	windowElement.appendChild(hr);
}

function appendButtons(windowElement: DevToolbarWindow) {
	const sizes = ["small", "medium", "large"] as const;
	const styles = [
		"ghost",
		"outline",
		"purple",
		"gray",
		"red",
		"green",
		"yellow",
		"blue",
	] as const;
	const borderRadiuses = ["normal", "rounded"] as const;

	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-button";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);

	const section = document.createElement("section");
	section.style.display = "flex";
	section.style.flexDirection = "column";
	section.style.gap = "8px";

	const paragraph1 = document.createElement("p");
	paragraph1.textContent =
		"The size and style of the button can be customized.";
	section.appendChild(paragraph1);
	for (const size of sizes) {
		const row = document.createElement("div");
		row.style.display = "flex";
		row.style.alignItems = "center";
		row.style.gap = "8px";
		row.style.flexWrap = "wrap";
		for (const style of styles) {
			const button = document.createElement("astro-dev-toolbar-button");
			button.textContent = `${size} ${style}`;
			button.size = size;
			button.buttonStyle = style;
			row.appendChild(button);
		}
		section.appendChild(row);
	}

	const paragraph2 = document.createElement("p");
	paragraph2.textContent = "The border radius can also be customized.";
	section.appendChild(paragraph2);
	const row = document.createElement("div");
	row.style.display = "flex";
	row.style.alignItems = "center";
	row.style.gap = "8px";
	row.style.flexWrap = "wrap";
	for (const borderRadius of borderRadiuses) {
		const button = document.createElement("astro-dev-toolbar-button");
		button.textContent = `${borderRadius}`;
		button.size = "medium";
		button.buttonStyle = "purple";
		button.buttonBorderRadius = borderRadius;
		row.appendChild(button);
	}
	section.appendChild(row);

	windowElement.appendChild(section);
}

function appendBadges(windowElement: DevToolbarWindow) {
	const sizes = ["small", "large"] as const;
	const styles = ["purple", "gray", "red", "green", "yellow", "blue"] as const;

	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-badge";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);

	const section = document.createElement("section");
	section.style.display = "flex";
	section.style.flexDirection = "column";
	section.style.gap = "8px";

	const paragraph = document.createElement("p");
	paragraph.textContent =
		"The size and style (color) of the badge can be customized.";
	section.appendChild(paragraph);
	for (const size of sizes) {
		const row = document.createElement("div");
		row.style.display = "flex";
		row.style.alignItems = "center";
		row.style.gap = "8px";
		row.style.flexWrap = "wrap";
		for (const style of styles) {
			const badge = document.createElement("astro-dev-toolbar-badge");
			badge.textContent = `${size} ${style}`;
			badge.size = size;
			badge.badgeStyle = style;
			row.appendChild(badge);
		}
		section.appendChild(row);
	}

	windowElement.appendChild(section);
}

function appendCards(windowElement: DevToolbarWindow) {
	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-card";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);
}

function appendToggles(windowElement: DevToolbarWindow) {
	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-toggle";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);
}

function appendRadioCheckboxes(windowElement: DevToolbarWindow) {
	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-radio-checkbox";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);
}

function appendHighlights(windowElement: DevToolbarWindow) {
	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-highlight";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);
}

function appendTooltips(windowElement: DevToolbarWindow) {
	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-tooltip";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);
}

function appendIcons(windowElement: DevToolbarWindow) {
	const header = document.createElement("h2");
	const headerTitle = document.createElement("code");
	headerTitle.textContent = "astro-dev-toolbar-icon";
	header.appendChild(headerTitle);
	windowElement.appendChild(header);
}
