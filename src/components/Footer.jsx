import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/95264696?s=400&u=c1b20231f14588263b33a097b39f1228f983672d&v=4"}
          alt="Founder"
        />

        <h2>Sadan Yadav</h2>
        <p>Existence is the canvas of endless possibilities.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/@sadanyadav1869" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/iamsadanyadav" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Sadanydv" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;