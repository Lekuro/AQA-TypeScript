1.1 install VSC https://code.visualstudio.com/download

1.2 add extension

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

  2.1 install node.js https://nodejs.org/

  2.2 check how it works
  node -v
  npm -v

  3.1 install nvm
  Windows: https://github.com/coreybutler/nvm-windows
  macOS/Linux: https://github.com/nvm-sh/nvm

  3.2 set node
  nvm install <version example: 24>
  nvm use <version>

  3.3 check how it works
  nvm -v
  node -v
  npm -v

  4.1 in case you have security error helps such commands run from terminal
  Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  Get-ExecutionPolicy
  Get-ExecutionPolicy -list
