laravel-elixir-jade
=========================

Simple Laravel Elixir wrapper to compile Jade.

Compiled Templates are located in your `/resources/views/` folder as usual.

### Installation
Run the following command in your Laravel project:

    npm install laravel-elixir-jade

Next, add the following line into your gulpfile.js:

    require('laravel-elixir-jade');

And your done!

***NOTE: Jade files must be located in a `/resources/jade/` folder. Make sure to create one!***

### Options
For Jade's options, see http://jade-lang.com/api/
But wait, there's more! You can also set `blade: false` to compile to *.php instead of *.blade.php.

These are the default options:

```javascript
{
    pretty: true,
    blade: true
}
```

### Example gulpfile.js

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-jade');

elixir(function(mix) {
    mix.jade();
});
```
