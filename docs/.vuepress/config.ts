import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'


export default {
    theme: defaultTheme({
      // Public 文件路径
      logo: '/images/hero.png',
      //导航栏
      navbar: [
        // 嵌套 Group - 最大深度为 2
        {
          text: 'Group',
          children: [
            {
              text: 'SubGroup',
              children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            },
          ],
        },
        // 控制元素何时被激活
        {
          text: 'Group 2',
          children: [
            {
              text: 'Always active',
              link: '/',
              // 该元素将一直处于激活状态
              activeMatch: '/',
            },
            {
              text: 'Active on /foo/',
              link: '/not-foo/',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/foo/',
            },
          ],
        },
      ],
      // 可折叠的侧边栏
      sidebar: {
        '/reference/': [
          {
            text: 'VuePress Reference',
            collapsible: true,
            children: ['/reference/cli.md', '/reference/config.md'],
          },
          {
            text: 'Bundlers Reference',
            collapsible: true,
            children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
          },
        ],
      },
    }),
    plugins: [
      searchPlugin({
        // 配置项
        locales: {
          '/': {
            placeholder: '搜索文档',
          },
        },
      }),
    ]
  }