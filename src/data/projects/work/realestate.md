---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 2 # number: affects the sort order within the project type group on the homepage
title: 'Research & Design Real Estate Co.' # string: shows on project homepage and project page
description: 'Redesign of a real estate company listing system to
make more intuitive for realtors and
assist them in creating more robust
listings.'
 # string: shows on the project page, separate paragraphs with \n
thumb: 'avi-waxman-f9qZuKoZYoY-unsplash.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'avi-waxman-f9qZuKoZYoY-unsplash.jpg' # string: file name only
  alt: 'Four way street in suburban neighborhood' # string
heroOrientation: 'vertical' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#f3722c' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'key-image'
    subtitle: 'Task Analysis' # string
    description: 'The team conducted a series of virtual
workshops with industry professionals. The purpose was to collect insights into the
usability of the prototype through a wide range
industry professionals. They were users that
frequently use the original interface and
volunteered to test the new design on creating a
new listing.' # string: separate paragraphs with \n
    image:
      file: 'realestate-img1.png' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: 'Real estate user interface listing pages' # string
---