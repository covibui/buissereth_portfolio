---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 3 # number: affects the sort order within the project type group on the homepage
title: 'Dealership Service Map ' # string: shows on project homepage and project page
description: 'Car dealership' # string: shows on the project page, separate paragraphs with \n
thumb: 'screen-post-WnDC9k1aiZ8-unsplash.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'screen-post-WnDC9k1aiZ8-unsplash.jpg' # string: file name only
  alt: 'Car dealership' # string
heroOrientation: 'horizontal' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#43aa8b' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'key-image'
    subtitle: 'User Journey' # string
    description: 'We want to
understand the journey when
buying a car at the dealership. We had
researched and discussed the process
through 2 perspectives: the dealership
and the customer.' # string: separate paragraphs with \n
    image:
      file: 'dealership-map.png' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: 'User Journey map of the process of buying a car from the dealership and customer perspective' # string
---