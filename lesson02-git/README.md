## Git

1. Create account on https://github.com

1. Download git https://git-scm.com/downloads

1. cmd or GitBush:

```
   git config --global user.name "Ім’я Прізвище"
   git config --global user.email "твій@email.com"
```

4. Select or create folder and open GitBush there

```
  git clone <посилання>
  git status
  //…or create a new repository on the command line
  echo "# some123" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Lekuro/some123.git
  git push -u origin main
  //…or push an existing repository from the command line
  git remote add origin https://github.com/Lekuro/some123.git
  git branch -M main
  git push -u origin main
```

### Useful Commands

- Оновити master(main) гілку до останньої версії

```
  git pull
```

- Створити нову гілку в якій ви будете робити зміни до коду

```
  git checkout-b <branchName>
```

- Перейти на гілку master (main) в залежності яку гілку ви вибрали як головну

```
  git checkout master
  git checkout main
```

- Додати зміни в stash після того як ми дадали/поміняли код

```
  git add . (або перераховуємо файли які додаємо)
```

- Закомітити зміни

```
  git commit -m "<comment>"
  git commit -am "<comment>"
```

- Запушити зміни на віддалений репозиторій GitHub

```
  git push
  git push --set-upstream origin 05-JS-function
```

- Змержати зміни треба перейти на main і тоді

```
  git merge <branch>
```

- List of branches

```
  git branch
```

- List of log

```
  git log
```

- Delete changes made in file

```
  git restore <file-name.extension>
```

- Move 'Head' to another commit

```
  git reset --soft <commit-hash>
```
