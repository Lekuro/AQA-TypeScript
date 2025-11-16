## Look for elements in devtools **Ctrl + F**

## CSS selectors

| Селектор             | Приклад             | Значення                                                                                                        |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| .class               | .some_class         | Знаходить всі елементів з class="some_class"                                                                    |
| [<attribute>]        | [name="user1"]      | Знаходить всі елементи, у яких атрибут тегу містить лише "user1"                                                |
| #id                  | #user               | Знаходить елемент з id="user". ID зазвичай унікальний на сторінці                                               |
| \*                   | \*                  | Знаходить усі елементи, можна скорочувати локатори, приклад [name='name1234'] можливо записати [name*='name12'] |
| element              | element             | Вибір усіх елементів <element> на сторінці                                                                      |
| element.class        | p.intro             | Вибір усіх елементів <p> з class="intro"                                                                        |
| element,element      | div, p              | Вибір усіх елементів <div> та <p>                                                                               |
| element > element    | div > p             | Вибір усіх елементів <p>, де батьківський елемент <div>                                                         |
| element:nth-child(n) | ul li:nth-child(2)  | Вибирає n-ий дочірній елемент. У цьому випадку — другий елемент                                                 |
| :not                 | div:not(.example)   | Вибір усіх елементів div, які не мають класу example                                                            |
| :not                 | .content:not(ul li) | Вибір усіх елементів із класом content, які не є елементами списку                                              |
| :not                 | button:not([type])  | Вибір усіх елементів button, які не мають атрибута type                                                         |

## XPath selectors
| Селектор | Приклад | Значення |
| --- | --- | --- |
| //<element> | //div | Знаходить усі <div> у дереві |
| //<element>//<element> | //div//p | Знаходить усі елементи <p> будь-якої вкладеності в <div> |
| //<element>/<element> | //div/p | Знаходить усі елементи <p>, що розкладені одразу під елементом <div> |
| //<element>[@attribute=”attributeValue”] | //div[@class=”field”] | Знаходить усі елементи <element>, у якому значення атрибута attribute буде ”attributeValue” |
| //<element>[text()= ”Текст атрибуту”] | //span[text()=”Заголовок”] | Знаходить усі елементи <element>, у якому текст «Текст атрибуту» |
| contains() | //p[contains(text(), “опція”)] | //div[contains(@class, “field”)] | Вибір усіх елементів <element>, які містять фрагмент фрази в атрибуті чи тексті |
| //<element>[n] | //ul/li[4] | Вибір усіх четвертих елементів <li> одразу після <ul> |
| //<element>[.//<element[...]>] | //div[.//p] | Вибрати всі <div>, у якому є елементи <p> |
| and, or | //div[contains(text(), “текст”) and contains(@class, “field”)] | Логічні оператори, що працюють, як і в інших мовах програмування |
| not | //div[not(contains(@class, “fields”))] | Знаходить усі елементи <div>, у яких немає класу field |
| | //div[@name=”Name”] | //div[@class=”Surname”] | Вибір елементів ( | = або) з обох селекторів |
| //<element>/parent::<element> | //span[text()=”Заголовок”]/parent::div | Знаходить батьківський <div>, у якому є прямий потомок <span> з текстом «Заголовок» |
| //<element>/following-sibling::<element> | //div[@class=”field active”]/following-sibling::input | Вибір усіх елементів <input>, які є прямими потомками <div class=”field active”> |