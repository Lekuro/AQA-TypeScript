### git Bush

- pwd (where am I)
- ls (list of folders and files)
- cd (move to, .. mean step upper)
- mkdir (create folder)
- touch (create file and stage it at once)

### Create Project

- init package.json (type: module,)

```
cd .\lesson04-JS-function\
npm init
npm i -D @eslint/js eslint globals eslint-plugin-unicorn @stylistic/eslint-plugin prettier
npm i eslint prettier globals eslint-plugin-unicorn @eslint/js @stylistic/eslint-plugin
```

- add to package.json file in section script

```
"lint": "eslint .",
"build": "npm run lint && <build script>",
```

- create files in project and folder src for your js files

```
touch .gitignore
echo 'node_modules/' > .gitignore
touch README.md
touch .prettierrc
touch eslint.config.mjs
mkdir src
```

- Check code for mistakes

```
cd .\lesson04-JS-function\
npx eslint .\src\
```

## VSC

- Ctrl + ` - switch terminal and worked on file
- Ctrl + Alt + ArrowDown - edit vertically
- Crtl + / - to comment a block of code by line comment and undo
