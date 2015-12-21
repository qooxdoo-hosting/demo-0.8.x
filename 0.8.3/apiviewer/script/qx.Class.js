{type:"class",attributes:{"isStatic":"true","name":"Class","packageName":"qx","fullName":"qx.Class","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>This class is one of the most important parts of qooxdoo&#8217;s\nobject-oriented features.</p>\n\n<p>Its {@link #define} method is used to create qooxdoo classes.</p>\n\n<p>Each instance of a class defined by {@link #define} has\nthe following keys attached to the constructor and the prototype:</p>\n\n<table>\n<tr><th><code>classname</code></th><td>The fully-qualified name of the class (e.g. <code>\"qx.ui.core.Widget\"</code>).</td></tr>\n<tr><th><code>basename</code></th><td>The namespace part of the class name (e.g. <code>\"qx.ui.core\"</code>).</td></tr>\n<tr><th><code>constructor</code></th><td>A reference to the constructor of the class.</td></tr>\n<tr><th><code>superclass</code></th><td>A reference to the constructor of the super class.</td></tr>\n</table>\n\n<p>Each method may access static members of the same class by using\n<code>this.self(arguments)</code> ({@link qx.core.Object#self}):</p>\n\n<pre class=\"javascript\">\nstatics : { FOO : \"bar\" },\nmembers: {\n  baz: function(x) {\n    this.self(arguments).FOO;\n    ...\n  }\n}\n</pre>\n\n<p>Each overriding method may call the overridden method by using\n<code>this.base(arguments [, ...])</code> ({@link qx.core.Object#base}). This is also true for calling\nthe constructor of the superclass.</p>\n\n<pre class=\"javascript\">\nmembers: {\n  foo: function(x) {\n    this.base(arguments, x);\n    ...\n  }\n}\n</pre>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__addEvents"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to add the events to</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"events"},children:[{type:"desc",attributes:{"text":"<p>map of event names the class fires.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"patch"},children:[{type:"desc",attributes:{"text":"<p>Enable redefinition of event type?</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Attach events to the class</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__addInterface"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to add interface to</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"iface"},children:[{type:"desc",attributes:{"text":"<p>the Interface to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Interface"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a single interface to a class</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__addMembers"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>clazz to add members to</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"members"},children:[{type:"desc",attributes:{"text":"<p>The map of members to attach</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"patch"},children:[{type:"desc",attributes:{"text":"<p>Enable patching of</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"base"},children:[{type:"desc",attributes:{"text":"<p>(Boolean ? true) Attach base flag to mark function as members\n    of this class</p>"}}]},{type:"param",attributes:{"defaultValue":"false","name":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Whether the member method should be wrapped.\n    this is needed to allow base calls in patched mixin members.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Attach members to a class</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__addMixin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>A class previously defined where the mixin should be attached.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"mixin"},children:[{type:"desc",attributes:{"text":"<p>Include all features of this mixin</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin"}}]}]},{type:"param",attributes:{"name":"patch"},children:[{type:"desc",attributes:{"text":"<p>Overwrite existing fields, functions and properties</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Include all features of the mixin into the given class (recursive).</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__addProperties"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to add the properties to</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"properties"},children:[{type:"desc",attributes:{"text":"<p>map of properties</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"patch"},children:[{type:"desc",attributes:{"text":"<p>Overwrite property with the limitations of a property\n              which means you are able to refine but not to replace (esp. for new properties)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Attach properties to classes</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__createClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>Full name of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>type of the class, i.e. &#8220;static&#8221;, &#8220;abstract&#8221; or &#8220;singleton&#8221;</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"extend"},children:[{type:"desc",attributes:{"text":"<p>Superclass to inherit from</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"statics"},children:[{type:"desc",attributes:{"text":"<p>Static methods or fields</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"name":"construct"},children:[{type:"desc",attributes:{"text":"<p>Constructor of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"destruct"},children:[{type:"desc",attributes:{"text":"<p>Destructor of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a class by type. Supports modern inheritance etc.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The generated class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__createDefaultConstructor"},children:[{type:"desc",attributes:{"text":"<p>Returns the default constructor.\nThis constructor just calls the constructor of the base class.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The default constructor.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__createEmptyFunction"},children:[{type:"desc",attributes:{"text":"<p>Returns an empty function. This is needed to get an empty function with an empty closure.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>empty function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__mixinMemberWrapper"},children:[{type:"params",children:[{type:"param",attributes:{"name":"member"},children:[{type:"desc",attributes:{"text":"<p>The mixin method to wrap</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"base"},children:[{type:"desc",attributes:{"text":"<p>The overwritten method</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"desc",attributes:{"text":"<p>Wraps a member function of a mixin, which is included using &#8220;patch&#8221;. This\nallows &#8220;base&#8221; calls in the mixin member function.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the wrapped mixin member</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__wrapConstructor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"construct"},children:[{type:"desc",attributes:{"text":"<p>the original constructor</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>name of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>the user specified class type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Generate a wrapper of the original class constructor in order to enable\nsome of the advanced OO features (e.g. abstract class, singleton, mixins)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"define"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>Name of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"config"},children:[{type:"desc",attributes:{"text":"<p>Class definition structure. The configuration map has the following keys:\n    <table>\n      <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n      <tr><th>type</th><td>String</td><td>\n          Type of the class. Valid types are &#8220;abstract&#8221;, &#8220;static&#8221; and &#8220;singleton&#8221;.\n          If unset it defaults to a regular non-static class.\n      </td></tr>\n      <tr><th>extend</th><td>Class</td><td>The super class the current class inherits from.</td></tr>\n      <tr><th>implement</th><td>Interface | Interface[]</td><td>Single interface or array of interfaces the class implements.</td></tr>\n      <tr><th>include</th><td>Mixin | Mixin[]</td><td>Single mixin or array of mixins, which will be merged into the class.</td></tr>\n      <tr><th>construct</th><td>Function</td><td>The constructor of the class.</td></tr>\n      <tr><th>statics</th><td>Map</td><td>Map of static members of the class.</td></tr>\n      <tr><th>properties</th><td>Map</td><td>Map of property definitions. For a description of the format of a property definition see\n          {@link qx.core.Property}.</td></tr>\n      <tr><th>members</th><td>Map</td><td>Map of instance members of the class.</td></tr>\n      <tr><th>settings</th><td>Map</td><td>Map of settings for this class. For a description of the format of a setting see\n          {@link qx.core.Setting}.</td></tr>\n      <tr><th>variants</th><td>Map</td><td>Map of settings for this class. For a description of the format of a setting see\n          {@link qx.core.Variant}</td></tr>\n      <tr><th>events</th><td>Map</td><td>\n          Map of events the class fires. The keys are the names of the events and the values are the\n          corresponding event type class names.\n      </td></tr>\n      <tr><th>defer</th><td>Function</td><td>Function that is called at the end of processing the class declaration. It allows access to the declared statics, members and properties.</td></tr>\n      <tr><th>destruct</th><td>Function</td><td>The destructor of the class.</td></tr>\n    </table></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Define a new class using the qooxdoo class system. This sets up the\nnamespace for the class and generates the class from the definition map.</p>\n\n<p>Example:</p>\n\n<pre class=\"javascript\">\nqx.Class.define(\"name\",\n{\n  extend : Object, // superclass\n  implement : [Interfaces],\n  include : [Mixins],\n\n  statics:\n  {\n    CONSTANT : 3.141,\n\n    publicMethod: function() {},\n    _protectedMethod: function() {},\n    __privateMethod: function() {}\n  },\n\n  properties:\n  {\n    \"tabIndex\": { check: \"Number\", init : -1 }\n  },\n\n  members:\n  {\n    publicField: \"foo\",\n    publicMethod: function() {},\n\n    _protectedField: \"bar\",\n    _protectedMethod: function() {},\n\n    __privateField: \"baz\",\n    __privateMethod: function() {}\n  }\n});\n</pre>"}}]},{type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"genericToString"},children:[{type:"desc",attributes:{"text":"<p>This method will be attached to all classes to return\na nice identifier for them.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The class identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getByInterface"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to look for the interface</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"iface"},children:[{type:"desc",attributes:{"text":"<p>interface to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Interface"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the class or one of its super classes which contains the\ndeclaration of the given interface. Returns null if the interface is not\nspecified anywhere.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the class which directly implements the given interface</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getByMixin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to look for the mixin</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"mixin"},children:[{type:"desc",attributes:{"text":"<p>mixin to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the class or one of its superclasses which contains the\ndeclaration for the given mixin. Returns null if the mixin is not\nspecified anywhere.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The class which directly includes the given mixin</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getByName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>class name to resolve</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Find a class by its name</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getByProperty"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to look for the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>name of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the class or one of its superclasses which contains the\ndeclaration for the given property in its class definition. Returns null\nif the property is not specified anywhere.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The class which includes the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getEventType"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>name of the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the event type of the given event. Returns null if\nthe event does not exist.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Event type of the given event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Helper method to handle singletons</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"getInterfaces"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class which should be inspected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a list of all mixins available in a class.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>array of mixins this class uses</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin","dimensions":"1"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getMixins"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class which should be inspected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a list of all mixins available in a given class.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>array of mixins this class uses</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin","dimensions":"1"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getProperties"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>Class to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a list of all properties supported by the given class</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>List of all property names</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getPropertyDefinition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>name of the event to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the definition of the given property. Returns null\nif the property does not exist.</p>\n\n<p><span class=\"caps\">TODO</span>: Correctly support refined properties?</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the object support the given event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getTotalNumber"},children:[{type:"desc",attributes:{"text":"<p>Determine the total number of classes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the total number of classes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasInterface"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"iface"},children:[{type:"desc",attributes:{"text":"<p>the interface to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Interface"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a given class or any of its super classes includes a given interface.</p>\n\n<p>This function will return &#8220;true&#8221; if the interface was defined\nin the class declaration</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class includes the interface.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasMixin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"mixin"},children:[{type:"desc",attributes:{"text":"<p>the mixin to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a given class or any of its superclasses includes a given mixin.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class includes the mixin.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasOwnInterface"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class or instance to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"iface"},children:[{type:"desc",attributes:{"text":"<p>the interface to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Interface"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a given class directly includes a interface.</p>\n\n<p>This function will only return &#8220;true&#8221; if the interface was defined\nin the class declaration</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class includes the mixin directly.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasOwnMixin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"mixin"},children:[{type:"desc",attributes:{"text":"<p>the mixin to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a class directly includes a mixin.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class includes the mixin directly.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasProperty"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>name of the property to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a class has the given property</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class includes the given property.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"implementsInterface"},children:[{type:"params",children:[{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"iface"},children:[{type:"desc",attributes:{"text":"<p>the interface to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Interface"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a given class to an interface.</p>\n\n<p>Checks whether all methods defined in the interface are\nimplemented. The class does not need to implement\nthe interface explicitly in the <code>extend</code> key.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class conforms to the interface.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"include"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>An existing class which should be modified by including the mixin.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"mixin"},children:[{type:"desc",attributes:{"text":"<p>The mixin to be included.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin"}}]}]}]},{type:"desc",attributes:{"text":"<p>Include all features of the given mixin into the class. The mixin must\nnot include any methods or properties that are already available in the\nclass. This would only be possible using the {@link #patch} method.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"isDefined"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>class name to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given class exists</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true if class exists</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"isSubClassOf"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>the class to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"superClass"},children:[{type:"desc",attributes:{"text":"<p>the potential super class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a class is a direct or indirect sub class of another class,\nor both classes coincide.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether clazz is a sub class of superClass.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"patch"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>An existing class which should be modified by including the mixin.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"mixin"},children:[{type:"desc",attributes:{"text":"<p>The mixin to be included.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Mixin"}}]}]}]},{type:"desc",attributes:{"text":"<p>Include all features of the given mixin into the class. The mixin may\ninclude features which are already defined in the target class. Existing\nfeatures of equal name will be overwritten.\nPlease keep in mind that this functionality is not intended for regular\nuse, but as a formalized way (and a last resort) in order to patch\nexisting classes.</p>\n\n<b>WARNING</b>: You may break working classes and features."}}]},{type:"method",attributes:{"isStatic":"true","name":"supportsEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>class to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>name of the event to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a class supports the given event type</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the class supports the given event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}