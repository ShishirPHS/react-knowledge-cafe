import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        {/* author infos */}
        <div className="flex items-center">
          {/* author image */}
          <div>
            <img className="w-16" src={author_img} alt="" />
          </div>
          {/* author name and posted date */}
          <div>
            <h3>{author}</h3>
            <h3>{posted_date}</h3>
          </div>
        </div>
        {/* reading time and bookmark */}
        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h3 className="text4xl">{title}</h3>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(reading_time)}>
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
