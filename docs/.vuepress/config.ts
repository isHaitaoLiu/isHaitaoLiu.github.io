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
              text: 'Spring',
              link: '/back-end/Spring.md',
              activeMatch: '^/back-end/',
            },
            {
              text: 'SpringBoot',
              link: '/back-end/SpringBoot.md',
              activeMatch: '^/back-end/',
            },
            {
              text: 'SpringCloud',
              link: '/back-end/SpringCloud.md',
              activeMatch: '^/back-end/',   // 控制元素何时被激活
            },
          ],
        },
        {
          text: '中间件',
          children: [
            {
              text: 'Zookeeper',
              link: '/middleware/Zookeeper.md',
              // 该元素将一直处于激活状态
              activeMatch: '^/middleware/',
            },
            {
              text: 'Redis',
              link: '/middleware/Redis.md',
              // 该元素在当前路由路径是 /middleware/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/middleware/',
            },
            {
              text: 'Kafka',
              link: '/middleware/Kafka.md',
              activeMatch: '^/middleware/',
            },
          ],
        },
        {
          text: '工具｜部署',
          children: [
            {
              text: 'Shell',
              link: '/deploy/Shell.md',
              // 该元素将一直处于激活状态
              activeMatch: '^/deploy/',
            },
            {
              text: 'Kubernetes',
              link: '/deploy/Kubernetes.md',
              // 该元素在当前路由路径是 /middleware/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/deploy/',
            },
            {
              text: 'Git',
              link: '/deploy/Git.md',
              activeMatch: '^/deploy/',
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