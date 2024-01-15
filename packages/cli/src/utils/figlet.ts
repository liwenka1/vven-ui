import figlet from 'figlet'

export const helpFiglet = () => {
  // 使用 figlet 绘制 Logo
  console.log(
    '\r\n' +
      figlet.textSync('vven-ui', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      })
  )
}
