const elixir = require('laravel-elixir');


require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
        .sass('admin/login.scss', 'public/css/login.css')
        .sass('admin/app.scss', 'public/css/admin.css')
       .webpack('app.js');
    mix.browserSync({proxy: 'salon.app'});
});
