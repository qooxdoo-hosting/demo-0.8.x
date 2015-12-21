{type:"class",attributes:{"isStatic":"true","name":"Opacity","packageName":"qx.bom.element","fullName":"qx.bom.element.Opacity","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Cross-browser opacity support.</p>\n\n<p>Optimized for animations (contains workarounds for typical flickering\nin some browsers). Reduced class dependencies for optimal size and\nperformance.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"compile"},children:[{type:"params",children:[{type:"param",attributes:{"name":"opacity"},children:[{type:"desc",attributes:{"text":"<p>A float number between 0 and 1</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Float"}}]}]}]},{type:"desc",attributes:{"text":"<p>Compiles the given opacity value into a cross-browser <span class=\"caps\">CSS</span> string.\nAccepts numbers between zero and one\nwhere &#8220;0&#8221; means transparent, &#8220;1&#8221; means opaque.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">CSS</span> compatible string</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"get"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"mode"},children:[{type:"desc",attributes:{"text":"<p>Choose one of the modes {@link qx.bom.element.Style#COMPUTED_MODE},\n  {@link qx.bom.element.Style#CASCADED_MODE}, {@link qx.bom.element.Style#LOCAL_MODE}.\n  The computed mode is the default one.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Gets computed opacity of given element. Accepts numbers between zero and one\nwhere &#8220;0&#8221; means transparent, &#8220;1&#8221; means opaque.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A float number between 0 and 1</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Float"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"reset"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Resets opacity of given element.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"set"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"opacity"},children:[{type:"desc",attributes:{"text":"<p>A float number between 0 and 1</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Float"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets opacity of given element. Accepts numbers between zero and one\nwhere &#8220;0&#8221; means transparent, &#8220;1&#8221; means opaque.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}