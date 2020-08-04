"use strict";

const path = require('path');
// const yargs = require('yargs').logger;
const reporter = require('cucumber-html-reporter');
const logger = require('./loggerConfig.js').logger;
// const { browser } = require('protractor');

const reporterOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: true,
    screenshotsDirectory: 'screenshots/',
    storeScreenshots: true    
}

exports.config = {
    allScriptsTimeout: 200000,
    getTimeoutPage: 200000,  
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: path.resolve('./test/e2e/features/**/*.feature'),
    //specs: ['../test/e2e/features/ContactUs/contactus.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName:  'chrome',
        shardTestFiles: false,
        maxInstances: 1,
        chromeOptions: {
            args: ['--no-sandbox']
        }
    },
   /* disableChecks: true,
    directConnect: true,*/
    cucumberOpts: {
        require: [path.resolve('./test/e2e/step_definitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:./reports/report.json', './node_modules/cucumber-pretty'],
        tags: '@epam'
    },
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        return browser.manage().window().setSize(1000, 800);
    },
    afterLaunch: () => {        
        return reporter.generate(reporterOptions);
    },
    plugins: [
        {
            path: '../node_modules/protractor-junit-xml-plugin', //path for protractor plugin
            outdir: 'reports',
            filename: 'e2e-tests',
            parseXrayId: false, //default false
            jiraProjectKey: 'CARE',
            uniqueName: true, //default true
            uniqueFolderPerExecution: true, // default false
            captureSapphireWebAppContextVar: true //default false
        }
    ]
}
