{type:"class",attributes:{"name":"ScrollBar","packageName":"qx.ui.core","superClass":"qx.ui.core.Widget","fullName":"qx.ui.core.ScrollBar","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The scroll bar widget, is a special slider, which is used in qooxdoo instead\nof the native browser scroll bars.</p>\n\n<p>Scroll bars are used by the {@link qx.ui.container.Scoll} container. Usually\na scroll bar is not used directly.</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the widget.</p>\n\n<pre class=\"javascript\">\n  var scrollBar = new qx.ui.core.ScrollBar(\"horizontal\");\n  scrollBar.set({\n    maximum: 500\n  })\n  this.getRoot().add(scrollBar);\n</pre>\n\n<p>This example creates a horizontal scroll bar with a maximum value of 500.</p>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/widget/ScrollBar\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"\"horizontal\"","name":"orientation"},children:[{type:"desc",attributes:{"text":"<p>The initial scroll bar orientation</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.ScrollBar#knobFactor","name":"_applyKnobFactor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveNumber"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveNumber"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>knobFactor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyKnobFactor}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.ScrollBar#maximum","name":"_applyMaximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"PositiveInteger"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaximum}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.ScrollBar#orientation","name":"_applyOrientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyOrientation}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.ScrollBar#pageStep","name":"_applyPageStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>pageStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyPageStep}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.ScrollBar#position","name":"_applyPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>position</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyPosition}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onChangeSliderValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The change event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Change listener for slider value changes.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onExecuteBegin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Execute event of the button</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Executed when the up/left button is executed (pressed)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onExecuteEnd"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Execute event of the button</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Executed when the down/right button is executed (pressed)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getKnobFactor","fromProperty":"knobFactor"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>knobFactor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>knobFactor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMaximum","fromProperty":"maximum"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPageStep","fromProperty":"pageStep"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>pageStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>pageStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPosition","fromProperty":"position"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>position</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #position}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>position</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSingleStep","fromProperty":"singleStep"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>singleStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>singleStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initKnobFactor","fromProperty":"knobFactor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>knobFactor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>knobFactor</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaximum","fromProperty":"maximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maximum</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>orientation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initPageStep","fromProperty":"pageStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>pageStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>pageStep</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initPosition","fromProperty":"position"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>position</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>position</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #position}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSingleStep","fromProperty":"singleStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>singleStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>singleStep</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetKnobFactor","fromProperty":"knobFactor"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>knobFactor</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMaximum","fromProperty":"maximum"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maximum</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetOrientation","fromProperty":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>orientation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetPageStep","fromProperty":"pageStep"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>pageStep</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetPosition","fromProperty":"position"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>position</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #position}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSingleStep","fromProperty":"singleStep"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>singleStep</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollBy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"offset"},children:[{type:"desc",attributes:{"text":"<p>Scroll by this offset</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls by the given offset.</p>\n\n<p>This method automatically corrects the given position to respect\nthe {@link #maximum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollBySteps"},children:[{type:"params",children:[{type:"param",attributes:{"name":"steps"},children:[{type:"desc",attributes:{"text":"<p>Number of steps</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls by the given number of steps following the value of {@link #stepSize}.</p>\n\n<p>This method automatically corrects the given position to respect\nthe {@link #maximum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollTo"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"},children:[{type:"desc",attributes:{"text":"<p>Scroll to this position. Must be greater zero.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls to the given position.</p>\n\n<p>This method automatically corrects the given position to respect\nthe {@link #maximum}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setKnobFactor","fromProperty":"knobFactor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>knobFactor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>knobFactor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #knobFactor}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMaximum","fromProperty":"maximum"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maximum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maximum</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maximum}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setOrientation","fromProperty":"orientation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>orientation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>orientation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #orientation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setPageStep","fromProperty":"pageStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>pageStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>pageStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #pageStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setPosition","fromProperty":"position"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>position</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>position</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #position}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSingleStep","fromProperty":"singleStep"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>singleStep</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>singleStep</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #singleStep}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"scrollbar\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"allowNull":"true","apply":"_applyKnobFactor","check":"PositiveNumber","name":"knobFactor","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Factor to apply to the width/height of the knob in relation\nto the dimension of the underlying area.</p>"}}]},{type:"property",attributes:{"check":"PositiveInteger","apply":"_applyMaximum","defaultValue":"100","name":"maximum","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The maximum value (difference between available size and\ncontent size).</p>"}}]},{type:"property",attributes:{"apply":"_applyOrientation","defaultValue":"\"horizontal\"","name":"orientation","possibleValues":"\"horizontal\",\"vertical\"","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The scroll bar orientation</p>"}}]},{type:"property",attributes:{"check":"Integer","apply":"_applyPageStep","defaultValue":"10","name":"pageStep","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The amount to increment on each event. Typically corresponds\nto the user pressing <code>PageUp</code> or <code>PageDown</code>.</p>"}}]},{type:"property",attributes:{"name":"position","defaultValue":"0","event":"scroll","propertyType":"new","apply":"_applyPosition","check":"qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()"},children:[{type:"desc",attributes:{"text":"<p>Position of the scrollbar (which means the scroll left/top of the\nattached area&#8217;s pane)</p>\n\n<p>Strictly validates according to {@link #maximum}.\nDoes not apply any correction to the incoming value. If you depend\non this, please use {@link #scrollTo} instead.</p>"}}]},{type:"property",attributes:{"check":"Integer","defaultValue":"20","name":"singleStep","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Step size for each click on the up/down or left/right buttons.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"scroll"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #position}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]}]}