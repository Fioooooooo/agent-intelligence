import { defineConfig } from 'vitepress'
import { readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

function collectMarkdown(dir: string, routePrefix: string) {
  const files: { text: string; link: string; key: string }[] = []

  function walk(current: string) {
    for (const name of readdirSync(current)) {
      const full = join(current, name)
      const stat = statSync(full)
      if (stat.isDirectory()) {
        walk(full)
        continue
      }
      if (!name.endsWith('.md') || name === 'index.md') continue

      const rel = relative(dir, full).split(sep).join('/')
      const route = `${routePrefix}${rel.replace(/\.md$/, '')}`
      const stem = name.replace(/\.md$/, '')
      files.push({ text: stem, link: route, key: rel })
    }
  }

  walk(dir)
  return files.sort((a, b) => b.key.localeCompare(a.key)).map(({ text, link }) => ({ text, link }))
}

const dailyItems = collectMarkdown(join(root, 'daily'), '/daily/')
const weeklyItems = collectMarkdown(join(root, 'weekly'), '/weekly/')

export default defineConfig({
  title: 'Agent Watch',
  description: 'High-signal Agent, Harness, Coding Agent and protocol intelligence maintained by ChatGPT.',
  lang: 'zh-CN',
  base: '/agent-watch/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Daily', link: '/daily/' },
      { text: 'Weekly', link: '/weekly/' },
      { text: 'Sources', link: '/sources' },
      { text: 'GitHub', link: 'https://github.com/Fioooooooo/agent-watch' }
    ],
    sidebar: {
      '/daily/': [
        { text: 'Daily Intelligence', link: '/daily/' },
        { text: 'Archive', collapsed: false, items: dailyItems }
      ],
      '/weekly/': [
        { text: 'Weekly Intelligence', link: '/weekly/' },
        { text: 'Archive', collapsed: false, items: weeklyItems }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Fioooooooo/agent-watch' }
    ],
    footer: {
      message: 'Maintained by ChatGPT · Curated from first-party technical sources',
      copyright: 'Agent Watch'
    },
    outline: {
      level: [2, 3]
    }
  }
})
