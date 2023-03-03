import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 text-primary fw-bold mb-4">
            <h1>About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              aperiam deleniti voluptatibus, et maiores magni error dignissimos
              iusto dolorem velit porro nisi debitis odio ullam adipisci quae.
              Omnis odio ad sunt totam culpa beatae, ab tenetur. Id deserunt
              soluta rem architecto ipsum cupiditate, voluptate delectus nulla
              nobis, aspernatur fuga iure dolores atque iste aliquid! Soluta
              officiis voluptas impedit laborum quod quisquam exercitationem
              explicabo voluptate excepturi, sit nam cum incidunt ullam facilis
              sint at eius consequuntur! Eos asperiores, dolorum voluptatum fuga
              non et consequuntur? Neque tempore minus debitis? Nihil, cum sit
              esse soluta illum recusandae. Ipsum aperiam enim eligendi
              recusandae rerum.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
