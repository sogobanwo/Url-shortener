import React from "react";
import { Formik } from "formik";
import { validation } from "../Helpers/validationSchema";
import { shorten } from "../Helpers/services";

const ShortenedForm = ({setShortTheLink, shortTheLink}) => {
  return (
    <>
      <section id="searchSection">
        <div id="shortener">
          <Formik
            initialValues={{ shortLink: ''}}
            // validationSchema={validation}
            onSubmit={async(values, { setSubmitting }) => {
              const {shortLink}=values
              setSubmitting(true);
              let response = await shorten(shortLink)
              const {original_link , short_link2} = response.data.result
              const neededValues = {
                originalLink: original_link,
                shortenedLink: short_link2
              }
              shortTheLink.push(neededValues)
              localStorage.setItem("allLinks", JSON.stringify(shortTheLink))
              setShortTheLink(JSON.parse(localStorage.getItem("allLinks")))
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="shorten"
                  placeholder="Shorten a link here..."
                  name="shortLink"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.shortLink}
                />
                <button
                  id="shortenButton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Shortening" : "Shorten It!"}
                  
                </button>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default ShortenedForm;
