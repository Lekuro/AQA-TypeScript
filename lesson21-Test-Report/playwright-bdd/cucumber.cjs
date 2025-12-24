const common = {
    loader: ['ts-node/esm'],
    format: ['@cucumber/pretty-formatter'],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    import: ['src/**/*.ts'],
    tags: 'not @skip'
};

const ci = {
    ...common,
    format: [
        ...common.format,
        'allure-cucumberjs/reporter:allure',
        'json:./reports/cucumber.json',
        'html:./reports/cucumber-embedded.html',
        'junit:./reports/cucumber.xml'
    ],
    formatOptions: {
        ...common.formatOptions,
        resultDir: 'allure-results'
    },
    retry: 3
};

const local = {
    ...ci,
    retry: 0
};

module.exports = {
    default: common,
    ci: ci,
    local: local
};
