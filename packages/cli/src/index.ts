#! /usr/bin/env node

import { Command } from 'commander'

const main = () => {
  const program = new Command()

  program
    .name('vven-ui')
    .description('来给你的组件添加一些好用的组件')
    .version('0.0.1')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
      // 打印执行结果
      console.log('name:', name, 'options:', options)
    })

  program.parse()
}

main()
