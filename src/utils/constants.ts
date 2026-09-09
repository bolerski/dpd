export type Lang = "sr-Cyrl" | "sr-Latn" | "en";

export const localisedMenu = {
	"sr-Cyrl": [
		{ slug: "Почетна", href: "/" },
		{ slug: "О нама", href: "/o-nama" },
		{ slug: "Шта радимо", href: "/sta-radimo" },
		{ slug: "Контакт", href: "/kontakt" },
	],
	"sr-Latn": [
		{ slug: "Početna", href: "/sr-Latn" },
		{ slug: "O nama", href: "/sr-Latn/o-nama" },
		{ slug: "Šta radimo", href: "/sr-Latn/sta-radimo" },
		{ slug: "Kontakt", href: "/sr-Latn/kontakt" },
	],
	en: [
		{ slug: "Home", href: "/en" },
		{ slug: "About us", href: "/en/about-us" },
		{ slug: "What we do", href: "/en/what-we-do" },
		{ slug: "Contact", href: "/en/contact" },
	],
};

export const defaultLocale: Lang = "sr-Cyrl";
