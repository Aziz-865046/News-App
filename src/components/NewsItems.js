import React from "react";
const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/12/Nexamp-community-solar.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
              : imageUrl
          }
          className="card-img-top"
          style={{ width: "100%", height: "200px" }}
          alt="..."
        />
        <div className="card-body" style={{ height: "17rem" }}>
          <h5 className="card-title">{title}... </h5>

          <p className="card-text" style={{ textAlign: "justify" }}>
            {!description
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia culpa incidunt tempore"
              : description}
            ...
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {date}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
