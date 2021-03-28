# email-api

email-api is an open-source backend api in node.js, which receives and saves the user information and send email to the signed users.

I use an example of a [Net Promoter Score(NPS)](https://en.wikipedia.org/wiki/Net_Promoter), which would be useful for a lot of companies.

![generated email example](https://github.com/marcoulakis/email-api/blob/main/example.png)

## How to run it?

First of all, you have to you must have [node js and npm command](https://nodejs.org/en/download/) installed.

If you already have it installed, install yarn command using:

### `npm install yarn`

And then, in the project directory, must run first:

### `yarn`

So now you can run the following commands:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn typeorm`

Use typeorm to make and manage databases migrations.<br />
So now you can run the following subcommands:

#### `migration:crete -n [nameOfMigration]`
Creates a new migration with the name that you declared ahead of `-n`. <br />
(example: `yarn typeorm migration:crete -n createUsers`).

#### `migration:run`
Runs all pending migrations. <br />
(example: `yarn typeorm migration:run`).

#### `migration:revert`
Revert the last migration run<br />
(example: `yarn typeorm migration:revert`).

Launches the test runner in the interactive watch mode.<br />

##### [Learn More About TypeORM](https://typeorm.io/)
