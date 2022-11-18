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
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f9d1b619-cf17-49ec-946e-4db16b7056ec/ezgif.com-gif-maker.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221118T123840Z&X-Amz-Expires=86400&X-Amz-Signature=882e88ca281a5abc4caa4b5bc2a09632a387d7f9af2d361042341f89691d8197&X-Amz-SignedHeaders=host&x-id=GetObject"
        />
      </a>
    </section>
  );
};

export default Intro;
