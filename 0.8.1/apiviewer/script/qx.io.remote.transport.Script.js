{type:"class",attributes:{"name":"Script","packageName":"qx.io.remote.transport","superClass":"qx.io.remote.transport.Abstract","fullName":"qx.io.remote.transport.Script","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Transports requests to a server using dynamic script tags.</p>\n\n<p>This class should not be used directly by client programmers.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.io.remote.transport.Abstract","isCtor":"true","name":"ctor"}}]},{type:"methods-static",children:[{type:"method",attributes:{"access":"protected","isStatic":"true","name":"_requestFinished"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"},children:[{type:"desc",attributes:{"text":"<p>Id of the corresponding transport object,\n    which is passesd as an <span class=\"caps\">URL</span> parameter to the server an</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"content"},children:[{type:"desc",attributes:{"text":"<p>This string is passed to the content property\n    of the {@link #Response} object.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method can be called by the script loaded by the ScriptTransport\nclass.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"isSupported"},children:[{type:"desc",attributes:{"text":"<p>Returns always true, because script transport is supported by all browsers.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_switchReadyState"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vReadyState"},children:[{type:"desc",attributes:{"text":"<p>readystate value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Switches the readystate by setting the internal state.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getFetchedLength"},children:[{type:"desc",attributes:{"text":"<p>Returns the length of the content as fetched thus far.\nThis method needs implementation (returns always 0).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns 0</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getResponseContent"},children:[{type:"desc",attributes:{"text":"<p>Returns the content of the response.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>If successful content of response as string.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"null"}},{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"desc",attributes:{"text":"<p>Response header name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the value of the given response header.</p>\n\n<p>This method is not implemented at the moment and returns always &#8220;null&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns null</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseHeaders"},children:[{type:"desc",attributes:{"text":"<p>Provides an hash of all response headers.</p>\n\n<p>This method is not implemented at the moment and returns an empty map.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>empty map</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getStatusCode"},children:[{type:"desc",attributes:{"text":"<p>Returns the current status code of the request if available or -1 if not.\nThis method needs implementation (returns always 200).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>status code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getStatusText"},children:[{type:"desc",attributes:{"text":"<p>Provides the status text for the current request if available and null otherwise.\nThis method needs implementation (returns always an empty string)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"string"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"send"},children:[{type:"desc",attributes:{"text":"<p>Sends the request using &#8220;script&#8221; elements</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"setRequestHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"desc",attributes:{"text":"<p>Request header name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"vValue"},children:[{type:"desc",attributes:{"text":"<p>Request header value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets a request header with the given value.</p>\n\n<p>This method is not implemented at the moment.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}