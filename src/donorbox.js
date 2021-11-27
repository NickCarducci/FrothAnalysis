import React from "react";

class DonorBox extends React.Component {
  render() {
    return (
      <div>
        <script src="https://donorbox.org/widget.js" />
        <iframe
          title="donate"
          src="https://donorbox.org/embed/thanks-4?show_content=true"
          height="685px"
          width="100%"
          seamless="seamless"
          name="donorbox"
          scrolling="no"
          allowpaymentrequest="true"
        />
      </div>
    );
  }
}
export default DonorBox;
// paypalExpress="false"
