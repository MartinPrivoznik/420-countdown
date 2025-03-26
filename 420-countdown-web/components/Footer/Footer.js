import React from "react";
import cls from "./Footer.module.css";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={cls["footer"]}>
      <div className={cls["copyright"]}>
        <span className="text-default-600">
          Copyright © {new Date().getFullYear()}
        </span>
        <Link
          target="blank"
          href="https://privoznik.dev"
          className="text-primary pl-1"
        >
          Martin Přívozník
        </Link>
      </div>
      <div className={cls["social"]}>
        <FacebookShareButton url={"https://420-countdown.com/"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <RedditShareButton url={"https://420-countdown.com/"}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton url={"https://420-countdown.com/"}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={"https://420-countdown.com/"}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={"https://420-countdown.com/"}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </footer>
  );
};

export default Footer;
