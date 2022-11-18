import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Mieux Manger.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://instagram.org/"
              className="mx-3 font-bold hover:underline"
            >
              Instagram
            </a>
            <a
              href={`https://twitter.com/`}
              className="mx-3 font-bold hover:underline"
            >
              Twitter
            </a>
            <a
              href={`https://facebook.com/`}
              className="mx-3 font-bold hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
