import type { DevToolbarApp } from "astro";
import type { DevToolbarWindow } from "astro/runtime/client/dev-toolbar/ui-library/index.js";
import { defineToolbarApp } from "astro/toolbar";

import {
	BADGE_SIZES,
	BADGE_STYLES,
	BUTTON_BORDER_RADIUSES,
	BUTTON_SIZES,
	BUTTON_STYLES,
	CARD_STYLES,
	DEFINED_ICONS,
	HIGHLIGHT_STYLES,
	RADIO_CHECKBOX_STYLES,
	TOGGLE_STYLES,
} from "./const";

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

		for (const appender of [
			appendButtons,
			appendBadges,
			appendCards,
			appendToggles,
			appendRadioCheckboxes,
			appendHighlights,
			appendTooltips,
			appendIcons,
		]) {
			appendHr(windowElement);
			appender(windowElement);
		}

		canvas.appendChild(windowElement);
	},
}) satisfies DevToolbarApp;

function appendHr(windowElement: DevToolbarWindow) {
	const hr = document.createElement("hr");
	windowElement.appendChild(hr);
}

function appendButtons(windowElement: DevToolbarWindow) {
	appendHeader(windowElement, "astro-dev-toolbar-button");

	const section = createSection();
	const paragraph1 = document.createElement("p");
	paragraph1.textContent =
		"The size and style of the button can be customized.";
	section.appendChild(paragraph1);
	for (const size of BUTTON_SIZES) {
		const row = createRow("8px");
		row.style.flexWrap = "wrap";
		for (const style of BUTTON_STYLES) {
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
	const row = createRow("8px");
	row.style.flexWrap = "wrap";
	for (const borderRadius of BUTTON_BORDER_RADIUSES) {
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
	appendHeader(windowElement, "astro-dev-toolbar-badge");

	const section = createSection();
	const paragraph = document.createElement("p");
	paragraph.textContent =
		"The size and style (color) of the badge can be customized.";
	section.appendChild(paragraph);
	for (const size of BADGE_SIZES) {
		const row = createRow("8px");
		row.style.flexWrap = "wrap";
		for (const style of BADGE_STYLES) {
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
	appendHeader(windowElement, "astro-dev-toolbar-card");

	const section = createSection();
	const paragraph = document.createElement("p");
	paragraph.textContent = "The style (color) of the card can be customized.";
	section.appendChild(paragraph);
	for (const style of CARD_STYLES) {
		const card = document.createElement("astro-dev-toolbar-card");
		card.textContent = `${style}`;
		card.cardStyle = style;
		card.link = "https://astro.build";
		section.appendChild(card);
	}

	windowElement.appendChild(section);
}

function appendToggles(windowElement: DevToolbarWindow) {
	appendHeader(windowElement, "astro-dev-toolbar-toggle");

	const section = createSection();
	const paragraph = document.createElement("p");
	paragraph.textContent = "The style (color) of the toggle can be customized.";
	section.appendChild(paragraph);
	for (const style of TOGGLE_STYLES) {
		const row = createRow();
		const toggle = document.createElement("astro-dev-toolbar-toggle");
		toggle.toggleStyle = style;
		const toggleStatus = document.createElement("span");
		toggleStatus.textContent = `The ${style} toggle is disabled`;
		toggle.input.addEventListener("change", (event) => {
			const target = event.currentTarget as HTMLInputElement;
			toggleStatus.textContent = `The ${style} toggle is now ${target.checked ? "enabled" : "disabled"}!`;
		});
		row.appendChild(toggle);
		row.appendChild(toggleStatus);
		section.appendChild(row);
	}

	windowElement.appendChild(section);
}

function appendRadioCheckboxes(windowElement: DevToolbarWindow) {
	appendHeader(windowElement, "astro-dev-toolbar-radio-checkbox");

	const section = createSection();
	const paragraph = document.createElement("p");
	paragraph.textContent = "The style (color) of the radio can be customized.";
	section.appendChild(paragraph);
	const row = createRow();
	const radio = document.createElement("astro-dev-toolbar-radio-checkbox");
	radio.setAttribute("disabled", "true");
	const radioStatus = document.createElement("span");
	radioStatus.textContent = "disabled";
	row.appendChild(radio);
	row.appendChild(radioStatus);
	section.appendChild(row);
	for (const style of RADIO_CHECKBOX_STYLES) {
		const row = createRow();
		const radio = document.createElement("astro-dev-toolbar-radio-checkbox");
		radio.radioStyle = style;
		radio.setAttribute("checked", "true");
		const radioStatus = document.createElement("span");
		radioStatus.textContent = `${style} checked`;
		row.appendChild(radio);
		row.appendChild(radioStatus);
		section.appendChild(row);
	}

	windowElement.appendChild(section);
}

function appendHighlights(windowElement: DevToolbarWindow) {
	appendHeader(windowElement, "astro-dev-toolbar-highlight");

	const section = createSection();
	const paragraph1 = document.createElement("p");
	paragraph1.textContent =
		"The style (color) of the highlight can be customized.";
	section.appendChild(paragraph1);
	for (const style of HIGHLIGHT_STYLES) {
		const row = createRow();
		row.style.position = "relative";
		const paragraph = document.createElement("p");
		paragraph.textContent = `This is a paragraph with a ${style} highlight`;
		row.appendChild(paragraph);
		const highlight = document.createElement("astro-dev-toolbar-highlight");
		highlight.highlightStyle = style;
		highlight.style.left = "0";
		highlight.style.top = "0";
		highlight.style.width = "100%";
		highlight.style.height = "100%";
		row.appendChild(highlight);
		section.appendChild(row);
	}

	const paragraph2 = document.createElement("p");
	paragraph2.textContent =
		"An icon can be added to the top right corner of the highlight.";
	section.appendChild(paragraph2);
	const row = createRow();
	row.style.position = "relative";
	const paragraph3 = document.createElement("p");
	paragraph3.textContent = "This is a paragraph with a highlight and an icon";
	row.appendChild(paragraph3);
	const highlight = document.createElement("astro-dev-toolbar-highlight");
	highlight.highlightStyle = "purple";
	highlight.style.left = "0";
	highlight.style.top = "0";
	highlight.style.width = "100%";
	highlight.style.height = "100%";
	highlight.icon = "astro:logo";
	row.appendChild(highlight);
	section.appendChild(row);

	windowElement.appendChild(section);
}

function appendTooltips(windowElement: DevToolbarWindow) {
	appendHeader(windowElement, "astro-dev-toolbar-tooltip");

	const section = createSection();
	const paragraph = document.createElement("p");
	paragraph.textContent = "Hover me to see the tooltip.";
	paragraph.style.marginBottom = "0px";
	section.appendChild(paragraph);
	const tooltip = document.createElement("astro-dev-toolbar-tooltip");
	tooltip.sections = [
		{
			title: "My title",
			inlineTitle: "My inline title",
			icon: "astro:logo",
			content: "My content",
		},
	];
	tooltip.style.marginTop = "35px";
	paragraph.addEventListener("mouseover", () => {
		tooltip.dataset.show = "true";
	});
	paragraph.addEventListener("mouseout", () => {
		tooltip.dataset.show = "false";
	});
	section.appendChild(tooltip);

	windowElement.appendChild(section);
}

function appendIcons(windowElement: DevToolbarWindow) {
	appendHeader(windowElement, "astro-dev-toolbar-icon");

	const section = createSection();
	const paragraph = document.createElement("p");
	paragraph.textContent = `${DEFINED_ICONS.length} icons are available.`;
	section.appendChild(paragraph);
	const row = createRow();
	row.style.flexWrap = "wrap";
	for (const icon of DEFINED_ICONS) {
		const iconElement = document.createElement("astro-dev-toolbar-icon");
		iconElement.icon = icon;
		iconElement.title = icon;
		iconElement.style.width = "36px";
		row.appendChild(iconElement);
	}
	section.appendChild(row);

	windowElement.appendChild(section);
}

function appendHeader(windowElement: DevToolbarWindow, title: string) {
	const header = document.createElement("h2");
	const a = document.createElement("a");
	a.href = `https://docs.astro.build/en/reference/dev-toolbar-app-reference/#${title}`;
	a.target = "_blank";
	a.style.textDecoration = "none";
	const headerTitle = document.createElement("code");
	headerTitle.textContent = title;
	a.appendChild(headerTitle);
	header.appendChild(a);
	windowElement.appendChild(header);
}

function createSection() {
	const section = document.createElement("section");
	section.style.display = "flex";
	section.style.flexDirection = "column";
	section.style.gap = "8px";
	return section;
}

function createRow(gap = "10px") {
	const row = document.createElement("div");
	row.style.display = "flex";
	row.style.alignItems = "center";
	row.style.gap = gap;
	return row;
}
