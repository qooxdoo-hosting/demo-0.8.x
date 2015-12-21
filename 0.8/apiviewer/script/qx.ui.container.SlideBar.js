{type:"class",attributes:{"name":"SlideBar","packageName":"qx.ui.container","mixins":"qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling","superClass":"qx.ui.core.Widget","fullName":"qx.ui.container.SlideBar","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Container, which provides scrolling in one dimension (vertical or horizontal).</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the widget.</p>\n\n<pre class=\"javascript\">\n  // create slide bar container\n  slideBar = new qx.ui.container.SlideBar().set({\n    width: 300\n  });\n\n  // set layout\n  slideBar.setLayout(new qx.ui.layout.HBox());\n\n  // add some widgets\n  for (var i=0; i<10; i++)\n  {\n    slideBar.add((new qx.ui.core.Widget()).set({\n      backgroundColor : (i % 2 == 0) ? \"red\" : \"blue\",\n      width : 60          \n    }));\n  }\n\n  this.getRoot().add(slideBar);\n</pre>\n\n<p>This example creates a SlideBar and add some widgets with alternating\nbackground colors. Since the content is larger than the container, two\nscroll buttons at the left and the right edge are shown.</p>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/widget/SlideBar\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"\"horizontal\"","name":"orientation"},children:[{type:"desc",attributes:{"text":"<p>The slide bar orientation</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"slidebar\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"apply":"_applyOrientation","defaultValue":"\"horizontal\"","name":"orientation","possibleValues":"\"horizontal\",\"vertical\"","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Orientation of the bar</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.container.SlideBar#orientation","name":"_applyOrientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOrientation}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_hideArrows"},children:[{type:"desc",attributes:{"text":"<p>Hide the arrows (Called from resize event)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onExecuteBackward"},children:[{type:"desc",attributes:{"text":"<p>Scroll handler for left scrolling</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onExecuteForward"},children:[{type:"desc",attributes:{"text":"<p>Scroll handler for right scrolling</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onResize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener for resize event. This event is fired after the\nfirst flush of the element which leads to another queueing\nwhen the changes modify the visibility of the scroll buttons.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_showArrows"},children:[{type:"desc",attributes:{"text":"<p>Show the arrows (Called from resize event)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"getChildrenContainer"}},{type:"method",attributes:{"name":"getOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>orientation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>orientation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollBy"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"0","name":"offset"},children:[{type:"desc",attributes:{"text":"<p>Amount to scroll</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the element&#8217;s content by the given amount.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollTo"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The position to scroll to.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the element&#8217;s content to the given coordinate</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}