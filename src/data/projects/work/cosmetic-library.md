---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 8 # number: affects the sort order within the project type group on the homepage
title: 'Component Library' # string: shows on project homepage and project page
description: 'To design and create a component
library for a Virtual Try On experience
across multiple brands of a cosmetic
company. The designs were created
to fit across different platforms,
multiple device widths for android
and iOS.' # string: shows on the project page, separate paragraphs with \n
thumb: 'freestocks-AFvUO61NlOU-unsplash.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'freestocks-AFvUO61NlOU-unsplash.jpg' # string: file name only
  alt: 'Makeup products' # string
heroOrientation: 'horizontal' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#6D597A' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'two-column'
    variant: 'right' # either 'left' or 'right', controls which side the image is on for desktop sizes, always on bottom for mobile
    subtitle: 'Virtual Try On Designs' # string
    description: 'The project tasks were to build out designs for
each of the features of a Virtual Try On
application and to standardize designed
components to be used across all brands. The
brands of our main client all have their own unique identity in terms of brand and style,
therefore the components needed to be simple
 and versatile while fulfilling the complexity of
the features of the VTO app.' # string: separate paragraphs with \n
    image:
      file: 'vto-2screen.png' # string: file name only, contained within a 1 / 1.5 aspect ratio container
      alt: 'Cosmetic company webpage to find your shade makeup' # string
  - type: 'key-image'
    subtitle: 'Final Designs' # string
    description: ' ' # string: separate paragraphs with \n
    image:
      file: 'vto-3screen.png' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: 'Cosmetic company mobile application to try on makeup virtually' # string
---