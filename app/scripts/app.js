'use strict';

angular.module('inclusaoDigitalApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools',
  'LocalStorageModule'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/apresentacoes', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/apresentacoes.html',
        controller: 'ApresentacoesCtrl'
      })
      .when('/apostilas', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/apostilas.html',
        controller: 'ApostilasCtrl'
      })
      .when('/atas', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/atas.html',
        controller: 'AtasCtrl'
      })
      .when('/mensagens', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/mensagens.html',
        controller: 'MensagensCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
