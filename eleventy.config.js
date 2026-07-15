module.exports = async function(eleventyConfig) {

  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "webp",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");

	// Source code lives in /src, compiled site lives in /_site
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };

};