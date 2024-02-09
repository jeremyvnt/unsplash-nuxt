# Unsplash-nuxt

Nuxt POC using Unsplash API.

This applications contains 4 pages:

- Home page (/): displays the top trending photos
- Topic page (/topics/:topicId): displays photos related to the selected topic
- Search page (/search): based on search result, this page displays:
  - associated photos (/search/photos/:result)
- Photo details page (/photos/:slug): displays single photo with it data

## Todo list

- [x] Init static quality configuration (eslint, prettier, git hooks)
- [x] Install and configure Vuetify
- [x] Create pages & manage routing
- [x] Implement main layout and manage redirections to the different pages
- [x] Implement home page with mocked data
- [x] Manage HTTP service to request the Unsplash API
- [x] Replace mocked data with data from the API on topic list.
- [x] Replace mocked data with data from the API on home page.
- [x] Implement topic page
- [x] Implement search page
- [ ] Implement photo details page

### Improvements

- [ ] Manage i18n
- [ ] Manage user authentication
- [ ] Implement authenticated user profile page
- [ ] Implement upload photo feature
- [ ] Implement collections features

## Setup

### Requirements

Create an `.env` file in the project root and set the UNSPLASH_ACCESS_KEY variable from your
unsplash application's access key.

```
UNSPLASH_ACCESS_KEY="unsplash-app-access-token"
```

### Basic commands

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more
information.
