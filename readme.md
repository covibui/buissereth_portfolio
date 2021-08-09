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
- Site is served at [https://localhost:8080](https://localhost:8080)
  - Configure using `PORT` in `.env`
- **Note:** `clean` will be run prior to build sequence

### Build

```sh
npm run build
```

- Build files for production to `dist` directory
- **Note:** `clean` will be run prior to build sequence
