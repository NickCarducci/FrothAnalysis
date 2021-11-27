import React from "react";
import AdSense from "react-adsense";

class Ad extends React.Component {
  /*
      componentDidMount() {
  (adsbygoogle = window.adsbygoogle || []).push({});
}*/
  render() {
    return (
      <div>
        <div style={{ minWidth: "1000px", minHeight: "250px" }}>
          <AdSense.Google
            className="adsbygoogle"
            client="ca-pub-2415911378650900"
            slot="8856410448"
            format="auto"
            responsive="true"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        Google's use of advertising cookies enables it and its partners to serve
        ads to you based on visits to this and other sites on the Internet.
      </div>
    );
  }
}

export default Ad;
