import { Command } from 'commander'

const program = new Command()

const add = program
  .name('add')
  .description('通过脚手架添加组件')
  .action((name) => console.log('add', name))

export default add
