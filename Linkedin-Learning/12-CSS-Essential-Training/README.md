### Learning objectives:

- Writing basic selectors.
- Setting properties.
- Cascade and inheritance.
- Setting a font family, font size, text color, and more.
- Working with the box model.
- Leveraging Grid and Flexbox.
- Using the float and position properties.
- Working with advanced selectors.
- Creating fluid layouts.

------

### Course Notes..
</br>

**HTML** defines structure of content - Semantic meaning.

**CSS** controls appearance - styling.
</br>
</br>

**To debug styling**:

In any browser > Developer tools > Elements.
</br>
</br>

To reference CSS In HTML5 file:

- `<head>`

  `<link rel="stylesheet" href="css/styles.css">`

  For relative path:

  -  `<link rel="stylesheet" href="styles.css">`

  For absolute path:

  -  `<link rel="stylesheet" href="https://mysite.com/css/styles.css">`
     </br>

**CSS Syntax**:

Declaration block.

```css
img {
width: 300px;
}
```

```img```: Selector.

```width: 300px;``` Declaration.

```width```: Property.

```300px```: Value.

- Long hand syntax:

  ```padding-top: 10px;```

- Short hand syntax:

  ```padding: 10px 50px;```
  </br>

**CSS comments**:

```/* COMMENT GOES HERE */```

