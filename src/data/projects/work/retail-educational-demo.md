---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 4 # number: affects the sort order within the project type group on the homepage
title: 'Retail Learning Demos' # string: shows on project homepage and project page
description: 'Design of a service for instruction
design and modules to
make a brand agnostic customer retail
demos.' # string: shows on the project page, separate paragraphs with \n
thumb: 'austin-distel-rxpThOwuVgE-unsplash.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'austin-distel-rxpThOwuVgE-unsplash' # string: file name only
  alt: 'Man teaching a small group in a company setting' # string
heroOrientation: 'vertical' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#f94144' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'two-column'
    variant: 'left' # either 'left' or 'right', controls which side the image is on for desktop sizes, always on bottom for mobile
    subtitle: 'Instructional Design' # string
    description: 'The initial requirements for this project were
hard to reach. The contact wanted a clickable
prototype that can be shared easily with audio
and video. Not every prototyping tool can
support all of those requirements. I decided
that the project will use Figma so I can have
playable gifs with a completely interactable
prototype.' # string: separate paragraphs with \n
    image:
      file: 'elearning-demo-two.png' # string: file name only, contained within a 1 / 1.5 aspect ratio container
      alt: 'Two mobile phones with retail demo pages' # string
  - type: 'key-image'
    subtitle: 'Final Designs' # string
    description: '' # string: separate paragraphs with \n
    image:
      file: 'elearning-demo-three.png' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: 'Three mobile phones with retail demo pages and uiz questions' # string
---