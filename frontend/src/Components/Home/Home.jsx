import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa consequatur suscipit temporibus? Perferendis, maiores laborum odit illo sint sit hic placeat ex possimus enim eum corporis totam magni aut provident doloribus nobis, ullam, tenetur fugit esse rerum accusamus dignissimos fugiat asperiores. Deleniti, nihil numquam repellat voluptatibus deserunt rem quod? Corrupti quod expedita reprehenderit nobis repellendus ducimus tenetur veniam, minus hic libero dolorem inventore nam, officiis sit nesciunt rem necessitatibus alias. Neque, consectetur, at fugit incidunt pariatur unde quae delectus totam odit, expedita tempora quo veniam non. Quibusdam, sunt tempora, incidunt autem molestias excepturi officia temporibus accusantium laboriosam, suscipit vero.</p>
</>
  );
};
