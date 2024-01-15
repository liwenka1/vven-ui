import { Command } from 'commander'
import prompts from 'prompts'
import chalk from 'chalk'
import fse from 'fs-extra'
import path from 'path'

import { rawConfig } from '@/utils/zod'

const program = new Command()

const promptForConfig = async () => {
  const highlight = (text: string) => chalk.cyan(text)

  const options = await prompts([
    {
      type: 'toggle',
      name: 'typescript',
      message: `Would you like to use ${highlight('TypeScript')} (recommended)?`,
      initial: true,
      active: 'yes',
      inactive: 'no'
    }
  ])

  const config = rawConfig.parse({
    typescript: options.typescript
  })

  const cwd = process.cwd()
  const targetAir = path.join(cwd, 'components.json')
  if (fse.existsSync(targetAir)) {
    console.log(config, cwd)
  } else {
    await fse.writeFile(targetAir, JSON.stringify(config, null, 2))
  }

  return options
}

const init = program
  .name('init')
  .description('初始化脚手架配置')
  .action(() => {
    promptForConfig()
  })

export default init
