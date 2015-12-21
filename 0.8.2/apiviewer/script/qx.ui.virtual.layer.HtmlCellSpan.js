{type:"class",attributes:{"name":"HtmlCellSpan","hasWarning":"true","packageName":"qx.ui.virtual.layer","superClass":"qx.ui.virtual.layer.HtmlCell","fullName":"qx.ui.virtual.layer.HtmlCellSpan","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>An extended HtmlCell layer, which adds the possibility to specify row and\ncolumn spans for specific cells.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.virtual.layer.HtmlCell","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"htmlCellProvider"},children:[{type:"desc",attributes:{"text":"<p>This class\n   provides the <span class=\"caps\">HTML</span> markup for each cell.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.virtual.core.IHtmlCellProvider"}}]}]},{type:"param",attributes:{"name":"rowConfig"},children:[{type:"desc",attributes:{"text":"<p>The row configuration of the pane \n   in which the cells will be rendered</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.virtual.core.Axis"}}]}]},{type:"param",attributes:{"name":"columnConfig"},children:[{type:"desc",attributes:{"text":"<p>The column configuration of\n   the pane in which the cells will be rendered</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.virtual.core.Axis"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","hasError":"true","name":"__renderCell"},children:[{type:"params",children:[{type:"param",attributes:{"name":"htmlArr"}},{type:"param",attributes:{"name":"row"}},{type:"param",attributes:{"name":"column"}},{type:"param",attributes:{"name":"left"}},{type:"param",attributes:{"name":"top"}},{type:"param",attributes:{"name":"width"}},{type:"param",attributes:{"name":"height"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>htmlArr</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Parameter <code>row</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Parameter <code>column</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Parameter <code>left</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Parameter <code>top</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Parameter <code>width</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Parameter <code>height</code> is not documented.","column":"14","line":"75"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"75"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.virtual.layer.Abstract","overriddenFrom":"qx.ui.virtual.layer.HtmlCell","name":"_fullUpdate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"}},{type:"param",attributes:{"name":"lastRow"}},{type:"param",attributes:{"name":"firstColumn"}},{type:"param",attributes:{"name":"lastColumn"}},{type:"param",attributes:{"name":"rowSizes"}},{type:"param",attributes:{"name":"columnSizes"}}]}]},{type:"method",attributes:{"name":"setCellSpan"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]},{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The cell&#8217;s column</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]},{type:"param",attributes:{"name":"rowSpan"},children:[{type:"desc",attributes:{"text":"<p>The number of rows the cells spans</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]},{type:"param",attributes:{"name":"columnSpan"},children:[{type:"desc",attributes:{"text":"<p>The number of columns the cells spans</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the row and column span for a specific cell</p>"}}]}]}]}