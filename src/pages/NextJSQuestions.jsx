/* eslint-disable react/no-unescaped-entities */
import Container from "../components/Shared/Container/Container";

const NextJSQuestions = () => {
  return (
    <Container>
      <div id="NextJs">
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-3xl">
            1. Can you use Next JS with Redux?
          </div>
          <div className="collapse-content text-3xl">
            <p>Yes, it is possible to use Next JS with Redux.</p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            2. How can a custom error page be created in Next JS?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              In order to create a custom error page, we need to follow the
              given steps-
              <br />
              An "_error.js" has to be defined in the page folder.
              <br />
              Then "_error" component of our own has to be imported rather than
              "next/error" for using our custom error page.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            3. What do you mean by SSR?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              This is server-side rendering. This enables rendering on the
              server a client-side page app, and then we can send that rendered
              page to that client. These pages get loaded faster as the browser
              gets access to them sooner.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            4. How can serverless mode be implemented?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              For implementing server-less mode, the ‘serverless’ target has to
              be added in ‘next.config.js’.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            5. What is meant by Styled JSX in Next JS?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              We use this CSS-in-JS library for writing encapsulated and scoped
              CSS for styling Next JS components. No other component gets
              affected by introducing the styles to a component using Styled
              JSX. This allows adding, changing, and deleting the styles without
              any complications.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            6. Is Next JS backend, frontend, or full-stack?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              Next JS is full-stack. This means that it allows rendering
              client-side as well as server-side content. And this is the reason
              it is highly valued on React, as React allows only frontend
              development without it.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            7. Differentiate between imperative and declarative programming. And
            what kind is used in React?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              In Imperative programming, we have to specify each step of
              building anything, such as a user interface. Whereas in
              Declarative programming, we just need to describe the end product,
              and the software will create it for us. It takes comparatively
              less effort and time.
              <br />
              React allows its users to do declarative programming.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            8. What types of pre-rendering are available in Next JS?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              Next JS provides two types of pre-rendering- Server-side rendering
              and Static rendering.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            9. Differentiate between the pre-rendering types available in Next
            JS.
          </div>
          <div className="collapse-content text-3xl">
            <p>
              The difference lies in the generation of HTML for a page.
              <br />
              Static Generation- It generates the HTML at build time, and we can
              reuse it on each request. It is the recommended one of the two.
              For using Static generation, either the page component has to be
              exported or 'getStaticProps'
              <br />
              Server-side rendering- It generates the HTML on each request. For
              using Server-side rendering, 'getServerSideProps' has to be
              exported.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            10. What is Next.js, and how is it different from React?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              Next.js is a React-based open-source framework that helps
              developers build server-side rendered React applications.
              <br />
              The key difference between React and Next.js is the way they
              handle routing. React uses client-side routing, meaning the page
              transitions are handled entirely on the client-side using
              JavaScript.
              <br />
              In contrast, Next.js provides server-side routing, which means
              that the server handles the routing and sends the pre-rendered
              pages to the client, resulting in faster page loads and better
              SEO. Next.js also provides additional features like automatic code
              splitting, static site generation, and dynamic imports.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            11. What are the advantages of using Next.js over React?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              Next.js offers several advantages over React, including
              server-side rendering, automatic code splitting, static site
              generation, dynamic imports, optimized performance, and easy
              deployment. Additionally, Next.js supports built-in SEO and
              analytics, making it easier to optimize your application for
              search engines and track user engagement.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            12. How do you create a new Next.js application?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              To create a new Next.js application, you can use the
              create-next-app command. For example, you can run the following
              command in your terminal: npx create-next-app my-app. This will
              create a new Next.js application with the name my-app.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            13. What are the key differences between client-side rendering (CSR)
            and server-side rendering (SSR) in Next.js?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              Client-Side Rendering (CSR): Pages are rendered in the browser
              using JavaScript after the initial HTML is loaded. Fast initial
              page loads, but slower subsequent interactions as JavaScript needs
              to execute.
              <br />
              Server-Side Rendering (SSR): Pages are fully rendered on the
              server and sent to the browser as complete HTML documents. Slower
              initial load compared to CSR but better performance for SEO and on
              slower devices/networks.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            14. What are the performance optimization techniques you can use in
            a Next.js application, and why are they important?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              Performance optimization techniques in Next.js, such as code
              splitting, image optimization, server-side rendering (SSR),
              caching, and lazy loading, are crucial for improving user
              experience by reducing page load times, enhancing responsiveness,
              and optimizing resource utilization. By implementing these
              techniques, developers can ensure faster initial page loads,
              smoother interactions, and better SEO, ultimately leading to
              increased user engagement and satisfaction with the application.
            </p>
          </div>
        </div>
        <div className="collapse bg-white">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-3xl">
            15. How do you create dynamic routes in the next JS?
          </div>
          <div className="collapse-content text-3xl">
            <p>
              In Next.js, we can create dynamic routes by wrapping a file or
              folder name in square brackets. For instance, use [id] or [slug]
              as dynamic segments in our route. These segments can be filled in
              at request time or prerendered at build time. For example, a blog
              post route could be defined as pages/blog/[slug].js, where [slug]
              represents the dynamic segment for blog posts. Access the dynamic
              segment using useRouter().query.slug in our component
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NextJSQuestions;
