export type Lang = "sr-Cyrl" | "sr-Latn" | "en";

export const localisedMenu = {
	"sr-Cyrl": [
		{ slug: "Почетна", href: "/" },
		{ slug: "О нама", href: "/o-nama" },
		{ slug: "Контакт", href: "/kontakt" },
	],
	"sr-Latn": [
		{ slug: "Početna", href: "/sr-Latn" },
		{ slug: "O nama", href: "/sr-Latn/o-nama" },
		{ slug: "Kontakt", href: "/sr-Latn/kontakt" },
	],
	en: [
		{ slug: "home", href: "/en" },
		{ slug: "about-us", href: "/en/about-us" },
		{ slug: "contact", href: "/en/contact" },
	],
};

export const defaultLocale: Lang = "sr-Cyrl";
