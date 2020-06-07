#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white('              Victor Soares /'),
  handle: chalk.cyan('victorsoares96'),
  work: chalk.white('Mobile and Web Front End Developer'),
  web: chalk.cyan(' https://victorsoares-cv.netlify.app'),
  twitter: chalk.cyan('https://twitter.com/VictorSoares_96'),
  github: chalk.cyan('https://github.com/victorsoares96'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/victor-soares96'),
  instagram: chalk.cyan('https://www.instagram.com/vitu.soares'),
  npx: chalk.yellow.bold('npx victorsoares96'),
  
  labelWork: chalk.white.bold('      Work:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  labelCard: chalk.white.bold('      Card:'),
  labelFinal: chalk.yellow.bold(`
    console.log('${chalk.white('Nunca desista dos seus sonhos!')}')
  `)
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const web = `${data.labelWeb} ${data.web}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const instagram = `${data.labelInstagram}  ${data.instagram}`
const carding = `${data.labelCard}  ${data.npx}`
const final = `${data.labelFinal}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar 
// o ‘boxen de maneira efetiva: 
const output = (
  heading + newline + newline + 
  working + newline + 
  web + newline +
  twittering + newline + 
  githubing + newline + 
  linkedining + newline + 
  instagram + newline + 
  newline + carding +
  newline + final
);

console.log(chalk.green(boxen(output, options)));