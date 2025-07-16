import Container from "../components/Shared/Container/Container";

/* eslint-disable react/no-unescaped-entities */
const QnA_html = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse">
          01. What is <span className="font-bold">HTML?</span>
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          HTML stands for HyperText Markup Language. It is the standard language
          used to create and structure web pages on the internet.
          <br />
          HTML is not a programming language; it is a markup language that uses
          tags to define elements like headings, paragraphs, links, images,
          tables, forms, and more.
          <br />
          It forms the skeleton or basic structure of every webpage. Web
          browsers read HTML code and display the content accordingly.
          <br />
          In summary, HTML is the foundation of every website. Without HTML, we
          cannot build web pages.
          <br />
          <br />
          HTML এর পূর্ণরূপ হলো HyperText Markup Language। এটি একটি স্ট্যান্ডার্ড
          মার্কআপ ভাষা, যেটি ব্যবহার করে আমরা ওয়েবপেজ তৈরি ও গঠন করি।
          <br />
          HTML কোনো প্রোগ্রামিং ভাষা নয়, এটি একটি markup language, যেখানে ট্যাগ
          ব্যবহার করে ওয়েব কনটেন্ট যেমন হেডিং, প্যারাগ্রাফ, লিংক, ছবি, ফর্ম
          ইত্যাদি তৈরি করা হয়।
          <br />
          HTML মূলত একটি ওয়েবপেজের স্ট্রাকচার তৈরি করে। ওয়েব ব্রাউজার HTML কোড
          পড়ে এবং সেই অনুযায়ী কনটেন্ট দেখায়।
          <br />
          সংক্ষেপে, HTML ছাড়া ওয়েবপেজ তৈরি করা সম্ভব নয়। এটি প্রতিটি ওয়েবসাইটের
          মূল ভিত্তি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse2">
          02. What are the differences between{" "}
          <span className="font-bold">HTML4 and HTML5</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          There are several important differences between HTML4 and HTML5. Here
          are the key ones:
          <br />
          🔹 Doctype Declaration: HTML4 has a long and complex doctype, but
          HTML5 uses a very simple one: `&#60;!DOCTYPE html&#62;`.
          <br />
          🔹 New Semantic Elements: HTML5 introduced many new semantic elements
          like `header`, `footer`, `article`, `section`, which help to create
          more meaningful and well-structured pages. These were not available in
          HTML4.
          <br />
          🔹 Multimedia Support: HTML5 supports audio and video using `audio`
          and `video` tags directly, without the need for external plugins like
          Flash. HTML4 didn’t have this feature.
          <br />
          🔹 Form Enhancements: HTML5 added new input types like `email`,
          `date`, `number`, and built-in validation features. HTML4 only had
          basic input types like `text` and `password`.
          <br />
          🔹 APIs and Features: HTML5 supports new APIs such as Geolocation API,
          Web Storage, Canvas for 2D graphics, and Drag-and-Drop. HTML4 does not
          support these.
          <br />
          🔹 Mobile Friendly: HTML5 is designed with modern devices and mobile
          compatibility in mind. HTML4 is more desktop-oriented.
          <br />
          So, overall, HTML5 is more powerful, flexible, and user-friendly than
          HTML4.
          <br />
          <br />
          HTML4 এবং HTML5 এর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। নিচে প্রধান
          পার্থক্যগুলো বলছি:
          <br />
          🔹 Doctype ঘোষণা: HTML4 এর Doctype অনেক বড় ও জটিল, কিন্তু HTML5 এ শুধু
          `&#60;!DOCTYPE html&#62;` লিখলেই হয়।
          <br />
          🔹 নতুন Semantic ট্যাগ: HTML5 এ `header`, `footer`, `article`,
          `section` এর মতো অনেক নতুন ট্যাগ এসেছে, যেগুলো দিয়ে ওয়েবপেজ আরও
          গঠনমূলকভাবে লেখা যায়। HTML4 এ এসব ট্যাগ ছিল না।
          <br />
          🔹 মাল্টিমিডিয়া সাপোর্ট: HTML5 এ সরাসরি `audio` এবং `video` ট্যাগ
          ব্যবহার করে অডিও-ভিডিও চালানো যায়, কোনো প্লাগইন ছাড়া। HTML4 এ এভাবে
          সাপোর্ট ছিল না।
          <br />
          🔹 ফর্মের উন্নয়ন: HTML5 এ `email`, `date`, `number` এর মতো নতুন ইনপুট
          টাইপ এসেছে এবং বিল্ট-ইন ভ্যালিডেশনও আছে। HTML4 এ শুধু `text`,
          `password` এর মতো বেসিক টাইপ ছিল।
          <br />
          🔹 নতুন API এবং ফিচার: HTML5 এ Geolocation API, Web Storage, Canvas,
          Drag-and-Drop ইত্যাদি ফিচার যুক্ত হয়েছে। HTML4 এ এগুলো ছিল না।
          <br />
          🔹 মোবাইল ফ্রেন্ডলি: HTML5 ডিজাইন করা হয়েছে মোবাইল ও মডার্ন ডিভাইস
          মাথায় রেখে। HTML4 ছিল মূলত ডেস্কটপ ভিত্তিক।
          <br />
          সারসংক্ষেপে, HTML5 হচ্ছে আরও শক্তিশালী, ফিচার-রিচ এবং ব্যবহার বান্ধব
          ভার্সন।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse3">
          03. What are <span className="font-bold">semantic tags</span> in HTML?
          Give me some examples.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          Semantic tags in HTML are tags that clearly describe the meaning or
          purpose of the content inside them. They make the structure of a web
          page more readable for both developers and browsers, including screen
          readers and search engines.
          <br />
          Instead of using generic tags like `&#60;div&#62;` or `&#60;span&#62;`
          for everything, semantic tags tell what the content is about. This
          improves accessibility, SEO, and code maintainability.
          <br />
          🔹 Examples of semantic tags:
          <br />
          * `&#60;header&#62;` – Represents the top section or header of a page.
          <br />
          * `&#60;footer&#62;` – Represents the bottom section or footer.
          <br />
          * `&#60;nav&#62;` – Represents the navigation menu.
          <br />
          * `&#60;main&#62;` – Represents the main content area of a page.
          <br />
          * `&#60;article&#62;` – Used for self-contained content like blog
          posts or news.
          <br />
          * `&#60;section&#62;` – Represents a section of content grouped
          together.
          <br />
          * `&#60;aside&#62;` – For side content, like a sidebar or ad.
          <br />
          So, semantic tags help in writing cleaner, more meaningful, and
          SEO-friendly HTML code.
          <br />
          <br />
          Semantic ট্যাগ হচ্ছে এমন HTML ট্যাগ যেগুলো তাদের ভিতরের কনটেন্টের অর্থ
          বা উদ্দেশ্য স্পষ্টভাবে বোঝায়। এগুলোর মাধ্যমে কোডটা শুধু ব্রাউজার নয়,
          ডেভেলপার ও সার্চ ইঞ্জিনগুলোর জন্যও সহজে বোঝার মতো হয়।
          <br />
          আমরা যদি সব কিছু `&#60;div&#62;` বা `&#60;span&#62;` দিয়ে লিখি, তাহলে
          বোঝা কঠিন হয় কোনটা কী উদ্দেশ্যে লেখা। কিন্তু semantic ট্যাগ দিয়ে লিখলে
          কাঠামো পরিষ্কার হয়, অ্যাক্সেসিবিলিটি বাড়ে, আর SEO-তেও ভালো ফল পাওয়া
          যায়।
          <br />
          🔹 Semantic ট্যাগের কিছু উদাহরণ:
          <br />
          * `&#60;header&#62;` – পেজের টপ হেডার অংশ বোঝাতে।
          <br />
          * `&#60;footer&#62;` – নিচের ফুটার অংশের জন্য।
          <br />
          * `&#60;nav&#62;` – নেভিগেশন মেনু বোঝাতে।
          <br />
          * `&#60;main&#62;` – পেজের মূল কনটেন্টের জন্য।
          <br />
          * `&#60;article&#62;` – ব্লগ বা নিউজের মতো আলাদা কনটেন্ট বোঝাতে।
          <br />
          * `&#60;section&#62;` – একই ধরনের কনটেন্ট গ্রুপ করার জন্য।
          <br />
          * `&#60;aside&#62;` – সাইড কনটেন্ট বা সাইডবারের জন্য।
          <br />
          সারসংক্ষেপে, semantic ট্যাগ ব্যবহার করলে HTML কোড পরিষ্কার, অর্থবোধক ও
          SEO-ফ্রেন্ডলি হয়।
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
          I will use the `&#60;meta&#62;` tag in HTML to provide important
          metadata about the web page. This metadata is not visible on the page
          itself but helps browsers, search engines, and social media platforms
          understand the page better.
          <br />
          Here are some key reasons to use meta tags:
          <br />
          🔹 Character Encoding: To specify the character set, like UTF-8, so
          the browser displays text correctly.
          <br />
          Example: `&#60;meta charset="UTF-8"&#62;`
          <br />
          🔹 SEO (Search Engine Optimization): Meta tags like `description` help
          search engines understand the content of the page and improve
          visibility in search results.
          <br />
          Example: `&#60;meta name="description" content="Best online fashion
          store for trendy clothes."&#62;`
          <br />
          🔹 Responsive Design: To make the website mobile-friendly using the
          viewport meta tag.
          <br />
          Example: `&#60;meta name="viewport" content="width=device-width,
          initial-scale=1.0"&#62;`
          <br />
          🔹 Social Media Sharing: Meta tags help control how your page appears
          when shared on platforms like Facebook or Twitter.
          <br />
          So, I use meta tags to improve browser compatibility, SEO,
          accessibility, and social media presentation of a web page.
          <br />
          <br />
          আমি `&#60;meta&#62;` ট্যাগ ব্যবহার করি একটি ওয়েবপেজ সম্পর্কে
          গুরুত্বপূর্ণ তথ্য (metadata) দেয়ার জন্য, যা ব্রাউজার, সার্চ ইঞ্জিন এবং
          সোশ্যাল মিডিয়া প্ল্যাটফর্মকে পেজটা ভালোভাবে বুঝতে সাহায্য করে। এই
          তথ্য পেজে দেখা যায় না, কিন্তু পেছনে অনেক গুরুত্বপূর্ণ ভূমিকা রাখে।
          <br />
          কিছু প্রধান কারণ হলো:
          <br />
          🔹 অক্ষর এনকোডিং ঠিক করা: যাতে ব্রাউজার ঠিকভাবে লেখা দেখাতে পারে।
          <br />
          উদাহরণ: `&#60;meta charset="UTF-8"&#62;`
          <br />
          🔹 SEO বাড়ানোর জন্য: `description` মেটা ট্যাগ দিয়ে পেজের বিষয় সার্চ
          ইঞ্জিনকে বোঝানো হয়, যাতে গুগলে ভালোভাবে দেখা যায়।
          <br />
          উদাহরণ: `&#60;meta name="description" content="Trendy জামার অনলাইন
          ফ্যাশন শপ"&#62;`
          <br />
          🔹 মোবাইল রেসপনসিভ করার জন্য: `viewport` মেটা ট্যাগ ব্যবহার করে মোবাইল
          স্ক্রিনে ঠিকভাবে দেখানো যায়।
          <br />
          উদাহরণ: `&#60;meta name="viewport" content="width=device-width,
          initial-scale=1.0"&#62;`
          <br />
          🔹 সোশ্যাল মিডিয়ায় শেয়ার করলে ঠিকভাবে দেখানোর জন্য: বিশেষ মেটা ট্যাগ
          দিয়ে ঠিকভাবে টাইটেল, ছবি ও বর্ণনা কন্ট্রোল করা যায়।
          <br />
          সংক্ষেপে, meta ট্যাগ ব্যবহার করলে ওয়েবসাইটের SEO, ব্রাউজার সাপোর্ট,
          রেসপনসিভনেস এবং সোশ্যাল শেয়ারিং সবকিছু উন্নত হয়।
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
          In HTML and CSS, elements are rendered differently based on their
          display type. The main differences between `inline`, `inline-block`,
          and `block` elements are:
          <br />
          🔹 Block Elements:
          <br />
          * Always start on a new line.
          <br />
          * Take up the full width available (by default).
          <br />
          * You can set width, height, margin, and padding.
          <br />
          * Example elements: `&#60;div&#62;`, `&#60;h1&#62;`, `&#60;p&#62;`,
          `&#60;section&#62;`
          <br />
          * Display: `display: block;`
          <br />
          🔹 Inline Elements:
          <br />
          * Do not start on a new line.
          <br />
          * Take only as much width as needed.
          <br />
          * Width and height cannot be set.
          <br />
          * Only horizontal padding/margin works (top/bottom won’t affect
          layout).
          <br />
          * Example elements: `&#60;span&#62;`, `&#60;a&#62;`,
          `&#60;strong&#62;`, `&#60;em&#62;`
          <br />
          * Display: `display: inline;`
          <br />
          🔹 Inline-block Elements:
          <br />
          * Behaves like inline (stays in line with other content).
          <br />
          * But allows setting width and height like block elements.
          <br />
          * Useful when you want inline flow with block-like control.
          <br />
          * Example: Used commonly in buttons or layout boxes.
          <br />
          * Display: `display: inline-block;`
          <br />
          So, depending on the layout requirement, I use these display types
          accordingly.
          <br />
          <br />
          HTML ও CSS-এ একটি এলিমেন্ট কিভাবে দেখানো হবে তা নির্ভর করে তার display
          type এর উপর। নিচে তিনটি display type এর মূল পার্থক্যগুলো বলছি:
          <br />
          🔹 Block এলিমেন্ট:
          <br />
          * সবসময় নতুন লাইনে শুরু হয়।
          <br />
          * পুরো width দখল করে।
          <br />
          * আপনি width, height, margin, padding সব সেট করতে পারেন।
          <br />
          * উদাহরণ: `&#60;div&#62;`, `&#60;h1&#62;`, `&#60;p&#62;`,
          `&#60;section&#62;`
          <br />
          * Display: `display: block;`
          <br />
          🔹 Inline এলিমেন্ট:
          <br />
          * নতুন লাইনে শুরু হয় না, লাইনের মধ্যে থাকে।
          <br />
          * শুধুমাত্র যতটুকু জায়গা দরকার ততটুকুই নেয়।
          <br />
          * width এবং height সেট করা যায় না।
          <br />
          * শুধুমাত্র left/right margin ও padding কাজ করে, top/bottom কাজ করে
          না।
          <br />
          * উদাহরণ: `&#60;span&#62;`, `&#60;a&#62;`, `&#60;strong&#62;`
          <br />
          * Display: `display: inline;`
          <br />
          🔹 Inline-block এলিমেন্ট:
          <br />
          * লাইনের মধ্যেই থাকে (inline এর মতো)।
          <br />
          * কিন্তু width, height, padding, margin ব্লকের মতো কাজ করে।
          <br />
          * এটি তখন ব্যবহার করি যখন ব্লক-স্টাইল কন্ট্রোল দরকার, কিন্তু ইনলাইনের
          মতো আচরণ চাই।
          <br />
          * Display: `display: inline-block;`
          <br />
          এই display টাইপগুলো প্রয়োজন অনুযায়ী ব্যবহার করে আমি লেআউট ডিজাইন করি।
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
          In HTML, both attributes and properties are used to define information
          about elements, but they are different in how and when they are used.
          <br />
          🔹 Attributes:
          <br />
          * Attributes are written in the HTML code, inside the start tag of an
          element.
          <br />
          * They define initial values or settings for the element.
          <br />
          * Attributes are static and don’t change automatically after the page
          loads (unless changed via JavaScript).
          <br />
          * Example:
          <br />
          {`
  <input type="text" value="Jumman" disabled />
  `}
          <br />
          * Here, `type`, `value`, and `disabled` are attributes.
          <br />
          🔹 Properties:
          <br />
          * Properties are JavaScript-accessible representations of the current
          state of an element in the DOM.
          <br />
          * They are used after the page loads, through JavaScript, to get or
          update values dynamically.
          <br />
          * Example:
          <br />
          let input = document.querySelector('input');
          <br />
          input.value = "New Text"; // This is a property
          <br />
          input.disabled = false; // This changes the disabled property
          <br />
          So, I use attributes in the HTML markup and properties when I want to
          work with elements dynamically using JavaScript.
          <br />
          <br />
          HTML-এ Attribute এবং Property দুটোই এলিমেন্ট সম্পর্কিত তথ্য দেয়,
          কিন্তু এদের কাজ এবং ব্যবহারের সময় ভিন্ন।
          <br />
          🔹 Attribute (অ্যাট্রিবিউট):
          <br />
          * এটি HTML ট্যাগের ভিতরে লেখা হয়।
          <br />
          * এলিমেন্টের প্রাথমিক মান বা কনফিগারেশন সেট করে।
          <br />
          * এটি স্ট্যাটিক অর্থাৎ পেজ লোডের পরে নিজে থেকে পরিবর্তন হয় না (যদি না
          JavaScript দিয়ে পরিবর্তন করা হয়)।
          <br />
          * উদাহরণ:
          <br />
          {`
  <input type="text" value="Jumman" disabled />
  `}
          <br />
          এখানে `type`, `value`, `disabled` হলো অ্যাট্রিবিউট।
          <br />
          🔹 Property (প্রপার্টি):
          <br />
          * এটি পেজ লোড হওয়ার পরে JavaScript দিয়ে ব্যবহার করা হয়।
          <br />
          * এটি এলিমেন্টের বর্তমান অবস্থা বোঝায়।
          <br />
          * প্রপার্টি ব্যবহার করে আমরা ডায়নামিকভাবে মান পড়তে বা পরিবর্তন করতে
          পারি।
          <br />
          * উদাহরণ:
          <br />
          let input = document.querySelector('input');
          <br />
          input.value = "New Text"; // এটা প্রপার্টি
          <br />
          input.disabled = false; // এটা দিয়েই আমরা disable বন্ধ করছি
          <br />
          সংক্ষেপে, attribute ব্যবহার করি যখন HTML লিখি, আর property ব্যবহার করি
          যখন JavaScript দিয়ে এলিমেন্টের মান পরিবর্তন করতে চাই।
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
          In web development, the viewport is the visible area of a web page on
          a user’s screen. It varies depending on the device being used — for
          example, a desktop monitor has a large viewport, while a mobile phone
          has a small one.
          <br />
          Modern websites are responsive, meaning they adjust content and layout
          according to the size of the viewport.
          <br />
          To control this behavior, we use the viewport meta tag in the
          `&#60;head&#62;` section of HTML, like this:
          <br />
          {`
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`}
          <br />
          🔹 `width=device-width` sets the viewport width to match the device
          screen.
          <br />
          🔹 `initial-scale=1.0` sets the initial zoom level.
          <br />
          Without this tag, mobile browsers often scale and zoom the page by
          default, which breaks responsive design.
          <br />
          So, the viewport is critical for responsive web design and ensuring a
          consistent user experience across different screen sizes.
          <br />
          <br />
          ওয়েব ডেভেলপমেন্টে, viewport হলো ইউজারের স্ক্রিনে যেই অংশে ওয়েবপেজ দেখা
          যায়, সেই দৃশ্যমান এলাকা। এটি ডিভাইস অনুযায়ী পরিবর্তিত হয় — যেমন,
          ডেস্কটপে বড় viewport হয়, আর মোবাইলে ছোট।
          <br />
          আধুনিক ওয়েবসাইটগুলো responsive, মানে তারা স্ক্রিন সাইজ অনুযায়ী
          কনটেন্টের লেআউট পরিবর্তন করে।
          <br />
          এই আচরণ কন্ট্রোল করার জন্য আমরা HTML-এর `&#60;head&#62;` অংশে viewport
          meta tag ব্যবহার করি:
          <br />
          {`
<meta name="viewport" content="width=device-width, initial-scale=1.0">
`}
          <br />
          🔹 `width=device-width` ডিভাইসের স্ক্রিন অনুযায়ী ভিউপোর্টের প্রস্থ সেট
          করে।
          <br />
          🔹 `initial-scale=1.0` ওয়েবপেজের শুরুর zoom লেভেল ঠিক করে।
          <br />
          যদি এই ট্যাগ ব্যবহার না করি, তাহলে মোবাইল ব্রাউজার পেজকে জুম করে
          দেখাতে পারে, ফলে ডিজাইন ভেঙে যায়।
          <br />
          সারসংক্ষেপে, viewport হলো responsive design-এর ভিত্তি, যা ওয়েবসাইটকে
          মোবাইল, ট্যাবলেট ও ডেস্কটপে সঠিকভাবে দেখাতে সাহায্য করে।
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
          In HTML, a hyperlink is a link that connects one page to another —
          either within the same website or to an external website. When a user
          clicks on a hyperlink, it navigates to the specified URL or resource.
          <br />
          To create a hyperlink in HTML, we use the `&#60;a&#62;` tag, which
          stands for anchor.
          <br />
          The most important attribute used with it is `href`, which stands for
          hyperlink reference. This defines the destination URL.
          <br />
          🔹 Example:
          <br />
          &#60;a href="https://www.example.com"&#62;Visit Example&#60;/a&#62;
          <br />
          In this example:
          <br />
          * `&#60;a&#62;` is the anchor tag.
          <br />
          * `href="https://www.example.com"` specifies the link destination.
          <br />
          * The text "Visit Example" is the clickable part of the link.
          <br />
          We can also use other attributes like `target="_blank"` to open the
          link in a new tab.
          <br />
          So, the anchor tag `&#60;a&#62;` with the `href` attribute is used to
          create hyperlinks in HTML.
          <br />
          <br />
          HTML-এ Hyperlink এমন একটি লিংক, যেটি ব্যবহারকারীকে একটি পেজ থেকে অন্য
          পেজে, অথবা একটি সাইট থেকে অন্য সাইটে নেভিগেট করতে সাহায্য করে। ইউজার
          লিংকে ক্লিক করলে সেটি নির্দিষ্ট URL-এ চলে যায়।
          <br />
          Hyperlink তৈরি করতে আমরা `&#60;a&#62;` ট্যাগ ব্যবহার করি, যেটিকে
          anchor tag বলা হয়।
          <br />
          এই ট্যাগের সঙ্গে সবচেয়ে গুরুত্বপূর্ণ অ্যাট্রিবিউট হলো `href` – যার
          মানে hyperlink reference, অর্থাৎ লিংকের ঠিকানা।
          <br />
          🔹 উদাহরণ:
          <br />
          &#60;a href="https://www.example.com"&#62;Visit Example&#60;/a&#62;
          <br />
          এখানে:
          <br />
          * `&#60;a&#62;` হলো anchor ট্যাগ,
          <br />
          * `href="https://www.example.com"` হলো যেখানে ক্লিক করলে যাবে,
          <br />
          * "Visit Example" হলো যেটা ক্লিকযোগ্য টেক্সট।
          <br />
          প্রয়োজনে আমরা `target="_blank"` ব্যবহার করতে পারি, যাতে লিংকটি নতুন
          ট্যাবে খুলে।
          <br />
          সারসংক্ষেপে, HTML-এ Hyperlink তৈরি করতে আমরা `&#60;a&#62;` ট্যাগ এবং
          `href` অ্যাট্রিবিউট ব্যবহার করি।
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
          In HTML, tags and elements are related, but they are not the same.
          <br />
          🔹 HTML Tag:
          <br />
          * A tag is a part of the HTML syntax used to define the start or end
          of an element.
          <br />
          * Tags are written using angle brackets like `&#60;p&#62;`,
          `&#60;/p&#62;`, `&#60;h1&#62;`, `&#60;div&#62;`.
          <br />
          * There are two types of tags:
          <br />
          * Opening tag – like `&#60;p&#62;`
          <br />
          * Closing tag – like `&#60;/p&#62;`
          <br />
          🔹 HTML Element:
          <br />
          * An element is the complete structure — including the opening tag,
          content, and closing tag.
          <br />
          * It represents the actual content on the page.
          <br />
          * Example:
          <br />
          &#60;p&#62;Hello World&#60;/p&#62;
          <br />
          * Here, `&#60;p&#62;` is the opening tag,
          <br />
          `Hello World` is the content,
          <br />
          `&#60;/p&#62;` is the closing tag,
          <br />
          and together they form a paragraph element.
          <br />
          So, in short, tags are just parts, and elements are the full building
          blocks of an HTML page.
          <br />
          <br />
          HTML-এ Tag এবং Element একসাথে কাজ করে, কিন্তু তারা এক জিনিস না।
          <br />
          🔹 HTML Tag (ট্যাগ):
          <br />
          * Tag হচ্ছে HTML-এর syntax, যেটা দিয়ে কোনো এলিমেন্ট শুরু বা শেষ হয়।
          <br />
          * এটি angle brackets এর মধ্যে লেখা হয়, যেমন `&#60;p&#62;`,
          `&#60;/p&#62;`, `&#60;div&#62;`, `&#60;h1&#62;`।
          <br />
          * Tag দুই রকমের হয়:
          <br />
          * Opening tag – যেমন `&#60;p&#62;`
          <br />
          * Closing tag – যেমন `&#60;/p&#62;`
          <br />
          🔹 HTML Element (এলিমেন্ট):
          <br />
          * Element হচ্ছে পুরো গঠন – যেখানে আছে opening tag, content, এবং
          closing tag।
          <br />
          * এটি ওয়েবপেজে বাস্তব কনটেন্ট বোঝায়।
          <br />
          * উদাহরণ:
          <br />
          &#60;p&#62;Hello World&#60;/p&#62;
          <br />
          * `&#60;p&#62;` হলো opening tag,
          <br />
          `Hello World` হলো content,
          <br />
          `&#60;/p&#62;` হলো closing tag,
          <br />
          সব মিলিয়ে এটিই হলো একটি paragraph element।
          <br />
          সোজা কথায়, tag হলো গঠন করার অংশ, আর element হলো সেই গঠনটি সম্পূর্ণ।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse10">
          10. Explain the use of an{" "}
          <span className="font-bold">iframe tag</span>.
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse10"
          id="collapse10"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          The `&#60;iframe&#62;` tag in HTML is used to embed another webpage or
          external content into the current webpage. It acts like a window or
          frame inside your page, where you can display other content — such as
          a website, video, map, PDF, or another HTML file.
          <br />
          🔹 Key uses of `&#60;iframe&#62;`:
          <br />
          * Embedding a YouTube video
          <br />
          * Showing a Google Map
          <br />
          * Displaying a PDF or a login form from another domain
          <br />
          * Including a different HTML page inside a main page
          <br />
          🔹 Example:
          <br />
          {`
<iframe src="https://www.example.com" width="600" height="400"></iframe>
`}
          <br />
          This will show the webpage `https://www.example.com` inside a 600x400
          pixel frame.
          <br />
          🔹 Important attributes:
          <br />
          * `src` – specifies the URL of the content
          <br />
          * `width` & `height` – define the frame size
          <br />
          * `title` – for accessibility
          <br />
          * `allowfullscreen` – allows full screen (useful for videos)
          <br />
          * `frameborder`, `loading`, and others for control and performance
          <br />
          So, the `&#60;iframe&#62;` tag is helpful when we want to include or
          display external content without redirecting the user.
          <br />
          <br />
          HTML-এ `&#60;iframe&#62;` ট্যাগ ব্যবহার করা হয় একটি ওয়েবপেজের ভিতরে
          আরেকটি ওয়েবপেজ বা এক্সটার্নাল কনটেন্ট এমবেড করার জন্য। এটি এমন একটি
          ফ্রেম বা উইন্ডো তৈরি করে যেখানে অন্য সাইট বা কনটেন্ট দেখানো যায়।
          <br />
          🔹 `&#60;iframe&#62;` এর প্রধান ব্যবহার:
          <br />
          * YouTube ভিডিও এমবেড করা
          <br />
          * Google Map দেখানো
          <br />
          * PDF ফাইল দেখানো
          <br />
          * অন্য একটি HTML ফাইল বা ফর্ম ইনসার্ট করা
          <br />
          🔹 উদাহরণ:
          <br />
          {`
<iframe src="https://www.example.com" width="600" height="400"></iframe>
`}
          <br />
          এখানে `example.com` ওয়েবপেজটি 600x400 পিক্সেলের ফ্রেমে দেখাবে।
          <br />
          🔹 গুরুত্বপূর্ণ অ্যাট্রিবিউট:
          <br />
          * `src` – কোন URL দেখানো হবে
          <br />
          * `width`, `height` – ফ্রেমের সাইজ নির্ধারণ করে
          <br />
          * `title` – অ্যাক্সেসিবিলিটির জন্য
          <br />
          * `allowfullscreen` – ফুল স্ক্রিন করার অনুমতি দেয়
          <br />
          * `frameborder`, `loading` – অন্যান্য নিয়ন্ত্রণ এবং পারফরম্যান্সের
          জন্য
          <br />
          সংক্ষেপে, `&#60;iframe&#62;` ব্যবহার করে আমরা একই পেজে বাইরের কনটেন্ট
          দেখাতে পারি, ইউজারকে অন্য পেজে না নিয়েই।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse11">
          11. Have you used <span className="font-bold">Audio and Video</span>{" "}
          tags? How do they work?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse11"
          id="collapse11"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          `&#60;audio&#62;` and `&#60;video&#62;` These tags are used to embed
          audio and video files directly into a webpage without the need for
          external plugins like Flash. They are supported by all modern
          browsers.
          <br />
          🔹 How they work:
          <br />
          * The `&#60;audio&#62;` tag is used for adding sound or music.
          <br />
          * The `&#60;video&#62;` tag is used for embedding video content.
          <br />
          Both tags support several attributes to control playback:
          <br />
          🔸 Common attributes:
          <br />
          * `controls` – shows play, pause, volume controls
          <br />
          * `autoplay` – starts playing automatically
          <br />
          * `loop` – repeats the media when finished
          <br />
          * `muted` – starts the media in muted state
          <br />
          * `preload` – hints the browser about loading behavior (`auto`,
          `metadata`, `none`)
          <br />
          🔹 Example (Audio):
          <br />
          &#60;audio controls&#62;
          <br />
          &#60;source src="audio.mp3" type="audio/mpeg" /&#62;
          <br />
          Your browser does not support the audio tag.
          <br />
          &#60;/audio&#62;
          <br />
          🔹 Example (Video):
          <br />
          &#60;video width="640" height="360" controls&#62;
          <br />
          &#60;source src="video.mp4" type="video/mp4" /&#62;
          <br />
          Your browser does not support the video tag.
          <br />
          &#60;/video&#62;
          <br />
          So, using these tags allows us to add media files that are playable
          directly on the page, with built-in browser support.
          <br />
          <br />
          `&#60;audio&#62;` এবং `&#60;video&#62;` এই ট্যাগগুলো দিয়ে আমরা HTML
          পেজে অডিও ও ভিডিও ফাইল সরাসরি এমবেড করতে পারি, কোনো এক্সটার্নাল
          প্লাগইন ছাড়া। সব আধুনিক ব্রাউজারে এগুলো সাপোর্ট করে।
          <br />
          🔹 কাজের পদ্ধতি:
          <br />
          * `&#60;audio&#62;` ট্যাগ ব্যবহার করে আমরা সাউন্ড বা মিউজিক ফাইল পেজে
          প্লে করাতে পারি।
          <br />
          * `&#60;video&#62;` ট্যাগ দিয়ে ভিডিও দেখাতে পারি।
          <br />
          উভয় ট্যাগেই কিছু অ্যাট্রিবিউট থাকে যেগুলো দিয়ে কন্ট্রোল করা যায়:
          <br />
          🔸 সাধারণ অ্যাট্রিবিউট:
          <br />
          * `controls` – প্লে, পজ, ভলিউম ইত্যাদি বাটন দেখায়
          <br />
          * `autoplay` – পেজ লোড হওয়ার সঙ্গে সঙ্গে চালু হয়
          <br />
          * `loop` – ভিডিও বা অডিও বারবার চলে
          <br />
          * `muted` – শুরুতেই সাইলেন্ট অবস্থায় চালু হয়
          <br />
          * `preload` – ব্রাউজারকে লোডিং সম্পর্কে নির্দেশ দেয়
          <br />
          🔹 উদাহরণ (Audio):
          <br />
          &#60;audio controls&#62;
          <br />
          &#60;source src="audio.mp3" type="audio/mpeg" /&#62;
          <br />
          আপনার ব্রাউজার অডিও ট্যাগ সাপোর্ট করে না।
          <br />
          &#60;/audio&#62;
          <br />
          🔹 উদাহরণ (Video):
          <br />
          &#60;video width="640" height="360" controls&#62;
          <br />
          &#60;source src="video.mp4" type="video/mp4" /&#62;
          <br />
          আপনার ব্রাউজার ভিডিও ট্যাগ সাপোর্ট করে না।
          <br />
          &#60;/video&#62;
          <br />
          সারসংক্ষেপে, `&#60;audio&#62;` ও `&#60;video&#62;` ট্যাগ ব্যবহার করে
          আমরা পেজের মধ্যে ইনবিল্ট মিডিয়া প্লেয়ার তৈরি করতে পারি, যা ইউজার
          ফ্রেন্ডলি এবং ডিভাইস কম্প্যাটিবল।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse12">
          12. Difference between{" "}
          <span className="font-bold">strong , b, em, i tags</span>?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse12"
          id="collapse12"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          All four tags are used to style text, but they have different meanings
          and purposes — especially when it comes to semantics and
          accessibility.
          <br />
          🔹 `&#60;b&#62;` (Bold):
          <br />
          * Makes the text bold visually only.
          <br />
          * No extra importance or meaning is given to the text.
          <br />
          * It is purely stylistic.
          <br />
          * Example:
          <br />
          &#60;b&#62;Important Notice&#60;/b&#62;
          <br />
          🔹 `&#60;strong&#62;` (Strong Importance):
          <br />
          * Makes the text bold and also gives it semantic importance.
          <br />
          * Screen readers emphasize this text to assist visually impaired
          users.
          <br />
          * It means the text is very important.
          <br />
          * Example:
          <br />
          &#60;strong&#62;Warning: This action cannot be
          undone.&#60;/strong&#62;
          <br />
          🔹 `&#60;i&#62;` (Italic):
          <br />
          * Makes the text italic visually only.
          <br />
          * No emphasis or importance implied.
          <br />
          * Usually used for styling, technical terms, foreign words, etc.
          <br />
          * Example:
          <br />
          &#60;i&#62;Latin phrase: Carpe Diem&#60;/i&#62;
          <br />
          🔹 `&#60;em&#62;` (Emphasis):
          <br />
          * Makes the text italic and gives it emphasis.
          <br />
          * Screen readers change tone to reflect the emphasis.
          <br />
          * It means the text should be read with stress or focus.
          <br />
          * Example:
          <br />
          &#60;em&#62;Do not ignore this message.&#60;/em&#62;
          <br />
          So, I use `&#60;b&#62;` and `&#60;i&#62;` for visual design only, but
          I prefer `&#60;strong&#62;` and `&#60;em&#62;` when meaning and
          accessibility are important.
          <br />
          <br />
          `&#60;strong&#62;`, `&#60;b&#62;`, `&#60;em&#62;`, এবং `&#60;i&#62;`
          এই চারটি ট্যাগই টেক্সটের স্টাইল পরিবর্তনের জন্য ব্যবহৃত হয়, কিন্তু
          এদের মধ্যে অর্থপূর্ণ (semantic) এবং দৃষ্টিনির্ভর (visual) ব্যবহারে
          পার্থক্য আছে।
          <br />
          🔹 `&#60;b&#62;` (Bold):
          <br />
          * শুধুমাত্র টেক্সট বোল্ড করে।
          <br />
          * এর কোন অতিরিক্ত গুরুত্ব বা মানে নেই।
          <br />
          * শুধু স্টাইলিং এর জন্য ব্যবহৃত হয়।
          <br />
          * উদাহরণ:
          <br />
          &#60;b&#62;Important Notice&#60;/b&#62;
          <br />
          🔹 `&#60;strong&#62;` (গুরুত্বপূর্ণ):
          <br />
          * টেক্সট বোল্ড করে এবং বোঝায় এটি গুরুত্বপূর্ণ।
          <br />
          * স্ক্রিন রিডার এই টেক্সটকে আলাদা গুরুত্ব দিয়ে পড়ে।
          <br />
          * উদাহরণ:
          <br />
          &#60;strong&#62;Warning: This action cannot be
          undone.&#60;/strong&#62;
          <br />
          🔹 `&#60;i&#62;` (Italic):
          <br />
          * শুধুমাত্র ইটালিক করে।
          <br />
          * কোনো অর্থ বা জোর বোঝায় না।
          <br />
          * সাধারণত বিদেশি শব্দ, টেকনিক্যাল টার্ম ইত্যাদির জন্য ব্যবহৃত হয়।
          <br />
          * উদাহরণ:
          <br />
          &#60;i&#62;Latin phrase: Carpe Diem&#60;/i&#62;
          <br />
          🔹 `&#60;em&#62;` (Emphasis):
          <br />
          * টেক্সটকে ইটালিক করে এবং জোর দিয়ে পড়তে বলে।
          <br />
          * স্ক্রিন রিডার এটাকে বিশেষভাবে উচ্চারণ করে।
          <br />
          * উদাহরণ:
          <br />
          &#60;em&#62;Do not ignore this message.&#60;/em&#62;
          <br />
          সংক্ষেপে, আমি যখন শুধুমাত্র স্টাইল দরকার তখন `&#60;b&#62;` বা
          `&#60;i&#62;` ব্যবহার করি, আর যখন অর্থ ও অ্যাক্সেসিবিলিটি
          গুরুত্বপূর্ণ, তখন `&#60;strong&#62;` বা `&#60;em&#62;` ব্যবহার করি।
        </div>
      </div>
      <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
        <label className="grow px-4 md:text-[18px]" htmlFor="collapse13">
          13. What is <span className="font-bold">charset</span> in html? Why
          will you use it?
        </label>
        <input
          className="peer p-0 m-0 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse13"
          id="collapse13"
        />
        <div className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-1 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-green-50 text-lg text-black peer-checked:opacity-100">
          In HTML, `charset` stands for character set. It defines which set of
          characters the browser should use to correctly display the text on a
          webpage.
          <br />
          The most commonly used charset is UTF-8, which can represent almost
          every character from all languages — including English, Bengali,
          Chinese, Arabic, symbols, emojis, and more.
          <br />
          🔹 Why I use it:
          <br />
          * To ensure special characters and multilingual content display
          correctly.
          <br />
          * To avoid encoding issues like strange symbols (�) or broken text.
          <br />
          * It also improves browser rendering speed, because the browser knows
          the encoding early.
          <br />
          🔹 How to use it:
          <br />
          You add it in the `&#60;head&#62;` section like this:
          <br />
          &#60;meta charset="UTF-8"&#62;
          <br />
          This tells the browser:
          <br />
          “Use UTF-8 encoding for this HTML document.”
          <br />
          So, I always use the charset declaration to make my website universal,
          readable, and error-free across all devices and languages.
          <br />
          <br />
          HTML-এ `charset` এর অর্থ হলো character set। এটি ব্রাউজারকে জানায় যে,
          কোন অক্ষরের কোডিং সিস্টেম ব্যবহার করে ওয়েবপেজের লেখা দেখাতে হবে।
          <br />
          সবচেয়ে বেশি ব্যবহৃত charset হলো UTF-8, যেটি প্রায় সব ভাষার বর্ণমালা,
          সংখ্যা, চিহ্ন ও ইমোজি সাপোর্ট করে — যেমন ইংরেজি, বাংলা, চাইনিজ
          ইত্যাদি।
          <br />
          🔹 আমি কেন charset ব্যবহার করি:
          <br />
          * যেন সব ভাষার এবং বিশেষ চিহ্ন সঠিকভাবে দেখায়।
          <br />
          * ভাঙা লেখা বা ভুল ক্যারেক্টার (যেমন: �) আসা থেকে বাঁচাতে।
          <br />
          * ব্রাউজার দ্রুত ও সঠিকভাবে কনটেন্ট রেন্ডার করতে পারে।
          <br />
          🔹 কোডে কিভাবে লিখি:
          <br />
          &#60;meta charset="UTF-8"&#62;
          <br />
          এটি `&#60;head&#62;` ট্যাগের ভিতরে লিখা হয় এবং এটি ব্রাউজারকে জানায় —
          <br />
          “এই HTML ফাইলে UTF-8 এনকোডিং ব্যবহার করো।”
          <br />
          তাই আমি সবসময় charset ব্যবহার করি, যাতে আমার ওয়েবসাইট সব ভাষায় ও সব
          ডিভাইসে ঠিকভাবে দেখা যায়।
        </div>
      </div>
    </Container>
  );
};

export default QnA_html;
