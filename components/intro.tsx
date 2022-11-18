const Intro = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Mieux manger.
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Nutrition avec science et consience
        </h4>
      </div>
      <a
        href="https://www.hellofresh.fr/panier-repas/black-friday"
        className="pb-10 flex justify-center items-center"
      >
        <img
          className="w-[728px] h-[90px] object-cover rounded-none border-none shadow-none"
          alt="ad3"
          src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1310/hellofresh_website/au/cms/SEO/Australian-recipes_blog-section-3.jpg"
        />
      </a>
    </section>
  );
};

export default Intro;
