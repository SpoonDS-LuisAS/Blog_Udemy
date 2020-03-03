'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('home')
Route.on( '/login' ).render( 'auth' ).middleware(['guest_only']);
Route.post( '/login', 'AuthController.auth' ).middleware(['guest_only']);
Route.get( '/logout', 'AuthController.logout' );
Route.post( '/register', 'RegisterController.register' ).middleware(['guest_only']);
Route.on('/submit').render('submit').middleware(['auth_required']);
