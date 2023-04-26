import * as React from "react";

function Analytics(props) {
  return (
    <svg
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      height="5em"
      width="5em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
      <path d="M9 17v-5M12 17v-1M15 17v-3" />
    </svg>
  );
}

export default Analytics;
