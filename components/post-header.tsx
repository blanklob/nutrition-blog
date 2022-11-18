import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <a
          href="https://www.hellofresh.fr/panier-repas/black-friday"
          className="pb-10 flex justify-center items-center"
        >
          <img
            className="w-[728px] h-[90px] object-contain rounded-none border-none shadow-none"
            alt="ad3"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47167e99-8819-4f45-954f-8f6cd424afdc/WhatsApp-Video-2022-11-17-at-15.40.08.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221118T123718Z&X-Amz-Expires=86400&X-Amz-Signature=99357e1ddd363533487c943a7aa67b7938ff91d249be34799d943bab2c6ad6cb&X-Amz-SignedHeaders=host&x-id=GetObject"
          />
        </a>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
