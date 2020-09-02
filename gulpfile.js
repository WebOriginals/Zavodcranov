'use strict';

var gulp = require('gulp'),
    // Соединяет файлы в один css
    concatCss = require('gulp-concat-css'),
    // Переименовывает
    rename = require('gulp-rename'),
    // Выводит уведомление о выполненой операции
    notify = require("gulp-notify"),
    // Живая перезагрузка
    browserSync = require('browser-sync').create(),
    // Минифицирует стили
    minifyCSS = require('gulp-minify-css'),
    // Удаляет неиспользованный css-стиль
    uncss = require('gulp-uncss'),
    // Соединяет файлы JS в один
    concat = require('gulp-concat'),
    // Cтавит префикся для старых браузеров
    autoprefixer = require('gulp-autoprefixer');


//Шаблонизатор twig
// gulp.task('twig', function () {
//     var files = [];
//     for (var i = 0; i < pages.length; i++){
//         files.push('./assets/twig/'+pages[i]+'.twig');
//     }
//     return gulp.src(files)
//     // Stay live and reload on error
//         .pipe(twig())
//         .on('error', function (err) {
//             process.stderr.write(err.message + '\n');
//             this.emit('end');
//         })
//         .pipe(gulp.dest('./app/'))
//         .pipe(browserSync.reload({stream: true}));
// });

// Удаляет неиспользованный css
gulp.task('del', function () {
    return gulp.src('app/css/style-main.css')
        .pipe(uncss({
            html: ['2.html']
        }))
        .pipe(gulp.dest('app/css/'));
});

// Живая перезагрузка браузера
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app",
            index: "contact.html",
        }
    });
    browserSync.watch('app',browserSync.reload)
});

// Соединение стилей в 1 файл и их сжатие
gulp.task('css', function () {
    return gulp.src('assets/css/**/*.css')
        .pipe(concatCss('menu.css'))
        .pipe(autoprefixer('last 5 version','>1%','ie 9'))
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('app/css/'))
        .pipe(notify("Выполнено!"));
});

// Сжимает js b записывает все в 1 файл
gulp.task('js', function () {
    return gulp.src('assets/js/**/*.js')
        .pipe(concat('basket.js'))
        // .pipe(jsmin())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('app/js/'))
        .pipe(notify("Выполнено!"));
});

// Сжимает картинки
gulp.task('img', function () {
    return gulp.src('assets/img/**')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('app/img/'));
});

// Слежение за изменением кода в папке css
gulp.task('watch',function () {
    gulp.watch('assets/css/**/*.css', gulp.series('css'));
    gulp.watch('assets/js/**/*.js', gulp.series('js'));
    gulp.watch('assets/img/**', gulp.series('img'));
});

// Запускаем параллельно задачи css watch serve
gulp.task('default',gulp.series(
    gulp.parallel('js','css'),
    gulp.parallel('watch','serve')
));
