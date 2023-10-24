# Brianna Buissereth Personal Portfolio Site

---

An eleventy based site for Brianna Buissereth's personal work.

---

## Setup

```sh
npm install
```

---

## Usage

### Clean

```sh
npm run clean
```

- Remove all contents of the `dist` directory

### Serve

```sh
npm run serve
```

- Build and serve files for development from `dist` directory
- Site is served at [https://localhost:8080](https://localhost:8080) by default
  - Configure using `PORT` in `.env`
- **Note:** `clean` will be run prior to build sequence
- **Note:** `export SET NODE_OPTIONS=--openssl-legacy-provider` has been added to the serve and build commands to resolve an issue with the used version of webpack and node v18

### Build

```sh
npm run build
```

- Build files for production to `dist` directory
- **Note:** `clean` will be run prior to build sequence

---

## Package Documentation

- [11ty](https://www.11ty.dev/docs/)
  - Static site generator. Review for any issues regarding building of the site.
- [Tailwind CSS](https://tailwindcss.com/docs)
  - CSS framework in use. Review for class references.

---

## Adding Content

### Project Files

`.md` files within `src/work/` will be rendered as a project page.

1. Duplicate `_template.md` within `src/work/_drafts/`.
2. Update file with project data.
3. Move `project.md` to `src/work/`.

**Note:** `.md` files within `src/work/_drafts/` _will not_ be rendered by 11ty as pages or included on the index page.

#### Project Data Reference

##### Core Data

| Key                                  | Value                                             | Note(s)                                                 |
| ------------------------------------ | ------------------------------------------------- | ------------------------------------------------------- |
| `title`                              | Name of the project                               |
| `summary`                            | Sentence describing the project                   | For consistency this _should not_ end in punctuation    |
| `thumb`                              | Image filename                                    | See **Images** below                                    |
| `displayOrder`                       | Integer                                           | Used to sort items in ascending order on the index page |
| `roles`                              | List of roles                                     | Follow JSON array syntax                                |
| `color`                              | Color name matching value in `tailwind.config.js` | See **Project Colors** below                            |
| `hero` \ `image`                     | Image filename                                    | See **Images** below                                    |
| `hero` \ `imageAlt`                  | Image `alt` text                                  |
| `keyFeatures` \ `heading`            | Change "Key Features" heading text                | _OPTIONAL_ Defaults to "Key Features"                   |
| `keyFeatures` \ `items` \ `title`    | Name / title of the feature                       |
| `keyFeatures` \ `items` \ `summary`  | Feature description                               |
| `keyFeatures` \ `items` \ `image`    | Image filename                                    | See **Images** below                                    |
| `keyFeatures` \ `items` \ `imageAlt` | Image alt text                                    |

##### Optional Content Blocks

| Key                              | Value                                    | Note(s)                                     |
| -------------------------------- | ---------------------------------------- | ------------------------------------------- |
| `contentHeading`                 | Change "Case Study" heading text         | Defaults to "Case Study"                    |
| `promoVid` \ `heading`           | Change "Promotional Video" heading text  | _OPTIONAL_ Defaults to "Promotional Video"  |
| `promoVid` \ `item`              | 11ty partial filename                    | See **Promotional Videos** below            |
| `gallery` \ `heading`            | Change "Gallery" heading text            | _OPTIONAL_ Defaults to "Gallery"            |
| `gallery` \ `items` \ `image`    | Image filename                           | See **Images** below                        |
| `gallery` \ `items` \ `imageAlt` | Image alt text                           |
| `gallery` \ `items` \ `summary`  | Text displayed in lightbox view          |
| `stats` \ `heading`              | Change "Project Statistics" heading text | _OPTIONAL_ Defaults to "Project Statistics" |
| `stats` \ `items` \ `main`       | Larger, bold text in stat                |
| `stats` \ `items` \ `sub`        | Smaller subtext in stat                  |

### Related Work Files

`.md` files within `src/related-work/` will be rendered as a related work page.

1. Duplicate `_template.md` within `src/related-work/_drafts/`.
2. Update file with project data.
3. Move `project.md` to `src/related-work/`.

**Note:** `.md` files within `src/related-work/_drafts/` _will not_ be rendered by 11ty as pages or included on the index page.

#### Project Data Reference

##### Core Data

| Key                 | Value                           | Note(s)                                                 |
| ------------------- | ------------------------------- | ------------------------------------------------------- |
| `title`             | Name of the project             |
| `summary`           | Sentence describing the project | For consistency this _should not_ end in punctuation    |
| `thumb`             | Image filename                  | See **Images** below                                    |
| `displayOrder`      | Integer                         | Used to sort items in ascending order on the index page |
| `roles`             | List of roles                   | Follow JSON array syntax                                |
| `hero` \ `image`    | Image filename                  | See **Images** below                                    |
| `hero` \ `imageAlt` | Image `alt` text                |

##### Optional Content Blocks

| Key                              | Value                                   | Note(s)                                    |
| -------------------------------- | --------------------------------------- | ------------------------------------------ |
| `contentHeading`                 | Change "Case Study" heading text        | Defaults to "Case Study"                   |
| `promoVid` \ `heading`           | Change "Promotional Video" heading text | _OPTIONAL_ Defaults to "Promotional Video" |
| `promoVid` \ `item`              | 11ty partial filename                   | See **Promotional Videos** below           |
| `gallery` \ `heading`            | Change "Gallery" heading text           | _OPTIONAL_ Defaults to "Gallery"           |
| `gallery` \ `items` \ `image`    | Image filename                          | See **Images** below                       |
| `gallery` \ `items` \ `imageAlt` | Image alt text                          |
| `gallery` \ `items` \ `summary`  | Text displayed in lightbox view         |

### Writing Case Study and Project Background Content

See the [basic markdown syntax guide](https://www.markdownguide.org/basic-syntax/).

To add custom styling to content refer to the [markdown-it-attrs documentation](https://www.npmjs.com/package/markdown-it-attrs).
**Note:** Allowed attributes are `class`, `id` and those beginging with `regex`.

### Images

All project images should be saved within `src/assets/images/`. Files within this directory will be processed during the build process to be served in production. Subdirectories may be used to maintain organization.

When referencing an image within one of your project `.md` files, _do not_ include a file path, the templating and rendering engine have been configured to prefix all image sources with `/assets/images/`. All image assets will be output to `dist/assets/images` with no subdirectories. As such it is important that all file names be unique regardless of the project, it is recommended to prefix each image with the project name or abbreviation of it to avoid file conflicts.

### Promotional Videos

1. Create a new `.njk` file in `src/_includes/partials/`.
2. Copy the embed code from video provider (YouTube, Vimeo, etc.) and paste into the new file.

### Project Colors

1. Open `tailwind.config.js`.
2. Locate `theme.colors.projects`.
3. Add a new key for the new project and create a new object with `light` and `dark` keys as its value.
4. Add `bg-projects-projectName-light` and `bg-projects-projectName-dark` to the safelisted classes in `purge.safelist` otherwise the class will not be generated.

```js
projectNme: { light: "#FFFFFF", dark: "#000000"},
```

**Note:** The project name must use camelCase if the desired name is multiple words, `-` are invalid.
