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
  // Watch for files bundled by Wepback
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/css/styles.css", "dist/js/*.js"],
    https: true,
    port: process.env.PORT ? process.env.PORT : 8080,
  });

  // Add transforms
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
