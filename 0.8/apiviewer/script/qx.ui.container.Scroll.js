{type:"class",attributes:{"name":"Scroll","packageName":"qx.ui.container","mixins":"qx.ui.core.MContentPadding","superClass":"qx.ui.core.AbstractScrollArea","fullName":"qx.ui.container.Scroll","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Container, which allows vertical and horizontal scrolling if the contents is\nlarger than the container.</p>\n\n<p>Note that this class can only have one child widget. This container has a\nfixed layout, which cannot be changed.</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the widget.</p>\n\n<pre class=\"javascript\">\n  // create scroll container\n  var scroll = new qx.ui.container.Scroll().set({\n    width: 300,\n    height: 200\n  });\n\n  // add a widget which is larger than the container\n  scroll.add(new qx.ui.core.Widget().set({\n    width: 600,\n    minWidth: 600,\n    height: 400,\n    minHeight: 400\n  });\n\n  this.getRoot().add(scroll);\n</pre>\n\n<p>This example creates a scroll container and adds a widget, which is larger\nthan the container. This will cause the container to display vertical\nand horizontal toolbars.</p>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/widget/Scroll\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.AbstractScrollArea","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"content"},children:[{type:"desc",attributes:{"text":"<p>The content widget of the scroll\n   container.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.LayoutItem"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_getContentPaddingTarget"},children:[{type:"desc",attributes:{"text":"<p>Returns the element, to which the content padding should be applied.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The content padding target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the content of the scroll container. Scroll containers\nmay only have one child, so it always replaces the current\nchild with the given one.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getChild"},children:[{type:"desc",attributes:{"text":"<p>Returns the content of the scroll container.</p>\n\n<p>Scroll containers may only have one child. This\nmethod returns exactly this one child or <code>null</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The child</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>Widget to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the content of the scroll area.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]}]}]}