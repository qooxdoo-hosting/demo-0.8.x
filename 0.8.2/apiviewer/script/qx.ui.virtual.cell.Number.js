{type:"class",attributes:{"name":"Number","hasWarning":"true","packageName":"qx.ui.virtual.cell","superClass":"qx.ui.virtual.cell.Cell","fullName":"qx.ui.virtual.cell.Number","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>"}},{type:"constructor",children:[{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.ui.virtual.cell.Cell","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"numberFormat"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>numberFormat</code> is not documented.","column":"11","line":"28"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.virtual.cell.Cell","defaultValue":"\"cell-number\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.virtual.cell.Cell"}},{type:"property",attributes:{"check":"qx.util.format.NumberFormat","hasError":"true","name":"numberFormat","propertyType":"new"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"48"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.ui.virtual.cell.Abstract","overriddenFrom":"qx.ui.virtual.cell.Cell","name":"getContent","hasWarning":"true"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"}},{type:"param",attributes:{"name":"states"}}]}]},{type:"method",attributes:{"name":"getNumberFormat","fromProperty":"numberFormat"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>numberFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>numberFormat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initNumberFormat","fromProperty":"numberFormat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>numberFormat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>numberFormat</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetNumberFormat","fromProperty":"numberFormat"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>numberFormat</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setNumberFormat","fromProperty":"numberFormat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>numberFormat</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>numberFormat</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #numberFormat}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}