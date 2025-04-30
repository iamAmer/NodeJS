#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import papa from 'papaparse';
import * as fs from 'fs';

const path = './expenses.csv';
const program = new Command();

const questions = [
  {
    type: 'input',
    name: 'expenses',
    message: "enter your expense:"
  },
  {
    type: 'input',
    name: 'price',
    message: "enter your price:"
  },
];

  // inquirer
  // .prompt(questions)
  // .then((answers) => {
  //   console.log(answers);
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //   } else {
  //   }
  // });

program
  .name('expenso')
  .description('Wanna track your expenses?')
  .version('1.0.0');

program
  .command('add')
  .alias('ad')
  .description('Add an expense')
  .argument('<title>', 'Add an expense type')
  .option('-p, --price <price>', 'Specify the expense price')
  .action((title, options) => {
    console.log(`Title: ${title}`);
    console.log(`Price: ${options.price}`);

    addExpense(title, options.price);
  });

program
  .command('list')
  .alias('l')
  .description('list all the expenses!')
  .action(() => {
    const csvContent = fs.readFileSync('./expenses.csv', 'utf8');

    const jsonContent = papa.parse(csvContent, {
      header: true,
      skipEmptyLines: true
    });

    console.table(jsonContent.data);
  });

program.parse(process.argv);

function addExpense(title, price) {
    const line = `${title},${price}\n`;

    if (!fs.existsSync(path)) {
        const header = 'theExpense,price\n';
        fs.writeFile(path, header + line, 'utf8', (err) => {
            if (err) return console.error(`Error writing file: ${err}`);
            console.log('Expense recorded with header.');
        });
    } else {
        fs.appendFile(path, line, 'utf8', (err) => {
            if (err) return console.error(`Error appending file: ${err}`);
            console.log('Expense appended.');
        });
    }
}