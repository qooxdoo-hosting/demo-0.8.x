{type:"class",attributes:{"isStatic":"true","name":"Variant","packageName":"qx.core","fullName":"qx.core.Variant","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>Manage variants of source code. May it be for different debug options,\nbrowsers or other environment flags.</p>\n\n<p>Variants enable the selection and removal of code from the build version.\nA variant consists of a collection of states from which exactly one is active\nat load time of the framework. The global map <code>qxvariants</code> can be\nused to select a variant before the Framework is loades.</p>\n\n<p>Depending on the selected variant a specific code\npath can be choosen using the <code>select</code> method. The generator is\nable to set a variant and remove all code paths which are\nnot selected by the variant.</p>\n\n<p>Variants are used to implement browser optimized builds and to remove\ndebugging code from the build version. It is very similar to conditional\ncompilation in C/C++.</p>\n\n<p>Here is a list of pre-defined variant names, the possilbe values they take,\nand their system default:\n<table>\n <tr>\n <th>Variant name</th><th>Possible values</th><th>System default</th>\n </tr><tr>\n <td>qx.client          <td>[ &#8220;gecko&#8221;, &#8220;mshtml&#8221;, &#8220;opera&#8221;, &#8220;webkit&#8221; ]   <td>&lt;auto-detected&gt;\n </tr><tr>\n <td>qx.debug                   <td>[ &#8220;on&#8221;, &#8220;off&#8221; ]                    <td>&#8220;on&#8221;\n </tr><tr>\n <td>qx.aspects                 <td>[ &#8220;on&#8221;, &#8220;off&#8221; ]                    <td>&#8220;off&#8221;\n </tr><tr>\n <td>qx.dynlocale     <td>[ &#8220;on&#8221;, &#8220;off&#8221; ]                    <td>&#8220;on&#8221;\n </tr>\n</table></p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__arrayContains"},children:[{type:"params",children:[{type:"param",attributes:{"name":"arr"},children:[{type:"desc",attributes:{"text":"<p>the array</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>object to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the array contains the given element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the array contains the element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__init"},children:[{type:"desc",attributes:{"text":"<p>Import settings from global qxvariants into current environment</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__isValidArray"},children:[{type:"params",children:[{type:"param",attributes:{"name":"v"},children:[{type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a value is a valid array. Valid arrays are:</p>\n\n<ul>\n<li>type is object</li>\n<li>instance is Array</li>\n</ul>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__isValidObject"},children:[{type:"params",children:[{type:"param",attributes:{"name":"v"},children:[{type:"desc",attributes:{"text":"<p>the value to validate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a value is a valid object. Valid object are:</p>\n\n<ul>\n<li>type is object</li>\n<li>instance != Array</li>\n</ul>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the variable is valid</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__loadUrlVariants"},children:[{type:"desc",attributes:{"text":"<p>Load variants from <span class=\"caps\">URL</span> parameters if the setting <code>&#8220;qx.allowUrlSettings&#8221;</code>\nis set to true.</p>\n\n<p>The url scheme for variants is: <code>qxvariant:VARIANT_NAME:VARIANT_VALUE</code>.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"compilerIsSet"},children:[{type:"desc",attributes:{"text":"<p>Pseudo function as replacement for isSet() which will only be handled by the optimizer</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"define"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>An Unique key for the variant. The key must be prefixed with a\n  namespace identifier (e.g. <code>&#8220;qx.debug&#8221;</code>)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"allowedValues"},children:[{type:"desc",attributes:{"text":"<p>An array of all allowed values for this variant.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]},{type:"param",attributes:{"name":"defaultValue"},children:[{type:"desc",attributes:{"text":"<p>Default value for the variant. Must be one of the values\n  defined in <code>defaultValues</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Define a variant</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"get"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>name of the variant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the current value of a variant.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>current value of the variant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"isSet"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>name of the variant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"variants"},children:[{type:"desc",attributes:{"text":"<p>value to check for. Several values can be &#8220;or&#8221;-combined by separating\n  them with a &#8221;|&#8221; character. A value of &#8220;mshtml|opera&#8221; would for example check if the variant is\n  set to &#8220;mshtml&#8221; or &#8220;opera&#8221;</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether a variant is set to a given value. To enable the generator to optimize\nthis selection, both parameters must be string literals.</p>\n\n<p>This method is meant to be used in if statements to select code paths. If the condition of\nan if statement is only this method, the generator is able to optimize the if\nstatement.</p>\n\n<p>Example:</p>\n\n<pre class=\"javascript\">\nif (qx.core.Variant.isSet(\"qx.client\", \"mshtml\")) {\n  // some Internet Explorer specific code\n} else if(qx.core.Variant.isSet(\"qx.client\", \"opera\")){\n  // Opera specific code\n} else {\n  // common code for all other browsers\n}\n</pre>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the variant is set to the given value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"select"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>name of the variant. To enable the generator to optimize\n  this selection, the key must be a string literal.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"variantFunctionMap"},children:[{type:"desc",attributes:{"text":"<p>map with variant names as keys and functions as values.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Select a function depending on the value of the variant.</p>\n\n<p>Example:</p>\n\n<pre class=\"javascript\">\nvar f = qx.Variant.select(\"qx.client\", {\n  \"gecko\": fucntion() { ... },\n  \"mshtml|opera\": function() { ... },\n  \"default\": function() { ... }\n});\n</pre>\n\n<p>Depending on the value of the <code>&#8220;qx.client&#8221;</code> variant whit will select the\ncorresponding function. The first case is selected if the variant is &#8220;gecko&#8221;, the second\nis selected if the variant is &#8220;mshtml&#8221; or &#8220;opera&#8221; and the third function is selected if\nnone of the other keys match the variant. &#8220;default&#8221; is the default case.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The selected function from the map.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]}]}]}