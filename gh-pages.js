const ghpages = require('gh-pages')

ghpages.publish('.vitepress/dist', {
    remote: 'gitee',
    message: 'Updates',
    // repo: 'https://gitee.com/wellfrog16/vc.git',
}, err => {
    console.log(err)
    console.log('finished')
})
