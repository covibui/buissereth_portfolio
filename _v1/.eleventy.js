const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
require("dotenv").config();

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
  // Uncomment following line to include code highlighting css
  // eleventyConfig.addPlugin(syntaxHighlight);

  const md = require("markdown-it")();
  const markdownItAttrs = require("markdown-it-attrs");
  const lazy_loading = require("markdown-it-image-lazy-loading");

  md.use(markdownItAttrs, {
    leftDelimiter: "{",
    rightDelimiter: "}",
    allowedAttributes: ["id", "class", /^regex.*$/],
  });
  md.use(lazy_loading);

  // md.renderer.rules.image = (tokens, idx) => {
  //   let token = tokens[idx];
  //   token.attrs.forEach((attr) => {
  //     if (attr[0] === "src") {
  //       attr[1] = "/assets/images/" + attr[1];
  //     }
  //   });
  //   console.log(token.attrs);
  // };

  let img_renderer =
    md.renderer.rules.image ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    tokens[idx].attrs[0][1] = "/assets/images/" + tokens[idx].attrs[0][1];

    return img_renderer(tokens, idx, options, env, self);
  };

  eleventyConfig.setLibrary("md", md);

  /**
   * * Live server configuration
   * @key {Array} files - Array of additional files to watch, changes will trigger 11ty rebuild. Recommended to watch files built by Webpack
   * @key {Int} port - Localhost port to use, default 8080, can be configured using .env variable PORT
   */
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/css/styles.css", "dist/js/*.js"],
    port: process.env.PORT || 8080,
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
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/work/**/*.md")
    );
  });

  // Related work items, sorted by display order key
  eleventyConfig.addCollection("relatedWork", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/related-work/**/*.md")
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
