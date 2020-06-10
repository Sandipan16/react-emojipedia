import React from "react";
import Entry from "./Entry";
import emojis from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojis.map(function(e) {
          return (
            <Entry key={e.id} emoji={e.emoji} title={e.name} desc={e.meaning} />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
