{type:"class",attributes:{"hasError":"true","name":"ListController","hasWarning":"true","packageName":"qx.ui.virtual.form","superClass":"qx.core.Object","fullName":"qx.ui.virtual.form.ListController","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"model"}},{type:"param",attributes:{"name":"target"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>model</code> is not documented.","column":"11","line":"6"}},{type:"error",attributes:{"msg":"Parameter <code>target</code> is not documented.","column":"11","line":"6"}}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeModel"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #model}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeSelection"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #selection}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeTarget"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #target}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","hasError":"true","name":"__onChangeSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"104"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"104"}}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.virtual.form.ListController#model","name":"_applyModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.IListData"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.IListData"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyModel}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.virtual.form.ListController#selection","name":"_applySelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.IListData"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.IListData"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>selection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySelection}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.virtual.form.ListController#target","name":"_applyTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>target</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTarget}.</p>"}}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onChangeLengthModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"22","line":"121"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"121"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onChangeModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"16","line":"126"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"126"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_syncRowCount"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"135"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getCellData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>row</code> is not documented.","column":"13","line":"143"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"143"}}]}]},{type:"method",attributes:{"name":"getModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSelection","fromProperty":"selection"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>selection</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTarget","fromProperty":"target"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>target</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>target</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>model</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSelection","fromProperty":"selection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>selection</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selection</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTarget","fromProperty":"target"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>target</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>target</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>model</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSelection","fromProperty":"selection"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selection</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selection}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTarget","fromProperty":"target"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>target</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSelection","fromProperty":"selection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>selection</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTarget","fromProperty":"target"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>target</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>target</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"hasError":"true","name":"model","defaultValue":"null","event":"changeModel","allowNull":"true","propertyType":"new","apply":"_applyModel","check":"qx.data.IListData"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"22"}}]}]},{type:"property",attributes:{"hasError":"true","name":"selection","event":"changeSelection","propertyType":"new","apply":"_applySelection","check":"qx.data.IListData"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"22"}}]}]},{type:"property",attributes:{"hasError":"true","name":"target","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyTarget","event":"changeTarget"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"22"}}]}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Class documentation is missing.","column":"16","line":"1"}}]}]}