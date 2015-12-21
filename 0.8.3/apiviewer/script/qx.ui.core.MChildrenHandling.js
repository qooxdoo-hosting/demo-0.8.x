{type:"class",attributes:{"name":"MChildrenHandling","packageName":"qx.ui.core","includer":"qx.ui.container.Composite,qx.ui.menu.Menu,qx.ui.toolbar.ToolBar,qx.ui.root.Abstract,qx.ui.virtual.layer.WidgetCell,qx.ui.virtual.layer.WidgetCellSpan,qx.ui.window.Desktop","fullName":"qx.ui.core.MChildrenHandling","type":"mixin"},children:[{type:"desc",attributes:{"text":"<p>This mixin exposes all basic methods to manage widget children as public methods.\nIt can only be included into instances of {@link Widget}.</p>\n\n<p>To optimize the method calls the including widget should call the method\n{@link #remap} in its defer function. This will map the protected\nmethods to the public ones and save one method call for each function.</p>"}},{type:"methods",children:[{type:"method",attributes:{"isMixin":"true","name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>the widget to add.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"options"},children:[{type:"desc",attributes:{"text":"<p>Optional layout data for widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a new child widget.</p>\n\n<p>The supported keys of the layout options map depend on the layout manager\nused to position the widget. The options are documented in the class\ndocumentation of each layout manager {@link qx.ui.layout}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"addAfter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>Widget to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]},{type:"param",attributes:{"name":"after"},children:[{type:"desc",attributes:{"text":"<p>Widget, after which the new widget will be inserted</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"options"},children:[{type:"desc",attributes:{"text":"<p>Optional layout data for widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a widget after another already inserted widget</p>\n\n<p>This method works on the widget&#8217;s children list. Some layout managers\n(e.g. {@link qx.ui.layout.HBox}) use the children order as additional\nlayout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})\nignore the children order for the layout process.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"addAt"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>Widget to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]},{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>Index, at which the widget will be inserted</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"options"},children:[{type:"desc",attributes:{"text":"<p>Optional layout data for widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a child widget at the specified index</p>\n\n<p>This method works on the widget&#8217;s children list. Some layout managers\n(e.g. {@link qx.ui.layout.HBox}) use the children order as additional\nlayout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})\nignore the children order for the layout process.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"addBefore"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>Widget to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]},{type:"param",attributes:{"name":"before"},children:[{type:"desc",attributes:{"text":"<p>Widget before the new widget will be inserted.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"options"},children:[{type:"desc",attributes:{"text":"<p>Optional layout data for widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a widget before another already inserted widget</p>\n\n<p>This method works on the widget&#8217;s children list. Some layout managers\n(e.g. {@link qx.ui.layout.HBox}) use the children order as additional\nlayout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})\nignore the children order for the layout process.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"getChildren"},children:[{type:"desc",attributes:{"text":"<p>Returns the children list</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The children array (Arrays are\n  reference types, please to not modify them in-place)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem","dimensions":"1"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"hasChildren"},children:[{type:"desc",attributes:{"text":"<p>Whether the widget contains children.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns <code>true</code> when the widget has children.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"indexOf"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>the widget to query for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the index position of the given widget if it is\na child widget. Otherwise it returns <code>-1</code>.</p>\n\n<p>This method works on the widget&#8217;s children list. Some layout managers\n(e.g. {@link qx.ui.layout.HBox}) use the children order as additional\nlayout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})\nignore the children order for the layout process.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The index position or <code>-1</code> when\n  the given widget is no child of this layout.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>the widget to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove the given child widget.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"removeAll"},children:[{type:"desc",attributes:{"text":"<p>Remove all children.</p>"}}]},{type:"method",attributes:{"isMixin":"true","name":"removeAt"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>Index of the widget to remove.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove the widget at the specified index.</p>\n\n<p>This method works on the widget&#8217;s children list. Some layout managers\n(e.g. {@link qx.ui.layout.HBox}) use the children order as additional\nlayout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})\nignore the children order for the layout process.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The child removed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"LayoutItem"}}]}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","isMixin":"true","name":"remap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"members"},children:[{type:"desc",attributes:{"text":"<p>The including classes members map</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Mapping of protected methods to public.\nThis omits an additional function call when using these methods. Call\nthis methods in the defer block of the including class.</p>"}}]}]}]}