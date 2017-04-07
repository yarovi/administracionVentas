angular.module('appIni').
  config(function(
                  $localtionProvider,
                  $routeProvider
                ){
                  $routeProvider.
                  when("/unidad/",{
                    template:"<h1>hola</h1>"
                  }).
                  when("/categoria/",{
                      template:"<h2>Funciona</h2>"
                  }).
                  otherwise({
                        tempalte:"Not Found"
                  })
  });
