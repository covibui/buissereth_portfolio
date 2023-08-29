---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 5 # number: affects the sort order within the project type group on the homepage
title: 'Multiple Workflow Healthcare Prototype' # string: shows on project homepage and project page
description: 'Create a POC prototype of an new
prescription workflow for multiple roles in the pharmacy. This project required
understanding of the business and the
process. Additionally I had collaborated
with others to create a French version
as a requirement of the final deliverable.' # string: shows on the project page, separate paragraphs with \n
thumb: 'sizura-ramadhani-WGgTNpI8JBI-unsplash.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'sizura-ramadhani-WGgTNpI8JBI-unsplash.jpg' # string: file name only
  alt: 'An aisle in pharmacy' # string
heroOrientation: 'vertical' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#E56B6F' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'two-column'
    variant: 'right' # either 'left' or 'right', controls which side the image is on for desktop sizes, always on bottom for mobile
    subtitle: 'Prototyping in Figma' # string
    description: 'As this POC was going to be built on the web, I suggested using Figma to build the prototype. Figma prepares some code for styling. Figma
was very helpful when working collaboratively
with the lead experience designer and
developers.' # string: separate paragraphs with \n
    image:
      file: 'pharm-homepg.png' # string: file name only, contained within a 1 / 1.5 aspect ratio container
      alt: 'An internal system for a pharmacy login page' # string
  - type: 'key-image'
    subtitle: 'Final Designs' # string
    description: '' # string: separate paragraphs with \n
    image:
      file: 'pharm-threepg.png' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: '3 webpages of creating a patient profile and writing a new prescription' # string
---