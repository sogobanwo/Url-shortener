import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShortenedLinks = ({ shortTheLink, setShortTheLink }) => {
  return (
    <>
      <ToastContainer />
      {shortTheLink === null ? (
        <div></div>
      ) : (
        shortTheLink.map((theLinks) => {
          const { originalLink, shortenedLink } = theLinks;
          return (
            <div id="shortenedLinkSection" key={shortenedLink}>
              <p id="longLink">{originalLink}</p>
              <div id="rightLink">
                <p id="shortenedLink">{shortenedLink}</p>
                <CopyToClipboard text={shortenedLink}>
                  <button
                    id="copyButton"
                    onClick={() => {
                      toast.success("ShortLink copied to Clipboard", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  >
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          );
        })
      )}
      <div id="clearButtonWrapper">
        <button
          id="clearButton"
          onClick={() => {
            localStorage.removeItem("allLinks");
            setShortTheLink(JSON.parse(localStorage.getItem("allLinks")));
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default ShortenedLinks;
