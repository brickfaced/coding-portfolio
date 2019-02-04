module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/p/hello-nextjs': { page: '/project', query: { title: 'Hello Next.js' } },
      '/p/learn-nextjs': { page: '/project', query: { title: 'Learn Next.js is awesome' } },
      '/p/deploy-nextjs': { page: '/project', query: { title: 'Deploy apps with Zeit' } },
      '/p/exporting-pages': { page: '/project', query: { title: 'Learn to Export HTML Pages' } }
    }
  }
}
