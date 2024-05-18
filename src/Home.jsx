import { useState } from "react";
import "./Home.css";
import list from "./utils/links";
import { Link } from "react-router-dom";

function Home() {
  const [category, setCategory] = useState("all");
  const handleClick = (e) => {
    document.querySelector(".filter.active").classList.remove("active");
    e.target.classList.add("active");
    setCategory(e.target.id);
  };

  return (
    <>
      <h1>UnRipes</h1>
      <h2>JavaScript Projects</h2>

      <div className="filter-group">
        {["all", ...new Set(list.map((item) => item.category))].map(
          (category) => (
            <button
              key={category}
              id={category}
              className={`filter ${category == "all" ? "active" : ""}`}
              onClick={handleClick}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="cards">
        {list
          .filter((item) => {
            if (category == "all") return item;
            return item.category == category;
          })
          .map((item) => (
            <div key={item.id} className="card">
              <div className="img-container">
                <img src={item.image} alt={item.text} />
              </div>
              <h3>{item.text}</h3>
              <Link to={item.url}>&rarr;</Link>
            </div>
          ))}
      </div>

      {/* Iamge importing ways */}
      {/* <img src="images/img.jpg" alt="pivt" /> */}
    </>
  );
}

export default Home;
