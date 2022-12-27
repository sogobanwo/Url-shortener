import React from "react";
import { Formik } from "formik";
import { shorten } from "../Helpers/services";

const ShortenedForm = ({ setShortTheLink, shortTheLink }) => {
  return (
    <>
      <section id="searchSection">
        <div id="shortener">
          <Formik
            initialValues={{ shortLink: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.shortLink) {
                errors.shortLink = "Please add a Link";
              } else if (
                !/^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]*)$/i.test(
                  values.shortLink
                )
              ) {
                errors.shortLink = "Invalid Url";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              const { shortLink } = values;
              setSubmitting(true);
              let response = await shorten(shortLink);
              const { original_link, short_link2 } = response.data.result;
              const neededValues = {
                originalLink: original_link,
                shortenedLink: short_link2,
              };
              shortTheLink.push(neededValues);
              localStorage.setItem("allLinks", JSON.stringify(shortTheLink));
              setShortTheLink(JSON.parse(localStorage.getItem("allLinks")));
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
                {errors.shortLink && touched.shortLink && errors.shortLink}
                
              </form>
              
            )}
            
          </Formik>
        </div>
      </section>
    </>
  );
};

export default ShortenedForm;
