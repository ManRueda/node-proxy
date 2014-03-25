node-proxy
=========

node-proxy es una simple implementación de un proxy para hacer llamadar por JSONP a recursos que están fuera del dominio (evitar [Same-origin policy] [Same-origin]).

##### Parámetros (GET URL Parameters)
  - o: Deber ser "p" para utilizar el proxy.
  - u: URL de donde se obtendrán los datos.
  - callback: Nombre de la función de retorno de JSONP.


Version
----

0.0.1


Ejemplo
--------------

```sh
http://midominio.com/?u=p&u=http://www.google.com.ar/&callback=onJSONP
```



License
----

MIT


[Same-origin]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Same_origin_policy_for_JavaScript

    