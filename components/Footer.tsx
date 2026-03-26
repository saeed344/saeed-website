import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white rounded py-2">
      <div className="flex flex-col items-center gap-2">
        <div className="w-full flex justify-center">
          <h4>&copy; Copyright {new Date().getFullYear()}</h4> &nbsp; &nbsp;
          <h4>Dr. Saeed Ahmed</h4>
        </div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com/AhmadNawagai"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faTwitter} size={"1x"} />
          </a>
          <a
            href="https://www.facebook.com/saeed344"
            className="hover:underline"
          >
            <FontAwesomeIcon icon={faFacebook} size={"1x"} />
          </a>
          <a href="https://github.com/saeed344" className="hover:underline">
            <FontAwesomeIcon icon={faGithub} size={"1x"} />
          </a>
        </div>

        <div>
          Developed by{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/dr-saeed-ahmed-540709235/"
          >
            Dr.Saeed Ahmed
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
