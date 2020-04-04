import React, { useEffect } from "react";

const SetLang = props => {
  const { setLangRedir, setlang, language, link } = props;
  useEffect(() => {
    setLangRedir(link);
    setlang(language);
  }, []);

  return <></>;
};

export default SetLang;
