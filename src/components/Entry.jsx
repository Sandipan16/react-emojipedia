import React from "react";

export default function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.title}>
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.desc}</dd>
    </div>
  );
}
