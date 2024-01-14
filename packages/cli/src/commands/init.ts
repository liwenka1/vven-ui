import { Command } from 'commander'

const program = new Command()

const init = program
  .name('init')
  .description('初始化脚手架配置')
  .action((name) => console.log('init', name))

export default init
