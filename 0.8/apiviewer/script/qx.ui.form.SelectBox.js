{type:"class",attributes:{"name":"SelectBox","packageName":"qx.ui.form","superClass":"qx.ui.form.AbstractSelectBox","fullName":"qx.ui.form.SelectBox","type":"class","interfaces":"qx.ui.form.IFormElement"},children:[{type:"desc",attributes:{"text":"<p>A form widget which allows a single selection. Looks somewhat like\na normal button, but opens a list of items to select when clicking on it.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.form.AbstractSelectBox","isCtor":"true","name":"ctor"}}]},{type:"events",children:[{type:"event",attributes:{"name":"changeSelected"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #selected}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.SelectBox#selected","name":"_applySelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySelected}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onClick"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Toggles the popup&#8217;s visibility.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onKeyInput"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Key event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.KeyInput"}}]}]}]},{type:"desc",attributes:{"text":"<p>Forwards key event to list widget.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onListChangeSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onListMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseWheel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for mousewheel event</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onPopupChangeVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"name":"getSelected","fromProperty":"selected"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.form.IFormElement","name":"getValue"}},{type:"method",attributes:{"access":"protected","name":"initSelected","fromProperty":"selected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selected</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetSelected","fromProperty":"selected"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selected</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setSelected","fromProperty":"selected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.form.IFormElement","name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"selectbox\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"event":"changeSelected","apply":"_applySelected","check":"qx.ui.form.ListItem","name":"selected","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The selected item inside the list.</p>"}}]}]}]}