{type:"class",attributes:{"name":"MTranslation","packageName":"qx.locale","includer":"qx.ui.core.Widget,qx.ui.table.columnmodel.Resize,qx.application.AbstractGui","fullName":"qx.locale.MTranslation","type":"mixin"},children:[{type:"desc",attributes:{"text":"<p>This mixin contains the methods needed to use the translation features\nof qooxdoo.</p>"}},{type:"methods",children:[{type:"method",attributes:{"isMixin":"true","name":"marktr"},children:[{type:"params",children:[{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>the message ID</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Mark the message for translation but return the original message.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>messageId</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"tr"},children:[{type:"params",children:[{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>message id (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>variable number of argumes applied to the format string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a message\nMark the message for translation.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the localized string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"trc"},children:[{type:"params",children:[{type:"param",attributes:{"name":"hint"},children:[{type:"desc",attributes:{"text":"<p>hint for the translator of the message. Will be included in the .po file.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"messageId"},children:[{type:"desc",attributes:{"text":"<p>message id (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>variable number of argumes applied to the format string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a message with translation hint\nMark the messages for translation.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the localized string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"trn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"singularMessageId"},children:[{type:"desc",attributes:{"text":"<p>message id of the singular form (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"pluralMessageId"},children:[{type:"desc",attributes:{"text":"<p>message id of the plural form (may contain format strings)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"count"},children:[{type:"desc",attributes:{"text":"<p>if greater than 1 the plural form otherwhise the singular form is returned.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>variable number of argumes applied to the format string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translate a plural message\nMark the messages for translation.</p>\n\n<p>Depending on the third argument the plursl or the singular form is chosen.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the localized string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]}