{type:"class",attributes:{"name":"Grid","packageName":"qx.ui.layout","superClass":"qx.ui.layout.Abstract","fullName":"qx.ui.layout.Grid","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The grid layout manager arranges the items in a two dimensional\ngrid. Widgets can be placed into the grid&#8217;s cells and may span multiple rows\nand columns.</p>\n\n<p><strong>Features</strong></p>\n\n<ul>\n<li>Flex values for rows and columns</li>\n<li>Minimal and maximal column and row sizes</li>\n<li>Manually setting of column and row sizes</li>\n<li>Horizontal and vertical alignment</li>\n<li>Horizontal and vertical spacing</li>\n<li>Column and row spans</li>\n<li>Auto-sizing</li>\n</ul>\n\n<p><strong>Item Properties</strong></p>\n\n<ul>\n<li><strong>row</strong> <em>(Integer)</em>: The row of the cell the\n  widget should occupy. Each cell can only contain one widget. This layout\n  property is mandatory.\n</li>\n<li><strong>column</strong> <em>(Integer)</em>: The column of the cell the\n  widget should occupy. Each cell can only contain one widget. This layout\n  property is mandatory.\n</li>\n<li><strong>rowSpan</strong> <em>(Integer)</em>: The number of rows, the\n  widget should span, starting from the row specified in the <code>row</code>\n  property. The cells in the spanned rows must be empty as well.\n</li>\n<li><strong>colSpan</strong> <em>(Integer)</em>: The number of columns, the\n  widget should span, starting from the column specified in the <code>column</code>\n  property. The cells in the spanned columns must be empty as well.\n</li>\n</ul>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the grid layout.</p>\n\n<pre class=\"javascript\">\nvar layout = new qx.ui.layout.Grid();\nlayout.setRowFlex(0, 1); // make row 0 flexible\nlayout.setColumnWidth(1, 200); // set with of column 1 to 200 pixel\n\nvar container = new qx.ui.container.Composite(layout);\ncontainer.add(new qx.ui.core.Widget(), {row: 0, column: 0});\ncontainer.add(new qx.ui.core.Widget(), {row: 0, column: 1});\ncontainer.add(new qx.ui.core.Widget(), {row: 1, column: 0, rowSpan: 2});\n</pre>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/layout/Grid\">\nExtended documentation</a> and links to demos of this layout in the qooxdoo wiki."}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"0","name":"spacingX"},children:[{type:"desc",attributes:{"text":"<p>The horizontal spacing between grid cells.\n    Sets {@link #spacingX}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"0","name":"spacingY"},children:[{type:"desc",attributes:{"text":"<p>The vertical spacing between grid cells.\n    Sets {@link #spacingY}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__buildGrid"},children:[{type:"desc",attributes:{"text":"<p>Rebuild the internal representation of the grid</p>"}}]},{type:"method",attributes:{"access":"private","name":"__getOuterSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to get the size for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.LayoutItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes the widget&#8217;s size hint including the widget&#8217;s margins</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>a size hint map</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"_computeSizeHint"}},{type:"method",attributes:{"access":"protected","name":"_fixHeightsRowSpan"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowHeights"},children:[{type:"desc",attributes:{"text":"<p>The current row height array as computed by\n    {@link #_getRowHeights}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether all row spans fit with their preferred height into the\npreferred row heights. If there is not enough space, the preferred\nrow sizes are increased. The distribution respects the flex and max\nvalues of the rows.</p>\n\n<p>The same is true for the min sizes.</p>\n\n<p>The height array is modified in place.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_fixWidthsColSpan"},children:[{type:"params",children:[{type:"param",attributes:{"name":"colWidths"},children:[{type:"desc",attributes:{"text":"<p>The current column width array as computed by\n    {@link #_getColWidths}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether all col spans fit with their preferred width into the\npreferred column widths. If there is not enough space the preferred\ncolumn sizes are increased. The distribution respects the flex and max\nvalues of the columns.</p>\n\n<p>The same is true for the min sizes.</p>\n\n<p>The width array is modified in place.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_getColumnFlexOffsets"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The grid width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes for each column by how many pixels it must grow or shrink, taking\nthe column flex values and min/max widths into account.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Sparse array of offsets to add to each column width. If\n    an array entry is empty nothing should be added to the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getColWidths"},children:[{type:"desc",attributes:{"text":"<p>Compute the min/pref/max column widths.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>An array containg width information for each column. The\n    entries have the keys <code>minWidth</code>, <code>maxWidth</code> and\n    <code>width</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getRowFlexOffsets"},children:[{type:"params",children:[{type:"param",attributes:{"name":"height"},children:[{type:"desc",attributes:{"text":"<p>The grid height</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes for each row by how many pixels it must grow or shrink, taking\nthe row flex values and min/max heights into account.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Sparse array of offsets to add to each row height. If\n    an array entry is empty nothing should be added to the row.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getRowHeights"},children:[{type:"desc",attributes:{"text":"<p>Compute the min/pref/max row heights.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>An array containg height information for each row. The\n    entries have the keys <code>minHeight</code>, <code>maxHeight</code> and\n    <code>height</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_setColumnData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>The key under which the data should be stored</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>data to store</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Stores data for a grid column</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setRowData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>The key under which the data should be stored</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>data to store</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Stores data for a grid row</p>"}}]},{type:"method",attributes:{"name":"getCellAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get a map of the cell&#8217;s alignment. For vertical alignment the row alignment\ntakes precedence over the column alignment. For horizontal alignment it is\nthe over way round. If an alignment is set on the cell widget using\n{@link qx.ui.layout.Abstract#setLayoutProperty}, this alignment takes\nalways precedence over row or column alignment.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A map with the keys <code>vAlign</code> and <code>hAlign</code>\n    containing the vertical and horizontal cell alignment.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"name":"getCellWidget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the widget located in the cell. If a the cell is empty or the widget\nhas a {@link qx.ui.core.Widget#visibility} value of <code>exclude</code>,\n<code>null</code> is returned.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s widget. The value may be null.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getColumnAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get a map of the column&#8217;s alignment.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A map with the keys <code>vAlign</code> and <code>hAlign</code>\n    containing the vertical and horizontal column alignment.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"name":"getColumnFlex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the flex value of a grid column.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s flex value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getColumnMaxWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the maximum width of a grid column.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s maximum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getColumnMinWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the minimum width of a grid column.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s minimum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getColumnWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the preferred width of a grid column.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getRowAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The Row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get a map of the row&#8217;s alignment.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A map with the keys <code>vAlign</code> and <code>hAlign</code>\n    containing the vertical and horizontal row alignment.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"name":"getRowFlex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the flex value of a grid row.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s flex value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getRowHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the preferred height of a grid row.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getRowMaxHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the maximum height of a grid row.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s maximum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getRowMinHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the minimum height of a grid row.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s minimum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getSpacingX","fromProperty":"spacingX"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>spacingX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>spacingX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSpacingY","fromProperty":"spacingY"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>spacingY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>spacingY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSpacingX","fromProperty":"spacingX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>spacingX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>spacingX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSpacingY","fromProperty":"spacingY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>spacingY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>spacingY</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"invalidateLayoutCache"}},{type:"method",attributes:{"docFrom":"qx.ui.layout.Abstract","overriddenFrom":"qx.ui.layout.Abstract","name":"renderLayout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"availWidth"}},{type:"param",attributes:{"name":"availHeight"}}]}]},{type:"method",attributes:{"name":"resetSpacingX","fromProperty":"spacingX"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>spacingX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingX}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSpacingY","fromProperty":"spacingY"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>spacingY</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingY}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setColumnAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>Column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"hAlign"},children:[{type:"desc",attributes:{"text":"<p>The horizontal alignment. Valid values are\n   &#8220;left&#8221;, &#8220;center&#8221; and &#8220;right&#8221;.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"vAlign"},children:[{type:"desc",attributes:{"text":"<p>The vertical alignment. Valid values are\n   &#8220;top&#8221;, &#8220;middle&#8221;, &#8220;bottom&#8221;</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the default cell alignment for a column. This alignment can be\noverridden on a per cell basis by setting the cell&#8217;s content widget&#8217;s\n<code>alignX</code> and <code>alignY</code> properties.</p>\n\n<p>If on a grid cell both row and a column alignmnet is set, the horizontal\nalignmnet is taken from the column and the vertical alignment is taken\nfrom the row.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setColumnFlex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"flex"},children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s flex value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the flex value for a grid column.\nBy default the column flex value is <code>0</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setColumnMaxWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"maxWidth"},children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s maximum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the maximum width of a grid column.\nThe default value is <code>Infinity</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setColumnMinWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"minWidth"},children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s minimum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the minimum width of a grid column.\nThe default value is <code>0</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setColumnWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The column&#8217;s width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the preferred width of a grid column.\nThe default value is <code>Infinity</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setRowAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>Row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"hAlign"},children:[{type:"desc",attributes:{"text":"<p>The horizontal alignment. Valid values are\n   &#8220;left&#8221;, &#8220;center&#8221; and &#8220;right&#8221;.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"vAlign"},children:[{type:"desc",attributes:{"text":"<p>The vertical alignment. Valid values are\n   &#8220;top&#8221;, &#8220;middle&#8221;, &#8220;bottom&#8221;</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the default cell alignment for a row. This alignment can be\noverridden on a per cell basis by setting the cell&#8217;s content widget&#8217;s\n<code>alignX</code> and <code>alignY</code> properties.</p>\n\n<p>If on a grid cell both row and a column alignment is set, the horizontal\nalignmnet is taken from the column and the vertical alignment is taken\nfrom the row.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setRowFlex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"flex"},children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s flex value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the flex value for a grid row.\nBy default the row flex value is <code>0</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setRowHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"height"},children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the preferred height of a grid row.\nThe default value is <code>Infinity</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setRowMaxHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"maxHeight"},children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s maximum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the maximum height of a grid row.\nThe default value is <code>Infinity</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setRowMinHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The row index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"minHeight"},children:[{type:"desc",attributes:{"text":"<p>The row&#8217;s minimum width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the minimum height of a grid row.\nThe default value is <code>0</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setSpacing"},children:[{type:"params",children:[{type:"param",attributes:{"name":"spacing"},children:[{type:"desc",attributes:{"text":"<p>new horizontal and vertical spacing</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Shortcut to set both horizontal and vertical spacing between grid cells\nto the same value.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>This object (for chaining support).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Grid"}}]}]}]},{type:"method",attributes:{"name":"setSpacingX","fromProperty":"spacingX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>spacingX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>spacingX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSpacingY","fromProperty":"spacingY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>spacingY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>spacingY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #spacingY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Integer","apply":"_applyLayoutChange","defaultValue":"0","name":"spacingX","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The horizontal spacing between grid cells.</p>"}}]},{type:"property",attributes:{"check":"Integer","apply":"_applyLayoutChange","defaultValue":"0","name":"spacingY","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The vertical spacing between grid cells.</p>"}}]}]}]}