import React from "react";
import { Script } from "gatsby";

function Tracking() {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="e34c0d4d-3560-4319-a4e0-f8435c89b1b5"
    />
  );
}

export default Tracking;
