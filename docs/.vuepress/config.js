module.exports = {
  title: "Games101 笔记",
  description: "Games101 笔记",
  base: '/notes/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
          text: '分类',
          ariaLabel: '分类',
          items: [
              { text: 'games101笔记', link: '/pages/games101/第一讲.md' },
          ]
      },
  ],
    sidebar: {
      '/pages/games101/':[
        {
            title: 'Games101',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                ['第一讲.md', '第一讲'],
                ['第二讲.md', '第二讲'],
                ['第五讲.md', '第五讲'],
                ['第六讲.md', '第六讲'],
                ['第七讲.md', '第七讲'],
                ['第八讲.md', '第八讲'],
                ['第九讲.md', '第九讲'],
                ['第十讲.md', '第十讲'],
                ['第十一讲.md', '第十一讲'],
                ['第十二讲.md', '第十二讲'],
                ['第十三讲.md', '第十三讲'],
                ['第十四讲.md', '第十四讲'],
                ['第十五讲.md', '第十五讲'],
                ['第十六讲.md', '第十六讲'],
                ['第十七讲.md', '第十七讲'],
                ['第十八讲.md', '第十八讲'],
                ['第十九讲.md', '第十九讲'],
                ['第二十讲.md', '第二十讲'],
                ['第二十一讲.md', '第二十一讲'],
                ['第二十二讲.md', '第二十二讲'],
            ]
        }
    ],
    },
  },
};
