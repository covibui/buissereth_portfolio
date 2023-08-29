---
# File automatically ignored
# Project slug is the current file name
# Place all images in `/public/images/work/{project slug}`
displayOrder: 6 # number: affects the sort order within the project type group on the homepage
title: 'Multiple Workflow Retail POC' # string: shows on project homepage and project page
description: 'Design the management app suite
used by the brands that purchased
the space to track customer traffic,
their engagement, as well as stock
levels. The app suite was
purposefully designed to integrate
with Shopify services so that brands
 would not need to complicate their
inventory infrastructure.' # string: shows on the project page, separate paragraphs with \n
thumb: 'viktor-bystrov-gFjGZ2qRZOo-unsplash.jpg' # string: file name only, cropped to 5 / 3 aspect ratio on the homepage, alt is automatically generated as `{project title} - work project`
hero: # hero image on the project page
  file: 'viktor-bystrov-gFjGZ2qRZOo-unsplash.jpg' # string: file name only
  alt: 'Aerial view of a commercial shopping mall' # string
heroOrientation: 'horizontal' # either 'horizontal' or 'vertical', controls variant of the hero section
color: '#577590' # hex color: flat colors only, transparency is automatically calculated
sections: # any number of sections, order here will determine order on the project page
  - type: 'two-column'
    variant: 'left' # either 'left' or 'right', controls which side the image is on for desktop sizes, always on bottom for mobile
    subtitle: 'Retail App Suite' # string
    description: 'Each app in the suite was given its own user
    persona as each app would likely be used by
    different individuals within any given brand.
    Kristen, a Director of Retail Planning, was used
    for the Channel Manager app; Rodrigo, an
    Engagement Coordinator, was used for
    Broadcast, and Jamie, a Fleet Operator, was
    used for Fleet Operations. By working with
    different personas for each app, we were able
    to analyze and work on the interface for each
    app through specific lenses and were able to
    differentiate between the distinct capabilities of
    each app by targeting specific needs within the
    job at hand.' # string: separate paragraphs with \n
    image:
      file: 'appsuite-two.png' # string: file name only, contained within a 1 / 1.5 aspect ratio container
      alt: 'Two screens of an appsuite for managing a retail business' # string
  - type: 'key-image'
    subtitle: 'Section Title' # string
    description: 'Ipsum enim officia aliqua est in adipisicing.' # string: separate paragraphs with \n
    image:
      file: 'image.jpg' # string: file name only, contained within a 4 / 3 aspect ratio container
      alt: 'Duis ullamco dolore est.' # string
---