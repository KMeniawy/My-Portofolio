import * as React from "react";

function Monitor(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      height="4.5em"
      width="4.5em"
      {...props}
    >
      <path d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h7v2H8v2h8v-2h-2v-2h7c1.11 0 2-.89 2-2V4a2 2 0 00-2-2m-6 3.5l-.62 1.37L13 7.5l1.38.63L15 9.5l.63-1.37L17 7.5l-1.37-.63L15 5.5m-4.5 2L9.41 9.91 7 11l2.41 1.09 1.09 2.41 1.1-2.41L14 11l-2.4-1.09-1.1-2.41" />
    </svg>
  );
}

export default Monitor;
