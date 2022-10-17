const PageNotFound = () => {
  return (
    <section className="mt-16 pt-28 pb-48 px-16 text-slate-900">
      <div className="flex-col justify-center">
        <icon className="bi-bug-fill  text-8xl"></icon>
        <h1 className="py-8 text-3xl">
          <span className="text-4xl font-extrabold">404</span> Page not found
        </h1>
      </div>

      <article>
        <p>
          We apologize for the bug. Apparently, the page you are seeking is
          currently not available or no longer exists on the web app. Please
          click <a href="/" className="text-blue-700">here</a> to navigate back to home.
        </p>
      </article>
    </section>
  );
};

export default PageNotFound;
