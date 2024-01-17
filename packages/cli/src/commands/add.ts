import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'

const program = new Command()

const addComponents = async () => {
  const cwd = process.cwd()
  const targetAir = path.join(cwd, 'init.ts')
  await fs.copy(path.join(__dirname, 'src', 'commands', 'init.ts'), targetAir)
}

const add = program
  .name('add')
  .description('通过脚手架添加组件')
  .action(() => {
    addComponents()
  })

export default add
