{type:"class",attributes:{"name":"TabButton","packageName":"qx.ui.tabview","superClass":"qx.ui.form.RadioButton","fullName":"qx.ui.tabview.TabButton","type":"class","interfaces":"qx.ui.form.IRadioItem"},children:[{type:"desc",attributes:{"text":"<p>A TabButton is the clickable part sitting on the {@link qx.ui.tabview.Page}.\nBy clicking on the TabButton the user can set a Page active.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.form.RadioButton","isCtor":"true","name":"ctor"}}]},{type:"events",children:[{type:"event",attributes:{"name":"close"},children:[{type:"desc",attributes:{"text":"<p>Fired by {@link qx.ui.tabview.Page} if the close button is clicked.</p>\n\n<p>Event data: The tab button.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#center","overriddenFrom":"qx.ui.basic.Atom","name":"_applyCenter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>center</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCenter}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Atom#iconPosition","overriddenFrom":"qx.ui.basic.Atom","name":"_applyIconPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>iconPosition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyIconPosition}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.tabview.TabButton#showCloseButton","name":"_applyShowCloseButton"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>showCloseButton</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyShowCloseButton}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.basic.Atom","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onCloseButtonClick"},children:[{type:"desc",attributes:{"text":"<p>Fires a &#8220;close&#8221; event when the close button is clicked.</p>"}}]},{type:"method",attributes:{"name":"getShowCloseButton","fromProperty":"showCloseButton"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>showCloseButton</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCloseButton}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>showCloseButton</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initShowCloseButton","fromProperty":"showCloseButton"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>showCloseButton</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>showCloseButton</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #showCloseButton}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isShowCloseButton","fromProperty":"showCloseButton"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>showCloseButton</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCloseButton}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetShowCloseButton","fromProperty":"showCloseButton"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>showCloseButton</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #showCloseButton}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setShowCloseButton","fromProperty":"showCloseButton"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>showCloseButton</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>showCloseButton</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCloseButton}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleShowCloseButton","fromProperty":"showCloseButton"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>showCloseButton</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #showCloseButton}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Boolean","apply":"_applyShowCloseButton","defaultValue":"false","name":"showCloseButton","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Indicates if the close button of a TabButton should be shown.</p>"}}]}]}]}