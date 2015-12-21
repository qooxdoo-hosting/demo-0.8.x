{type:"class",attributes:{"name":"HBox","packageName":"qx.ui.layout","superClass":"qx.ui.layout.Abstract","fullName":"qx.ui.layout.HBox","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A horizontal box layout.</p>\n\n<p>The horizontal box layout lays out widgets in a horizontal row, from left\nto right.</p>\n\n<p><strong>Features</strong></p>\n\n<ul>\n<li>Minimum and maximum dimensions</li>\n<li>Priorized growing/shrinking (flex)</li>\n<li>Margins (with horizontal collapsing)</li>\n<li>Auto sizing (ignoring percent values)</li>\n<li>Percent widths (not size hint relevant)</li>\n<li>Alignment (Children property {@link qx.ui.core.LayoutItem#alignX} is ignored)</li>\n<li>Horizontal spacing (collapsed with margins)</li>\n<li>Reversed children layout (starting from last to first)</li>\n<li>Vertical children stretching (respecting size hints)</li>\n</ul>\n\n<p><strong>Item Properties</strong></p>\n\n<ul>\n<li><strong>flex</strong> <em>(Integer)</em>: Indicates the flexibility\n  of the item, which indicates\n  how an item's container distributes remaining empty space among\n  its children. Flexible elements grow and shrink to fit their given\n  space. Elements with larger flex values will be made larger than\n  elements with lower flex values, at the ratio determined by the\n  two elements. The actual value is not relevant unless there are\n  other flexible elements within the same container. Once the\n  default sizes of elements in a box are calculated, the remaining\n  space in the box is divided among the flexible elements, according\n  to their flex ratios. Specifying a flex value of 0 has the same\n  effect as leaving the flex attribute out entirely.\n</li>\n<li><strong>width</strong> <em>(String)</em>: Defines a percent\n  width for the item. The percent width,\n  when specified, is used instead of the width defined by the size hint.\n  The minimum and maximum width still takes care of the elements limitations.\n  It has no influence on the layout's size hint. Percents are mainly useful for\n  widgets which are sized by the outer hierarchy.\n</li>\n</ul>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the grid layout.</p>\n\n<pre class=\"javascript\">\nvar layout = new qx.ui.layout.HBox();\nlayout.setSpacing(4); // apply spacing\n\nvar container = new qx.ui.container.Composite(layout);\n\ncontainer.add(new qx.ui.core.Widget());\ncontainer.add(new qx.ui.core.Widget());\ncontainer.add(new qx.ui.core.Widget());\n</pre>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/layout/Box\">\nExtended documentation</a> and links to demos of this layout in the qooxdoo wiki.\n\n<p><strong>Copyright Notes</strong></p>\n\n<p>Description of flex property by <a href=\"http://developer.mozilla.org/en/docs/XUL:Attribute:flex\">Mozilla</a>\nlicensed under the\n<a href=\"http://creativecommons.org/licenses/by-sa/2.5/\">CC Attribution-Sharealike License</a>.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"0","name":"spacing"},children:[{type:"desc",attributes:{"text":"<p>The spacing between child widgets {@link #spacing}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"\"left\"","name":"alignX"},children:[{type:"desc",attributes:{"text":"<p>Horizontal alignment of the whole children\n    block {@link #alignX}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"separator"},children:[{type:"desc",attributes:{"text":"<p>A separator to render between the items</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Decorator"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__rebuildCache"},children:[{type:"desc",attributes:{"text":"<p>Rebuilds caches for flex and percent layout properties</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.HBox#reversed","name":"_applyReversed"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>reversed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyReversed}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"_computeSizeHint"}},{type:"method",attributes:{"name":"getAlignX","fromProperty":"alignX"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>alignX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alignX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>alignX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getAlignY","fromProperty":"alignY"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>alignY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alignY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>alignY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getReversed","fromProperty":"reversed"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>reversed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reversed}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>reversed</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSeparator","fromProperty":"separator"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>separator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #separator}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>separator</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSpacing","fromProperty":"spacing"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>spacing</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initAlignX","fromProperty":"alignX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>alignX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>alignX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #alignX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initAlignY","fromProperty":"alignY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>alignY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>alignY</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #alignY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initReversed","fromProperty":"reversed"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>reversed</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>reversed</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #reversed}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSeparator","fromProperty":"separator"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>separator</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>separator</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #separator}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSpacing","fromProperty":"spacing"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>spacing</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>spacing</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isReversed","fromProperty":"reversed"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>reversed</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reversed}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"renderLayout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"availWidth"}},{type:"param",attributes:{"name":"availHeight"}}]}]},{type:"method",attributes:{"name":"resetAlignX","fromProperty":"alignX"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>alignX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #alignX}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetAlignY","fromProperty":"alignY"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>alignY</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #alignY}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetReversed","fromProperty":"reversed"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>reversed</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #reversed}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSeparator","fromProperty":"separator"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>separator</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #separator}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSpacing","fromProperty":"spacing"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>spacing</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setAlignX","fromProperty":"alignX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>alignX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>alignX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alignX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setAlignY","fromProperty":"alignY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>alignY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>alignY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alignY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setReversed","fromProperty":"reversed"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>reversed</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>reversed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reversed}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSeparator","fromProperty":"separator"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>separator</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>separator</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #separator}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSpacing","fromProperty":"spacing"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>spacing</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>spacing</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacing}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleReversed","fromProperty":"reversed"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>reversed</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #reversed}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyLayoutChange","defaultValue":"\"left\"","propertyType":"new","name":"alignX","possibleValues":"\"left\",\"center\",\"right\""},children:[{type:"desc",attributes:{"text":"<p>Horizontal alignment of the whole children block. The horizontal\nalignment of the child is completely ignored in HBoxes (\n{@link qx.ui.core.LayoutItem#alignX}).</p>"}}]},{type:"property",attributes:{"apply":"_applyLayoutChange","defaultValue":"\"top\"","propertyType":"new","name":"alignY","possibleValues":"\"top\",\"middle\",\"bottom\",\"baseline\""},children:[{type:"desc",attributes:{"text":"<p>Vertical alignment of each child. Can be overridden through\n{@link qx.ui.core.LayoutItem#alignY}.</p>"}}]},{type:"property",attributes:{"apply":"_applyReversed","defaultValue":"false","propertyType":"new","name":"reversed","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the actual children list should be layouted in reversed order.</p>"}}]},{type:"property",attributes:{"check":"Decorator","allowNull":"true","propertyType":"new","name":"separator","apply":"_applyLayoutChange"},children:[{type:"desc",attributes:{"text":"<p>Separator lines to use between the objects</p>"}}]},{type:"property",attributes:{"apply":"_applyLayoutChange","defaultValue":"0","propertyType":"new","name":"spacing","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>Horizontal spacing between two children</p>"}}]}]}]}