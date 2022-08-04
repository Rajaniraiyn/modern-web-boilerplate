<div align=center id=top >

# Modern Web Boilerplate

<!-- Markdown badges will be added -->

This is a modern front-end boilerplate which is partially based on islands architecture with focus on improved DX (Developer Experience).

</div>

## Modern Features

<!-- <details align=center>

<summary>Click to view all features</summary> -->

<div align=center >

| Feature            | Advantage                               |
| ------------------ | --------------------------------------- |
| Dynamic Imports    | Reduced initial load times              |
| Bundle Splitting   | Reducing the loading and execution time |
| Tree Shaking       | Dead code removal                       |
| Auto Prefixing     | Supports more browsers                  |
| SPA                | Improved UX with routing                |
| PWA                | Native app like performance             |
| Image Optimization | Reduces Image size                      |
| Special Routing    | Lightweight SPA                         |
| Rough Annotations  | Modern site decorators                  |
| Type Checking      | Reduced Bugs                            |
| Linting            | Maintain Code Standards                 |
| Git Hooks          | Improved DX (Developer Experience)      |
| HMR                | Quick response on code change           |
| Workflows          | Automated github workflows              |

</div>

<!-- </details> -->

## Technologies Used

<!-- <details align=center>

<summary>Click to view all technologies</summary> -->

<div align=center >

| Technology                                                     | Why?                                                                          |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Svelte](https://svelte.dev/)                                  | DX, no Virtual DOM, build time compilation, reactivity and ease of use        |
| [Vite](https://vitejs.dev/)                                    | Blazing fast, DX, HMR, Extensible plugins and framework agnostic              |
| [TypeScript](https://www.typescriptlang.org/)                  | Type Checking, DX, Code Auto Completion and Superset of JavaScript            |
| [EsLint](https://eslint.org)                                   | Code Linting and Maintains Standards                                          |
| [Prettier](https://prettier.io/)                               | Code Formatting and Maintaining standards                                     |
| [Commitizen](https://commitizen-tools.github.io/commitizen/)   | Lints git commit messages                                                     |
| [Husky](https://typicode.github.io/husky/#/)                   | Git Hooks before and after git commit                                         |
| [Tinro](https://github.com/AlexxNB/tinro)                      | Lightweight Routing                                                           |
| [Terser](https://terser.org)                                   | JavaScript minification, mangling and tangling                                |
| [PostCSS](https://postcss.org)                                 | CSS transformations                                                           |
| [AutoPrefixer](https://autoprefixer.github.io)                 | Prefixes the CSS to support more browsers                                     |
| [GitHub Actions](https://github.com/features/actions)          | Building and Deploying the Code in Github Pages                               |
| [Dependabot](https://github.com/dependabot)                    | Automatic Dependency Updates                                                  |
| [CodeQL](https://codeql.github.com/)                           | Discover vulnerabilities across a codebase with semantic code analysis engine |
| [PWA](https://web.dev/progressive-web-apps/)                   | App like installation and Offline capabilities                                |
| [Rollup](https://www.rollupjs.org)                             | Aggressive Bundle Optimizations and TreeShaking                               |
| [EsBuild](https://esbuild.github.io)                           | Ultra fast dependency pre bundling                                            |
| [Conventional Commits](https://www.conventionalcommits.org/)   | Git commit messages standards                                                 |
| [Release Please](https://github.com/googleapis/release-please) | Automated versioning and releasing packages based on commits                  |
| [Image Sharp](https://sharp.pixelplumbing.com/)                | Image optimizations out-of-the-box                                            |

</div>

<!-- </details> -->

## Automation Scripts

### `yarn dev`

- Starts a fast web server with HMR at http://localhost:5173

<details>

<summary><strong>Runs<strong></summary>

```sh
vite
```

</details>

### `yarn build`

- Compiles the svelte code to highly optimized and bundled HTML, CSS and JavaScript in `dist/` folder
- Optimizes images using Sharp and downloads custom fonts from google and bundles it up
- Produces the production code to be hosted

<details>

<summary><strong>Runs<strong></summary>

```sh
vite build
```

</details>

### `yarn preview`

- Starts a simple server with builded production site

<details>

<summary><strong>Runs<strong></summary>

```sh
vite preview
```

</details>

### `yarn lint`

- Lints the code with `src` directory and tries to fix the issues to ensure the code quality and standards across the entire codebase

<details>

<summary><strong>Runs<strong></summary>

```sh
eslint --ext .js,.ts,.svelte --ignore-path .gitignore --fix src
```

</details>

### `yarn format`

- Formats the entire project with prettier to make the code base more clean which improves the the readability and thus makes the project more maintainable

<details>

<summary><strong>Runs<strong></summary>

```sh
prettier --write . '!**/dist'
```

</details>

### `yarn check`

- TypeChecks the svelte files with TypeScript to reduce runtime bugs

<details>

<summary><strong>Runs<strong></summary>

```sh
svelte-check --tsconfig tsconfig.json
```

</details>

### `yarn prepare`

- Setup Husky Git Hooks for various automation

<details>

<summary><strong>Runs<strong></summary>

```sh
husky install
```

</details>

### `yarn commit`

- Runs commitizen and lints the commit messages to make release-please workflow to work well

<details>

<summary><strong>Runs<strong></summary>

```sh
cz
```

</details>

## Automation Workflows

### Husky Git Hooks

#### Pre Commit

- Runs all necessary linting, formatting and build workflows
  ensures code standards and makes sure that everything works fine before committing

**Hook at:** [pre-commit](.husky/pre-commit)

<details>

<summary><strong>Runs following commands</strong></summary>

```bash
yarn lint #eslint linting
yarn format #prettier formatting
yarn build #vite-rollup building
```

</details>

#### Post Commit

- Runs commit message linting to make sure the commit message needs all [Conventional Commits](https://www.conventionalcommits.org/) standards which will be later used for automated versioning and release system by google's release please

**Hook at:** [prepare-commit-msg](.husky/prepare-commit-msg)

<details>

<summary><strong>Runs following command</strong></summary>

```bash
exec < /dev/tty && yarn commit --hook || true #lints commit with interactive prompts
```

</details>

### GitHub Actions

#### DependaBot

- Automated dependencies update including critical security updates
- Maintained by GitHub and used by top projects and organizations all over the world

**Workflow in:** [dependabot.yaml](.github/dependabot.yaml)

#### CodeQL

- Analyzes Code Quality to make sure the code is not bad and does static analysis to find out common security vulnerabilities

**Workflow in:** [codeql-analysis.yaml](.github/workflows/codeql-analysis.yaml)

#### Release Please

- Automated semantic versioning and releases based on the commits with automatic changelog generation and version bumps.
- Created by Google to use for their products

**Workflow in:** [release-please.yaml](.github/workflows/release-please.yml)

#### Deploy

- Automated build system which deploys the optimized compiled version of the site to `gh-pages` branch for GitHub Pages hosting

**Workflow in:** [deploy.yaml](.github/workflows/deploy.yaml)

<!-- Configurations  -->

<!-- Usage Guides -->

## LICENSE

[MIT](LICENSE)

## Contributions

All kind of contributions are welcomed

<div align=center >

---

Made with ❤️ by [Rajaniraiyn](https://rajaniraiyn.github.io)

---

<br />

[`⬆️⬆️ Move to Top ⬆️⬆️`](#top)

</div>
