let basePaths = 'src';
let savePaths = 'dist';

let baseConfig = {
    //來源檔案
    paths: {
        html: [ basePaths + '/*.html' , basePaths + '/**/*.html' , '!' + basePaths + '/layout/*.html' ],
        css:  basePaths + '/sass/*.scss',
        js: basePaths + '/js/*.js' ,
        images: basePaths + '/images/*.*',
        php: basePaths + '/php/*.*'
    },
    //目的地
    pathsDev : {
        dist : savePaths,
        html:  savePaths  + '/*.html' ,
        css:   savePaths + '/css/',
        js:   savePaths  + '/js/' ,
        images:   'dist/images/',
        php: savePaths + '/php/'
    },
    //監看檔案
    pathsWatch : {
       html: [basePaths + '/*.html' , basePaths + '/**/*.html' ,  '!' + savePaths + '/*.html'],  //排除
       scss: [basePaths + '/*.scss' , basePaths + '/**/*.scss'], 
       js: [basePaths + '/*.js' , basePaths + '/**/*.js'], 
    },
    pathsConfig : {
       index : 'index.html' , // browserSync 首頁位址
       dist : [savePaths + '/*' , savePaths + '/**/*.*'],
       package  : './package' //打包路徑
    }
}


//要輸出
module.exports = baseConfig