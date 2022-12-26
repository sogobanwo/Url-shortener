import React from "react";

const ShortenedLinks = () => {
  const usefulLinks = JSON.parse(localStorage.getItem("allLinks"))
  return (
    <>
    { usefulLinks.map((theLinks) => {
      const {originalLink , shortenedLink} = theLinks
      return(
      <div id="shortenedLinkSection" key={shortenedLink}>
        <p id="longLink">{originalLink}</p>
        <div id="rightLink">
          <p id="shortenedLink">{shortenedLink}</p>
          <button id="copyButton">Copy</button>
        </div>
      </div>)
    })
}
    </>
  );
};

export default ShortenedLinks;
