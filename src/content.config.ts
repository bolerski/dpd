import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogPostSchema = z.object({
	title: z.string(),
	date: z.date(), // use YYYY-MM-DD format
	locale: z.enum(["sr-Cyrl", "sr-Latn", "en"]),
});

export type BlogPostSchema = z.infer<typeof blogPostSchema>;

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: blogPostSchema,
});

export const collections = { blog };
