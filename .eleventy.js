const htmlmin = require("html-minifier");
// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Utilities

/**
 * Takes collection and returns it back in display order
 *
 * @param {Array} collection - The 11ty collection
 * @returns {Array} - the sorted collection
 */

const sortByDisplayOrder = (collection) => {
  collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  );
  return collection;
};

module.exports = (eleventyConfig) => {
  // eleventyConfig.addPlugin(syntaxHighlight);

  const md = require("markdown-it")();
  const markdownItAttrs = require("markdown-it-attrs");

  md.use(markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: "{",
    rightDelimiter: "}",
    allowedAttributes: [], // empty array = all attributes are allowed
  });

  eleventyConfig.setLibrary("md", md);

  /**
   * * Live server configuration
   * @key {Array} files - Array of additional files to watch, changes will trigger 11ty rebuild. Recommended to watch files built by Webpack
   * @key {Int} port - Localhost port to use, default 8080, can be configured using .env variable PORT
   */
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/css/styles.css", "dist/js/*.js"],
    port: process.env.PORT ? process.env.PORT : 8080,
  });

  // * Add transforms
  // Minify html for production
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
      if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });

        return minified;
      }

      return content;
    });
  }

  // * Add collections
  // Work items, sorted by display order key
  eleventyConfig.addCollection("work", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md"));
  });

  // Related work items, sorted by display order key
  eleventyConfig.addCollection("relatedWork", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/related-work/*.md")
    );
  });

  // * Add shortcodes
  // Return current year
  eleventyConfig.addShortcode("currentYear", () => {
    let year = new Date().getFullYear().toString();
    return year;
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
