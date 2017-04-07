var App=angular.module('appIni',['ngRoute'])
  .config(function($routeProvider,$locationProvider){
    $routeProvider
      .when("/unidad",{templateUrl:"views/maintenance/frmunidad.html"})
      .when("categoria",{templateUrl:"views/maintenance/frmunidad.html"})
      .when("/articulo",{templateUrl:"views/maintenance/frmunidad.html"})
      //$locationProvider.html5Mode(true);
  });
// App.config(function($stateProvider,$urlServiceProvider){//,$urlRouteerProvider){
//
// $locationProvider.hashPrefix("!");
//   //$urlRouterProvider.when("", "/administrador");
//   $stateProvider
//   .state('unidad',{
//       url:'/undad',
//       templateUrl:'views/maintenance/frmunidad.html'
//   })
//   .state('categoria',{
//       url:'/categoria',
//       templateUrl:'./views/maintenance/frmunidad.html'//,
//   })
//   .state('articulo',{
//       url:'/articulo',
//       templateUrl:'/views/maintenance/frmunidad.html'//,
//   });
//   $locationProvider.html5Mode(true);
// });
// App.config(function($stateProvider,$routeProvider){
//   $stateProvider
//   .state('unidad',{
//     url:"/unidad",
//     templateUrl:"/views/maintenance/frmunidad.html"
//   })
//   .state('categoria',{
//       url:"/categoria",
//     templateUrl:"./views/maintenance/frmunidad.html"
//   });
//
// });

App.controller('adminPrincipal',function($scope,$location,$window,$router){

  // $router.config([
  //     {
  //       path:'unidad',
  //       components:{
  //         'uni':'./views/maintenance/frmunidad.html'
  //       }
  //     }
  //
  // ])
});

// App.$router.config(
//   [
//       {
//         path:'unidad',
//         components:{
//           'uni':'./views/maintenance/frmunidad.html'
//         }
//       }
//
//   ]
//
// );
// App.controller('controllerunidad',function($scope,$location,$window){
//
// });
// App.controller('controllercategoria',function($scope,$location,$window){
//
// });
// App.controller('controllerarticulo',function($scope,$location,$window){
//
// });
