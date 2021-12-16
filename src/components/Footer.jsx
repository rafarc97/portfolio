import React from "react";

export const Footer = () => {
  
  return (
    <footer>
      <div>
        <div className="social">
          <a
            className="ins-ic"
            target="_blanck"
            href="https://github.com/rafarc97 "
          >
            <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a
            className="ins-ic"
            target="_blanck"
            href="https://www.linkedin.com/in/rafael-rodriguez-calvente/"
          >
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i>
          </a>
          <a
            className="ins-ic"
            target="_blanck"
            href="mailto:rafaelrodriguezcalvente@gmail.com"
          >
            <i className="fas fa-envelope fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        </div>

        <section className="links">
          <a name="copyright " href="./"
            >© 2021 Copyright: Rafael Calvente Web</a
          >
        </section>
      </div>
    </footer>
  );
};
