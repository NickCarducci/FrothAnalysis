import React from "react";

class Cable extends React.Component {
  constructor(props) {
    super(props);
    const { style: S } = props;
    var initheight =
        !S || (!isNaN(S.width) && isNaN(S.height)) ? "auto" : S.height,
      initwidth =
        !S || !isNaN(S.height) ? "auto" : !isNaN(S.width) ? 200 : S.width;
    this.state = {
      mount: null,
      optionalheight: initheight,
      optionalwidth: initwidth,
      initheight,
      initwidth,
      limit: [],
      cache: null,
      mountsCount: 0,
      cacheStyle: "",
      go: true
    };
    this.page = React.createRef();
  }
  componentDidUpdate = (prevProps) => {
    if (this.state.mount !== this.state.lastmount)
      this.setState({ lastmount: this.state.mount }, () => {
        if (this.state.mount) {
          if (!this.props.fwd || !this.props.fwd.current)
            return this.setState({ mount: false });

          console.log("mounted drop[wire]");
          var initheight = this.state.optionalheight,
            initwidth = this.state.optionalwidth;
          clearTimeout(this.dyntime3);
          this.dyntime3 = setTimeout(() => {
            this.setState(
              {
                optionalheight: 0,
                optionalwidth: 0,
                firstheight: this.props.fwd.current.offsetHeight,
                firstwidth: this.props.fwd.current.offsetWidth
              },
              () => {
                if (![200, "auto"].includes(initwidth)) {
                  var targetheight = this.state.firstheight;

                  this.setState({
                    optionalheight: targetheight
                  });
                } else this.setState({ optionalheight: initheight });

                var targetwidth = this.state.firstwidth;
                if (!["auto"].includes(initheight)) {
                  this.setState({
                    optionalwidth: targetwidth
                  });
                } else this.setState({ optionalwidth: initwidth });
                this.setState({ resizing: true });
              }
            );
          }, 2000);
        }
      });
    if (
      (this.state.go && this.props.scrolling !== prevProps.scrolling) ||
      this.state.loaded !== this.state.lastLoaded
    )
      this.setState(
        {
          lastLoaded: this.state.loaded
        },
        this.checkIfBetween
      );
  };
  componentWillUnmount = () => {
    clearTimeout(this.dyntime3);
    clearTimeout(this.setset);
  };
  checkIfBetween = () => {
    const { cache } = this.state;
    const { scrollTop, girth, timeout } = this.props;
    var girt = girth && !isNaN(girth) ? girth + 500 : window.innerHeight;
    var timeou = timeout ? timeout : 1500;
    clearTimeout(this.setset);
    this.setset = setTimeout(() => {
      var page = this.page.current;
      var between = Math.abs(page.offsetTop - scrollTop) < girt;
      if (!this.state.mount) {
        this.setState(
          {
            mount: between
          },
          () => {}
        );
      } else {
        var continuee = this.props.fwd && this.props.fwd.current;
        if (!continuee && !cache) return;
        if (!cache && this.props.img) {
          this.setState({
            cache: continuee.outerHTML,
            frameheight: continuee.offsetHeight,
            framewidth: continuee.offsetWidth
          });
        } else if (!between) {
          if (continuee) {
            while (continuee.children.length > 0) {
              continuee.remove(
                continuee.children[continuee.children.length - 1]
              );
            }
          }
        } else {
          const children = [...page.children];
          if (
            cache &&
            (children.length === 0 || !children.find((x) => x === cache))
          ) {
            console.log("reloading");
            return (page.innerHTML = this.state.cache);
          }
        }
      }
    }, timeou);
  };
  render() {
    const { mount } = this.state;
    const { src, float, title, img } = this.props;
    const onError = (e) => {
      this.setState({ stopfail: true });
      this.props.onError(e);
    };
    const onLoad = (e) => {
      console.log("loaded (iframe) [drop]wire");
      this.setState({
        loaded: true
      });
    };
    const style = {
      border: "0px gray solid",
      width: this.state.resizing ? this.state.optionalwidth : null,
      height: this.state.resizing ? this.state.optionalheight : 20
    };
    return (
      <div
        ref={this.page}
        style={{
          transition: ".3s ease-out",
          textAlign: float,
          position: "relative",
          boxShadow: "inset 0px 0px 50px 15px rgb(200,100,120)",
          ...this.props.style,
          ...style,
          //shapeOutside: "rect()",
          float,
          overflow: "hidden" //this.state.mount ? "hidden" : "auto"
        }}
      >
        {src === "" ? (
          <span style={style}>{title}</span>
        ) : !img && mount ? (
          <iframe
            onLoad={onLoad}
            onError={onError}
            title={title}
            style={{
              ...style,
              border: 0,
              width:
                this.state.optionalwidth !== 200
                  ? this.state.initwidth
                  : "100%",
              height: this.state.initheight
            }}
            ref={this.props.fwd}
            src={src}
            iframe={{ ...this.props.iframe }}
          />
        ) : mount ? (
          <img
            onError={onError}
            alt={title}
            style={{
              ...style,
              width: this.state.initwidth,
              height: this.state.initheight
            }}
            ref={this.props.fwd}
            src={src}
          />
        ) : (
          <span style={{ border: "2px gray solid" }}>{title}</span>
        )}
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => <Cable fwd={ref} {...props} />);

/**
 * 
      const { cache } = this.state;
      const { scrollTopAndHeight, scrollTop, girth, timeout } = this.props;
      var girt = girth ? girth : 1000;
      var timeou = timeout ? timeout : 1500;
      var continuee = this.props.fwd.current;
      clearTimeout(this.setset);
      this.setset = setTimeout(() => {
        var page = this.page.current;
        var between =
          page.offsetTop - scrollTop > Number(`-${girt}`) &&
          scrollTopAndHeight - page.offsetTop > Number(`-${girt}`);
        this.setState({ mount: this.state.mount ? this.state.mount : between });
        if (!continuee && !cache) return;
        //if (!continuee) continuee = cache;
        //const clone = continuee; //React.cloneElement(continuee);
        this.setState({
          //ReactDOMServer.renderToStaticMarkup, reactElementToJSXString
          //is just html object
          cache: cache ? cache : continuee.outerHTML
        });
        if (!between && continuee) {
          //while (page.firstChild) {
          //page.removeChild(continuee);
          //console.log(continuee.parentNode);
          //console.log(page);
          page.innerHTML = "";
          //continuee.parentNode && page.removeChild(continuee);
          //ReactDOM.unmountComponentAtNode(page); //ReactDOM.findDOMNode(this).parentNode
          //while (page.firstChild) {
          //let onClick =
          //"ontouchstart" in continuee ? "touchstart" : "onclick";
          //if (continuee[onClick]) continuee.remove(); //touchevent
          //continuee.click();
          //}
          //continuee.parentNode.removeChild(continuee);
          return;
        }
        //if (!between && continuee) return continuee.remove();
        const children = [...page.children];
        const d = children.find((x) => x === this.state.cache);
        // console.log(children);
        if (
          children.length === 0 ||
          !d
          //children[children.length - 1] !== this.state.cache
        ) {
          /*page.innerHTML = React.forwardRef((props, ref) => (
              <Forward fwdtwe={ref} {...props} />
            ));*
          //console.log(page);
          //console.log(this.state.cache);
          var cach = this.state.cache;
          /**renderToStaticMarkup over renderToString as it does not add any extra DOM attributes that React uses internally, like `data-reactroot: */
/*const namer = cache.getAttribute("alt") ? "alt" : "title";
              cach.setAttribute(
                namer,
                cache.getAttribute(namer) + this.state.mountsCount
              );*/
/*const img = cach.split(`alt="`)[1];
                const namer = img
                  ? cach.split(`alt="`)[1].split(`"`)[0]
                  : cach.split(`title="`)[1].split(`"`)[0];
                cach =
                  cach.substring(0, img ? 10 : 15) +
                  namer +
                  this.state.mountsCount +
                  cach.substring(
                    cach.indexOf(namer) + namer.length,
                    cach.length
                  );*
          page.innerHTML = cach; //<div>{cache}</div>;
          //new DOMParser().parseFromString(cach, "text/html")
          //ReactDOM.render(cach, page);
          //ReactDOM.render(ReactHtmlParser(cach), page);
          this.setState({ mountsCount: this.state.mountsCount + 1 });
          //page.appendChild(cache);
          //console.log(page);
        }
      }, timeou);
 */

/**
  * const Render = () => {
  useEffect(() => {
    const handler = event => {
      const data = JSON.parse(event.data)
      console.log("Hello World?", data)
    }
    window.addEventListener("message", handler)
    // clean up
    return () => window.removeEventListener("message", handler)
  }, []) // empty array => run only once
  return (
    <div>
      <iframe
        srcDoc={`
        <!DOCTYPE html>
        <html>
          <head>
            window.top.postMessage(
              JSON.stringify({
                error: false,
                message: "Hello World"
              }),
              '*'
            );
          </head>
          <body>
            <h1>Content inside an iframe, who knew...</h1>
          </body>
        </html>
      `}
      />
    </div>
  )
}
  */
