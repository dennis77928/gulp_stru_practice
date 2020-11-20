const { 
    src, 
    dest 
} = require('gulp');

//把路徑載入
const config = require('../gulp.config')

module.exports = function copy(){
  return src(config.paths.php)
    .pipe(dest(config.pathsDev.php));
}