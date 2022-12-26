import React from "react";

const ShortenedForm = () => {
  return (
    <>
      <section id="searchSection">
        <div id="shortener">
          <input
            type="text"
            id="shorten"
            placeholder="Shorten a link here..."
          />
          <button id="shortenButton">Shorten It!</button>
        </div>
      </section>
    </>
  );
};

export default ShortenedForm;
