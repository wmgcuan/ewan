# \_coverpage.md

```js
- [Home](README.md)
- [Docs](demo-docs.md)

* Language
  - [English](/)
  - [中文](/zh-cn/)
```

# \_navbar.md

```js
![logo](logo-flow.png)

# docsify

> A magical documentation site generator.

- Simple and lightweight (~12kb gzipped)
- Multiple themes
- Not build static html files

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#quick-start)

<!-- 背景图片 -->

<!-- ![](back002.jpg) -->

<!-- 背景色 -->

<!-- ![color](#333) -->
```

# \_sidebar.md

```js
- [README](../README.md)
```

# config
```js
    window.$docsify = {
      alias: {
        '.*?/awesome': 'https://raw.githubusercontent.com/docsifyjs/awesome-docsify/master/README.md',
        '.*?/changelog': 'https://raw.githubusercontent.com/docsifyjs/docsify/master/CHANGELOG.md',
        '/.*/_navbar.md': '/_navbar.md',
        '/zh-cn/(.*)': 'https://raw.githubusercontent.com/docsifyjs/docs-zh/master/$1',
        '/de-de/(.*)': 'https://raw.githubusercontent.com/docsifyjs/docs-de/master/$1',
        '/ru/(.*)': 'https://raw.githubusercontent.com/docsifyjs/docs-ru/master/$1',
        '/es/(.*)': 'https://raw.githubusercontent.com/docsifyjs/docs-es/master/$1'
      },
      auto2top: true,
      coverpage: true,
      executeScript: true,
      loadSidebar: true,
      loadNavbar: true,
      mergeNavbar: true,
      maxLevel: 4,
      subMaxLevel: 2,
      ga: 'UA-106147152-1',
      name: 'docsify',
      search: {
        noData: {
          '/de-de/': 'Keine Ergebnisse!',
          '/zh-cn/': '没有结果!',
          '/': 'No results!'
        },
        paths: 'auto',
        placeholder: {
          '/de-de/': 'Suche',
          '/zh-cn/': '搜索',
          '/': 'Search'
        }
      },
      formatUpdated: '{MM}/{DD} {HH}:{mm}',
      plugins: [
        function (hook, vm) {
          hook.beforeEach(function (html) {
            if (/githubusercontent\.com/.test(vm.route.file)) {
              url = vm.route.file
                .replace('raw.githubusercontent.com', 'github.com')
                .replace(/\/master/, '/blob/master')
            } else {
              url = 'https://github.com/docsifyjs/docsify/blob/master/docs/' + vm.route.file
            }
            var editHtml = '[:memo: Edit Document](' + url + ')\n'

            return editHtml
              + html
              + '\n\n----\n\n'
              + '<a href="https://docsify.js.org" target="_blank" style="color: inherit; font-weight: normal; text-decoration: none;">Powered by docsify</a>'
          })
        },
        DocsifyCodefund.create('fae1f9a4-870c-4c25-b8e0-c80464f7a95c')
      ]
    }  
  ```
