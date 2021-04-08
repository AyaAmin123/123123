// import { Button } from "@material-ui/core";
//
const BlogList = (props) => {
  const { blogs, title, handleDeleteClick, btntitle } = props;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button
            className="blog-list-btn"
            onClick={() => {
              handleDeleteClick(blog.id);
            }}
          >
            {btntitle}
          </button>
        </div>
      ))}
    </div>
  );
};
//
//
export default BlogList;
