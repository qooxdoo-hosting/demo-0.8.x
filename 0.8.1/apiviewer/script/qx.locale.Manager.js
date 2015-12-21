{type:"class",attributes:{"name":"Manager","packageName":"qx.locale","superClass":"qx.core.Object","isSingleton":"true","fullName":"qx.locale.Manager","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The qx.locale.Manager provides static translation methods (like tr()) and\ngeneral locale information.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"}}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.locale.Manager"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"marktr"},children:[{type:"params",children:[{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>the message ID</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Mark the message for translation but return the original message.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>messageId</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"tr"},children:[{type:"params",children:[{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>message id (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>variable number of argumes applied to the format string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a message</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The translated string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"see",attributes:{"name":"qx.lang.String.format"}}]},{type:"method",attributes:{"isStatic":"true","name":"trc"},children:[{type:"params",children:[{type:"param",attributes:{"name":"hint"},children:[{type:"desc",attributes:{"text":"<p>hint for the translator of the message. Will be included in the .po file.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>message id (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>variable number of argumes applied to the format string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a message with translation hint</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The translated string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"see",attributes:{"name":"qx.lang.String.format"}}]},{type:"method",attributes:{"isStatic":"true","name":"trn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"singularMessageId"},children:[{type:"desc",attributes:{"text":"<p>message id of the singular form (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"pluralMessageId"},children:[{type:"desc",attributes:{"text":"<p>message id of the plural form (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"count"},children:[{type:"desc",attributes:{"text":"<p>singular form if equals 1, otherwise plural</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>variable number of arguments applied to the format string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a plural message</p>\n\n<p>Depending on the third argument the plural or the singular form is chosen.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The translated string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"see",attributes:{"name":"qx.lang.String.format"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeLocale"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #locale}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__extractLanguage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"locale"},children:[{type:"desc",attributes:{"text":"<p>locale to be used</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Extract the language part from a locale.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>language</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.locale.Manager#locale","name":"_applyLocale"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>locale</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyLocale}.</p>"}}]},{type:"method",attributes:{"name":"addTranslation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"languageCode"},children:[{type:"desc",attributes:{"text":"<p>language code of the translation like de, de_AT, en, en_GB, fr, ...</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"translationMap"},children:[{type:"desc",attributes:{"text":"<p>mapping of message identifiers (english text) to the target language</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a translation to the translation manager</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getAvailableLocales"},children:[{type:"desc",attributes:{"text":"<p>Return the available application locales</p>\n\n<p>This corresponds to the Makefile APPLICATION_LOCALES setting</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>array of available locales</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getLanguage"},children:[{type:"desc",attributes:{"text":"<p>Get the language code of the current locale</p>\n\n<p>This is the first part of a locale definition. The language for &#8220;de_DE&#8221; would be &#8220;de&#8221;</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>language code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getLocale","fromProperty":"locale"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>locale</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #locale}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>locale</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTerritory"},children:[{type:"desc",attributes:{"text":"<p>Get the territory code of the current locale</p>\n\n<p>This is the second part of a locale definition. The territory for &#8220;de_DE&#8221; would be &#8220;DE&#8221;</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>territory code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initLocale","fromProperty":"locale"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>locale</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>locale</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #locale}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"localize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>message id (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"args"},children:[{type:"desc",attributes:{"text":"<p>array of objects, which are inserted into the format string.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object","dimensions":"1"}}]}]},{type:"param",attributes:{"name":"locale"},children:[{type:"desc",attributes:{"text":"<p>optional locale to be used for translation</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Provide localisation (CLDR) data</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>translated message.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"resetLocale","fromProperty":"locale"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>locale</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #locale}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setLocale","fromProperty":"locale"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>locale</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>locale</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #locale}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"translate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>message id (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"args"},children:[{type:"desc",attributes:{"text":"<p>array of objects, which are inserted into the format string.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object","dimensions":"1"}}]}]},{type:"param",attributes:{"name":"locale"},children:[{type:"desc",attributes:{"text":"<p>optional locale to be used for translation</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a message using the current locale and apply format string to the arguments.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>translated message.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"locale","check":"String","allowNull":"true","propertyType":"new","apply":"_applyLocale","event":"changeLocale"},children:[{type:"desc",attributes:{"text":"<p>current locale. locale is an language code like de, de_AT, en, en_GB, fr, ...</p>"}}]}]}]}