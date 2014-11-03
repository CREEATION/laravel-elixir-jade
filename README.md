laravel-elixir-jade-blade
=========================

Simple Laravel Elixir wrapper to compile Jade to Blade.

Compiled Blade Templates are located in your `/resources/views/` folder as usual.

### Installation
Run the following command in your Laravel project:

    npm install laravel-elixir-jade-blade

Next, add the following line into your gulpfile.js:

    require('laravel-elixir-jade-blade');

And your done!

***NOTE: Jade files must be located in a `/resources/jade/` folder. Make sure to create one!***

### Example gulpfile.js

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-jade-blade');

elixir(function(mix) {
    mix.jade();
});
```
