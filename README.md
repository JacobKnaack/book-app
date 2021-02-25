# Book App

Respository for testing Book App Features in the Gradiator Automated Test Utility.

## Table of Contents

- __data__: SQL schema definitions to run within a SQL shell.  Shuold be used to set up tables and relations and seeding the database with initial data items.
- __gradiator__: Gradiator config and testing files.  Contains features composed in Gherkin syntax to describe application behavior.  This is supported by step_definitions which contains puppeteer scraping logic to be executed by the gradiator application.  
- __public__: static JavaScript and CSS files to be templated by EJS.
- __views__: templates for EJS to be parsed and injected with content from Express Server functionality.
- __server.js__: application logic defining Express JS routes and templating specifications for HTTP Responses.
