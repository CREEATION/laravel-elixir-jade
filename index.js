var elixir = require('laravel-elixir');
var gulp = require('gulp');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var _ = require('underscore');

/*
 |----------------------------------------------------------------
 | Gulp Jade Wrapper
 |----------------------------------------------------------------
 |
 | This task will compile your Jade files into your views folder.
 | You can make use of Blade variables in your jade files as well.
 |
 */

elixir.extend('jade', function (src, output, options) {

    var baseDir = 'resources/jade/';

    src = this.buildGulpSrc(src, baseDir, '**/*.jade');

    options = _.extend({
        pretty: true,
        blade: true
    }, options);

    gulp.task('jade', function () {
        return gulp.src(src)
            .pipe(jade(options))
			.pipe(rename(function (path) {
				path.extname = (options.blade === true ? '.blade.php' : '.php')
			}))
            .pipe(gulp.dest(output || 'resources/views/'))
            .pipe(notify({
                title: 'Jade successfully compiled!',
                message: 'All Jade Templates have been compiled.',
                icon: __dirname + '/../laravel-elixir/icons/pass.png'
            }));
    });

    this.registerWatcher('jade', [
        baseDir + '**/*.jade'
    ]);

    return this.queueTask('jade');

});