*For more standards visit [Code Guide](https://codeguide.co/)*
</br>
</br>

**Length** data type used to specify sizing with two types of units: absolute and relative.

Absolute: fixed unit like (px, cm, mm, pt).

Relative: not fixed like (em, rem, vw, vh).
</br>
</br>

**CSS function values** Includes function name and parenthesis

```transform: rotate(90deg)``` , ```width: calc(80%-20px);``` or ```rgb(255, 255, 255)```

*For more CSS values and units [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)*
</br>
</br>

**Colors** property have different values.

Basic color keywords: green - blue - black -red.

Extended color keyword: oldlace - aliceblue - mediumseagreen.

*For more on [Extended color keyword](https://colours.neilorangepeel.com/)*.
</br>
</br>

**RGB** values define colors according to its red, green, blue.

**Hexadecimal value** prefixed with a number sign # followed by six characters ```#ffc0cb``` which is color pink.

- Long hand syntax:

  ```#ff0000;```

- Short hand syntax:

  ```#f00;```

**Functional color values**:

- ```rgb(255, 255, 255)``` can be used to set color by numbers between 0-255 or 0%-100%, also represent alpha component by using ```rgba(255, 255, 255, 0.5)``` for opacity 50%.

- ```hsl(270, 60%, 70%)``` or ```hsla(270, 60%, 70%, 15%)``` defines color value by its hue, saturation and lightness with alpha component.

*To explore more visit [HSL colors](https://css-tricks.com/examples/HSLaExplorer/)*

Get your [Color palette](https://coolors.co/664c43-873d48-dc758f-e3d3e4-00ffcd).
</br>
</br>

**Class Selector** attribute to HTML element (can be reused - use in many tags).

```<p class="fancy">Fancy paragraph</p>```

```
.fancy {
font-style: italic;
}
```

</br>
</br>

**ID Selector** attribute to HTML element (used once per page).

```<p id="fancy">Fancy paragraph</p>```

```
#fancy {
font-style: italic;
}
```

</br>
</br>

**Naming Conventions** Instead of spaces, use hyphen or underscore:

```class_Name``` - ```id-name```.

use meaningful and descriptive names:

```.error-message { ... }``` or ```.btn { ... }```.
</br>
</br>

**Descendant Selectors** selects only paragraphs contained with a section:

```section p { ... }```

```html
</section>
<p>	... </p>
</section>
```

</br>

**Grouping Selectors** select many to give same style:

```h1, h2, h3 { ... }```.

</br>

**Inheritance** CSS styles can be inherited from ancestor to descendant elements.

```css
body {
color: #222
}
// Which result

h1 {
color: #222
}

h2 {
color: #222
}
```

There's some elements are not inheritable which you can find [here](https://www.w3.org/TR/CSS2/propidx.html).
</br>
</br>


**Specificity** determines how browsers decide which CSS rule takes precedence.

- When conflicting declarations selector type hierarchy from lowest to highest :

1. Universal (*)
2. type (p)
3. class (.example)
4. id (#example)
   </br>
   </br>

**Cascade** is style declaration are read from top to bottom as last declaration will take precedence which here is ```font-size: 20px;``` :

```css
p {
font-size: 12px;
}
p {
font-size: 20px;
}
```

The ```!important``` keyword overrides source order and specificity if added, if the keyword added to both, then last declaration will take precedence.
</br>
</br>

**Pseudo-classes** require some actions from user:

- ```:focus```  applies if the user focuses the element.
- ```:active``` applies if the user clicks on an element.
- ```:hover ``` applies if the user moves their pointer over an element.
- ```:visited ``` applies if the user visited this link.

<small>As in example:</small> ```<a href="#">visit website</a>```

```css
a:visited {
color: green;
}
```

</br>
</br>


**The box Model contains:**

- **Content box**:

  Width and height prosperities change size of content box.

- **Padding box**:

  Padding property adds/removes space inside element but around the content box.

- **Border Box**:

  Border property displays a border between the margin and padding.

- **Margin Box**.

  Margin property adds/removes space around the element.
  </br>
  </br>


**Display property** used to change default behavior of inline and block level elements.

- **Inline**:

  - Takes up same space as their content.
  - Elements displayed in line from the left.

  `<a>` - `<span>` - `<strong>`.

- **Block**:

  - same height as content, same as width as container.
  - always start on new line.

  `<p>` - `<h1>` - `<article>` - `<section>`.
  </br>
  </br>


**Typography** is arranging type for readability and to engage and communicate with the reader.

**Typeface** a set of fonts designed with common characteristics, composed of glyphs.

</br>

**To set font-family:**

```css
body {
font-family: Helvetica, Arial;
}
```

**Web-safe Fonts** are commonly pre-installed on majority of computer (ex. Arial - Times New Roman).

*Find many [Web-Safe Fonts](https://cssfontstack.com)*



**font-style** used to add or remove italic style (italic - oblique - normal).

**font-variant** used for normal or small-caps only.

**font-weight** used to define our font style between (Light - Regular - Semi-bold - Bold - Extra-Bold).

**font-size**/**line-height** we can use difference units for specifying the font size (px, em, rem).

**To set font-face** from link:

```css
@font-face {
font-family:"font-name";
src: url(font-name.woff); //relative path
src: url(http://site.com/fonts/font-name.woff) //absolute path
}
```

To Generate different font types [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator), Also use [Google Fonts](https://fonts.google.com/) to get many free font.

- **longhand** order matters

```css
font-style: italic;
font-variant: small-caps;
font-weight: bold;
font-size: 24px;
line-height: 1.5;
font-family: Helvetica, sans-serif;
```

- **shorthand**

```css
font: italic small-caps bold 24px 1.5 Helvetica, sans-serif;
```



**text-decoration** to remove underline style from links.

- **longhand**

```css
text-decoration-line: underline;
text-decoration-color: red;
text-decoration-style: bold;
```

- **shorthand**

```css
text-decoration: underline red solid;
```

**text-align** can be used to align content within a block element.

**line-height** sets height of space between two text lines.

**float** used to position content on page.

**overflow** used to specify how to display content that doesn't fit in parent container.

**position** used to change flow of the document:

- static: not positioned.
- relative: relative to current position.
- absolute: relative to containing element.
- fixed: relative to the viewport.
- sticky: relative to containing element and viewport.

**z-index** specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.
</br>
</br>

**Flexbox** Distribution across a single axis.

**Flexbox Terminology**:

- flex container: the parent element.
- flex items: the child elements.

```html
<div class="container">
<div>flex item</div>
<div>flex item</div>
<div>flex item</div>
</div>
```

```css
.container {
display: flex;
/*or*/
display: inline-flex;
}
```

`flex-direction` Determine the direction of the main axis (row, row-reverse, column, column-reverse).

`flex-wrap` items Defines whether the flex items are forced in a single line or can be flowed into multiple lines (wrap, wrap-reverse).

`flex-basis` Sets initial size of the flex-items.

`flex-grow` Determine how items will expand if there extra space in the container.

`flex-shrink` Determines how items will shrink if there isn't enough space in the container.

`justify-content` aligns items on the same axis.

`align-items` align items on the cross axis.

Find more about [aligning](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
</br>
</br>

**Grid** Layouts with both rows and columns.

**Grid Terminology**:

- grid container: the parent element.
- grid items: the child elements.

```html
<div class="grid-container">
<div class="grid-item">
    <div>not a grid item</div>
</div>
<div class="grid-item"></div>
<div class="grid-item"></div>
</div>
```

```css
.grid-container {
display: grid;
/* or */
display: inline-grid;
}
```

</br>


**Explicit Grid**

```
.grid-container {
display: grid;
grid-templates-columns: 100px 100px 100px; /*3 columns*/
grid-templates-rows:100px 100px; /*2 rows*/
/*or with fr unit*/
grid-templates-rows: repeat(2, 1fr)
}
```

To split columns or rows to equal values use `fr` unit instead of px.

`gap` add amount of value between columns and rows.

</br>

**Implicit Grid** 

```css
.grid-container {
display: grid;
grid-auto-columns: repeat(3, 1fr); /*3 columns*/
grid-auto-rows: repeat(2, 1fr); /*2 rows*/
}
```

</br>


**Grid structure**

```css
.grid-container {
display: grid;
grid-templates-columns: 100px repeat(2, 1fr);
grid-templates-rows: 100px;
grid-auto-columns: 50px;
grid-auto-rows: 200px;
}
```

</br>


**Positioning grid items** 

`grid-column` and `grid-row` used to specify the start and end of the grid items position, based on grid lines.

```css
.grid-item-1 {
grid-column: 2/4;
grid-row: 1/3;
}
```

</br>


**Descendant Selectors** creates matching patterns based on relationship between nested elements.

```html
<section>
    <a href="#"></a>
</section>
```

```css
section a { ... }
```

</br>


**Child combinator** only matches to direct any child element.

```css
parent > child { ... }
```

</br>


**Adjacent Sibling combinators** it effects only the first element on right of first element.

```css
h1 + p { ... }
```

</br>


**General Sibling combinator** effects to any child element.

```css
h1 ~ p { ... }
```

</br>


**Pseudo-Class Selectors** 

```html
<section>
    <p>Paragraph</p> <!-- Will be red -->
	<p>Paragraph</p>
    <p>Paragraph</p> <!-- Will be green -->
</section>
```

`:first` and `:last` will apply style to first or last child.

```css
p:first-child {
	color: red;
}
p:last-child {
	color: green;
}
```

</br>


**Responsive Web Design** consist of:

- Fluid layout.
- Flexible images.
- Media queries.


**Media Queries**

```css
@media screen and (max-width: 100px) {
    h1 {
        font-size: 16px;
    }
}
```

**Media Type** could be:

- `all` : matches to all devices.
- `print` : matches to printers and print-related displays.
- `speech` : matches to screen reading devices that "read out" a page.
- `screen` : matches to all devices that aren't categorized as print or speech.


**Media feature** could be used to test specific feature of the device:

- `@media (width: 100px) { ... }`.

or use `and` keyword to combine media feature with media type.
</br>
</br>

**Breakpoints** are generally used to target each different type of device, mobile, tablet, laptops, and desktops.

- Mobile Portrait: 320px.
- Mobile Landscape: 480px.
- Small Tablet: 600px.
- Tablet Portrait: 768px.
- Tablet Landscape: 940-1024px.
- Desktop- Laptop: 1280p and greater.

```css
/* 800px and larger */
@media (min-width: 800px) { ... }

/* 799px and smaller */
@media (max-width: 799px ) { ... }
```

In first example: when screen is 800px and bigger apply the following style.
</br>
</br>

There are two schools of thought when designing for different screens.

- **Desktop First** as we design styles for larger screen first then use media queries for smaller screens.

  In this situation use max-width:

```css
@media (max-width: 800px) { ... }
```



- **Mobile First** in this situation use min-width:

```css
@media (max-width: 800px) { ... }
```

</br>

You can also combine them to create a range to apply a style in range of 400px to 800px:

```css
@media (min-width: 400px) and (max-width: 800px) { ... }
```

---

**Course Link:** [CSS Essential Training](https://www.linkedin.com/learning/css-essential-training-3)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://imagizer.imageshack.com/img924/2/8arsid.png" width="700">
</p>

