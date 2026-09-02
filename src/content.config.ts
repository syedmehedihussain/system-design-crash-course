import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lectures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lectures' }),
  schema: z.object({
    number: z.number().int(),
    title: z.string(),
    summary: z.string(),
    // topics shown in the lecture header and used for cross-links
    topics: z.array(z.string()).default([]),
    // which source deck in /resources this page is written from
    source: z.string(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lectures };
