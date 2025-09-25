1. Create account on https://github.com

2. Download git https://git-scm.com/downloads

3. cmd or GitBush:
   git config --global user.name "Ім’я Прізвище"
   git config --global user.email "твій@email.com"

4. Create new repository on GitHub and copy link of it
   git clone <посилання>
   git status

5. Some command

- Перейти на гілку master (main) в залежності яку гілку ви вибрали як головну

  git checkout master або
  git checkout main

- Оновити master(main) гілку до останньої версії

  git pull

- Створити нову гілку в якій ви будете робити зміни до коду

  git checkout-b <branchName>

- Додати зміни в stash після того як ми дадали/поміняли код

  git add . (або перераховуємо файли які додаємо)

- Закомітити зміни

  git commit -m "<comment>"

- Запушити зміни на віддалений репозиторій GitHub

  git push

- Змержати зміни треба перейти на main і тоді

  git merge <branch>
