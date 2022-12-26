import React from "react";

const ShortenedLinks = ({shortTheLink, setShortTheLink}) => {
  return (
    <>
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
                <button id="copyButton">Copy</button>
              </div>
            </div>
          );
        })
        )}
        <div id="clearButtonWrapper">
        <button id="clearButton" onClick={()=>{
           localStorage.removeItem("allLinks")
           setShortTheLink(JSON.parse(localStorage.getItem("allLinks")))
        }}>Clear</button>
        </div>
    </>
  );
};

export default ShortenedLinks;
