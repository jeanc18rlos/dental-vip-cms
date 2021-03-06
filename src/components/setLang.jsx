import React, { useEffect } from "react";
import PropTypes from "prop-types";

const SetLang = props => {
  const { setLangRedir, setlang, language, link } = props;
  useEffect(() => {
    setLangRedir(link);
    setlang(language);
  }, []);

  return <></>;
};

export default SetLang;
SetLang.propTypes = {
  setLangRedir: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
};
