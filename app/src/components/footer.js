import * as React from "react";
import IconShare from "../components/icon-share";

const links = [
  {
    url: "https://minitrack.kubedev.co.uk",
    name: "minitrack - journal daily ",
  },
  { url: "https://www.bel-kev.co.uk", name: "bel & kev - wedding " },
];

const iconStyles = {
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: 2,
};

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <footer>
        <div className="block">
          <div className="block__heading">
            <a
              className="no-link-line"
              target="_blank"
              rel="noreferrer"
              href="https://www.kubedev.co.uk"
            >
              <div className="pill">
                Built by <strong>Kubedev</strong> with
                <svg
                  className="icon"
                  viewBox="0 0 907 828"
                  style={iconStyles}
                >
                  <path d="M730.084,312.85c4.226,113.133 -40.828,236.381 -79.883,320.702c-29.137,63.033 -92.165,103.467 -161.607,103.675c-58.148,0.184 -129.832,0.398 -188.066,0.573c-68.886,0.206 -131.752,-39.215 -161.569,-101.314c-43.597,-90.793 -96.522,-224.663 -88.059,-325.713" />
                  <path d="M710,410.13l137.329,0c0,0 27.947,188.444 -226.001,233.406" />
                </svg>
              </div>
            </a>
          </div>

          <div className="block__content">
            <small title="version: 0.2.1">v: 0.2.1</small>
          </div>
        </div>

        <div className="block">
          <div className="block__heading">
            <strong>More</strong>
          </div>
          <div className="block__content">
            <div>
              {links.map((item, row) => (
                <a
                  key={row}
                  href={item.url}
                  className="inline"
                >
                  {item.name}
                  <IconShare className="inline" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
