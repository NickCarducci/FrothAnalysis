import React from "react";
//import ReactDOM from "react-dom";
//import ReactHtmlParser from "react-html-parser";
//import reactElementToJSXString from "react-element-to-jsx-string";
//import ReactDOMServer from "react-dom/server";
//import ExecutionEnvironment from "exenv";

/*class Forward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div ref={this.props.fwdtwe} />;
  }
}*/

class Cable extends React.Component {
  constructor(props) {
    super(props);
    const { style: Style } = props,
      stopfail = false;
    var initheight =
        !Style ||
        !isNaN(Style.width) ||
        isNaN(Style.height) ||
        (stopfail && !this.state.loaded)
          ? "auto"
          : Style.height,
      initwidth =
        !Style || !isNaN(Style.height)
          ? "auto"
          : (stopfail && !this.state.loaded) || !isNaN(Style.width)
          ? 200
          : Style.width;
    this.state = {
      mount: null,
      optionalheight: initheight, //376,
      optionalwidth: initwidth,
      initheight,
      initwidth,
      //"100%"
      /*props.fwd.current.parentNode.offsetWidth
        ? props.fwd.current.parentNode.offsetWidth
        : window.innerWidth*/ limit: [],
      cache: null,
      mountsCount: 0,
      cacheStyle: "",
      go: true
    };
    this.page = React.createRef();
    this.fwdtwe = React.createRef();
  }
  /*componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.setState({ go: true }, () => this.checkIfBetween());
    }
  }*/
  componentDidUpdate = (prevProps) => {
    if (this.state.go && this.props.scrolling !== prevProps.scrolling) {
      this.checkIfBetween();
    }

    if (this.state.mount !== this.state.lastmount)
      this.setState({ lastmount: this.state.mount }, () => {
        if (this.state.mount) {
          console.log("loaded");
          var initheight = this.state.optionalheight,
            initwidth = this.state.optionalwidth;
          this.setState(
            {
              optionalheight: 0,
              optionalwidth: 0,
              firstheight:
                this.props.fwd &&
                this.props.fwd.current &&
                this.props.fwd.current.offsetHeight,
              firstwidth:
                this.props.fwd &&
                this.props.fwd.current &&
                this.props.fwd.current.offsetWidth
            },
            () => {
              if (![200, "auto"].includes(initwidth)) {
                //console.log(this.state.firstheight);
                var targetheight =
                  //initheight !== "auto" ?
                  this.state.firstheight;
                // : 376;

                this.dyntime = setInterval(() => {
                  if (this.state.optionalheight > targetheight)
                    clearInterval(this.dyntime);
                  this.setState({
                    optionalheight: this.state.optionalheight + 3
                  });
                }, 10);
              } else this.setState({ optionalheight: initheight });

              var targetwidth =
                //initwidth !== "auto"?
                this.state.firstwidth;
              //: window.innerWidth;
              if (!["auto"].includes(initheight)) {
                this.dyntime2 = setInterval(() => {
                  if (this.state.optionalwidth > targetwidth)
                    clearInterval(this.dyntime2);
                  this.setState({
                    optionalwidth: this.state.optionalwidth + 3
                  });
                }, 10);
              } else this.setState({ optionalwidth: initwidth });
            }
          );
        } else {
          this.setState({
            optionalheight: this.state.initheight,
            optionalwidth: this.state.initwidth,
            firstheight: null,
            firstwidth: null
          });
        }
      });
    if (this.state.loaded !== this.state.lastLoaded) {
      this.setState(
        {
          lastLoaded: this.state.loaded
        },
        this.checkIfBetween
      );
    }
  };
  componentWillUnmount = () => {
    clearInterval(this.dyntime);
    clearInterval(this.dyntime2);
    clearTimeout(this.setset);
  };
  checkIfBetween = () => {
    const { /*frameheight,*/ cache } = this.state;
    const { /*scrollTopAndHeight,*/ scrollTop, girth, timeout } = this.props;
    var girt =
      girth && !isNaN(girth)
        ? girth + 500
        : window.innerHeight; /*frameheight
        ? frameheight
        : Style &&
          Style.height &&
          !isNaN(Style.height)
        ? Style.height + 500
        : 500;*/
    var timeou = timeout ? timeout : 1500;
    clearTimeout(this.setset);
    this.setset = setTimeout(() => {
      var page = this.page.current;
      var between =
        //Math.abs(scrollTop + page.offsetTop - window.scrollY) <
        //girt + window.innerHeight;
        Math.abs(page.offsetTop - scrollTop) < girt;
      /*Number(`-${girt}`) &&
        scrollTopAndHeight - page.offsetTop > Number(`-${girt}`);*/
      /* Math.abs(
            scrollTop +
              page.offsetTop -
              (window.scrollY +
                window.innerHeight /
                  2) /*+ window.innerHeight / 2 - page.offsetTop*
          )
          Math.abs(
          scrollTop +
            page.offsetTop -
            (window.scrollY +
              window.innerHeight /
                2) /*+ window.innerHeight / 2 - page.offsetTop*
        ) < girt; //Number(`-${girt}`);*/
      //console.log(page.offsetTop);
      if (!this.state.mount) {
        /*console.log(
          Math.abs(scrollTop + page.offsetTop - window.scrollY),
          scrollTop,
          page.offsetTop,
          window.scrollY ,
          girt
        );*/
        //console.log(between, page.offsetTop, scrollTop);
        /*between && */ this.setState(
          {
            mount: between
          },
          () => {}
        );
      } else {
        var continuee = this.props.fwd && this.props.fwd.current;
        //between && console.log(between, continuee.outerHTML);
        if (!continuee && !cache) return;
        /*const cacheStyle = JSON.parse(
          (cache ? cache : continuee.outerHTML)
            .split(`style="`)[1]
            .split(`"`)[0]
            .replaceAll(";", `",`)
            .replaceAll(": ", `: "`)
        );*/
        //console.log(cache, continuee.offsetHeight, continuee.offsetWidth);
        if (!cache && /*this.state.loaded ||*/ this.props.img) {
          //if (continuee.offsetHeight !== 0)
          this.setState({
            cache: continuee.outerHTML,
            //cacheStyle,
            frameheight: continuee.offsetHeight,
            framewidth: continuee.offsetWidth
          });
        } else if (!between) {
          //console.log("!between", continuee.outerHTML);
          /* if (continuee) {
                const children = [...continuee.children];
                console.log(children);
                if (children.length > 0) {
                  var gl = null;
                  const foun = children.find(
                    (x) => (gl = x.getContext("webgl"))
                  );
                  foun.addEventListener(
                    "webglcontextlost",
                    (e) => console.log(e),
                    false
                  );
                  gl.getExtension("WEBGL_lose_context").loseContext();
                }
              }*/
          //continuee.remove();
          //if (scrollTop !== 0) return;
          //continuee && continuee.remove();
          if (continuee) {
            while (continuee.children.length > 0) {
              continuee.remove(
                continuee.children[continuee.children.length - 1]
              );
            }
          }
          // console.log(girt);
          //if (Object.keys(page.children).length !== 0 /*page.innerHTML !== ""*/)
          //return (page.innerHTML = "");
          // this.setState({ mount: false });
        } /*if (page.innerHTML === "") */ else {
          const children = [...page.children];
          if (
            //frusterated the second, paniced the first" ca
            cache &&
            (children.length === 0 || !children.find((x) => x === cache))
          ) {
            console.log("reloading");
            //console.log("replenishing, new scroll", cache);
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
      //this.props.fwd.current.remove();
      this.props.onError(e);
    }; //ternaries remove the node (error) and element;
    //display removes the element, but not the node; use state
    const onLoad = (e) => {
      console.log("loaded");
      this.setState({
        loaded: true,
        optionalheight: 0,
        optionalwidth: 0
      });
    };
    //console.log(this.state.optionalheight);
    const style = {
      //transition: ".3s ease-out",
      border: "2px gray solid",
      width: this.state.optionalwidth,
      height: this.state.optionalheight
    };
    return (
      <div
        ref={this.page}
        style={{
          //transition: ".3s ease-out",
          textAlign: float,
          position: "relative",
          boxShadow: "inset 0px 0px 50px 15px rgb(200,100,120)",
          ...this.props.style,
          ...style,
          shapeOutside: "rect()",
          float,
          overflow: "hidden"
        }}
      >
        {src === "" ? (
          <span style={style}>{title}</span>
        ) : !img ? (
          <iframe
            onLoad={onLoad}
            onError={onError}
            title={title}
            style={{
              ...style,
              border: 0,
              width:
                this.state.optionalwidth !== 200
                  ? this.state.optionalwidth
                  : "100%"
            }}
            ref={this.props.fwd}
            src={src}
            iframe={{ ...this.props.iframe }}
          />
        ) : mount ? (
          <img
            onError={onError}
            alt={title}
            style={style}
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
