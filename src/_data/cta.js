const site = require("./site.json");

module.exports = {
  title: "Get in touch if I seem like a good fit for your project or team.",
  summary:
    "My inbox is always open if you have something you would like to discuss or just feel like saying hello.",
  button: {
    url: "mailto:" + site.authorEmail + "?subject=Project Interest",
    text: "Message me",
  },
};
