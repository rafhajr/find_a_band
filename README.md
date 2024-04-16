## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🎨 [Tailwind with JIT](https://tailwindcss.com/)
- 🦾 [NEXTUI](https://nextui.org/docs/guide/introduction)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Commit lint](https://github.com/conventional-changelog/commitlint) - helps your team adhering to a commit convention
- [Husky](https://typicode.github.io/husky/)

## Usage

### Development

Open the project folder and run:

```bash
npm i
```

Just run and visit http://127.0.0.1:3000/

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `.next` that ready to be served.

### Commit

For commit we use Husky, which runs lint and standardizes commit messages. The message must have a type and a message, there are four types ["feature", "chore", "fix", "bugfix"], and the message needs to be lowercase, examples:

```bash
git commit -m 'feature: adding or enhancing existing features'

git commit -m 'chore: code refactoring, updating dependencies, or improving project structure'

git commit -m 'fix: fix details in the code, not necessarily bugs'

git commit -m 'bugfix: fix bugs in the code'
```


### Issues

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.
