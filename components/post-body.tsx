import markdownStyles from "./markdown-styles.module.css";
import { ScrollPercentage } from "react-scroll-percentage";
import { useState } from "react";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <ScrollPercentage
        as="div"
        onChange={(percentage, entry) =>
          setShow(percentage > 0.1 && percentage < 0.9)
        }
      >
        <div
          className={`fixed bottom-4 left-24 hidden md:block py-6 shadow-none transition-opacity ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="w-[160px] h-[600px] object-cover rounded-none border-none"
            alt="ad2"
            src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1310/hellofresh_website/au/cms/SEO/Australian-recipes_blog-section-3.jpg"
          />
        </div>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </ScrollPercentage>
    </div>
  );
};

export default PostBody;
