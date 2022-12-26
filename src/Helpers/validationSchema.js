import * as yup from 'yup';

export let validation = yup.object().shape({
  shortLink: yup.string().required("Please add link").matches(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]*)$/i, "Invalid URL"),
});

