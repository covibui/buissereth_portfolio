---
title: "Project Name" # This will be rendered as the H1 on the project page
summary: "Sentence" # This appears directly under the H1 in the hero section
thumb: "filename.ext" # Image to be displayed on index page. Do not include a path, just the filename.
displayOrder: 1 # Whole number integer, dictates the order on index page
roles: ["Role One", "Role Two"] # Comma separated array
hero:
  image: "filename.ext" # Image to be displayed in the hero section. Do not include a path, just the filename.
  imageAlt: "Description of image" # Accessibility concern
promoVid: "partial-file.njk" # OPTIONAL SECTION - File name of `.njk` partial. See project readme for configuration instructions.
promoVidHeading: "Heading Title" # OPTIONAL SECTION - Only rendered if `promoVid` is present. Use to change promotional video section heading. Defaults to "Promotional Video" if omitted.
gallery: # OPTIONAL SECTION
  - image: "filename.ext" # Do not include a path, just the filename.
    imageAlt: "Description of image" # Accessbility concerns
    summary: "Sentence" # Text that will accompany the image in the lightbox section
  # Duplicate as necessary. NOTE: Each entry is designated by `-` and must include the three listed keys
galleryHeading: "Heading Title" # OPTIONAL SECTION - Only rendered if `gallery` is present. Use to change gallery section heading. Defaults to "Gallery" if omitted.
contentHeading: "Heading Title" # OPTIONAL SECTION - Use to change case study heading. Defaults to "Case Study" if omitted.
---

Related work content.
