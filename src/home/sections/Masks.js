import React from "react";
import TwitterTweetEmbed from "../.././TwitterTweetEmbed";

class Masks extends React.Component {
  // `<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">Only is evidence of dust laden with covid for 3hrs in a 3ft Goldberg drum... not a room or spittle <a href="https://twitter.com/benshapiro?ref_src=twsrc%5Etfw">@benshapiro</a></p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1333520425511432196?ref_src=twsrc%5Etfw">November 30, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;

  // `<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">oxygen is .363 nanometers, CO2 is .33 nm, covid is 60-140 nm. BUT all of these pro-mask sites use spittle as reason to say 6ft away implying IT DOESN&#39;T FLOAT FREELY, it must use spittle, which only travels 1ft. where is the evidence of it floating freely?<a href="https://t.co/AeJFUcDoSB">https://t.co/AeJFUcDoSB</a> <a href="https://t.co/EEG4wBMr3V">pic.twitter.com/EEG4wBMr3V</a></p>&mdash; community explorer (@thumbprintapp) <a href="https://twitter.com/thumbprintapp/status/1326562930054361095?ref_src=twsrc%5Etfw">November 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;

  // `<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">These claims do not reconcile <a href="https://t.co/F6gvaRQQ1S">pic.twitter.com/F6gvaRQQ1S</a></p>&mdash; community explorer (@thumbprintapp) <a href="https://twitter.com/thumbprintapp/status/1326577128830275586?ref_src=twsrc%5Etfw">November 11, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;

  // `<div><blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">inclusion is more apparent in the constitution than wearing a mask or getting a vaccine because self-defense makes any alterior domestic violence moot</p>&mdash; Saver Party (@SaverParty) <a href="https://twitter.com/SaverParty/status/1334575619003310082?ref_src=twsrc%5Etfw">December 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;

  render() {
    return (
      <div>
        <div style={{ width: "300px" }}>
          Masks are harmful - to keep your cough or sneeze on your sleeve then
          washing hands is better
          <br />
          <br />
          Since covid was found to float on dust they sprayed into a Goldberg
          drum 3 hours later the scientists conclude it doesn’t dissipate
          upwards-like or require spittle. There is no proof that spittle stays
          in the air except in comparison to dust in a 3ft steel drum
        </div>
        <div
          style={{
            height: "80%",
            display: "flex"
          }}
        >
          <div style={{ width: "300px" }}>
            <img
              height="auto"
              width="300px"
              alt="goldberg drum about 3ft 3 hours covid still detected"
              src="https://www.dl.dropboxusercontent.com/s/fm92t9anyr47j2t/goldberg.jpeg?dl=0"
            />
            <a
              style={{ width: "100%", wordBreak: "break-all" }}
              href="https://www.medrxiv.org/content/10.1101/2020.03.09.20033217v1.full.pdf"
            >
              https://www.medrxiv.org/content/10.1101/2020.03.09.20033217v1.full.pdf
            </a>
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              overflowY: "auto",
              overflowX: "hidden",
              height: "100%",
              width: "260px"
            }}
          >
            <TwitterTweetEmbed
              key="1333520425511432196"
              tweetId="1333520425511432196"
            />
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              overflowY: "auto",
              overflowX: "hidden",
              height: "100%",
              width: "260px"
            }}
          >
            <TwitterTweetEmbed
              key="1309333445970202624"
              tweetId="1309333445970202624"
            />
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              overflowY: "auto",
              overflowX: "hidden",
              height: "100%",
              width: "260px"
            }}
          >
            <TwitterTweetEmbed
              key="1326577128830275586"
              tweetId="1326577128830275586"
            />
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              overflowY: "auto",
              overflowX: "hidden",
              height: "100%",
              width: "260px"
            }}
          >
            <TwitterTweetEmbed
              key="1334575619003310082"
              tweetId="1334575619003310082"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Masks;
