{type:"class",attributes:{"name":"Focus","packageName":"qx.event.handler","superClass":"qx.core.Object","fullName":"qx.event.handler.Focus","type":"class","interfaces":"qx.event.IEventHandler"},children:[{type:"desc",attributes:{"text":"<p>This handler is used to normalize all focus/activation requirements\nand normalize all cross browser quirks in this area.</p>\n\n<p>Notes:</p>\n\n<ul>\n<li>Webkit and Opera (before 9.5) do not support tabIndex for all elements<br />\n(See also: <a href=\"http://bugs.webkit.org/show_bug.cgi?id=7138\">http://bugs.webkit.org/show_bug.cgi?id=7138</a>)</li>\n</ul>\n\n<ul>\n<li>TabIndex is normally 0, which means all naturally focusable elements are focusable.</li>\n<li>TabIndex > 0 means that the element is focusable and tabable</li>\n<li>TabIndex < 0 means that the element, even if naturally possible, is not focusable.</li>\n</ul>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"manager"},children:[{type:"desc",attributes:{"text":"<p>Event manager for the window to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Manager"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create a new instance</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__doWindowBlur"},children:[{type:"desc",attributes:{"text":"<p>Helper for native event listeners to react on window blur</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__doWindowFocus"},children:[{type:"desc",attributes:{"text":"<p>Helper for native event listeners to react on window focus</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__findActivatableElement"},children:[{type:"params",children:[{type:"param",attributes:{"name":"el"},children:[{type:"desc",attributes:{"text":"<p>Element to start lookup with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the next activatable element. May be the element itself.\nWorks a bit different than the method {@link #__findFocusableElement}\nas it looks up for a parent which is has a keep focus flag. When\nthere is such a parent it returns null otherwise the original\nincoming element.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__findFocusableElement"},children:[{type:"params",children:[{type:"param",attributes:{"name":"el"},children:[{type:"desc",attributes:{"text":"<p>Element to start lookup with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the next focusable parent element of a activated <span class=\"caps\">DOM</span> element.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__fireEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element which is the target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"related"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element which is the related target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Name of the event to fire</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"bubbles"},children:[{type:"desc",attributes:{"text":"<p>Whether the event should bubble</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Shorthand to fire events from within this class.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__isFocusable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"el"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> Element to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given element is focusable. This is perfectly modeled to the\nbrowsers behavior and this way may differ in the various clients.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the element is focusable</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__isSelectable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to start lookup with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given el (or its content) should be selectable\nby the user.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the content is selectable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onNativeBlur"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Native event listener for <code>blur</code>.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onNativeDragGesture"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Native event listener for <code>draggesture</code> event\nsupported by gecko. Used to stop native drag and drop when\nselection is disabled.</p>"}},{type:"see",attributes:{"name":"http"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onNativeFocus"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Native event listener for <code>focus</code>.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onNativeFocusIn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Native event listener for <code>DOMFocusIn</code> or <code>focusin</code>\ndepending on the client&#8217;s engine.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onNativeFocusOut"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Native event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Native event listener for <code>DOMFocusOut</code> or <code>focusout</code>\ndepending on the client&#8217;s engine.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.event.handler.Focus#active","name":"_applyActive"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>active</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyActive}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.event.handler.Focus#focus","name":"_applyFocus"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>focus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFocus}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_initObserver"},children:[{type:"desc",attributes:{"text":"<p>Initializes event listeners.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_stopObserver"},children:[{type:"desc",attributes:{"text":"<p>Disconnects event listeners.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"activate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to activate</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Activates the given <span class=\"caps\">DOM</span> element</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"blur"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to focus</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Blurs the given <span class=\"caps\">DOM</span> element</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"canHandleEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}}]}]},{type:"method",attributes:{"name":"deactivate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to activate</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Deactivates the given <span class=\"caps\">DOM</span> element</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"focus"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to focus</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Focusses the given <span class=\"caps\">DOM</span> element</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getActive","fromProperty":"active"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>active</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #active}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>active</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getFocus","fromProperty":"focus"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>focus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focus}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>focus</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initActive","fromProperty":"active"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>active</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>active</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #active}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initFocus","fromProperty":"focus"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>focus</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>focus</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #focus}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"registerEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"capture"}}]}]},{type:"method",attributes:{"name":"resetActive","fromProperty":"active"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>active</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #active}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetFocus","fromProperty":"focus"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>focus</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #focus}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setActive","fromProperty":"active"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>active</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>active</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #active}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setFocus","fromProperty":"focus"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>focus</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>focus</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #focus}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"tryActivate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to activate</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Tries to activate the given element. This checks wether\nthe activation is allowed first.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"unregisterEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"capture"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","apply":"_applyActive","name":"active","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The active <span class=\"caps\">DOM</span> element</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyFocus","name":"focus","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The focussed <span class=\"caps\">DOM</span> element</p>"}}]}]},{type:"constants",children:[{type:"constant",attributes:{"name":"PRIORITY"},children:[{type:"desc",attributes:{"text":"<p>Priority of this handler</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"IGNORE_CAN_HANDLE","value":"true"},children:[{type:"desc",attributes:{"text":"<p>Whether the method &#8220;canHandleEvent&#8221; must be called</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"name":"FOCUSABLE_ELEMENTS"},children:[{type:"desc",attributes:{"text":"<p>See: <a href=\"http://msdn.microsoft.com/en-us/library/ms534654\">http://msdn.microsoft.com/en-us/library/ms534654</a>(VS.85).aspx</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"constant",attributes:{"name":"SUPPORTED_TYPES"},children:[{type:"desc",attributes:{"text":"<p>Supported event types</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]}]}