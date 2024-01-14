#! /usr/bin/env node

import { Command } from 'commander'

import init from './commands/init'
import add from './commands/add'
import { helpFiglet } from './utils/figlet'

const main = () => {
  const program = new Command()

  program.name('vven-ui').description('来给你的组件添加一些好用的组件').version('0.0.1')

  program.addCommand(init).addCommand(add)

  program.on('--help', helpFiglet)

  program.parse()
}

main()
