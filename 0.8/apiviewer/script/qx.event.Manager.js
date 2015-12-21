{type:"class",attributes:{"packageName":"qx.event","type":"bootstrap","fullName":"qx.event.Manager","name":"Manager"},children:[{type:"desc",attributes:{"text":"<p>Wrapper for browser <span class=\"caps\">DOM</span> event handling for each browser window/frame.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"win"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> window this manager handles the events for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a new instance of the event handler.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__registerAtHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to attach the event to the\n        capturing phase of the bubbling phase of the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method is called each time an event listener for one of the\nsupported events is added using {qx.event.Manager#addListener}.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__unregisterAtHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to attach the event to the\n        capturing phase of the bubbling phase of the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method is called each time the an event listener for one of the\nsupported events is removed by using {qx.event.Manager#removeListener}\nand no other event listener is listening on this type.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_findHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>The event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>The event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the event handler class matching the given event target and type</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The best matching event handler or\n    <code>null</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.IEventHandler"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"addListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event e.g. &#8220;click&#8221;, &#8220;keydown&#8221;, ...</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"listener"},children:[{type:"desc",attributes:{"text":"<p>Event listener function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"defaultValue":"window","name":"self"},children:[{type:"desc",attributes:{"text":"<p>Reference to the &#8216;this&#8217; variable inside\n        the event listener.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to attach the event to the\n        capturing phase of the bubbling phase of the event. The default is\n        to attach the event handler to the bubbling phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add an event listener to any valid target. The event listener is passed an\ninstance of {@link Event} containing all relevant information\nabout the event as parameter.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"dispatchEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The event object to dispatch. The event\n    object must be obtained using {@link qx.event.Registration#createEvent}\n    and initialized using {@link qx.event.type.Event#init}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Dispatches an event object using the qooxdoo event handler system. The\nevent will only be visible in event listeners attached using\n{@link #addListener}. After dispatching the event object will be pooled\nfor later reuse or disposed.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the event default was prevented or not.\n    Returns true, when the event was <span class=\"caps\">NOT</span> prevented.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"dispose"},children:[{type:"desc",attributes:{"text":"<p>Local dispose method. Automatically executed when unloading of the\nattached window occours.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getDispatcher"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>Any class which implements {@link qx.event.IEventHandler}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns an instance of the given dispatcher class for this manager(window).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The instance used by this manager</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"name":"getHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>Any class which implements {@link qx.event.IEventHandler}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns an instance of the given handler class for this manager(window).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The instance used by this manager</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"name":"getListeners"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether the listener is for the\n      capturing phase of the bubbling phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get a copy of all event listeners for the given combination\nof target, event type and phase.</p>\n\n<p>This method is especially useful and thoughtfor event handlers to\nto query the listeners registered in the manager.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Array of registered event handlers. May return\n      null when no listener were found.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getWindow"},children:[{type:"desc",attributes:{"text":"<p>Get the window instance the event manager is reponsible for</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> window instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"method",attributes:{"name":"hasListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>The event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to check for listeners of\n        the bubbling or of the capturing phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether there are one or more listeners for an event type\nregistered at the target.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the target has event listeners of the given type.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"importListeners"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"list"},children:[{type:"desc",attributes:{"text":"<p>A map where every listener has a unique key.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Imports a list of event listeners at once. This only\nworks for newly created elements as it replaces\nall existing data structures.</p>\n\n<p>Works with a map of data. Each entry in this map should be a\nmap again with the keys <code>type</code>, <code>capture</code>,\n<code>listener</code> and <code>self</code>. The values are\nidentical to the parameters of {@link #addListener}. For details\nplease have a look there.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"removeAllListeners"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>The event target to remove all event listeners from.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove all event listeners, which are attached to the given event target.</p>"}}]},{type:"method",attributes:{"name":"removeListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Any valid event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"listener"},children:[{type:"desc",attributes:{"text":"<p>The pointer to the event listener</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"defaultValue":"window","name":"self"},children:[{type:"desc",attributes:{"text":"<p>Reference to the &#8216;this&#8217; variable inside\n        the event listener.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"capture"},children:[{type:"desc",attributes:{"text":"<p>Whether to remove the event listener of\n        the bubbling or of the capturing phase.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove an event listener from a event target.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}