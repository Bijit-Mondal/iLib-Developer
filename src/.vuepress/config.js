module.exports = {
  title: 'iLib Documentation',
  description: 'iLib - Library for RKMVCC',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  theme: 'yuu',
  themeConfig: {
    yuu: {
			defaultDarkTheme: true,
		},
    logo: '/images/logo.png',
    repo: 'Bijit-Mondal/iLib-Documentation',
    sidebar: 'auto',
    nav: [
      { 
        text: 'Home', 
        link: '/' 
      },
      {
        text: 'Guide',
        ariaLabel: 'Guide',
        items: [
          { text: 'Installation', link: '/guide/installation/' },
          { text: 'Admin', link: '/guide/installation.html#for-mobile-user-admin' },
          {text: 'Developer', link:'/guide/developer/' },
        ]
      },
      { 
        text: 'Blog', 
        link: '/blog/' 
      }
    ]
  },

  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'Bijit-Mondal',
      repo: 'iLib-Documentation',
      clientId: '302d594ecf1c7af12bd3',
      clientSecret: 'f1c342ffd2b70aa37e668bf7134ac2fd64274d3b',
    }],
  ],
}