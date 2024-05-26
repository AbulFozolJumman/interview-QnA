import Container from "../components/Shared/Container/Container";

/* eslint-disable react/no-unescaped-entities */
const QnA_html = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What are the differences between{" "}
          <span className="font-bold">HTML4 and HTML5</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          HTML4 and HTML5 are both versions of the Hypertext Markup Language,
          which is used to create web pages. HTML5 is the latest revision of the
          standard, which introduces new features and improvements over HTML4.
          Some of the key differences between HTML4 and HTML5 are: <br />
          - HTML5 has a simpler and more consistent doctype declaration than
          HTML4, which had different variants such as strict, transitional, and
          frameset.
          <br />- HTML5 introduces new semantic elements such as{" "}
          <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
          <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>, and <code>&lt;aside&gt;</code>, which
          provide more meaningful structure to web documents. HTML4 mostly
          relied on generic <code>&lt;div&gt;</code> elements for layout and
          styling.
          <br />- HTML5 supports multimedia elements such as{" "}
          <code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, and{" "}
          <code>&lt;canvas&gt;</code>, which allow native playback of video,
          audio, and graphics without the need for external plugins or
          libraries. HTML4 required the use of third-party technologies such as
          Flash, Silverlight, or Java applets for multimedia content.
          <br />- HTML5 provides new input types and attributes for forms, such
          as <code>date</code>, <code>email</code>, <code>url</code>,{" "}
          <code>number</code>, <code>range</code>, <code>placeholder</code>,{" "}
          <code>required</code>, and <code>pattern</code>, which enable better
          user interface and validation. HTML4 had limited input types and
          attributes, and relied on JavaScript or server-side scripting for form
          functionality.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. What are <span className="font-bold">semantic tags</span> in HTML?
          Give me some examples.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Semantic tags in HTML are elements that have a meaningful name and
          describe the type of content they contain to the browser and the
          developer. Semantic tags make the HTML code easier to write and
          understand, and also help with search engine optimization and
          accessibility.
          <br />
          Some examples of semantic tags in HTML are: &lt;header&gt;,
          &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;, &lt;aside&gt;,
          &lt;article&gt;, &lt;section&gt;
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. What are the{" "}
          <span className="font-bold">
            purpose of article, div, section, nav and aside
          </span>
          ?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          &lt;article&gt;: Defines an independent, self-contained piece of
          content, such as a blog post, a forum post, or a product card.
          <br />
          &lt;div&gt;: div tag in HTML is to define a division or a section in
          an HTML document. The div tag is used as a container for HTML
          elements, which can be styled with CSS or manipulated with JavaScript.
          The div tag can also help to organize the content into logical
          sections, making the code more readable and maintainable.
          <br />
          &lt;section&gt;: Defines a thematic grouping of content, typically
          with a heading, such as a chapter, an introduction, a news item, or a
          contact information.
          <br />
          &lt;nav&gt;: Defines a section of navigation links, such as a menu, a
          table of contents, or a breadcrumb.
          <br />
          &lt;aside&gt;: Defines a section of content that is related to the
          main content, but not essential, such as a sidebar, a footnote, or a
          glossary.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. Why will you use <span className="font-bold"> Meta tag</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          <p>
            Meta tags are HTML elements that provide metadata about an HTML
            document. Meta tags are typically used to specify character set,
            page description, keywords, author of the document, and viewport
            settings. Meta tags are not displayed on the page, but are machine
            parsable. Meta tags are used by browsers (how to display content or
            reload page), search engines (keywords), and other web services.
            <br /> Some common uses of meta tags are:
            <br /> - specifying the character encoding for the HTML document,
            such as &lt;meta charset=&quot;UTF-8&quot;&gt;;
            <br /> - specifying a description of the web page, such as &lt;meta
            name=&quot;description&quot; content=&quot;Free Web tutorials for
            HTML and CSS&quot;&gt;;
            <br />
            - specifying keywords for search engines, such as &lt;meta
            name=&quot;keywords&quot; content=&quot;HTML, CSS,
            JavaScript&quot;&gt;; <br />
            - specifying the author of the web page, such as &lt;meta
            name=&quot;author&quot; content=&quot;John Doe&quot;&gt;;
            <br />- specifying the viewport to make the web page look good on
            all devices, such as &lt;meta name=&quot;viewport&quot;
            content=&quot;width=device-width, initial-scale=1.0&quot;&gt;;{" "}
            <br />- specifying an HTTP header for the web page, such as &lt;meta
            http-equiv=&quot;refresh&quot; content=&quot;30&quot;&gt; to refresh
            the page every 30 seconds.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What are the differences between{" "}
          <span className="font-bold">
            inline, inline-block and block elements
          </span>
          ?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          <p>
            Here are the main differences between them:
            <br /> - Inline elements do not start on a new line and only take up
            as much width as necessary. They can have left and right margins and
            padding, but not top and bottom. They allow other elements to sit to
            their left and right. Examples of inline elements are &lt;span&gt;,
            &lt;a&gt;, and &lt;img&gt;.
            <br /> - Block elements always start on a new line and take up the
            full width available. They can have all margins and padding, and can
            have a width and height set. They do not allow other elements to sit
            to their left and right. Examples of block elements are &lt;div&gt;,
            &lt;p&gt;, and &lt;h1&gt;.
            <br /> - Inline-block elements are placed as inline elements, but
            they behave as block elements. They only take up as much width as
            necessary, and allow other elements to sit to their left and right.
            They can have top and bottom margins and padding, and can have a
            width and height set. Examples of inline-block elements are
            &lt;button&gt;, &lt;input&gt;, and &lt;label&gt;.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. What are{" "}
          <span className="font-bold">properties and attributes</span> in HTML?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          <p>
            The major difference between the two is this:
            <br /> - Attribute is related to HTML. Property is related to DOM.
            <br /> - There is no “HTML property” only “HTML Attribute”.
            Similarly there is no “DOM Attribute” only “DOM Property”.
            <br /> When the browser reads our HTML, it converts the HTML
            attributes to DOM properties. Often the HTML attributes and DOM
            properties have the same names.
            <br /> For example in the below HTML:
            <br /> &lt;input id="message"/&gt;
            <br /> “id” is a HTML attribute.
            <br /> When the browser parses the above HTML element, it creates a
            DOM object like this:
            <br /> input.id = "message"
            <br /> Here “id” is the property of the DOM object “input”.
            <br /> In the above case the name “id” is the same for both HTML
            attribute and DOM property. But it is not always one to one.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What is a <span className="font-bold">viewport</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Viewport settings in HTML meta tags or CSS can be used to control how
          a web page is displayed on different devices. <br /> For example,
          specifying the viewport width and initial scale allows designers to
          create responsive web designs that adapt to different screen sizes,
          ensuring optimal viewing and user experience across various devices.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What is <span className="font-bold">hyperlink</span> in html? What
          tag and attribute will you use for hyperlink?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          <p>
            A hyperlink in HTML is a link that allows users to jump from one
            page to another or to a different section on the same page. <br />{" "}
            The tag and attribute used for creating a hyperlink are: <br /> -
            The &lt;a&gt; tag, which defines the hyperlink element. <br />- The
            href attribute, which specifies the URL of the destination page or
            the anchor name of the section.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. What is the difference between HTML{" "}
          <span className="font-bold">elements and tags</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          HTML elements and tags are related but not the same. <br />- HTML tags
          are the opening and closing parts of an HTML element, enclosed by
          angle brackets.
          <br />- HTML elements are the complete units that consist of tags and
          the content between them. HTML elements can also have attributes that
          provide extra information or settings for the element.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. How to <span className="font-bold">align text</span> in HTML?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          To align text in HTML, we can use the text-align property in CSS. This
          property specifies the horizontal alignment of text in an element. We
          can use “center”, “left” or “right” to align the text to the center,
          left or right, respectively.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. Explain the use of an{" "}
          <span className="font-bold">iframe tag</span>.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          An iframe tag is a HTML element that allows us to embed another web
          page or document within the current one. It creates a nested browsing
          context that has its own URL and document object. We can use the
          iframe tag to display content from other sources, such as maps,
          videos, or widgets, without reloading the whole page. Some common
          attributes of the iframe tag are:
          <br />- src: Specifies the URL of the document to embed in the iframe.
          <br />- width and height: Specify the size of the iframe in pixels.
          <br />- allow: Specifies a permissions policy for the iframe, such as
          allowing access to the microphone, camera, or fullscreen mode.
          <br />- loading: Specifies when the browser should load the iframe,
          either eagerly or lazily.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. Have you used <span className="font-bold">Audio and Video</span>{" "}
          tags? How do they work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Yes, I have used Audio and Video tags in HTML. They are used to embed
          sound and video content in a web page, such as music, podcasts,
          movies, or animations. They work by using one or more {"<source>"}{" "}
          tags inside the {"<audio>"} or {"<video>"} tags, which specify
          different formats and sources of the media files. The browser will
          choose the first source it supports and play it back using the
          built-in media player. We can also add attributes to the {"<audio>"}{" "}
          and {"<video>"} tags to control the playback, such as autoplay, loop,
          muted, controls, preload, etc. We can also use the {"<track>"} tag to
          add subtitles or captions to the video.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. Difference between{" "}
          <span className="font-bold">strong , b, em, i tags</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The difference between &lt;strong&gt; and &lt;b&gt; tags, as well as
          &lt;em&gt; and &lt;i&gt; tags, is mainly semantic. Semantic tags
          convey the meaning or structure of the text, while non-semantic tags
          only affect the appearance or style of the text. <br />
          The &lt;strong&gt; tag indicates that the text has strong importance
          or emphasis, while the &lt;b&gt; tag simply makes the text look bold.
          Similarly, the &lt;em&gt; tag indicates that the text has stress
          emphasis or a different tone, while the &lt;i&gt; tag simply makes the
          text look italic.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse14">
          14. What is <span className="font-bold">HTML</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse14"
          id="collapse14"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          HTML stands for HyperText Markup Language. It is the standard markup
          language used for creating web pages and describes the structure of a
          web page using various elements and tags.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse15">
          15. What is <span className="font-bold">charset</span> in html? Why
          will you use it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse15"
          id="collapse15"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A charset in HTML is an attribute that specifies the character
          encoding for the HTML document. Character encoding is a way of
          representing characters and symbols in binary code, so that they can
          be displayed correctly by a web browser. Different character sets
          support different languages and symbols. <br />I will use the charset
          attribute to tell the web browser which character set to use when
          displaying your HTML document. This will ensure that your text is
          rendered correctly and consistently across different platforms and
          devices. If you do not specify a charset, the web browser may use a
          default or guess one, which may result in incorrect or unreadable
          text. <br />
          The charset attribute can be used with the &lt;meta&gt;. The syntax
          for the &lt;meta&gt; element is: <br /> &lt;meta
          charset="character_set"&gt;
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse16">
          16. Tell me some <span className="font-bold">feature</span> names of
          HTML-5.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse16"
          id="collapse16"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          HTML5 introduced several new features, including: <br />
          - Semantic elements (e.g., &lt;header&gt;, &lt;nav&gt;,
          &lt;article&gt;, &lt;footer&gt;) to better structure the content.{" "}
          <br />
          - New form input types (e.g., email, date, range) for enhanced user
          experience. <br />
          - Multimedia support with the &lt;video&gt; and &lt;audio&gt;
          elements. <br />
          - Canvas element for dynamic graphics and animations. <br />- Local
          storage and offline capabilities with the Web Storage API.
        </div>
      </div>
    </Container>
  );
};

export default QnA_html;
