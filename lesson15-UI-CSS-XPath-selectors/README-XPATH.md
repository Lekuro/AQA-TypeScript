## XPath selectors <https://www.w3schools.com/xml/xpath_syntax.asp>
### Selecting Nodes 

XPath uses path expressions to select nodes in an XML document. The node is selected by following a path or steps. The most useful path expressions are listed below: 

| Expression | Description |
| --- | --- |
| nodename | Selects all nodes with the name "nodename" |
| / | Selects from the root node |
| // | Selects nodes in the document from the current node that match the selection no matter where they are |
| . | Selects the current node |
| .. | Selects the parent of the current node |
| @ | Selects attributes |

In the table below we have listed some path expressions and the result of the expressions: 

| Path Expression | Result |
| --- | --- |
| bookstore | Selects all nodes with the name "bookstore" |
| /bookstore | Selects the root element "bookstore" |
| bookstore/book | Selects all book elements that are children of "bookstore" |
| //book | Selects all book elements no matter where they are in the document |
| bookstore//book | Selects all book elements that are descendants of the "bookstore" element, no matter where they are under the "bookstore" element |
| //@lang | Selects all attributes that are named "lang" |

### Predicates
Predicates are used to find a specific node or a node that contains a specific value. 
Predicates are always embedded in square brackets. 
In the table below we have listed some path expressions with predicates and the result of the expressions: 

| Path Expression | Result |
| --- | --- |
| /bookstore/book[1] | Selects the first book element that is the child of the bookstore element. |
| Note: In IE 5,6,7,8,9 first node is [0], but according to W3C, it is [1]. To solve this problem in IE, set the SelectionLanguage to XPath: In JavaScript: xml.setProperty("SelectionLanguage","XPath") |
| /bookstore/book[last()] | Selects the last book element that is the child of the bookstore element |
| /bookstore/book[last()-1] | Selects the last but one book element that is the child of the bookstore element |
| /bookstore/book[position()<3] | Selects the first two book elements that are children of the bookstore element |
| //title[@lang] | Selects all the title elements that have an attribute named lang |
| //title[@lang='en'] | Selects all the title elements that have a "lang" attribute with a value of "
### Selecting Unknown Nodes
| Wildcard | Description |
| --- | --- |
| * | Matches any element node |
| @* | Matches any attribute node |
| node() | Matches any node of any kind |

| Path Expression | Result |
| --- | --- |
| /bookstore/* | Selects all the child element nodes of the "bookstore" element |
| * | Selects all elements in the document |
| //title[@*] | Selects all title elements which have at least one attribute of any kind |
### Selecting Several Paths
| Path Expression | Result |
| --- | --- |
| //book/title \| //book/price | Selects all the title AND price elements of all book elements |
| //title \| //price | Selects all the title AND price elements in the document |
| /bookstore/book/title \| //price | Selects all the title elements of the book element of the bookstore element AND all the price elements in the document |
### XPath Axes
| AxisName | Result |
| --- | --- |
| ancestor | Selects all ancestors (parent, grandparent, etc.) of the current node |
| ancestor-or-self | Selects all ancestors (parent, grandparent, etc.) of the current node and the current node itself |
| attribute | Selects all attributes of the current node |
| child | Selects all children of the current node |
| descendant | Selects all descendants (children, grandchildren, etc.) of the current node |
| descendant-or-self | Selects all descendants (children, grandchildren, etc.) of the current node and the current node itself |
| following | Selects everything in the document after the closing tag of the current node |
| following-sibling | Selects all siblings after the current node |
| namespace | Selects all namespace nodes of the current node |
| parent | Selects the parent of the current node |
| preceding | Selects all nodes that appear before the current node in the document, except ancestors, attribute nodes and namespace nodes |
| preceding-sibling | Selects all siblings before the current node |
| self | Selects the current node |

| Example | Result |
| --- | --- |
| child::book | Selects all book nodes that are children of the current node |
| attribute::lang | Selects the lang attribute of the current node |
| child::* | Selects all element children of the current node |
| attribute::* | Selects all attributes of the current node |
| child::text() | Selects all text node children of the current node |
| child::node() | Selects all children of the current node |
| descendant::book | Selects all book descendants of the current node |
| ancestor::book | Selects all book ancestors of the current node |
| ancestor-or-self::book | Selects all book ancestors of the current node - and the current as well if it is a book node |
| child::*/child::price | Selects all price grandchildren of the current node |
### XPath Operators
| Operator | Description | Example |
| --- | --- | --- |
| | Computes two node-sets | //book | //cd |
| + | Addition | 6 + 4 |
| - | Subtraction | 6 - 4 |
| * | Multiplication | 6 * 4 |
| div | Division | 8 div 4 |
| = | Equal | price=9.80 |
| != | Not equal | price!=9.80 |
| < | Less than | price<9.80 |
| <= | Less than or equal to | price<=9.80 |
| > | Greater than | price>9.80 |
| >= | Greater than or equal to | price>=9.80 |
| or | or | price=9.80 or price=9.70 |
| and | and | price>9.00 and price<9.90 |
| mod | Modulus (division remainder) | 5 mod 2 |