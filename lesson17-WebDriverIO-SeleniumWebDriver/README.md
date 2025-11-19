# WebDriverIO <https://webdriver.io/docs/gettingstarted>

## Best practices

### Use resilient selectors

Using selectors that don't change in the DOM

```
👍
await $('aria/Submit')
await $('[test-id="submit-button"]')
await $('#submit-button')

```

`👎 await $('.button')`

### Limit the amount of element queries

```
👍 await $('table tr td')

```

`👎 await $('table').$('tr').$('td')`

##### The only time you should use chaining is when you want to combine different selector strategies

```
👍 await $('//custom-datepicker').$('#calendar').$('aria/Select')
```

### Prefer locating a single element instead of taking one from a list

```
👍 await $('table tr:nth-child(15)')
```

`👎 await $$('table tr')[15]`

### Use the built-in assertions

```
👍 await expect(button).toBeDisplayed()
```

`👎 expect(await button.isDisplayed()).toBe(true)`

### Lazy loading and promise chaining

```
// 👍
const button = $('div').$('button')
await button.click()
// or
await $('div').$('button').click()
```

```
// 👎
const div = await $('div')
const button = await div.$('button')
await button.click()
// or
await (await (await $('div')).$('button')).click()
```

### Don't overuse commands and assertions

```
👍
await button.click()
👍
await expect(button).toHaveText('Submit')
```

```
👎
await button.waitForExist()
await expect(button).toBeDisplayed()
👎
await button.waitForDisplayed()
await expect(button).toBeDisplayed()
👎
await expect(button).toBeExisting()
await expect(button).toHaveText('Submit')
👎
await expect(button).toBeDisplayed()
await expect(button).toHaveText('Submit')
👎
await expect(button).toBeDisplayed()
await button.click()
```

### Don't pause

```
👍
await nameInput.setValue('Bob')
await submitFormButton.waitForEnabled()
await submitFormButton.click()
```

```
👎
await nameInput.setValue('Bob')
await browser.pause(200) // wait for submit button to enable
await submitFormButton.click()
```

### Executing code in parallel

```
👍
await Promise.all([
    name.setValue('Bob'),
    email.setValue('bob@webdriver.io'),
    age.setValue('50'),
])
await submitFormButton.waitForEnabled()
await submitFormButton.click()
👍
await form.submitData(new Person('bob@webdriver.io'))
```

```
👎
await name.setValue('Bob')
await email.setValue('bob@webdriver.io')
await age.setValue('50')
await submitFormButton.waitForEnabled()
await submitFormButton.click()`
```

### Dynamic Tests

Use environment variables to store dynamic test data e.g. secret credentials, within your environment rather than hard code them into the test. Parameterize Tests page.

### Lint your code

Using eslint to lint your code you can potentially catch errors early, use our linting rules to make sure that some of the best practices are always applied.

### Async loops

```
👍
const characters = 'this is some example text that should be put in order'
for (const character of characters) {
    await browser.keys(character)
}
```

The following will not work as asynchronous callbacks are not supported.

```
👎
const characters = 'this is some example text that should be put in order'
characters.forEach(async (character) => {
    await browser.keys(character)
})
```

### Keep it simple

```
👍
class BetterExample {
    public async selectOptionByValue(value: string) {
        await $('select').click();
        await $(`option[value=${value}]`).click();
    }

    public async selectOptionByText(text: string) {
        await $('select').click();
        await $(`option=${text}]`).click();
    }
}
👍 use unique identifiers (often used for custom elements)
await expect($('[data-testid="Products"]')).toHaveText('Products');
👍 accessibility names (often used for native html elements)
await expect($('aria/Product Prices')).toHaveText('Prices');
```
