import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = [
  { text: '快速开始', link: '/' },
  {
    text: '通用',
    link: '/configs',
    children: [{ text: 'Button按钮', link: '/components/button/' }],
  },
  { text: '导航' },
  { text: '反馈' },
  { text: '数据录入' },
  { text: '数据展示' },
  { text: '布局' },
]

export default {
  title: 'Hard UI',
  description: '一个vue3组件库',
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    },
  },
}
