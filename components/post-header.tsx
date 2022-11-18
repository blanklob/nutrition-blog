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
        <div className="pb-10 flex justify-center">
          <img
            className="w-[728px] h-[90px] object-cover rounded-none border-none shadow-none"
            alt="ad3"
            src="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1310/hellofresh_website/au/cms/SEO/Australian-recipes_blog-section-3.jpg"
          />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
