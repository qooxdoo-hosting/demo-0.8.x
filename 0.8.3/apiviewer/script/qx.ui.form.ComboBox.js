{type:"class",attributes:{"name":"ComboBox","packageName":"qx.ui.form","superClass":"qx.ui.form.AbstractSelectBox","childClasses":"qx.ui.form.DateField","fullName":"qx.ui.form.ComboBox","type":"class","interfaces":"qx.ui.form.IFormElement,qx.ui.form.IStringForm"},children:[{type:"desc",attributes:{"text":"<p>Basically a text fields which allows a selection from a list of\npreconfigured options. Allows custom user input. Public <span class=\"caps\">API</span> is value\noriented.</p>\n\n<p>To work with selections without custom input the ideal candidates are\nthe {@link SelectBox} or the {@link RadioGroup}.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.form.AbstractSelectBox","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__defaultFormat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The list item to format.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"ListItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Return the formatted label text from the <code>ListItem</code>.\nThe formatter removes all <span class=\"caps\">HTML</span> tags and converts all <span class=\"caps\">HTML</span> entities\nto string characters when the rich property is <code>true</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The formatted text.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.ComboBox#placeholder","name":"_applyPlaceholder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>placeholder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyPlaceholder}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onClick"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse click event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Toggles the popup&#8217;s visibility.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onListChangeSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onListMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.form.AbstractSelectBox","overriddenFrom":"qx.ui.form.AbstractSelectBox","name":"_onPopupChangeVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onTextFieldChangeValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Change event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Reacts on value changes of the text field and syncs the\nvalue to the combobox.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onTextFieldInput"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Input event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Redirects the input event of the textfield to the combobox.</p>"}}]},{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","name":"addListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"listener"}},{type:"param",attributes:{"name":"self"}},{type:"param",attributes:{"name":"capture"}}]}]},{type:"method",attributes:{"name":"clearSelection"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use public method &#8216;clearTextSelection&#8217; instead</p>"}}]},{type:"desc",attributes:{"text":"<p>Clears the current selection.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"clearTextSelection"},children:[{type:"desc",attributes:{"text":"<p>Clears the current selection.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getFormat","fromProperty":"format"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>format</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #format}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>format</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPlaceholder","fromProperty":"placeholder"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>placeholder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #placeholder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>placeholder</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSelection"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use public method &#8216;getTextSelection&#8217; instead</p>"}}]},{type:"desc",attributes:{"text":"<p>Returns the current selection.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getSelectionLength"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use public method &#8216;getTextSelectionLength&#8217; instead</p>"}}]},{type:"desc",attributes:{"text":"<p>Returns the current selection length.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getTextSelection"},children:[{type:"desc",attributes:{"text":"<p>Returns the current selection.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getTextSelectionLength"},children:[{type:"desc",attributes:{"text":"<p>Returns the current selection length.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.form.IFormElement","name":"getValue"}},{type:"method",attributes:{"access":"protected","name":"initFormat","fromProperty":"format"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>format</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>format</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #format}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initPlaceholder","fromProperty":"placeholder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>placeholder</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>placeholder</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #placeholder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetFormat","fromProperty":"format"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>format</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #format}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetPlaceholder","fromProperty":"placeholder"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>placeholder</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #placeholder}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.form.IStringForm","name":"resetValue"}},{type:"method",attributes:{"name":"selectAll"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use public method &#8216;selectAllText&#8217; instead</p>"}}]},{type:"desc",attributes:{"text":"<p>Selects the whole content</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"selectAllText"},children:[{type:"desc",attributes:{"text":"<p>Selects the whole content</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setFormat","fromProperty":"format"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>format</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>format</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #format}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setPlaceholder","fromProperty":"placeholder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>placeholder</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>placeholder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #placeholder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"start"},children:[{type:"desc",attributes:{"text":"<p>start of the selection (zero-based)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"end"},children:[{type:"desc",attributes:{"text":"<p>end of the selection</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use public method &#8216;setTextSelection&#8217; instead</p>"}}]},{type:"desc",attributes:{"text":"<p>Set the selection to the given start and end (zero-based).\nIf no end value is given the selection will extend to the\nend of the textfield&#8217;s content.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setTextSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"start"},children:[{type:"desc",attributes:{"text":"<p>start of the selection (zero-based)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"end"},children:[{type:"desc",attributes:{"text":"<p>end of the selection</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the selection to the given start and end (zero-based).\nIf no end value is given the selection will extend to the\nend of the textfield&#8217;s content.\nThis method only works if the widget is already created and\nadded to the document.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.form.IFormElement","name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"tabFocus"}}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"combobox\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"check":"Function","allowNull":"true","defaultValue":"[Unsupported item type: function]","name":"format","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Formatter to format <code>TextField</code> value when <code>ListItem</code>\nis selected. Uses the default formatter {@link qx.ui.form.ComboBox#__defaultFormat}.</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyPlaceholder","check":"String","name":"placeholder","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>String value which will be shown as a hint if the field is all of:\nunset, unfocused and enabled. Set to null to not show a placeholder\ntext.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Whenever the value is changed this event is fired</p>\n\n<p>Event data: The new text value of the field.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"input"},children:[{type:"desc",attributes:{"text":"<p>The input event is fired on every keystroke modifying the value of the field</p>\n\n<p>Event data: The new text value of the field.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]},{type:"deprecated"}]}]}]}