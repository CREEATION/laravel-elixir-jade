var elixir  = require('laravel-elixir');
var gulp    = require('gulp');
var jade    = require('gulp-jade');
var rename  = require('gulp-rename');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var _       = require('underscore');

var Task = elixir.Task;

/*
 |----------------------------------------------------------------
 | Gulp Jade Wrapper
 |----------------------------------------------------------------
 |
 | This task will compile your Jade files into your views folder.
 | You can make use of Blade variables in your jade files as well.
 | Examples see README.md
 |
 */

elixir.extend('jade', function (options) {

    options = _.extend({
        baseDir: './resources',
        blade: true,
        dest: '/views/',
        pretty: true,
        search: '**/*.jade',
        src: '/jade/'
    }, options);

    var gulp_src = options.baseDir + options.src + options.search;

    var jade_options = _.pick(
        options,
        'filename',
        'doctype',
        'pretty',
        'self',
        'debug',
        'compileDebug',
        'compiler'
    );

    jade_options.basedir = options.baseDir + options.src;

    new Task('jade', function() {
        return gulp.src(gulp_src)
            .pipe(plumber())
            .pipe(jade(jade_options))
            .pipe(rename(function (path) {
                path.extname = (options.blade === true ? '.blade.php' : '.php')
            }))
            .pipe(gulp.dest(options.baseDir + options.dest))
            .pipe(notify({
                title: 'Jade completed',
                message: 'All Jade Templates have been compiled.',
                icon: __dirname + '/../laravel-elixir/icons/pass.png'
            }));
    })
    .watch([ options.baseDir + options.src + options.search ]);

});
