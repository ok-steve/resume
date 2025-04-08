import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

import collections from "./lib/collections/index.js";
import filters from "./lib/filters/index.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(collections);
  eleventyConfig.addPlugin(filters);

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("./public");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
  };
}
