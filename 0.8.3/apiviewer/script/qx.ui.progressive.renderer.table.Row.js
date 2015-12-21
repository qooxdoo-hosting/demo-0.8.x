{type:"class",attributes:{"name":"Row","packageName":"qx.ui.progressive.renderer.table","superClass":"qx.ui.progressive.renderer.Abstract","fullName":"qx.ui.progressive.renderer.table.Row","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Table Row renderer for Progressive.  <span class=\"caps\">EXPERIMENTAL</span>!  <span class=\"caps\">INTERFACE</span> <span class=\"caps\">MAY</span> <span class=\"caps\">CHANGE</span>.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnWidths"},children:[{type:"desc",attributes:{"text":"<p>Information that indicates how to resize each of the column widths</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.progressive.renderer.table.Widths"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_resizeColumns"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Ignored</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the &#8220;resize&#8221; event.  We recalculate the\nwidths of each of the columns, and modify the stylesheet rule\napplicable to each column, to apply the new widths.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"name":"addRenderer"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column number for which the cell renderer applies</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"renderer"},children:[{type:"desc",attributes:{"text":"<p>The cell renderer for the specified column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"@link qx.ui.progressive.renderer.table.cell.Abstract"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a cell renderer for use within a row rendered by this row\nrenderer.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"name":"getDefaultRowHeight","fromProperty":"defaultRowHeight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>defaultRowHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultRowHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>defaultRowHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getLayoutChildren"},children:[{type:"desc",attributes:{"text":"<p>This method is required by the box layout. If returns an array of items\nto relayout.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"initDefaultRowHeight","fromProperty":"defaultRowHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>defaultRowHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>defaultRowHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultRowHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.progressive.renderer.Abstract","overriddenFrom":"qx.ui.progressive.renderer.Abstract","name":"join"},children:[{type:"params",children:[{type:"param",attributes:{"name":"progressive"}},{type:"param",attributes:{"name":"name"}}]}]},{type:"method",attributes:{"name":"removeRenderer"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column for which the cell renderer is to be removed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove a cell renderer previously added with {@link #addRenderer}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.progressive.renderer.Abstract","overriddenFrom":"qx.ui.progressive.renderer.Abstract","name":"render"},children:[{type:"params",children:[{type:"param",attributes:{"name":"state"}},{type:"param",attributes:{"name":"element"}}]}]},{type:"method",attributes:{"name":"resetDefaultRowHeight","fromProperty":"defaultRowHeight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>defaultRowHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultRowHeight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setDefaultRowHeight","fromProperty":"defaultRowHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>defaultRowHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>defaultRowHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #defaultRowHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"16","name":"defaultRowHeight","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The default height of a row, if not altered by a cell renderer.</p>"}}]}]}]}