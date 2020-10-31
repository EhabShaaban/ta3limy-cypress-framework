## ta3limy script

#### Purpose

This test suite and test script are designed to test against FAQ page & New Student Registration features on ta3limy.com
> All test checklists, app analysis and bugs found under *documentations* folder

![Alt Text](https://drive.google.com/uc?export=view&id=1UpAOkBk8tPtn5NUcb6-VrHIcZ70_jvtz)

#### Setup

> Start by installing cypress in you already don't have it https://www.cypress.io/

+ Run the following commands for *mochawesome* compatibility:
+ ``npm install mocha --save-dev``
+ ``npm install cypress-multi-reporters --save-dev``
+ ``npm install mochawesome --save-dev``
+ ``npm install mochawesome-merge --save-dev``
+ ``npm install mochawesome-report-generator --save-dev``

#### How to run

+ Open your terminal and type ``npx cypress open --browser=chrome`` to run tests on chrome
+ Run ``npm run test`` to generate mochawesome reports under *../cypress/reports/mochareports/report.html* and for test videos go to *../cypress/videos/Test*

#### Tech Stack

+ JS
+ JSON
+ cypress
+ mochawesome
+ POM

> All JSON files should be living under *../cypress/fixtures*
