## Mocha-awesome

### Install for Jest

```
npm i -D @mate-academy/jest-mochawesome-reporter mochawesome-report-generator
```

### Change `jest.config.ts`

```
[
            '@mate-academy/jest-mochawesome-reporter',
            {
                outputName: 'jest-mochawesome',
                createDirIfMissing: true,
            },
 ]
```
