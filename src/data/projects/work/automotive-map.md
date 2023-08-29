---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 3 # number: affects the sort order within the project type group on the homepage
title: 'Project Name' # string: shows on project homepage and project page
description: 'Veniam et velit magna dolore id minim Lorem deserunt ut laboris.' # string: shows on the project page, separate paragraphs with \n
thumb: 'image.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'image.jpg' # string: file name only
  alt: 'Sit consequat irure nisi esse adipisicing in dolore officia pariatur fugiat.' # string
heroOrientation: 'horizontal' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#FFFFFF' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'two-column'
    variant: 'left' # either 'left' or 'right', controls which side the image is on for desktop sizes, always on bottom for mobile
    subtitle: 'Section Title' # string
    description: 'Voluptate dolore eiusmod dolore id est.' # string: separate paragraphs with \n
    image:
      file: 'image.jpg' # string: file name only, contained within a 1 / 1.5 aspect ratio container
      alt: 'Amet culpa irure et amet sunt in ut incididunt ex minim aliqua ex ea.' # string
  - type: 'key-image'
    subtitle: 'Section Title' # string
    description: 'Ipsum enim officia aliqua est in adipisicing.' # string: separate paragraphs with \n
    image:
      file: 'image.jpg' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: 'Duis ullamco dolore est.' # string
---