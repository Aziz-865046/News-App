import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
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
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" style={{ textAlign: "justify" }}>
              {!description
                ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia culpa incidunt tempore"
                : description}
              ...
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
  }
}

export default NewsItems;
