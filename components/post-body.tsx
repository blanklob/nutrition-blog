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
          <div className="ads">
            <img
              className="relative w-[160px] h-[600px] object-cover rounded-none border-none"
              alt="ad2"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ebf970eb-2e69-4787-8b60-e26e00fec039/WhatsApp-Video-2022-11-17-at-15.38.35_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221118T123547Z&X-Amz-Expires=86400&X-Amz-Signature=c8c3d8227dc87e960ad58085cc00aa9f41f000c48ace686f082d573512d593c4&X-Amz-SignedHeaders=host&x-id=GetObject"
            />
          </div>
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
