import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";
const Home = () => {
  const [value, setvalue] = useState("");

  const { blogs, loading, setblogs } = UseFetch("http://localhost:8000/blogs");
  // const [name, setName] = useState("Aya");
  const handleDeleteClick = (id) => {
    const newArr = blogs.filter((blog) => blog.id !== id);
    setblogs(newArr);
  };
  const HandleShowBlogs = (value) => {
    let val = value.toString().toLowerCase();
    if (val === "aya") {
      return (
        <BlogList
          blogs={blogs.filter((blog) => blog.author.toLowerCase() === val)}
          title="Aya's Blogs"
          handleDeleteClick={handleDeleteClick}
          btntitle="Remove"
        />
      );
    } else if (val === "mario") {
      return (
        <BlogList
          blogs={blogs.filter((blog) => blog.author.toLowerCase() === val)}
          title="Mario's Blogs"
          handleDeleteClick={handleDeleteClick}
          btntitle="Remove"
        />
      );
    } else if (val === "amin") {
      return (
        <BlogList
          blogs={blogs.filter((blog) => blog.author.toLowerCase() === val)}
          title="Amin's Blogs"
          handleDeleteClick={handleDeleteClick}
          btntitle="Remove"
        />
      );
    } else {
      return (
        <BlogList
          blogs={blogs}
          title="All Blogs"
          handleDeleteClick={handleDeleteClick}
          btntitle="Remove"
        />
      );
    }
  };

  // const [name, setname] = useState("Aya");
  // const [age, setage] = useState("23");

  // const handleClick = (e) => {
  //   setname("Omar");
  //   setage("19");
  // };

  // const handleClickagain = (name, e) => {
  //   console.log(name, e.target);
  // };
  return (
    <div className="home">
      {loading && (
        <Alert style={{ width: "50%" }} severity="info">
          Loading.....
        </Alert>
      )}
      <TextField
        label="Enter Author name to filter"
        style={{ display: "flex", flexDirection: "column" }}
        variant="outlined"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />

      {!loading && blogs && HandleShowBlogs(value)}
      {/* <button
        onClick={() => {
          setName("Amin");
        }}
      >
        Change Name
      </button>
      <p>{name}</p> */}

      {/* {console.log(blogs)} */}
      {/* <p>
        Iam {name} and Iam {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickagain("aya", e);
        }}
      >
        Click Me Again
      </button> */}
    </div>
  );
};

export default Home;
