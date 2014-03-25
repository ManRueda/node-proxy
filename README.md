node-proxy
=========

node-proxy it's a simple implementation of a proxy who by JSONP can access to resources out of the domain. (avoid [Same-origin policy] [Same-origin]).

##### Parameters (GET URL Parameters)
  - o: Must be 'p' for use the proxy.
  - u: URL of the resource.
  - callback: Function name of the JSONP callback.


Version
----

0.0.1


Example
--------------

```
http://mydomain.com/?u=p&u=http://www.google.com/&callback=onJSONP
```

jQuery Example
--------------

```JavaScript
$.ajax({
	url: "http://nodeproxy.com/",
  jsonp: "callback",
  dataType: "jsonp",
  data: {
    o: "p",
    u: "http://www.google.com/",
    format: "json"
  },
  success: function (response) {
    console.log(response);
  }
});
```


License
----

MIT


[Same-origin]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Same_origin_policy_for_JavaScript

    