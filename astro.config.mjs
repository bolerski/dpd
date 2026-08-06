// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: "sr-Cyrl",
		locales: [
			"sr-Cyrl", // Serbian Cyrillic (default)
			"sr-Latn", // Serbian Latin
			"en", // English
		],
		routing: {
			prefixDefaultLocale: false, // Default language sits at domain root (e.g., /blog)
		},
	},
});
