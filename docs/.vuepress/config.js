module.exports = {
  title: "学习笔记",
  description: "学习不同知识，记录各种点滴",
  head: [
    ["link", { rel: "icon", href: "/avatar.png" }], //浏览器的标签栏的网页图标
  ],
  base: "/notes/",
  themeConfig: {
    logo: "/avatar.png",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "分类",
        ariaLabel: "分类",
        items: [
          { text: "目录", link: "/pages/menu/menu.md" },
          { text: "Games101笔记", link: "/pages/games101/介绍.md" },
          { text: "elementui源码阅读", link: "/pages/elementui/工具类说明.md" },
        ],
      },
    ],
    sidebar: {
      "/pages/games101/": [
        {
          title: "Games101", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ["介绍.md", "介绍"],
            ["第一讲.md", "第一讲"],
            ["第二讲.md", "第二讲"],
            ["第五讲.md", "第五讲"],
            ["第六讲.md", "第六讲"],
            ["第七讲.md", "第七讲"],
            ["第八讲.md", "第八讲"],
            ["第九讲.md", "第九讲"],
            ["第十讲.md", "第十讲"],
            ["第十一讲.md", "第十一讲"],
            ["第十二讲.md", "第十二讲"],
            ["第十三讲.md", "第十三讲"],
            ["第十四讲.md", "第十四讲"],
            ["第十五讲.md", "第十五讲"],
            ["第十六讲.md", "第十六讲"],
            ["第十七讲.md", "第十七讲"],
            ["第十八讲.md", "第十八讲"],
            ["第十九讲.md", "第十九讲"],
            ["第二十讲.md", "第二十讲"],
            ["第二十一讲.md", "第二十一讲"],
            ["第二十二讲.md", "第二十二讲"],
          ],
        },
      ],
      "/pages/elementui/": [
        {
          title: "element-ui", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ["目录结构", "目录结构"],
            ["命令说明", "命令说明"],
            ["工具类说明", "工具类说明"],
            ["样式设计", "样式设计"],
          ],
        },
      ],
    },
  },
};
