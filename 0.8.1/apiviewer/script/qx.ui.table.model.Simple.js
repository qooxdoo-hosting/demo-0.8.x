{type:"class",attributes:{"name":"Simple","packageName":"qx.ui.table.model","superClass":"qx.ui.table.model.Abstract","childClasses":"qx.ui.table.model.Filtered","fullName":"qx.ui.table.model.Simple","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A simple table model that provides an <span class=\"caps\">API</span> for changing the model data.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.table.model.Abstract","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_mapArray2RowArr"},children:[{type:"params",children:[{type:"param",attributes:{"name":"mapArr"},children:[{type:"desc",attributes:{"text":"<p>An array containing a map for each row. Each\n         row-map contains the column IDs as key and the cell values as value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"rememberMaps"},children:[{type:"desc",attributes:{"text":"<p>Whether to remember the original maps.\n       If true {@link #getRowData} will return the original map.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates an array of maps to an array of arrays.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>An array containing an array for each row. Each\n          row-array contains the values in that row in the order of the columns\n          in this model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var","dimensions":"2"}}]}]}]},{type:"method",attributes:{"name":"addRows"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowArr"},children:[{type:"desc",attributes:{"text":"<p>An array containing an array for each row. Each\n         row-array contains the values in that row in the order of the columns\n         in this model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var","dimensions":"2"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"startIndex"},children:[{type:"desc",attributes:{"text":"<p>The index where to insert the new rows. If null,\n         the rows are appended to the end.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"true","name":"clearSorting"},children:[{type:"desc",attributes:{"text":"<p>Whether to clear the sort state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds some rows to the model.</p>\n\n<p>Warning: The given array will be altered!</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"addRowsAsMapArray"},children:[{type:"params",children:[{type:"param",attributes:{"name":"mapArr"},children:[{type:"desc",attributes:{"text":"<p>An array containing a map for each row. Each\n       row-map contains the column IDs as key and the cell values as value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"startIndex"},children:[{type:"desc",attributes:{"text":"<p>The index where to insert the new rows. If null,\n       the rows are appended to the end.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"rememberMaps"},children:[{type:"desc",attributes:{"text":"<p>Whether to remember the original maps.\n       If true {@link #getRowData} will return the original map.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"true","name":"clearSorting"},children:[{type:"desc",attributes:{"text":"<p>Whether to clear the sort state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds some rows to the model.</p>\n\n<p>Warning: The given array (mapArr) will be altered!</p>"}}]},{type:"method",attributes:{"name":"clearSorting"},children:[{type:"desc",attributes:{"text":"<p>Clears the sorting.</p>"}}]},{type:"method",attributes:{"name":"getCaseSensitiveSorting","fromProperty":"caseSensitiveSorting"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>caseSensitiveSorting</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #caseSensitiveSorting}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>caseSensitiveSorting</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getData"},children:[{type:"desc",attributes:{"text":"<p>Returns the data of this model.</p>\n\n<p>Warning: Do not alter this array! If you want to change the data use\n{@link #setData}, {@link #setDataAsMapArray} or {@link #setValue} instead.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>An array containing an array for each row. Each\n          row-array contains the values in that row in the order of the columns\n          in this model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var","dimensions":"2"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getRowCount"}},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getRowData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowIndex"}}]}]},{type:"method",attributes:{"name":"getRowDataAsMap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowIndex"},children:[{type:"desc",attributes:{"text":"<p>the model index of the row.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the data of one row as map containing the column IDs as key and\nthe cell values as value.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>a Map containing the column values.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getSortColumnIndex"}},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}}]}]},{type:"method",attributes:{"access":"protected","name":"initCaseSensitiveSorting","fromProperty":"caseSensitiveSorting"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>caseSensitiveSorting</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>caseSensitiveSorting</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #caseSensitiveSorting}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isCaseSensitiveSorting","fromProperty":"caseSensitiveSorting"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>caseSensitiveSorting</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #caseSensitiveSorting}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"isColumnEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"isColumnSortable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"isSortAscending"}},{type:"method",attributes:{"name":"removeRows"},children:[{type:"params",children:[{type:"param",attributes:{"name":"startIndex"},children:[{type:"desc",attributes:{"text":"<p>the index of the first row to remove.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"howMany"},children:[{type:"desc",attributes:{"text":"<p>the number of rows to remove.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"true","name":"clearSorting"},children:[{type:"desc",attributes:{"text":"<p>Whether to clear the sort state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes some rows from the model.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetCaseSensitiveSorting","fromProperty":"caseSensitiveSorting"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>caseSensitiveSorting</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #caseSensitiveSorting}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setCaseSensitiveSorting","fromProperty":"caseSensitiveSorting"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>caseSensitiveSorting</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>caseSensitiveSorting</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #caseSensitiveSorting}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setColumnEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"},children:[{type:"desc",attributes:{"text":"<p>the column of which to set the editable state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"editable"},children:[{type:"desc",attributes:{"text":"<p>whether the column should be editable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets whether a column is editable.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setColumnSortable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"},children:[{type:"desc",attributes:{"text":"<p>the column of which to set the sortable state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"sortable"},children:[{type:"desc",attributes:{"text":"<p>whether the column should be sortable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets whether a column is sortable.</p>"}}]},{type:"method",attributes:{"name":"setData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowArr"},children:[{type:"desc",attributes:{"text":"<p>An array containing an array for each row. Each\n         row-array contains the values in that row in the order of the columns\n         in this model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var","dimensions":"2"}}]}]},{type:"param",attributes:{"defaultValue":"true","name":"clearSorting"},children:[{type:"desc",attributes:{"text":"<p>Whether to clear the sort state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the whole data in a bulk.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setDataAsMapArray"},children:[{type:"params",children:[{type:"param",attributes:{"name":"mapArr"},children:[{type:"desc",attributes:{"text":"<p>An array containing a map for each row. Each\n       row-map contains the column IDs as key and the cell values as value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"rememberMaps"},children:[{type:"desc",attributes:{"text":"<p>Whether to remember the original maps.\n       If true {@link #getRowData} will return the original map.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"true","name":"clearSorting"},children:[{type:"desc",attributes:{"text":"<p>Whether to clear the sort state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the whole data in a bulk.</p>"}}]},{type:"method",attributes:{"name":"setEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"editable"},children:[{type:"desc",attributes:{"text":"<p>whether all columns are editable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets all columns editable or not editable.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setSortMethods"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"},children:[{type:"desc",attributes:{"text":"<p>The index of the column or which the sort methods are being\n  provided.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"methods"},children:[{type:"desc",attributes:{"text":"<p>Map with two properties: &#8220;ascending&#8221; and &#8220;descending&#8221;.  The\n  property value of each is a comparator function which takes two\n  parameters: the two arrays of row data, row1 and row2, being\n  compared.  It may determine which column to of the row data to sort\n  on by accessing arguments.callee.columnIndex.  Each comparator\n  function must return 1, 0 or -1, when the column in row1 is greater\n  than, equal to, or less than, respectively, the column in row2.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Specify the methods to use for ascending and descending sorts of a\nparticular column.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}},{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"sortByColumn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"ascending"}}]}]},{type:"method",attributes:{"name":"toggleCaseSensitiveSorting","fromProperty":"caseSensitiveSorting"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>caseSensitiveSorting</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #caseSensitiveSorting}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"caseSensitiveSorting","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether sorting should be case sensitive</p>"}}]}]},{type:"methods-static",children:[{type:"method",attributes:{"access":"protected","isStatic":"true","name":"_defaultSortComparatorAscending"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row1"},children:[{type:"desc",attributes:{"text":"<p>first row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"row2"},children:[{type:"desc",attributes:{"text":"<p>second row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Default ascendeing sort method to use if no custom method has been\nprovided.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","isStatic":"true","name":"_defaultSortComparatorDescending"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row1"},children:[{type:"desc",attributes:{"text":"<p>first row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"row2"},children:[{type:"desc",attributes:{"text":"<p>second row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Default descendeing sort method to use if no custom method has been\nprovided.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","isStatic":"true","name":"_defaultSortComparatorInsensitiveAscending"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row1"},children:[{type:"desc",attributes:{"text":"<p>first row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"row2"},children:[{type:"desc",attributes:{"text":"<p>second row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Same as the Default ascending sort method but using case insensitivity</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","isStatic":"true","name":"_defaultSortComparatorInsensitiveDescending"},children:[{type:"params",children:[{type:"param",attributes:{"name":"row1"},children:[{type:"desc",attributes:{"text":"<p>first row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"row2"},children:[{type:"desc",attributes:{"text":"<p>second row</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Same as the Default descending sort method but using case insensitivity</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>1 of row1 is > row2, -1 if row1 is < row2, 0 if row1 == row2</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]}