const nunjucksWatch = require('nunjucks-watch');
const watcher = nunjucksWatch.watch({
    src: 'src/markup/index.tpl',
    dest: 'dist/index.html'
});