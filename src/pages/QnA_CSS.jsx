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
          The main difference between Flexbox and Grid lies in how they handle
          layout direction and complexity:
          <br />
          🔹 Flexbox is one-dimensional — it works in either a row or a column,
          not both at the same time.
          <br />
          It is best when we need to align items in a single line, either
          horizontally or vertically.
          <br />
          🔹 Grid is two-dimensional — it works in both rows and columns.
          <br />
          It is more powerful for building complex layouts like entire web pages
          or sections with rows and columns together.
          <br />
          Example use:
          <br />
          * Flexbox is perfect for things like navigation bars, button groups,
          or centered content.
          <br />
          * Grid is ideal for creating full page layouts, photo galleries, or
          dashboard designs.
          <br />
          So, I use Flexbox when layout is simple and in one direction, and I
          use Grid when I need more control in both directions.
          <br />
          <br />
          Flexbox এবং Grid এর মূল পার্থক্য হচ্ছে layout direction এবং
          complexity।
          <br />
          🔹 Flexbox হল এক-ডাইমেনশনাল, মানে এটি একবারে শুধু row বা column-এ কাজ
          করে।
          <br />
          এটি ব্যবহার করি যখন শুধুমাত্র এক লাইনে বা একদিকে আইটেম সাজাতে হয়।
          <br />
          🔹 Grid হল দুই-ডাইমেনশনাল, মানে এটি একসাথে row এবং column উভয় দিকেই
          কাজ করে।
          <br />
          এটি ব্যবহার করি যখন জটিল layout দরকার হয় — যেমন পুরো ওয়েব পেজ বা
          ড্যাশবোর্ড তৈরি।
          <br />
          উদাহরণ:
          <br />
          * Flexbox ব্যবহার করি navbar, button group, অথবা কোনো একদিকে content
          align করার জন্য।
          <br />
          * Grid ব্যবহার করি পুরো লে-আউট, photo gallery, বা dashboard layout এর
          জন্য।
          <br />
          সারসংক্ষেপে, যদি simple one-direction layout দরকার হয়, তাহলে Flexbox,
          আর যদি complex row-column layout দরকার হয়, তাহলে Grid ব্যবহার করি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          02. Explain all CSS{" "}
          <span className="font-bold">position property.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          There are five main values of the `position` property in CSS:
          <br />
          🔸 1. Static (default)
          <br />
          * This is the default position for all elements.
          <br />
          * Elements appear in the normal document flow, top to bottom.
          <br />
          * You cannot use top, right, bottom, or left with it.
          <br />
          🗣️ Example: A paragraph `&#60;p&#62;` will just appear one after
          another.
          <br />
          🔸 2. Relative
          <br />
          * The element stays in the normal flow, but we can move it relative to
          its original position using `top`, `left`, `right`, `bottom`.
          <br />
          * Space is still reserved for it.
          <br />
          🗣️ Example: `top: 10px` will move the element 10px down from its
          normal place.
          <br />
          🔸 3. Absolute
          <br />
          * The element is removed from normal flow.
          <br />
          * It is positioned relative to the nearest positioned ancestor (not
          static).
          <br />
          * If there’s no such ancestor, it uses the document body.
          <br />
          * Other elements ignore it.
          <br />
          🗣️ Example: Useful for placing a tooltip or dropdown menu.
          <br />
          🔸 4. Fixed
          <br />
          * The element is removed from normal flow.
          <br />
          * It is positioned relative to the viewport.
          <br />
          * It doesn’t move when we scroll the page.
          <br />
          🗣️ Example: A sticky header or back-to-top button.
          <br />
          🔸 5. Sticky
          <br />
          * It’s a mix between relative and fixed.
          <br />
          * The element scrolls like relative until a certain point, then
          becomes fixed.
          <br />
          🗣️ Example: A navigation bar that stays at the top while scrolling
          down.
          <br />
          <br />
          CSS এর `position` property এর ৫টি প্রধান মান (value) আছে:
          <br />
          🔸 ১. Static (ডিফল্ট)
          <br />
          * এটি প্রতিটি এলিমেন্টের default position।
          <br />
          * এলিমেন্টগুলো স্বাভাবিক নিয়মে উপরে থেকে নিচে সাজানো থাকে।
          <br />
          * এখানে `top`, `left`, `right`, `bottom` কাজ করে না।
          <br />
          🗣️ উদাহরণ: `&#60;p&#62;` এলিমেন্ট একটার পর একটা দেখা যাবে।
          <br />
          🔸 ২. Relative
          <br />
          * এলিমেন্টটি নরমাল flow-এ থাকে, কিন্তু আমরা একে তার নিজের জায়গা থেকে
          সরাতে পারি `top`, `left` ইত্যাদি দিয়ে।
          <br />
          * এলিমেন্টের জায়গা পেজে সংরক্ষিত থাকে।
          <br />
          🗣️ উদাহরণ: `top: 10px` দিলে উপরের জায়গা থেকে ১০px নিচে নেমে আসবে।
          <br />
          🔸 ৩. Absolute
          <br />
          * এলিমেন্টটি normal flow থেকে বাদ পড়ে।
          <br />
          * এটি নিকটতম positioned ancestor এর উপর ভিত্তি করে অবস্থান নেয়।
          <br />
          * যদি না থাকে, তাহলে document body কে ধরে নেয়।
          <br />
          * অন্য এলিমেন্টগুলো একে ignore করে।
          <br />
          🗣️ উদাহরণ: টুলটিপ বা dropdown তৈরি করতে এটি ব্যবহার করি।
          <br />
          🔸 ৪. Fixed
          <br />
          * এলিমেন্টটি ভিউপোর্ট অনুযায়ী অবস্থান নেয়।
          <br />
          * স্ক্রল করলেও এলিমেন্টটি স্থির থাকে।
          <br />
          🗣️ উদাহরণ: পেজের উপরের দিকে থাকা "Back to Top" বাটন।
          <br />
          🔸 ৫. Sticky
          <br />
          * এটি relative এবং fixed এর মিশ্রণ।
          <br />
          * এটি scroll করার সময় relative-এর মতো থাকে, কিন্তু নির্দিষ্ট জায়গায়
          পৌঁছালে fixed হয়ে যায়।
          <br />
          🗣️ উদাহরণ: এমন navbar যা স্ক্রল করে ওপরে গিয়ে আটকে থাকে।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          03. What is the CSS <span className="font-bold">box model?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The CSS Box Model is a fundamental concept that defines how elements
          are displayed and spaced in a web page.
          <br />
          Every HTML element is considered as a box, and this box is made up of
          four layers:
          <br />
          🔸 1. Content – The actual text or image inside the element.
          <br />
          🔸 2. Padding – The space between the content and the border.
          <br />
          🔸 3. Border – A line that surrounds the padding and content.
          <br />
          🔸 4. Margin – The space outside the border, between this element and
          others.
          <br />
          So, when we set the width and height of an element, it only applies to
          the content area, unless we use `box-sizing: border-box` to include
          padding and border in the total size.
          <br />
          📌 *Example:* If we set `width: 200px` and add `padding: 20px`, the
          total visible width becomes 240px (unless `box-sizing` is set).
          <br />
          Understanding the box model is important for proper layout, spacing,
          and alignment in CSS.
          <br />
          <br />
          CSS Box Model হল একটি গুরুত্বপূর্ণ ধারণা যা বলে কিভাবে প্রতিটি HTML
          এলিমেন্ট পেজে প্রদর্শিত এবং স্পেসিং করা হয়।
          <br />
          প্রত্যেক HTML এলিমেন্টকে একটি box হিসেবে ধরা হয়, এবং সেই বক্সে থাকে
          চারটি স্তর:
          <br />
          🔸 ১. Content – যেখানে টেক্সট বা ছবি থাকে।
          <br />
          🔸 ২. Padding – content ও border-এর মাঝখানের ফাঁকা জায়গা।
          <br />
          🔸 ৩. Border – padding এবং content ঘিরে থাকে।
          <br />
          🔸 ৪. Margin – border-এর বাইরের স্পেস, অন্য এলিমেন্ট থেকে দূরত্ব তৈরি
          করে।
          <br />
          যখন আমরা `width` বা `height` দিই, সেটা শুধুমাত্র content-এর জন্য কাজ
          করে, যদি না `box-sizing: border-box` ব্যবহার করি।
          <br />
          📌 *উদাহরণ:* যদি `width: 200px` এবং `padding: 20px` দিই, তাহলে মোট
          চওড়া হবে 240px (যদি `box-sizing` ব্যবহার না করি)।
          <br />
          সঠিকভাবে layout এবং spacing বুঝতে হলে CSS Box Model জানা অত্যন্ত
          গুরুত্বপূর্ণ।
          <br />
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse4">
          04. What is the <span className="font-bold">Hover effect?</span> What
          is the purpose of the <span className="font-bold">active class?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          🔸 Hover Effect:
          <br />
          The hover effect is a visual change that happens when the user places
          their mouse pointer over an element, without clicking.
          <br />
          In CSS, we use the `:hover` pseudo-class to define these styles.
          <br />
          It is commonly used for buttons, links, images, etc., to improve user
          interactivity and feedback.
          <br />
          📌 Example: A button changing color on hover — <br />
          {`button:hover { background-color: blue; }`}
          <br />
          🔸 Active Class or `:active` State:
          <br />
          The `:active` pseudo-class in CSS applies when an element is being
          clicked or is in a pressed state.
          <br />
          This usually happens between the moment a user presses down on the
          mouse button and releases it.
          <br />
          It is often used to give a pressed effect on buttons or links.
          <br />
          📌 Example: A button may shrink or change color when clicked — <br />
          {`button:active { transform: scale(0.98); }`}
          <br />
          The purpose of these is to make the UI more interactive, responsive,
          and user-friendly.
          <br />
          <br />
          🔸 Hover Effect:
          <br />
          Hover effect হল এমন একটি ভিজ্যুয়াল পরিবর্তন যা ঘটে যখন ইউজার মাউস
          কার্সর কোনো এলিমেন্টের উপর নিয়ে যায়, কিন্তু ক্লিক করে না।
          <br />
          CSS-এ আমরা `:hover` pseudo-class ব্যবহার করি এই effect তৈরি করতে।
          <br />
          সাধারণত button, link, image ইত্যাদির জন্য ব্যবহার হয় যাতে ইউজার
          ইন্টারঅ্যাকশন বাড়ে।
          <br />
          📌 উদাহরণ: একটি বাটনে মাউস নিলেই রঙ পরিবর্তন হয় — <br />
          {`button:hover { background-color: blue; }`}
          <br />
          🔸 Active Class বা `:active` State:
          <br />
          CSS-এ `:active` pseudo-class তখন কাজ করে যখন কোনো এলিমেন্ট ক্লিক করা
          হচ্ছে বা চেপে ধরা হচ্ছে।
          <br />
          অর্থাৎ, যখন ইউজার মাউস প্রেস করে রেখেছে, কিন্তু ছেড়ে দেয়নি তখন এই
          স্টেট দেখা যায়।
          <br />
          এটি বাটনের ক্লিক বা চাপ পড়া অবস্থার জন্য ব্যবহার হয়।
          <br />
          📌 উদাহরণ: বাটনে ক্লিক করলে একটু ছোট হয়ে যাওয়া — <br />
          {`button:active { transform: scale(0.98); }`}
          <br />
          এই দুইটি স্টাইল ইউজার ইন্টারফেসকে আরও ইন্টারেক্টিভ এবং ইউজার ফ্রেন্ডলি
          করে তোলে।
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
          🔸 What is a CSS Preprocessor?
          <br />
          A CSS Preprocessor is a tool that extends the functionality of regular
          CSS.
          <br />
          It allows developers to write CSS in a more structured, reusable, and
          dynamic way.
          <br />
          It uses features like variables, functions, nesting, mixins, etc.
          <br />
          Popular preprocessors include Sass, LESS, and Stylus.
          <br />
          These are written in their own syntax and then compiled into standard
          CSS before being used in a browser.
          <br />
          🔸 What are some benefits of Sass? <br />
          ✅ 1. Variables – You can define values like colors, fonts, sizes once
          and reuse them.
          <br />
          ➡️ Example: `$primary-color: #007bff;`
          <br />
          ✅ 2. Nesting – You can write cleaner and more readable code by
          nesting selectors.
          <br />
          ➡️ Example:
          <pre>
            {`
nav {  
  ul {  
    li {  
      a { color: $primary-color; }  
    }  
  }  
}  
  `}
          </pre>
          ✅ 3. Mixins – Reusable blocks of CSS code that accept arguments.
          <br />
          ➡️ Example:
          <pre>
            {`
@mixin flexCenter {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
}  
`}
          </pre>
          ✅ 4. Functions & Operations – You can do calculations and logic
          inside CSS.
          <br />
          ➡️ Example: `width: 100% / 3;`
          <br />
          ✅ 5. Modularization – You can split CSS into multiple partial files
          and import them.
          <br />
          ➡️ Example: `@import 'header';`
          <br />
          In summary, Sass makes writing CSS more efficient, maintainable, and
          scalable for large projects.
          <br />
          <br />
          একটি CSS Preprocessor হল এমন একটি টুল যা CSS-কে আরও শক্তিশালী ও
          ব্যবহারযোগ্য করে তোলে।
          <br />
          এটি ডেভেলপারদের CSS কে organized, reusable এবং dynamic ভাবে লেখার
          সুযোগ দেয়।
          <br />
          এখানে ব্যবহার করা যায় variable, function, nesting, mixin ইত্যাদি।
          <br />
          সবচেয়ে জনপ্রিয় প্রিপ্রসেসরগুলোর মধ্যে রয়েছে Sass, LESS, এবং Stylus।
          <br />
          এই কোডগুলো প্রথমে প্রিপ্রসেসর সিনট্যাক্সে লেখা হয়, তারপর CSS-এ compile
          হয়ে ব্রাউজারে ব্যবহৃত হয়।
          <br />
          🔸 Sass এর কিছু সুবিধা:
          <br />
          ✅ ১. Variables – আপনি একবার color, font বা size define করে সেটা
          বারবার ব্যবহার করতে পারেন।
          <br />
          ➡️ উদাহরণ: `$primary-color: #007bff;`
          <br />
          ✅ ২. Nesting – CSS কোড আরও পরিষ্কার এবং readable হয় nested ভাবে লেখার
          মাধ্যমে।
          <br />
          ➡️ উদাহরণ:
          <pre>
            {`
nav {  
  ul {  
    li {  
      a { color: $primary-color; }  
    }  
  }  
}  
  `}
          </pre>
          ✅ ৩. Mixins – বারবার ব্যবহারের জন্য reusable CSS block তৈরি করা যায়।
          <br />
          ➡️ উদাহরণ:
          <pre>
            {`
@mixin flexCenter {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
}  
`}
          </pre>
          ✅ ৪. Functions & Operations – CSS-এ গাণিতিক হিসাব এবং লজিক প্রয়োগ করা
          যায়।
          <br />
          ➡️ উদাহরণ: `width: 100% / 3;`
          <br />
          ✅ ৫. Modularization – কোডকে ছোট ছোট ফাইলে ভাগ করে import করা যায়।
          <br />
          ➡️ উদাহরণ: `@import 'header';`
          <br />
          সারসংক্ষেপে, Sass CSS লেখাকে সহজ, maintainable, এবং বড় প্রজেক্টে কাজ
          করার জন্য উপযুক্ত করে তোলে।
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
          CSS selectors are used to select and style specific HTML elements.
          <br />
          There are several types of selectors in CSS:
          <br />
          🔸 1. Universal Selector (`*`) – Selects all elements on the page.
          <br />
          ➡️ Example: <br /> {`* { margin: 0; padding: 0; }`}
          <br />
          🔸 2. Type Selector – Selects elements by tag name.
          <br />
          ➡️ Example: <br /> {`p { color: blue; }`}
          <br />
          🔸 3. Class Selector (`.`) – Selects elements with a specific class.
          <br />
          ➡️ Example: <br /> {`.btn { background-color: green; }`}
          <br />
          🔸 4. ID Selector (`#`) – Selects a single element with a specific ID.
          <br />
          ➡️ Example: <br /> {`#header { font-size: 24px; }`}
          <br />
          🔸 5. Grouping Selector – Applies the same style to multiple
          selectors.
          <br />
          ➡️ Example: <br /> {`h1, h2, h3 { font-weight: bold; }`}
          <br />
          🔸 6. Descendant Selector – Selects elements inside another element.
          <br />
          ➡️ Example: <br /> {`div p { color: red; }`}
          <br />
          🔸 7. Child Selector ({`>`}) – Selects direct children only.
          <br />
          ➡️ Example: <br /> {`ul > li { list-style: none; }`}
          <br />
          🔸 8. Adjacent Sibling Selector (`+`) – Selects the next sibling
          element.
          <br />
          ➡️ Example: <br /> {`h1 + p { color: gray; }`}
          <br />
          🔸 9. General Sibling Selector (`~`) – Selects all following siblings.
          <br />
          ➡️ Example: <br /> {`h1 ~ p { font-size: 14px; }`}
          <br />
          🔸 10. Attribute Selector – Selects elements based on attributes.
          <br />
          ➡️ Example: <br /> {`input[type="text"] { border: 1px solid #000; }`}
          <br />
          🔸 11. Pseudo-class Selector – Selects elements based on user
          interaction or position.
          <br />
          ➡️ Example: <br />{" "}
          {(`a:hover { color: red; }`, `li:first-child { font-weight: bold; }`)}
          <br />
          🔸 12. Pseudo-element Selector – Selects part of an element.
          <br />
          ➡️ Example: <br /> {`p::first-line { font-style: italic; }`}
          <br />
          These selectors help developers target specific elements and apply
          styles efficiently.
          <br />
          <br />
          CSS selector ব্যবহার করা হয় নির্দিষ্ট HTML এলিমেন্টগুলোকে style করার
          জন্য।
          <br />
          CSS-এ বেশ কয়েক ধরনের selector রয়েছে:
          <br />
          🔸 ১. Universal Selector (`*`) – সব এলিমেন্টকে select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`* { margin: 0; padding: 0; }`}
          <br />
          🔸 ২. Type Selector – ট্যাগ নাম দিয়ে select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`p { color: blue; }`}
          <br />
          🔸 ৩. Class Selector (`.`) – নির্দিষ্ট class এর এলিমেন্টগুলোকে select
          করে।
          <br />
          ➡️ উদাহরণ: <br /> {`.btn { background-color: green; }`}
          <br />
          🔸 ৪. ID Selector (`#`) – নির্দিষ্ট ID এর একক এলিমেন্ট select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`#header { font-size: 24px; }`}
          <br />
          🔸 ৫. Grouping Selector – একসাথে একাধিক selector এর জন্য style দেয়।
          <br />
          ➡️ উদাহরণ: <br /> {`h1, h2, h3 { font-weight: bold; }`}
          <br />
          🔸 ৬. Descendant Selector – একটি এলিমেন্টের ভেতরের অন্য এলিমেন্ট
          select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`div p { color: red; }`}
          <br />
          🔸 ৭. Child Selector ({`>`}) – শুধুমাত্র সরাসরি child এলিমেন্ট select
          করে।
          <br />
          ➡️ উদাহরণ: <br /> {`ul > li { list-style: none; }`}
          <br />
          🔸 ৮. Adjacent Sibling Selector (`+`) – কোনো এলিমেন্টের পরের sibling
          select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`h1 + p { color: gray; }`}
          <br />
          🔸 ৯. General Sibling Selector (`~`) – পরবর্তী সব sibling select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`h1 ~ p { font-size: 14px; }`}
          <br />
          🔸 ১০. Attribute Selector – নির্দিষ্ট attribute অনুযায়ী এলিমেন্ট
          select করে।
          <br />
          ➡️ উদাহরণ: <br /> {`input[type="text"] { border: 1px solid #000; }`}
          <br />
          🔸 ১১. Pseudo-class Selector – ইউজার ইন্টারঅ্যাকশন বা অবস্থান অনুযায়ী
          select করে।
          <br />
          ➡️ উদাহরণ: <br />{" "}
          {(`a:hover { color: red; }`, `li:first-child { font-weight: bold; }`)}
          <br />
          🔸 ১২. Pseudo-element Selector – একটি এলিমেন্টের নির্দিষ্ট অংশ select
          করে।
          <br />
          ➡️ উদাহরণ: <br /> {`p::first-line { font-style: italic; }`}
          <br />
          এসব selector ব্যবহার করে আমরা নির্দিষ্টভাবে এলিমেন্ট টার্গেট করে CSS
          অ্যাপ্লাই করতে পারি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse7">
          07. What is CSS <span className="font-bold">specificity?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          CSS specificity is a system that determines which CSS rule takes
          priority when multiple rules target the same element.
          <br />
          The browser uses specificity to decide which style to apply when there
          is a conflict.
          <br />
          Specificity is calculated based on the type of selector used:
          <br />
          🔸 Inline styles (e.g., `style="color: red;"`) have the highest
          specificity — score: 1000.
          <br />
          🔸 ID selectors (e.g., `#header`) have high specificity — score: 100.
          <br />
          🔸 Class, attribute, and pseudo-class selectors (e.g., `.btn`,
          `[type="text"]`, `:hover`) — score: 10.
          <br />
          🔸 Element and pseudo-element selectors (e.g., `h1`, `p::first-line`)
          — score: 1.
          <br />
          🔸 The universal selector (`*`), combinators (`+`, {`>`}, `~`), and
          inherited styles have no specificity.
          <br />
          📌 Example: <br /> `#idSelector` will override `.classSelector`, even
          if `.classSelector` appears later in the CSS file.
          <br />
          If two selectors have the same specificity, then the one declared last
          in the CSS will win.
          <br />
          Understanding specificity is crucial for writing predictable and
          conflict-free CSS.
          <br />
          <br />
          CSS specificity এমন একটি নিয়ম যা বলে দেয়, একই এলিমেন্টে একাধিক CSS
          রুল লাগলে কোনটা কার্যকর হবে।
          <br />
          যখন একাধিক রুল এক এলিমেন্টে apply হয়, তখন ব্রাউজার specificity ব্যবহার
          করে সিদ্ধান্ত নেয় কোনটা প্রাধান্য পাবে।
          <br />
          Specificity নির্ভর করে কোন ধরনের selector ব্যবহার করা হয়েছে তার উপর:
          <br />
          🔸 Inline style (যেমন `style="color: red;"`) – সবচেয়ে বেশি specificity
          — স্কোর: 1000।
          <br />
          🔸 ID selector (যেমন `#header`) – উচ্চ specificity — স্কোর: 100।
          <br />
          🔸 Class, attribute এবং pseudo-class (যেমন `.btn`, `[type="text"]`,
          `:hover`) — স্কোর: 10।
          <br />
          🔸 Element এবং pseudo-element (যেমন `h1`, `p::first-line`) — স্কোর: 1।
          <br />
          🔸 `*` universal selector বা `+`, {`>`}, `~` এর কোনও specificity নেই।
          <br />
          📌 উদাহরণ: <br /> `#idSelector` সবসময় `.classSelector` কে override
          করবে, যদিও `.classSelector` নিচে লেখা থাকে।
          <br />
          যদি দুইটা selector-এর specificity একই হয়, তাহলে পরে লেখা রুল কার্যকর
          হয়।
          <br />
          CSS specificity বোঝা খুব গুরুত্বপূর্ণ, যাতে কনফ্লিক্ট ছাড়া পরিষ্কার
          এবং নিয়ন্ত্রিত স্টাইল লেখা যায়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse8">
          08. What is the difference between{" "}
          <span className="font-bold">pseudo element and pseudo class?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse8"
          id="collapse8"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          A pseudo-class is used to define the special state of an element.
          <br />
          For example, when a user hovers or visits a link.
          <br />
          It uses one colon (`:`) syntax.
          <br />
          Example: `:hover`, `:focus`, `:nth-child(2)`
          <br />
          A pseudo-element is used to style specific parts of an element.
          <br />
          For example, the first letter or first line of a paragraph.
          <br />
          It uses two colons (`::`) syntax.
          <br />
          Example: `::before`, `::after`, `::first-letter`, `::first-line`
          <br />
          📌 Main Difference:
          <br />
          Pseudo-class targets the state of the element (like hover, focus),
          <br />
          while pseudo-element targets the part of the content inside the
          element.
          <br />
          <br />
          pseudo-class ব্যবহার করা হয় একটি এলিমেন্টের বিশেষ অবস্থা বোঝাতে।
          <br />
          যেমন, লিংকে হোভার করলে বা ফোকাস করলে।
          <br />
          এটি একটি কোলন (`:`) দিয়ে লেখা হয়।
          <br />
          উদাহরণ: `:hover`, `:focus`, `:nth-child(2)`
          <br />
          pseudo-element ব্যবহার হয় একটি এলিমেন্টের ভিতরের নির্দিষ্ট অংশ স্টাইল
          করতে।
          <br />
          যেমন, একটি অনুচ্ছেদের প্রথম অক্ষর বা প্রথম লাইন।
          <br />
          এটি দুটি কোলন (`::`) দিয়ে লেখা হয়।
          <br />
          উদাহরণ: `::before`, `::after`, `::first-letter`, `::first-line`
          <br />
          📌 মূল পার্থক্য:
          <br />
          pseudo-class এলিমেন্টের অবস্থা নির্দেশ করে,
          <br />
          আর pseudo-element এলিমেন্টের ভিতরের নির্দিষ্ট অংশ নির্দেশ করে।
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
          To make a website responsive, I use CSS media queries.
          <br />
          Media queries allow me to apply different styles based on device
          screen size, resolution, or orientation.
          <br />
          For example, I can target screens smaller than 768px to design for
          mobile devices.
          <br />
          The basic syntax is:
          <pre>{`
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
`}</pre>
          This means when the screen width is 768px or less, the background will
          change.
          <br />
          I usually define breakpoints for mobile, tablet, and desktop views
          like:
          <br />
          🔸 Mobile: `max-width: 767px`
          <br />
          🔸 Tablet: `min-width: 768px` and `max-width: 1023px`
          <br />
          🔸 Desktop: `min-width: 1024px`
          <br />
          Using media queries ensures the website layout and design look good on
          all devices.
          <br />
          This improves user experience and accessibility across platforms.
          <br />
          <br />
          একটি ওয়েবসাইটকে responsive করার জন্য আমি CSS media queries ব্যবহার
          করি।
          <br />
          Media queries এর মাধ্যমে আমি ভিন্ন ভিন্ন স্ক্রিন সাইজ, রেজোলিউশন বা
          ডিভাইস অরিয়েন্টেশন অনুযায়ী স্টাইল প্রয়োগ করতে পারি।
          <br />
          যেমন, আমি 768px এর নিচের স্ক্রিন টার্গেট করে মোবাইলের জন্য আলাদা
          ডিজাইন করি।
          <br />
          মূল syntax হচ্ছে:
          <pre>{`
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
`}</pre>
          মানে স্ক্রিন সাইজ 768px বা কম হলে ব্যাকগ্রাউন্ড কালার পরিবর্তন হবে।
          <br />
          আমি সাধারণত তিনটা breakpoint ব্যবহার করি:
          <br />
          🔸 মোবাইল: `max-width: 767px`
          <br />
          🔸 ট্যাবলেট: `min-width: 768px` এবং `max-width: 1023px`
          <br />
          🔸 ডেস্কটপ: `min-width: 1024px`
          <br />
          Media queries ব্যবহারে ওয়েবসাইট সব ডিভাইসে সুন্দর ও সঠিকভাবে
          প্রদর্শিত হয়।
          <br />
          এতে করে ইউজারের অভিজ্ঞতা এবং accessibility দুইই উন্নত হয়।
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
          To make font size responsive, I avoid using fixed units like `px`.
          <br />
          Instead, I use relative units such as `em`, `rem`, `%`, or `vw`/`vh`.
          <br />
          🔸 For example, `rem` is relative to the root element’s font size,
          which scales better across devices.
          <pre>{`
body {
  font-size: 1rem; /* Equal to 16px if root is 16px */
}
h1 {
  font-size: 2.5rem; /* Scales with root size */
}
`}</pre>
          🔸 Another modern approach is using viewport-based units like `vw`:
          <pre>{`
h1 {
  font-size: 5vw; /* Font size changes based on screen width */
}
`}</pre>
          🔸 I can also use media queries to change font size for different
          screen sizes.
          <pre>{`
@media (max-width: 768px) {
  body {
    font-size: 0.9rem;
  }
}
`}</pre>
          Responsive typography ensures better readability and user experience
          across devices.
          <br />
          <br />
          Font size কে responsive করার জন্য আমি `px` এর মতো fixed unit ব্যবহার
          করি না।
          <br />
          এর পরিবর্তে আমি `em`, `rem`, `%`, বা `vw`/`vh` এর মতো relative units
          ব্যবহার করি।
          <br />
          🔸 যেমন, `rem` মানে হলো root element এর উপর নির্ভরশীল ফন্ট সাইজ, যেটা
          সব ডিভাইসে ভালো স্কেল করতে।
          <pre>{`
body {
  font-size: 1rem; /* Equal to 16px if root is 16px */
}
h1 {
  font-size: 2.5rem; /* Scales with root size */
}
`}</pre>
          🔸 আরও একটি আধুনিক পদ্ধতি হলো `vw` এর মতো viewport units ব্যবহার করা:
          <pre>{`
h1 {
  font-size: 5vw; /* Font size changes based on screen width */
}
`}</pre>
          🔸 আমি প্রয়োজনে media queries ব্যবহার করেও ভিন্ন স্ক্রিন সাইজের জন্য
          ফন্ট সাইজ সেট করি:
          <pre>{`
@media (max-width: 768px) {
  body {
    font-size: 0.9rem;
  }
}
`}</pre>
          Responsive font size ব্যবহার করলে সব ডিভাইসে text পড়তে সুবিধা হয় এবং
          ব্যবহারকারীর অভিজ্ঞতা ভালো হয়।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. Difference between{" "}
          <span className="font-bold">transition and transform.</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          🔸 The `transform` property is used to apply visual effects to an
          element like rotating, scaling, translating, or skewing.
          <br />
          It directly changes the shape, position, or orientation of the
          element.
          <br />
          Example:
          <pre>{`div {
  transform: rotate(45deg);
}`}</pre>
          This rotates the element by 45 degrees instantly.
          <br />
          🔸 On the other hand, `transition` is used to create smooth animation
          effects between property changes over time.
          <br />
          It defines how long and how smoothly a change should occur.
          <br />
          Example:
          <pre>{`div {
  transition: transform 0.5s ease;
}
div:hover {
  transform: scale(1.2);
}
`}</pre>
          Here, the scale will happen gradually in 0.5 seconds when hovered.
          <br />
          So, `transform` defines what change to apply, while `transition`
          defines how the change happens over time.
          <br />
          <br />
          🔸 `transform` প্রপার্টি ব্যবহার করা হয় কোন element কে rotate, scale,
          move বা skew করার জন্য।
          <br />
          এটা সরাসরি element এর আকৃতি বা অবস্থান পরিবর্তন করে।
          <br />
          উদাহরণ:
          <pre>{`div {
  transform: rotate(45deg);
}
`}</pre>
          এখানে element টি সাথে সাথে ৪৫ ডিগ্রি ঘুরে যাবে।
          <br />
          🔸 অন্যদিকে, `transition` ব্যবহার করা হয় ধীরে ধীরে পরিবর্তনের
          animation effect তৈরি করার জন্য।
          <br />
          এটা বলে দেয়, একটা পরিবর্তন কত সময় ধরে এবং কত মসৃণভাবে হবে।
          <br />
          উদাহরণ:
          <pre>{`div {
  transition: transform 0.5s ease;
}
div:hover {
  transform: scale(1.2);
}
`}</pre>
          এখানে hover করলে element টি ধীরে ধীরে বড় হবে ০.৫ সেকেন্ডে।
          <br />
          তাই, `transform` হচ্ছে কি পরিবর্তন হবে, আর `transition` হচ্ছে সেই
          পরিবর্তন কীভাবে হবে সেটার নিয়ন্ত্রণ।
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
          To center a child {`<div>`} both horizontally and vertically inside a
          parent `{`<div>`}`, I use modern CSS techniques like Flexbox or Grid
          because they are simple and reliable.
          <br />
          🔸 Using Flexbox:
          <pre>{`.parent {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
  height: 100vh; /* or any fixed height */
}`}</pre>
          This method makes the child div perfectly centered in both directions.
          <br />
          🔸 Using Grid:
          <pre>{`.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}`}</pre>
          `place-items: center` is a shorthand for centering both horizontally
          and vertically.
          <br />
          These are clean and responsive solutions that I always prefer over
          older methods like `position: absolute` with `transform: translate()`.
          <br />
          <br />
          একটি child {`<div>`} কে তার parent {`<div>`} এর ভিতরে horizontally এবং
          vertically মাঝখানে রাখতে আমি Flexbox বা Grid ব্যবহার করি কারণ এটি সহজ
          ও নির্ভরযোগ্য।
          <br />
          🔸 Flexbox ব্যবহার করে:
          <pre>{`.parent {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
  height: 100vh; /* or any fixed height */
}`}</pre>
          এভাবে child div টি পুরোপুরি মাঝখানে চলে আসে।
          <br />
          🔸 Grid ব্যবহার করে:
          <pre>{`.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}`}</pre>
          `place-items: center` এক লাইনে উভয় দিকেই centering করে।
          <br />
          পুরনো পদ্ধতি যেমন `position: absolute` এবং `transform: translate()` এর
          চেয়ে Flexbox বা Grid অনেক ভালো এবং cleaner solution।
          <br />
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
          In CSS, both `id` and `class` are used to select and style HTML
          elements, but they have different purposes and rules.
          <br />
          🔸 `id` is unique. It should be used for one specific element only.
          <br />
          🔸 `class` can be used on multiple elements for applying the same
          style.
          <br />
          🔸 We use `#` to target an `id` and `.` to target a `class` in CSS.
          <br />
          🔸 `id` has higher specificity than `class`, so if both are applied,
          `id` will take priority.
          <br />
          🔸 `id` is often used when JavaScript needs to target a specific
          element.
          <br />
          🔸 `class` is more reusable and recommended for styling similar
          elements.
          <br />
          🗣️ Example:
          <pre>{`<div id="header"></div>
<div class="menu-item"></div>
<div class="menu-item"></div>
`}</pre>
          <br />
          CSS-এ `id` এবং `class` ব্যবহার করে HTML element গুলোকে style করা হয়,
          কিন্তু এদের কাজ এবং নিয়ম আলাদা।
          <br />
          🔸 `id` একটি ইউনিক নাম যা শুধুমাত্র একটি element এর জন্য ব্যবহার করা
          উচিত।
          <br />
          🔸 `class` একাধিক element এর জন্য একই style প্রয়োগ করতে ব্যবহার করা
          যায়।
          <br />
          🔸 CSS-এ `id` সিলেক্ট করতে `#` এবং `class` সিলেক্ট করতে `.` ব্যবহার
          করি।
          <br />
          🔸 `id` এর specificity বেশি, তাই `id` এবং `class` একসাথে থাকলে `id` এর
          style প্রাধান্য পাবে।
          <br />
          🔸 `id` সাধারণত JavaScript এর মাধ্যমে কোন নির্দিষ্ট element টার্গেট
          করতে ব্যবহৃত হয়।
          <br />
          🔸 `class` বারবার ব্যবহারযোগ্য এবং styling এর জন্য বেশি preferred।
          <br />
          🗣️ উদাহরণ:
          <pre>{`<div id="header"></div>
<div class="menu-item"></div>
<div class="menu-item"></div>
`}</pre>
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
          In CSS, both `margin` and `padding` are used for spacing, but they
          serve different purposes.
          <br />
          🔸 `Margin` is the space outside the element's border.
          <br />
          🔸 It creates space between the element and other elements.
          <br />
          🔸 `Padding` is the space inside the element, between the content and
          the border.
          <br />
          🔸 It increases the space within the element itself.
          <br />
          🔸 `Margin` can collapse (vertical margins of two elements can
          overlap), but `padding` does not collapse.
          <br />
          🔸 Both can be applied in top, right, bottom, and left directions
          individually or together.
          <br />
          🗣️ Example:
          <br />
          margin: 20px;
          <br />
          padding: 10px;
          <br />
          <br />
          CSS-এ `margin` এবং `padding` উভয়ই spacing এর জন্য ব্যবহৃত হয়, তবে
          উদ্দেশ্য আলাদা।
          <br />
          🔸 `Margin` হলো element এর বাহিরের দিকের ফাঁকা জায়গা।
          <br />
          🔸 এটি একটি element এবং অন্য element এর মধ্যে দূরত্ব তৈরি করে।
          <br />
          🔸 `Padding` হলো element এর ভিতরের দিকের ফাঁকা জায়গা, content এবং
          border এর মধ্যে।
          <br />
          🔸 এটি element এর ভিতরে স্থান বাড়ায়।
          <br />
          🔸 `Margin` কখনও কখনও collapse করে (দুই element এর vertical margin এক
          হয়ে যায়), কিন্তু `padding` কখনও collapse করে না।
          <br />
          🔸 উভয়ই top, right, bottom, এবং left আলাদাভাবে বা একসাথে ব্যবহার করা
          যায়।
          <br />
          🗣️ উদাহরণ:
          <br />
          margin: 20px;
          <br />
          padding: 10px;
        </div>
      </div>
    </Container>
  );
};

export default QnA_CSS;
