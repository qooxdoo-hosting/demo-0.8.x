{type:"class",attributes:{"name":"Remote","packageName":"qx.ui.table.model","superClass":"qx.ui.table.model.Abstract","fullName":"qx.ui.table.model.Remote","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A table model that loads its data from a backend.</p>\n\n<p>Only a subset of the available rows, those which are within or near the\ncurrently visible area, are loaded. If a quick scroll operation occurs,\nrows will soon be displayed using asynchronous loading in the background.\nAll loaded data is managed through a cache which automatically removes\nthe oldest used rows when it gets full.</p>\n\n<p>This class is abstract: The actual loading of row data must be done by\nsubclasses.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.table.model.Abstract","isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_cancelCurrentRequest"},children:[{type:"desc",attributes:{"text":"<p>Cancels the current request if possible.</p>\n\n<p>Should be overridden by subclasses if they are able to cancel requests. This\nallows sending a new request directly after a call of {@link #reloadData}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the request was cancelled.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getIgnoreCurrentRequest"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the current request is ignored by the model.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true when the current request is ignored by the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_loadRowCount"},children:[{type:"desc",attributes:{"text":"<p>Implementing classes have to call {@link _onRowCountLoaded()} when the\nserver response arrived. That method has to be called! Even when there\nwas an error.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_loadRowData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRow"},children:[{type:"desc",attributes:{"text":"<p>The index of the first row to load.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"lastRow"},children:[{type:"desc",attributes:{"text":"<p>The index of the last row to load.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Loads some row data from the server.</p>\n\n<p>Implementing classes have to call {@link _onRowDataLoaded()} when the server\nresponse arrived. That method has to be called! Even when there was an error.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onRowCountLoaded"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowCount"},children:[{type:"desc",attributes:{"text":"<p>the number of rows in this model or null if loading.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the row count.</p>\n\n<p>Has to be called by {@link _loadRowCount()}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onRowDataLoaded"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowDataArr"},children:[{type:"desc",attributes:{"text":"<p>the loaded row data or null if there was an error.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets row data.</p>\n\n<p>Has to be called by {@link _loadRowData()}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_setRowBlockData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"block"},children:[{type:"desc",attributes:{"text":"<p>the index of the block.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"rowDataArr"},children:[{type:"desc",attributes:{"text":"<p>the data to set.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var","dimensions":"2"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the data of one block.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"clearCache"},children:[{type:"desc",attributes:{"text":"<p>Clears the cache.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getBlockConcurrentLoadRowCount","fromProperty":"blockConcurrentLoadRowCount"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>blockConcurrentLoadRowCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>blockConcurrentLoadRowCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getBlockSize","fromProperty":"blockSize"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>blockSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #blockSize}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>blockSize</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getCacheContent"},children:[{type:"desc",attributes:{"text":"<p>Returns the current state of the cache.</p>\n\n<p>Do not change anything in the returned data. This breaks the model state.\nUse this method only together with {@link #restoreCacheContent} for backing\nup state for a later restore.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the current cache state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"name":"getClearCacheOnRemove","fromProperty":"clearCacheOnRemove"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>clearCacheOnRemove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clearCacheOnRemove}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>clearCacheOnRemove</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMaxCachedBlockCount","fromProperty":"maxCachedBlockCount"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxCachedBlockCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCachedBlockCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxCachedBlockCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getRowCount"}},{type:"method",attributes:{"overriddenFrom":"qx.ui.table.model.Abstract","name":"getRowData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowIndex"},children:[{type:"desc",attributes:{"text":"<p>the model index of the row.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>See overridden method for details.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Map containing a value for each column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getSortColumnIndex"}},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"getValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}}]}]},{type:"method",attributes:{"access":"protected","name":"initBlockConcurrentLoadRowCount","fromProperty":"blockConcurrentLoadRowCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>blockConcurrentLoadRowCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>blockConcurrentLoadRowCount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBlockSize","fromProperty":"blockSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>blockSize</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>blockSize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #blockSize}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initClearCacheOnRemove","fromProperty":"clearCacheOnRemove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>clearCacheOnRemove</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>clearCacheOnRemove</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #clearCacheOnRemove}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaxCachedBlockCount","fromProperty":"maxCachedBlockCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maxCachedBlockCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxCachedBlockCount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCachedBlockCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isBlockConcurrentLoadRowCount","fromProperty":"blockConcurrentLoadRowCount"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>blockConcurrentLoadRowCount</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isClearCacheOnRemove","fromProperty":"clearCacheOnRemove"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>clearCacheOnRemove</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clearCacheOnRemove}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"isColumnEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"isColumnSortable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"isSortAscending"}},{type:"method",attributes:{"name":"iterateCachedRows"},children:[{type:"params",children:[{type:"param",attributes:{"name":"iterator"},children:[{type:"desc",attributes:{"text":"<p>The iterator function to call.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"object"},children:[{type:"desc",attributes:{"text":"<p>context of the iterator</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Iterates through all cached rows.</p>\n\n<p>The iterator will be called for each cached row with two parameters: The row\nindex of the current row (Integer) and the row data of that row (var[]). If\nthe iterator returns something this will be used as new row data.</p>\n\n<p>The iterator is called in the same order as the rows are in the model\n(the row index is always ascending).</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"prefetchRows"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRowIndex"}},{type:"param",attributes:{"name":"lastRowIndex"}}]}]},{type:"method",attributes:{"name":"reloadData"},children:[{type:"desc",attributes:{"text":"<p>Reloads the model and clears the local cache.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"removeRow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowIndex"},children:[{type:"desc",attributes:{"text":"<p>the index of the row to remove.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes a row from the model.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetBlockConcurrentLoadRowCount","fromProperty":"blockConcurrentLoadRowCount"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>blockConcurrentLoadRowCount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetBlockSize","fromProperty":"blockSize"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>blockSize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #blockSize}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetClearCacheOnRemove","fromProperty":"clearCacheOnRemove"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>clearCacheOnRemove</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #clearCacheOnRemove}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMaxCachedBlockCount","fromProperty":"maxCachedBlockCount"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxCachedBlockCount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCachedBlockCount}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"restoreCacheContent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cacheContent"},children:[{type:"desc",attributes:{"text":"<p>An old cache state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Restores a cache state created by {@link #getCacheContent}.</p>"}}]},{type:"method",attributes:{"name":"setBlockConcurrentLoadRowCount","fromProperty":"blockConcurrentLoadRowCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>blockConcurrentLoadRowCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>blockConcurrentLoadRowCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setBlockSize","fromProperty":"blockSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>blockSize</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>blockSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #blockSize}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setClearCacheOnRemove","fromProperty":"clearCacheOnRemove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>clearCacheOnRemove</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>clearCacheOnRemove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clearCacheOnRemove}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setColumnEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"},children:[{type:"desc",attributes:{"text":"<p>the column of which to set the editable state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"editable"},children:[{type:"desc",attributes:{"text":"<p>whether the column should be editable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets whether a column is editable.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setColumnSortable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"},children:[{type:"desc",attributes:{"text":"<p>the column of which to set the sortable state.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"sortable"},children:[{type:"desc",attributes:{"text":"<p>whether the column should be sortable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets whether a column is sortable.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"editable"},children:[{type:"desc",attributes:{"text":"<p>whether all columns are editable.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets all columns editable or not editable.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMaxCachedBlockCount","fromProperty":"maxCachedBlockCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maxCachedBlockCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxCachedBlockCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxCachedBlockCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}},{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ITableModel","overriddenFrom":"qx.ui.table.model.Abstract","name":"sortByColumn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"ascending"}}]}]},{type:"method",attributes:{"name":"toggleBlockConcurrentLoadRowCount","fromProperty":"blockConcurrentLoadRowCount"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>blockConcurrentLoadRowCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleClearCacheOnRemove","fromProperty":"clearCacheOnRemove"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>clearCacheOnRemove</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #clearCacheOnRemove}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"Boolean","defaultValue":"true","name":"blockConcurrentLoadRowCount","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Whether to block remote requests for the row count while a request for\nthe row count is pending. Row counts are requested at various times and\nfrom various parts of the code, resulting in numerous requests to the\nuser-provided _loadRowCount() method, often while other requests are\nalready pending. The default behavior now ignores requests to load a\nnew row count if such a request is already pending. It is therefore now\nconceivable that the row count changes between an initial request for\nthe row count and a later (ignored) request. Since the chance of this\nis low, the desirability of reducing the server requests outweighs the\nslight possibility of an altered count (which will, by the way, be\ndetected soon thereafter upon the next request for the row count). If\nthe old behavior is desired, set this property to false.</p>"}}]},{type:"property",attributes:{"check":"Integer","defaultValue":"50","name":"blockSize","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The number of rows that are stored in one cache block.</p>"}}]},{type:"property",attributes:{"check":"Boolean","defaultValue":"false","name":"clearCacheOnRemove","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Whether to clear the cache when some rows are removed.\nIf true the rows are removed locally in the cache.</p>"}}]},{type:"property",attributes:{"check":"Integer","defaultValue":"15","name":"maxCachedBlockCount","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The maximum number of row blocks kept in the cache.</p>"}}]}]}]}