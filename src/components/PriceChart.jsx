const PriceChart = () => {
  return (
    <div>
      <section className="relative">
        {/* BG Image  */}
        
        {/* Container  */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Component  */}
          <div className="flex flex-col items-center">
            {/* Heading Content  */}
            <div className="mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
              <h2 className="mb-4 mt-6 text-3xl font-extrabold  md:text-5xl">
                Simple &amp; Affordable Pricing
              </h2>
              <div className="mx-auto mt-4 max-w-[528px]">
                <p className="text-gray-600 dark:text-gray-400 text-xl">
                  Simple &amp; fixed pricing. 30 days money-back guarantee
                </p>
              </div>
            </div>
            {/* Pricing Cards  */}
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
              {/* Pricing Card  */}
              <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-zinc-800 p-8 text-white">
                <div className="mb-4 rounded-lg bg-yellow-900 px-5 py-2 text-yellow-600">
                  <p className="font-bold">Basic Plan</p>
                </div>
                <p className="mb-6 font-light text-white md:mb-10 lg:mb-12">
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
                </p>
                <h2 className="my-6 pb-8 text-3xl font-extrabold md:text-5xl">
                  $9.99
                  <span className="text-sm font-light text-white">/month</span>
                </h2>
                <button
                  href="#"
                  className="mb-5 inline-block w-full rounded-lg bg-neutral-900 px-6 py-4 text-center font-bold text-white transition hover:border-black hover:bg-lime-300 hover:text-black lg:mb-8"
                >
                  Get started
                </button>
              </div>
              {/* Pricing Card  */}
              <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-zinc-800 p-8 text-white">
                <div className="mb-4 rounded-lg bg-green-900 px-5 py-2 text-green-300">
                  <p className="font-bold">Standard Plan</p>
                </div>
                <p className="mb-6 font-light text-white md:mb-10 lg:mb-12">
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content.
                </p>
                <h2 className="my-6 pb-8 text-3xl font-extrabold md:text-5xl">
                  $12.99
                  <span className="text-sm font-light text-white">/month</span>
                </h2>
                <button
                  href="#"
                  className="mb-5 inline-block w-full rounded-lg bg-lime-300 px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-neutral-900 hover:text-white md:mb-6 lg:mb-8"
                >
                  Get started
                </button>
              </div>
              {/* Pricing Card  */}
              <div className="mx-auto flex w-full max-w-[416px] flex-col items-start rounded-md bg-zinc-800 p-8 text-white">
                <div className="mb-4 rounded-lg bg-fuchsia-900 px-5 py-2 text-fuchsia-500">
                  <p className="font-bold">Premium Plan</p>
                </div>
                <p className="mb-6 font-light text-white md:mb-10 lg:mb-12">
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing.
                </p>
                <h2 className="my-6 pb-8 text-3xl font-extrabold md:text-5xl">
                  $14.99
                  <span className="text-sm font-light text-white">/month</span>
                </h2>
                <button
                  href="#"
                  className="mb-5 inline-block w-full rounded-lg bg-neutral-900 px-6 py-4 text-center font-bold text-white transition hover:border-black hover:bg-lime-300 hover:text-black lg:mb-8"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceChart;
