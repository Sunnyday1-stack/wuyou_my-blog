export default {
  title: '我的AI编程之旅',
  description: '记录学习心得与成长',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '学习AI编程', link: '/how-to-learn-ai' }
    ],
    sidebar: [
      {
        text: '我的文章',
        items: [
          { text: '如何学习AI编程', link: '/how-to-learn-ai' }
        ]
      }
    ]
  },
  vite: {
    server: {
      allowedHosts: ['.sealoshzh.site']
    }
  }
}
