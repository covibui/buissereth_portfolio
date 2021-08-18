const site = require("./site.json");

module.exports = {
  title: "Get in touch if I seem like a good fit for your project or team.",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Ultricies leo integer malesuada nunc vel risus commodo viverra.",
  button: {
    url: "mailto:" + site.authorEmail + "?subject=Project Interest",
    text: "Message me",
  },
};
