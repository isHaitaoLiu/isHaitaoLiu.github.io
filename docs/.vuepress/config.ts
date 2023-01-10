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
          text: '后端开发',
          children: [
            {
              text: 'SubGroup',
              children: ['/back-end/Spring.md', '/back-end/SpringBoot.md', '/back-end/SpringCloud.md'],
              activeMatch: '/',
            },
          ],
        },
        // 控制元素何时被激活
        {
          text: '中间件',
          children: [
            {
              text: 'Zookeeper',
              link: '/middleware/Zookeeper.md',
              // 该元素将一直处于激活状态
              activeMatch: '/',
            },
            {
              text: 'Redis',
              link: '/middleware/Redis.md',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/middleware/',
            },
            {
              text: 'Kafka',
              link: '/middleware/Kafka.md',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/middleware/',
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