{type:"class",attributes:{"name":"Queue","packageName":"qx.fx.queue","superClass":"qx.core.Object","fullName":"qx.fx.queue.Queue","type":"class"},children:[{type:"desc",attributes:{"text":"<p>This queue manages ordering and rendering of effects.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"effect"},children:[{type:"desc",attributes:{"text":"<p>The effect.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method adds the given effect to the queue and starts the timer (if necessary).</p>"}}]},{type:"method",attributes:{"name":"getLimit","fromProperty":"limit"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>limit</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #limit}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>limit</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initLimit","fromProperty":"limit"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>limit</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>limit</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #limit}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"loop"},children:[{type:"desc",attributes:{"text":"<p>This method executes all effects in queue.</p>"}}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"effect"},children:[{type:"desc",attributes:{"text":"<p>The effect.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method removes the given effect from the queue.</p>"}}]},{type:"method",attributes:{"name":"resetLimit","fromProperty":"limit"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>limit</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #limit}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setLimit","fromProperty":"limit"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>limit</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>limit</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #limit}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Number","defaultValue":"Infinity","name":"limit","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Maximal number of effects that can run simultaneously.</p>"}}]}]}]}