import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

import filters from "./lib/filters/index.js";
import libraries from "./lib/libraries/index.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPlugin(filters);
  eleventyConfig.addPlugin(libraries);

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
