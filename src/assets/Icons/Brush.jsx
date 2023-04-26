import * as React from "react";

function Brush(props) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="4.5em" width="4.5em" {...props}>
      <path
        stroke="white"
        d="M13.5 7.5v-5a2 2 0 00-2-2h-8a2 2 0 00-2 2v5m12 0h-12m12 0v2a2 2 0 01-2 2h-3v2a1 1 0 11-2 0v-2h-3a2 2 0 01-2-2v-2m4-7V5m2-4.5V3"
      />
    </svg>
  );
}

export default Brush;
