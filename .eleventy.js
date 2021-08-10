const htmlmin = require("html-minifier");

// Utilities

/**
 * Takes collection and returns it back in display order
 *
 * @param {Array} collection - The 11ty collection
 * @returns {Array} - the sorted collection
 */

const sortByDisplayOrder = (collection) =>
  collection.sort((a, b) =>
    Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
  );

module.exports = (eleventyConfig) => {
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

  // * Add collcections
  // Work items, sorted by display order key
  eleventyConfig.addCollection("work", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md"));
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
