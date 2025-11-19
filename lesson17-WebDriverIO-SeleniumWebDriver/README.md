# WebDriverIO <https://webdriver.io/docs/gettingstarted>

## Best practices

### Use resilient selectors

Using selectors that don't change in the DOM  
👍

```
await $('aria/Submit')
await $('[test-id="submit-button"]')
await $('#submit-button')

```

👎 `await $('.button')`

### Limit the amount of element queries

```
👍 await $('table tr td')

```

👎 `await $('table').$('tr').$('td')`

##### The only time you should use chaining is when you want to combine different selector strategies

```
👍 await $('//custom-datepicker').$('#calendar').$('aria/Select')
```

### Prefer locating a single element instead of taking one from a list

```
👍 await $('table tr:nth-child(15)')
```

`👎 await $$('table tr')[15]`

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

`
👎
await name.setValue('Bob')
await email.setValue('bob@webdriver.io')
await age.setValue('50')
await submitFormButton.waitForEnabled()
await submitFormButton.click()`
`
###