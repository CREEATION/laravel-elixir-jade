laravel-elixir-jade
=========================

Simple Laravel Elixir wrapper to compile Jade.

Compiled Templates are located in your `/resources/views/` folder as default.

### Installation
Run the following command in your Laravel project:

    npm install laravel-elixir-jade

Next, add the following line into your gulpfile.js:

    require('laravel-elixir-jade');

And your done!

***NOTE: Jade files, with default options, should be in a `/resources/jade/` folder. Make sure to create one!***

### Options
For Jade's options, see http://jade-lang.com/api/

But wait, there's more! You can also set `blade: false` to compile to *.php instead of *.blade.php.

All other options should be pretty straight forward.

These are the default options:

```javascript
{
    baseDir: './resources',
    blade: true,
    dest: '/views/',
    pretty: true,
    search: '**/*.jade',
    src: '/jade/'
}
```

### Example gulpfile.js

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-jade');

elixir(function(mix) {
	mix.jade({
        search: '*.jade',
        src: '/templates/'
	});
});
```

### Usage
If you want to use something like `url()` or `URL::asset()`, you can do it like this:

```jade
//- Example Stylesheet
link(href!='{{ URL::asset("assets/css/example.css") }}', rel='stylesheet')

//- Attributes
span(class='{{ $cool_class }}')

//- Block
div
	| Hello {{ $username }}!

//- Inline
div Welcome back, {{ $username }}!
```

***NOTE: Just remember to use ```!=``` to prevent HTML from being escaped in the output or escape `"` and `'` yourself with a backslash.***