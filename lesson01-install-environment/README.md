## Node

#### install node.js https://nodejs.org/

#### check how it works

```
node -v
npm -v
```

## NVM

### install nvm

**Windows**: https://github.com/coreybutler/nvm-windows  
_macOS/Linux_: https://github.com/nvm-sh/nvm

#### install node

```
nvm install <version example: 24>
nvm use <version>
```

#### check how it works

```
nvm -v
node -v
npm -v
```

##### security error helps such commands run from terminal

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy
Get-ExecutionPolicy -list
```

## VSC

#### install VSC https://code.visualstudio.com/download

#### add extension

- Code Spell Checker – перевірка правопису
- Cucumber (Gherkin) Full Support – підтримка Gherkin-сценаріїв
- Docker – інтеграція Docker
- ESLint – перевірка якості коду
- File & Folder Icons – красиві іконки файлів/папок
- Git Graph – візуалізація історії комітів
- Jasmine Test Explorer – підтримка Jasmine-тестів
- Jest – підтримка Jest-тестів
- Mocha – підтримка Mocha
- Mocha Test Explorer – запуск тестів Mocha з VS Code
- Playwright Test for VS Code – інтеграція Playwright
- Thunder Client – API-тестування прямо з VS Code
- TypeScript Extension Pack – покращення роботи з TypeScript
- TypeScript Toolbox – додаткові утиліти TS
- Version Lens – швидка перевірка версій залежностей
- Prettier - Code formatter - форматер коду
- Postman - тестувалка API
- Windsurf - AI

1.  add extension to VSC
1.  register account on https://windsurf.com/
1.  close VSC and open if you don't have redirect to windsurf.com site
1.  follow instruction:

- Copy the token below to your clipboard (expires in 5 minutes)
- In VSCode, open the Command Palette (Ctrl/Cmd + Shift + P), type Windsurf: Provide Authentication Token, and hit Enter.
- You should see a little welcome message on the bottom right of your Visual Studio Code window if authorization was successful. You're all set to use Windsurf Plugin!
