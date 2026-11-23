import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点域名（影响 canonical / hreflang / RSS 绝对链接）
export default defineConfig({
  site: 'https://blog.maomaoxiang.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-CN',
        locales: { 'zh-CN': 'zh-CN', en: 'en' },
      },
      // RSS 和 sitemap 自身不需要出现在站点地图里
      filter: (page) => !page.includes('/rss.xml') && !page.includes('/sitemap'),
    }),
  ],
  i18n: {
    locales: ['zh-CN', 'en'],
    defaultLocale: 'zh-CN',
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
