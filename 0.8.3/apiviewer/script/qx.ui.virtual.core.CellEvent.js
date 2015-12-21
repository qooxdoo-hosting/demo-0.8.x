{type:"class",attributes:{"name":"CellEvent","packageName":"qx.ui.virtual.core","superClass":"qx.event.type.Mouse","fullName":"qx.ui.virtual.core.CellEvent","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>A cell event instance contains all data for mouse events related to cells in\na pane.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"getColumn","fromProperty":"column"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>column</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>column</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getRow","fromProperty":"row"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>row</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>row</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.event.type.Mouse","name":"init"},children:[{type:"params",children:[{type:"param",attributes:{"name":"scroller"},children:[{type:"desc",attributes:{"text":"<p>The tables pane scroller</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.pane.Scroller"}}]}]},{type:"param",attributes:{"name":"me"},children:[{type:"desc",attributes:{"text":"<p>The original mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"row"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"column"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Initialize the event</p>"}}]},{type:"method",attributes:{"access":"protected","name":"initColumn","fromProperty":"column"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>column</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>column</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRow","fromProperty":"row"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>row</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>row</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetColumn","fromProperty":"column"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>column</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetRow","fromProperty":"row"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>row</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setColumn","fromProperty":"column"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>column</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>column</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setRow","fromProperty":"row"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>row</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>row</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Integer","allowNull":"true","name":"column","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The table column of the event target</p>"}}]},{type:"property",attributes:{"check":"Integer","allowNull":"true","name":"row","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The table row of the event target</p>"}}]}]}]}