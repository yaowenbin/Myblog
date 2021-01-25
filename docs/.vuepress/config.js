// https://v1.vuepress.vuejs.org/zh/config/
module.exports = {
  title: "你的名字~",
  description: '既许一人以偏爱，愿尽余生之慷慨~',
  // build 的输出目录
  // dest: 'blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // 部署站点的基础路径
  base: '/',
  theme: 'reco',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
     /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow' ,// default 'tomorrow'
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    ],
    sidebar: {

    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      },
      socialLinks: [
        // { icon: 'reco-github', link: 'https://github.com/recoluan' },
        // { icon: 'fa-camera', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    logo: '/head.jpg',
    authorAvatar: '/head.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '小橋流水人家',
    // 备案号
    record: '',
    // 项目开始时间
    startYear: '始於2021',
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
  },
  plugins: [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    '@vuepress-reco/extract-code',
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加入QQ交流群 🎉🎉🎉',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: '/rvcode_qq.png'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     }
    //   ]
    // }]
  ]
}
