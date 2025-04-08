import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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
