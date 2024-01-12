#! /usr/bin/env node

import { Command } from 'commander'

const main = () => {
  const program = new Command()

  program.name('vven-ui').description('来给你的组件添加一些好用的组件').version('0.0.1')

  program.parse()
}

main()
