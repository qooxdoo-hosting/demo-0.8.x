{type:"class",attributes:{"name":"IFormElement","packageName":"qx.ui.form","implementations":"qx.ui.form.RadioGroup,qx.ui.form.Button,qx.ui.form.ComboBox,qx.ui.form.List,qx.ui.form.Slider,qx.ui.form.AbstractField,qx.ui.form.ToggleButton,qx.ui.form.Spinner,qx.ui.form.SplitButton,qx.ui.control.DateChooser,qx.ui.form.SelectBox,qx.ui.menu.CheckBox","childClasses":"qx.ui.form.IRadioItem","fullName":"qx.ui.form.IFormElement","type":"interface"},children:[{type:"desc",attributes:{"text":"<p>Each object, which is in some way usable in a form or as a form element\nshould implement this interface.</p>"}},{type:"events",children:[{type:"event",attributes:{"name":"changeEnabled"},children:[{type:"desc",attributes:{"text":"<p>Fired when the element was enabled or disabled</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"<p>Fired when the name attribute was modified</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fired when the value was modified</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"name":"getEnabled"},children:[{type:"desc",attributes:{"text":"<p>Get whether the element is enabled</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the element is enabled</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"getName"},children:[{type:"desc",attributes:{"text":"<p>Get the name of the element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the name of the element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"getValue"},children:[{type:"desc",attributes:{"text":"<p>The element&#8217;s user set value</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setEnabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>whether the element should be enabled</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set whether the element is enabled</p>"}}]},{type:"method",attributes:{"name":"setName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new name of the element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the element&#8217;s name</p>"}}]},{type:"method",attributes:{"name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new value of the element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the element&#8217;s string value</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}