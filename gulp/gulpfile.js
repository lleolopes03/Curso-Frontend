
import series from 'gulp';
import parallel from 'gulp';
import gulp from 'gulp';
import concat from 'gulp-concat';
import cssmin from ' gulp-cssmin';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import image from 'gulp-image';
import stripCss from 'gulp-strip-css-comments';
import htmlmin from 'gulp-htmlmin';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import browserSync from ('browser-sync').create();
import reload from browserSync.reload;

function tarefasCSS(cb) {

    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
            './vendor/owl/css/owl.css',
            './vendor/jquery-ui/jquery-ui.css',
            
        ])
        .pipe(stripCss())                   // remove comentários css   
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

    cb()

}
function tarefassass(cb){
    gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist.css'))
    cb()
}

function tarefasJS(callback){

    gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery.mask.js',
            // './vendor/jquery-ui/jquery-ui.js',
            './src/js/custom.js'
        ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica js
        .pipe(rename({ suffix: '.min'}))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório

    return callback()
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC - Proof of Concept
function tarefasHTML(callback){

    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()

}

gulp.task('serve', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
    gulp.watch('./src/**/*').on('change', reload)

})

function end(cb){
    console.log("tarefas concluídas")
    return cb()
}

// series x parallel
const process = parallel( tarefasHTML, tarefasJS,tarefassass, tarefasCSS, end)

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.sass = tarefassass

exports.default = process