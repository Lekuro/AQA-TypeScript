### git Bush

- pwd (where am I)
- ls (list of folders and files)
- cd (move to, .. mean step upper)
- mkdir (create folder)
- touch (create file and stage it at once)

### Create Project

- init package.json (type: module,) GitBush console

```
cd lesson04-JS-array-object-loops/
npm init
npm i -D @eslint/js eslint globals eslint-plugin-unicorn @stylistic/eslint-plugin prettier
npm i eslint prettier globals eslint-plugin-unicorn @eslint/js @stylistic/eslint-plugin
```

- add to package.json file in section script

```
"lint": "eslint .",
"build": "npm run lint && <build script>",
```

- create files in project and folder src for your js files GitBush console

```
touch .gitignore
echo 'node_modules/' > .gitignore
touch README.md
touch .prettierrc
touch eslint.config.mjs
mkdir src
```

- Check code for mistakes powershell console

```
cd .\lesson04-JS-array-object-loops\
npx eslint .\src\
```

## VSC

- Ctrl + ` - switch terminal and worked on file
- Ctrl + Alt + ArrowDown - edit vertically
- Ctrl + Shift + L - edit all occurrence of variable