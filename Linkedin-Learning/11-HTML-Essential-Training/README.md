### Learning objectives:

- The basic syntax of HTML elements.
- Formatting content.
- Displaying images.
- Creating links.
- Global HTML attributes.
- Building navigation.
- Structuring content.
- Building forms.
- Creating tables.

------

### Course Notes..

</br>

**HTML** defines the content of a site.

**CSS** defines the styling of a site.

**JavaScript** provides interactivity.

**HTML tag** represents root of HTML document.

`<p> This is paragraph. </p>` 
Opening tag - Content - Closing tag.
<br><br/>
`<br>` for produces a line break in text and does not require a closing tag.

`<pre>`defines preformatted text.

`<sup>`defines superscript text.

`<sub>`defines subscript text.

`<small>` define smaller text.

<em>For more about [HTML tags and uses](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)</em>
<br><br/>


**DOM** is the structure of HTML elements, used to target elements in CSS and JS.
<br><br/>


**Inline Elements** wrap around phrases of text.

`<q>` -`<strong>` - `<b>` - `<i>` - `<em>` - `span`.
<br><br/>


**Block-level Elements** can start a new block.

`<div>` - `<p>` - `<blockquote>` - `<ul>`.
<br><br/>


**Global attributes** can be applied to any HTML element.

- `class`: target elements with that class in our CSS or JS.
- `id`: target unique element with that id in our CSS or JS.
- `lang`: to support languages.
- `dir` tell the browser what text direction for the content.
  <br><br/>


**Link** <small>(anchor element).</small>

- `<a href="https://site.com">This is a link</a>`
  <br><br/>

**URL Path** <small>(used in same site or page).</small>

- `<a href="/about.html>This is a link</a>`
  <br><br/>


**Image:**

- `<img src="image.jpg" alt="dog" width="400" height="300">`.
- `srcset` attribute used for responsive images.
- `<figure>`used as caption element for a images to illustrate something.
- `<figcaption>`used as demonstration.
- Most used image format (Jpg - Gif - Png - Svg).
  <br><br/>


**Audio**

- `<audio src="audio.mp3" alt="song">`.
- `controls` attribute for functionality with play or mute.
- `loop`make file replay when end.
- `autoplay` file will automatically play when page loads.
- `<source>`used to provide more than one content wrapped in` <audio>`.
  <br><br/>


**Video**

- `<video src="video.mp4" >`

- `controls` attribute for functionality with play, forward or mute.

- `<source>`used to provide more than one content wrapped in` <video>`.

- `<track src="cc.vtt">`used inside `<video>`for closed caption, with attribute `kind="captions"`to tell its captions - `label="english"` as its our choice in the player - `srclang`to specify which language this is - `default` default captions.

- H.264 codec has the widest support across browsers.
  <br><br/>

**Embedding** is to place content from site into our site.

- `<iframe>` refers to video or audio link from shared or copied from another site.
  <br><br/>


**Internationalization:**

- `lang="en-US"`this attribute used in `<html>`to specify the default language of the site.
- `dir="ltr"`to specify the direction of the text depend on the language.
- `charset="utf-8"`to set characters for the script language, with time goes it supports more than 137,000 characters of all languages.
  <br><br/>


**ARIA** Roles provide accessible information about specific element.
<br><br/>


**Every web page must have:**

- The index file must start with `<!doctype html>`.

- `<head>` contains information browser need to knows but will not be rendered like:

  * `<meta charset="utf-8">`meta tags which contains information appear in search engines.

  * `<title>`Name appears on top of the browser.

  * `<link>`load assets in our site.

  * `<script>`loads JavaScript file.

- `<body>`all our element will be wrapped in this tag like all this layout tags:

  * `<main>` used once and contains all content in the page.

  * `<header>` & `<footer>` wraps both header (ex. navbar) and footer contents .

  * `<article>`wraps any article or unit of content in page.

  * `<section>`wraps many articles and can be used many times.

  * `<aside>`define contents as have side information or not main content.

  

  

  ![img](https://www.w3schools.com/html/img_sem_elements.gif)
  <br><br/>


  **Forms** used to create form for user input:

  ```html
<form action="signup.html">
  <fieldset>
    <legend> User Information </legend>
    <label for="name">Name</label>
    <input name="name" id="name" type="name" required></input>

    <label for="email">Email</label>
    <input
      name="email"
      id="email"
      type="email"
      placeholder="ahmed@email.com"
      required
    ></input>
  </fieldset>

  <textarea name="textarea" id="textarea" col="30" rows="15">
    Message
  </textarea>

  <label for="checkbox">Yes, I agree</label>
  <input name="checkbox" id="checkbox" type="checkbox" checked></input>

  <button type="submit">submit</button>
</form>
  ```

  `<fieldset>` group related elements.

  `<legend>` caption for the previous element.
<br><br/>


  **Attributes to use in form tag:**

  `action`what should happen to data when a form is submitted.

  `id` attribute to link input to label.

  `name`& `for`to receive data that entered into the form.

  `type`to specify the data input should collect <small>(woks as client-side validation)</small>.

  `type` for `<button>`can refer to which button to activate when user press <kbd>Enter</kbd> button.

  `required` to insist that user should fill this input.

  `placeholder`text appears for illustration purpose.

  `value` is static default input and need to be deleted for calculated or suggested purpose.

  `rows`&`cols` to define size of text area.

  `checked` already marked as checked every time the page loads.
<br><br/>


  **Tables** use to organize data in rows and columns.

  ```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

  ```

  `<table>`wrap whole table.

  `<tr>`stands for table row.

  `<th>`stands for table column.

  `<td>`stands for table data which marks cells of data.


Add comment by use `<! -- YOUR COMMENT GOES HERE -->`


---

**Course Link:** [HTML Essential Training](https://www.linkedin.com/learning/html-essential-training-4)

<h5><a href="#certificate"></a>Certificate</h5>
<p align="center">
  <img  src="https://i.ibb.co/3CVNjL4/HTML-Essential-Training.jpg" width="700">
</p>

