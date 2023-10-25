const Faq = () => {
  return (
    <div className="">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-5">Frequently Asked Questions</h2>
        <p className="text-lg">
          Got questions? We&apos;ve got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </p>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is StreamVibe?
        </div>
        <div className="collapse-content">
          <p>
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How much does StreamVibe cost?
        </div>
        <div className="collapse-content">
          <p>
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What content is available on StreamVibe?
        </div>
        <div className="collapse-content">
          <p>
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
