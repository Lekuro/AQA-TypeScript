## CSS selectors
### CSS Simple Selectors
| Selector | Example | Example description |
| --- | --- | --- |
| element | p | Selects all \<p\> elements |
| #id | #firstname | Selects the element with id="firstname" |
| * | * | Selects all elements |
| .class | .intro | Selects all elements with class="intro" |
| element.class | p.intro | Selects all \<p\> elements with class="intro" |
### CSS Attribute Selectors
| Selector | Example | Example description |
| --- | --- | --- |
| [attribute] | [lang] | Selects all elements with a lang attribute |
| [attribute=value] | [lang="it"] | Selects all elements with lang="it" |
| [attribute~=value] | [title~="flower"] | Selects all elements with a title attribute containing the word "flower" |
| [attribute|=value] | [lang|="en"] | Selects all elements with a lang attribute value equal to "en" or starting with "en-" |
| [attribute^=value] | [href^="https"] | Selects all elements with a href attribute value that begins with "https" |
| [attribute$=value] | [href$=".pdf"] | Selects all elements with a href attribute value that ends with ".pdf" |
| [attribute*=value] | [href*="w3schools"] | Selects all elements with a href attribute value containing the substring "w3schools" |
### CSS Combinators
| Name | Sign | Example | Example Result |
| --- | --- | --- | --- |
| Child combinator | \> | div \> p | Selects every \<p\> element that are direct children of a \<div\> element |
| Descendant combinator | (single space) | div p | Selects all \<p\> elements inside \<div\> elements |
| Namespace separator | | ns | h2 | Selects all \<h2\> elements in namespace ns |
| Next-sibling combinator | + | div + p | Selects the first \<p\> element that is placed immediately after \<div\> elements |
| Selector list | , | div, p | Selects all \<div\> elements and all \<p\> elements |
| Subsequent-sibling combinator | ~ | p ~ ul | Selects all \<ul\> elements that are preceded by a \<p\> element |
### CSS Pseudo-classes
| Pseudo-class | Examples | Example description |
| --- | --- | --- |
| :active | a:active | Selects the active link |
| :any-link | a:anylink | Selects any \<a\> or \<area\> element with an href attribute |
| :auto-fill | input:autofill | Selects any \<input\> element with its value autofilled by the browser |
| :checked | input:checked | Matches any \<input\> or \<option\> element that is checked |
| :default | input:default | Selects form elements that are default in a group of related elements |
| :defined | :defined | Selects any element that has been defined (standard or custom elements) |
| :dir() | :dir(ltr) | Selects any element with the specified text direction |
| :disabled | :disabled | Selects any element that is disabled. Most used for form elements |
| :empty | div:empty | Selects any element that has no children (including text nodes) |
| :enabled | :enabled | Selects any element that is enabled. Most used for form elements |
| :first | @page :first | Represents the first page of a printed document (used with the @page rule) |
| :first-child | p:first-child | Selects the element that is the first child of its parent (among a group of sibling elements) |
| :first-of-type | p:first-of-type | Selects the first element of its type among a group of sibling elements |
| :focus | input:focus | Selects the element that gets focus. Most used for form elements |
| :focus-visible | button:focus-visible | Selects the element that gets focus (used to apply focus styles only when the keyboard is used to focus something, not the mouse) |
| :focus-within | form:focus-within | Matches an element if the element or any of its descendants gets focus |
| :fullscreen | :fullscreen | Selects any element that is currently in full-screen mode |
| :has() | h2:has(+p) | Selects h2 elements that are immediately followed by a p element, and applies the style to h2 |
| :hover | a:hover | Selects element on mouse over |
| :in-range | input:in-range | Select any \<input\> element with a value within the specified range limit |
| :indeterminate | input:indeterminate | Selects any form element that is in an indeterminate state |
| :invalid | input:invalid | Selects invalid form elements |
| :left | @page :left | Represents all left-hand pages of a printed document (used with the @page rule) |
| :link | a:link | Selects any unvisited link |
| :modal | :modal | Selects the element that is in a modal state |
| :not() | :not(p) | Selects any element that is not a \<p\> element |
| :nth-child() | p:nth-child(2) | Selects any \<p\> element that is the second child of its parent |
| :nth-last-child() | p:nth-last-child(2) | Selects any \<p\> element that is the second child of its parent, counting from the end |
| :nth-last-of-type() | p:nth-last-of-type(2) | Selects any \<p\> element that is the second \<p\> element of its parent, counting from the end |
| :nth-of-type() | p:nth-of-type(2) | Selects any \<p\> element that is the second \<p\> element of its parent |
| :only-child | p:only-child | Selects any \<p\> element that is the only child of its parent |
| :only-of-type | p:only-of-type | Selects any \<p\> element that is the only \<p\> element of its parent |
| :optional | input:optional | Selects any \<input\>, \<select\>, or \<textarea\> elements without a "required"
### CSS Pseudo-elements
| Pseudo-element | Example | Example description |
| --- | --- | --- |
| ::after | p::after | Inserts something after the content of the specified element |
| ::backdrop | dialog::backdrop | Styles the viewbox behind a dialog box or popover element |
| ::before | p::before | Inserts something before the content of the specified element |
| ::file-selector-button | ::file-selector-button | Selects any button of type \<input type="file"\> |
| ::first-letter | p::first-letter | Selects the first letter of every \<p\> element |
| ::first-line | p::first-line | Selects the first line of every \<p\> element |
| ::grammar-error | ::grammar-error | Styles a text that the browser has flagged as grammatically incorrect |
| ::highlight() | ::highlight(custom-name) | Selects a custom highlight |
| ::marker | ::marker | Selects the markers of list items |
| ::placeholder | input::placeholder | Styles the placeholder text of \<input\> or \<textarea\> elements |
| ::selection | ::selection | Styles the user-selected text |
| ::spelling-error | ::spelling-error | Styles a text that the browser has flagged as incorrectly spelled |
| ::view-transition | ::view-transition | Represents the root of the view transitions overlay, which contains all view transition on the page |
| ::view-transition-group | ::view-transition-group | Represents a single view transition snapshot group |
| ::view-transition-image-pair | ::view-transition-image-pair | Represents a container for a view transition's "old" and "new" view states - before and after the transition |
| ::view-transition-new | ::view-transition-new | Represents the "new" view state of a view transition |
| ::view-transition-old | ::view-transition-old | Represents the "old" view state of a view transition |
