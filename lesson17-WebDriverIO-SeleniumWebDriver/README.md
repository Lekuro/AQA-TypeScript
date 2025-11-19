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

👍

```
await $('table tr td')

```

👎

```
await $('table').$('tr').$('td')
```
