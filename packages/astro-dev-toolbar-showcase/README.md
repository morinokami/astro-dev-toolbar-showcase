# Astro Dev Toolbar Showcase

<p align="center">
  <img src="./.github/assets/screenshot.png" alt="Screenshot" width="687" />
</p>

[Astro Dev Toolbar App](https://docs.astro.build/en/reference/dev-toolbar-app-reference/) showcasing the following built-in components:

- [astro-dev-toolbar-button](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-button)
- [astro-dev-toolbar-badge](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-badge)
- [astro-dev-toolbar-card](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-card)
- [astro-dev-toolbar-toggle](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-toggle)
- [astro-dev-toolbar-radio-checkbox](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-radio-checkbox)
- [astro-dev-toolbar-highlight](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-highlight)
- [astro-dev-toolbar-tooltip](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-tooltip)
- [astro-dev-toolbar-icon](https://docs.astro.build/en/reference/dev-toolbar-app-reference/#astro-dev-toolbar-icon)

## Installation

```sh
npx astro add astro-dev-toolbar-showcase
```

### Manual Installation

First, install the `astro-dev-toolbar-showcase` package:

```sh
npm install -D astro-dev-toolbar-showcase
```

Then, add the `astro-dev-toolbar-showcase` integration to your Astro config:

```ts
import { defineConfig } from "astro/config";

import showcase from "astro-dev-toolbar-showcase";

export default defineConfig({
  integrations: [showcase()],
});
```
