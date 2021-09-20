---
title: "Project Name" # This will be rendered as the H1 on the project page.
summary: "Sentence" # This appears directly under the H1 in the hero section.
thumb: "filename.ext" # Index page thumbnail.
displayOrder: 1 # Whole number integer, used to sort items in ascending order on the index page.
roles: ["Role One", "Role Two"] # Separate roles with a comma within square brackets.
color: "color-name" # Project color name declared in `tailwind.config.js`. See project readme for configuration instructions.
hero:
  image: "filename.ext"
  imageAlt: "Description of image"
keyFeatures:
  heading: "Heading Text" # OPTIONAL
  items:
    - title: "Feature Name"
      summary: "Sentence"
      image: "filename.ext"
      imageAlt: "Description of image"
    # Duplicate as necessary.
    # NOTE: Each entry is designated by `-` and must include the four listed keys.

# OPTIONAL CONTENT BLOCKS
contentHeading: "Heading Title" # OPTIONAL

promoVid:
  heading: "Heading Text" # OPTIONAL
  item: "partial-file.njk" # See project readme for configuration instructions.

gallery:
  heading: "Heading Text" # OPTIONAL
  items:
    - image: "filename.ext"
      imageAlt: "Description of image"
      summary: "Sentence"
    # Duplicate as necessary.
    # NOTE: Each entry is designated by `-` and must include the three listed keys.

stats:
  heading: "Heading Text" # OPTIONAL
  items:
    - main: "Text"
      sub: "Longer text"
    # Duplicate as necessary.
    # NOTE: Each entry is designated by `-` and must include the two listed keys.
    # IMPORTANT: Statistics section becomes a 3 col layout beginning at tablet size.
---

Case study content.
