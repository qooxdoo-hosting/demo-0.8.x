{type:"class",attributes:{"isStatic":"true","name":"Assert","packageName":"qx.core","fullName":"qx.core.Assert","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A collection of assertions.</p>\n\n<p>These methods can be used to assert incoming parameters, return values, ...\nIf an assertion fails an {@link AssertionError} is thrown.</p>\n\n<p>Assertions are used in unit tests as well.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__assert"},children:[{type:"params",children:[{type:"param",attributes:{"name":"condition"},children:[{type:"desc",attributes:{"text":"<p>Condition to check for. Must evaluate to\n   <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"comment"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails. This\n   message is provided by the user.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Fail message defined in the calling assertion</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the condition evaluates to <code>true</code>. An\n{@link AssertionError} is thrown if otherwise.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assert"},children:[{type:"params",children:[{type:"param",attributes:{"name":"condition"},children:[{type:"desc",attributes:{"text":"<p>Condition to check for. Must evaluate to\n   <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the condition evaluates to <code>true</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertArgumentsCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"args"},children:[{type:"desc",attributes:{"text":"<p>The <code>arguments<code> variable of a function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"arguments"}}]}]},{type:"param",attributes:{"name":"minCount"},children:[{type:"desc",attributes:{"text":"<p>Minimal number of arguments</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"maxCount"},children:[{type:"desc",attributes:{"text":"<p>Maximum number of arguments</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the number of arguments is within the given range</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertArray"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an array.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertArrayEquals"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>The expected array</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"found"},children:[{type:"desc",attributes:{"text":"<p>The found array</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that both array have identical array items.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertBoolean"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a boolean.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertCssColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>The expected color</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value represents the given <span class=\"caps\">CSS</span> color value. This method\nparses the color strings and compares the <span class=\"caps\">RGB</span> values. It is able to\nparse values supported by {@link qx.util.ColorUtil.stringToRgb}.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertElement"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is a <span class=\"caps\">DOM</span> element.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertEquals"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>Reference value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"found"},children:[{type:"desc",attributes:{"text":"<p>found value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that both values are equal. (Uses the equality operator\n<code>==</code>.)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertEventFired"},children:[{type:"params",children:[{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>The object on which the event should be fired.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The event which should be fired.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"invokeFunc"},children:[{type:"desc",attributes:{"text":"<p>The function which will be invoked and which\n  fires the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"listenerFunc"},children:[{type:"desc",attributes:{"text":"<p>The function which will be invoked in the\n  listener. The function has one parameter called e which is the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shows if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that a event is fired.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertException"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>function to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"defaultValue":"Error","name":"exception"},children:[{type:"desc",attributes:{"text":"<p>Expected constructor of the exception.\n  The assertion fails if the raised exception is not an instance of the\n  parameter.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Error"}}]}]},{type:"param",attributes:{"name":"re"},children:[{type:"desc",attributes:{"text":"<p>The assertion fails if the error message does\n  not match this parameter</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"RegExp"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Asserts that the callback raises a matching exception.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertFalse"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Condition to check for. Must be identical to\n   <code>false</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is <code>false</code> (Identity check).</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a function.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertIdentical"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>Reference value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"found"},children:[{type:"desc",attributes:{"text":"<p>found value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that both values are identical. (Uses the identity operator\n<code>===</code>.)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertInArray"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"array"},children:[{type:"desc",attributes:{"text":"<p>List of valid values</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an item in the given array.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertInRange"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"min"},children:[{type:"desc",attributes:{"text":"<p>lower bound</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"max"},children:[{type:"desc",attributes:{"text":"<p>upper bound</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is inside the given range.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertInstance"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>The value must be an instance of this class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an instance of the given class.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertInteger"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an integer.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertInterface"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"iface"},children:[{type:"desc",attributes:{"text":"<p>The value must implement this interface</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value implements the given interface.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertJsonEquals"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>The the expected value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"found"},children:[{type:"desc",attributes:{"text":"<p>The found value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the first two arguments are equal, when serialized into\n<span class=\"caps\">JSON</span>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertKeyInMap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"map"},children:[{type:"desc",attributes:{"text":"<p>Map, where the keys represent the valid values</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"map"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a key in the given map.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertMap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a map either created using <code>new Object</code>\nor by using the object literal notation <code>{ ... }</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertMatch"},children:[{type:"params",children:[{type:"param",attributes:{"name":"str"},children:[{type:"desc",attributes:{"text":"<p>String, which should match the regular expression</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"re"},children:[{type:"desc",attributes:{"text":"<p>Regular expression to match</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"RegExp"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the given string matches the regular expression</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertNotEquals"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>Reference value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"found"},children:[{type:"desc",attributes:{"text":"<p>found value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that both values are not equal. (Uses the not equality operator\n<code>!=</code>.)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertNotIdentical"},children:[{type:"params",children:[{type:"param",attributes:{"name":"expected"},children:[{type:"desc",attributes:{"text":"<p>Reference value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"found"},children:[{type:"desc",attributes:{"text":"<p>found value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that both values are not identical. (Uses the not identity operator\n<code>!==</code>.)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertNotNull"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is not <code>null</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertNotUndefined"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is not <code>undefined</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertNull"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is <code>null</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertNumber"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a number.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertObject"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an object.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertPositiveInteger"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an integer >= 0.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertPositiveNumber"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a number >= 0.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertQxObject"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is an instance of {@link qx.core.Object}.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertQxWidget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is an instance of {@link qx.ui.core.Widget}.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertString"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value is a string.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertTrue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Condition to check for. Must be identical to\n   <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is <code>true</code> (Identity check).</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertType"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>expected type of the value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert the the value has the given type using the <code>typeof</code>\noperator. Because the type is not always what it is supposed to be it is\nbetter to use more explicit checks like {@link #assertString} or\n{@link #assertArray}.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"assertUndefined"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Assert that the value is <code>undefined</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"fail"},children:[{type:"params",children:[{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>Message to be shown if the assertion fails.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Raise an {@link AssertionError}</p>"}}]}]}]}