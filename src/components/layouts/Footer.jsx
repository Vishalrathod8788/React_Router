export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            {/* <img src="/logo.png" alt="logo" /> */}
            <p>
              Welcome to MovieDB App, <br />
              your ultimate destination for
              <br />
              discovering amazing movies!
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>MOVIES</h4>
            <a href="#">Popular Movies</a>
            <a href="#">Top Rated</a>
            <a href="#">New Releases</a>
            <a href="#">Genres</a>
          </div>
          <div className="content_3">
            <h4>Explore</h4>
            <a href="./contact">Contact Us</a>
            <a href="" target="_blank">
              {" "}
              Movie Reviews{" "}
            </a>
            <a href="" target="_blank">
              {" "}
              Watchlist{" "}
            </a>
            <a href="" target="_blank">
              {" "}
              Movie News{" "}
            </a>
          </div>
          <div className="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              movie releases & updates!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>Design and Code by Vishal Rathod</p>
          </div>
        </div>
      </footer>
    </>
  );
};
