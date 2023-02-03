import { useState } from "react";
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural, useIntl} from "react-intl";

const Footer = () => {
  const [count, setCount] = useState(0);
  const int = useIntl();
  console.log(int);
  const onChange = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="container mt">
        {/* Footer content here */}
        <p><FormattedMessage id="click_button" /></p>
        <button onClick={onChange}><FormattedMessage id="click_here" /></button>
        <p><FormattedMessage id="click_count" values={{count: count}} /></p>
        {/*  <FormattedDate*/}
        {/*      value={Date.now()}*/}
        {/*      year="numeric"*/}
        {/*      month="long"*/}
        {/*      day="2-digit"/>*/}
        {/*  <br />*/}
        {/*  <FormattedNumber value={2000} style={"currency"} currency="USD" />*/}
        {/*  <br />*/}
        {/*  <FormattedPlural value={5} one="1 click" other="5 clicks" />*/}
        <br />
        <input
            placeholder={int.formatDate(Date.now(), {
                year: "numeric",
                month: "long",
                day: "2-digit"
            })
        } />
    </div>
  );
};

export default Footer;

