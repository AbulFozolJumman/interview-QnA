import Container from "../components/Shared/Container/Container";

/* eslint-disable react/no-unescaped-entities */
const QnA_CSS = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          01. Difference between CSS{" "}
          <span className="font-bold">flexbox vs grid</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - Flexbox is a layout with a one-dimensional system either within a
          row or a column. It is used for the components of an application.{" "}
          <br />- CSS Grid Layout is a two-dimensional system along with rows
          and columns. It is used for large-sized layouts.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          02. Explain CSS <span className="font-bold">position property</span>?
          What are some differences between{" "}
          <span className="font-bold">absolute and relative</span> position?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The difference between absolute and relative position in CSS is that:{" "}
          <br />
          - Absolute: An element with absolute position is removed from the
          normal flow and placed relative to the nearest positioned ancestor (an
          element with a position other than static). If there is no such
          ancestor, it is placed relative to the document body. The element can
          be moved using the top, right, bottom, and left properties. <br />-
          Relative: An element with relative position is placed relative to its
          normal position in the flow. The element can be offset using the top,
          right, bottom, and left properties, but other elements will not adjust
          to fill the gap left by the element.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          03. What is the CSS <span className="font-bold">box model</span>? And
          what are the different elements of a box model?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The CSS box model is a fundamental concept that describes the layout
          and sizing of elements. It consists of four parts: content, padding,
          border, and margin. The content area contains the actual content of
          the element, while padding adds space between the content and the
          border. The border surrounds the padding and content, and the margin
          provides space between the element and other elements.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. What is the <span className="font-bold">Hover effect</span>? What
          is the purpose of the <span className="font-bold">active class</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The hover effect is a CSS technique that allows us to change the
          appearance or behavior of an element when the user moves the mouse
          over it. <br />
          active: In CSS, the "active" class serves the purpose of styling an
          element when it is in an active state, usually when it is being
          clicked or activated by the user.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse5">
          05. What is a CSS <span className="font-bold">preprocessor</span>?
          What are some
          <span className="font-bold"> benefits of Sass</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A CSS preprocessor is a tool that extends the default capabilities of
          CSS by allowing us to use variables, functions, mixins, loops, and
          other features that make writing CSS more efficient and maintainable.
          A CSS preprocessor compiles our code into plain CSS that browsers can
          understand. <br />
          SASS: Sass is one of the most popular CSS preprocessors, and it has
          many benefits, such as: <br />
          - It is compatible with all versions of CSS, so you can use any
          existing CSS libraries or frameworks with Sass. <br />
          - It offers a concise and elegant syntax that makes your code more
          readable and organized. <br />
          - It improves your productivity by reducing the amount of code you
          have to write and avoiding repetition. <br />
          - It makes your code easier to maintain and update by using variables,
          mixins, and partials. <br />
          - It improves your site performance by allowing you to minify and
          compress your output CSS. <br />
          - It has a large and active community that provides support,
          documentation, and extensions. <br />- It allows you to customize
          Bootstrap 4, one of the most popular front-end frameworks, by changing
          its variables and mixins.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse6">
          06. What are the different types of{" "}
          <span className="font-bold">Selectors</span> in CSS?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          There are different types of selectors in CSS that are used to select
          HTML elements based on various criteria. Some of the common types of
          selectors are: <br />
          - Element selector: selects elements based on their tag name, such as
          p or h1. <br />
          - Id selector: selects a unique element based on its id attribute,
          prefixed with #, such as #header. <br />
          - Class selector: selects one or more elements based on their class
          attribute, prefixed with ., such as .button. <br />
          - Universal selector: selects all elements on the page, using the *
          symbol. <br />
          - Group selector: selects multiple elements that share the same style
          rules, separated by commas, such as h1, h2, p. <br />- Attribute
          selector: selects elements based on their attribute or attribute
          value, using brackets, such as [href] or [type="text"]. - Pseudo-class
          selector: selects elements based on their state, such as :hover or
          :checked. <br />- Pseudo-element selector: selects and styles a part
          of an element, such as ::before or ::first-line.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What is CSS <span className="font-bold">specificity</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          CSS specificity is a measure of how specific a selector is when
          determining which styles should be applied to an element. Specificity
          is calculated based on the number of ID selectors, class selectors,
          and element selectors used in the selector. Inline styles have the
          highest specificity, followed by ID selectors, class selectors, and
          element selectors. The most specific selector takes precedence.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What is a <span className="font-bold">Pseudo element</span>? Give
          an example of a pseudo-element.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A pseudo-element in CSS is a keyword added to a selector that allows
          you to style a specific part of the selected element. It's called
          "pseudo" because it doesn't actually exist as a separate element in
          the document's structure but allows for styling parts of an element as
          if they were distinct elements. <br />
          Example of a Pseudo-element <br />
          One common pseudo-element is ::before. This pseudo-element allows you
          to insert content before the content of an element.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse9">
          09. How will you use <span className="font-bold">media queries</span>{" "}
          to make a website responsive?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse9"
          id="collapse9"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Media queries are a CSS technique that allows us to apply different
          styles depending on the browser and device environment. They are
          commonly used to create responsive web design, which adapts to
          different screen sizes and orientations. <br />
          To use media queries, we need to specify a media type (such as screen
          or print) and a media feature (such as width or height) that must
          match for the CSS rules to apply. We can also use logical operators
          (such as and, not, or) and ranges (such as min-width or max-width) to
          combine multiple conditions.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. How will you make{" "}
          <span className="font-bold">font size responsive</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The key methods for making font size responsive in CSS are: <br />
          1. Using Relative Units (em, rem) <br />
          2. Using Percentage (%) <br />
          3. Using Viewport Units (vw, vh) <br />
          4. Using CSS calc() Function <br />
          5. Media Queries <br />
          6. Using CSS clamp() Function
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. Difference between{" "}
          <span className="font-bold">transition and transform</span>.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          - The transition property is used to animate changes to CSS properties
          over a specified duration. It defines the transition effect when a
          property changes from one value to another, allowing for smooth and
          gradual changes rather than abrupt ones. <br />- The transform
          property is used to apply transformations to an element, such as
          translating, rotating, scaling, or skewing. These transformations can
          alter the appearance and position of an element without affecting the
          layout around it.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. How will you{" "}
          <span className="font-bold">
            horizontally and vertically center a div
          </span>{" "}
          inside a div?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          There are several methods to horizontally and vertically center a div
          inside another div using CSS: <br />
          1. Flexbox <br />
          Parent: display: flex; justify-content: center; align-items: center;{" "}
          <br />
          2. Grid <br />
          Parent: display: grid; place-items: center; <br />
          3. Absolute Positioning with Transforms <br />
          Parent: position: relative; <br />
          Child: position: absolute; top: 50%; left: 50%; transform:
          translate(-50%, -50%); <br />
          4. Using Margins (For Known Dimensions) <br />
          Parent: position: relative; <br />
          Child: width: [width]; height: [height]; position: absolute; top: 50%;
          left: 50%; margin-top: -[half-height]; margin-left: -[half-width];{" "}
          <br />
          5. Using Table Display <br />
          Parent: display: table; width: 100%; height: 100%; <br />
          Child: display: table-cell; vertical-align: middle; text-align:
          center;
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. Difference between <span className="font-bold">id and class</span>
          ?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The difference between id and class is that id is a unique identifier
          that can only be applied to one element on a page, while class can be
          applied to multiple elements that share the same style. For example,
          we can use id to style a specific header, and use class to style all
          the paragraphs that have the same font and color.
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse14">
          14. CSS <span className="font-bold">margin vs padding</span>.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse14"
          id="collapse14"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          CSS margin and padding are two properties that control the space
          around and inside an element. The main difference between them is that
          margin is the space outside the element's border, while padding is the
          space inside the element's border.
        </div>
      </div>
    </Container>
  );
};

export default QnA_CSS;
