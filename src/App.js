import React, { useState } from "react";
import { Manager, Popper } from "react-popper";
import SelectionReference from "./components/selection-reference";
import { useOuterClickHandler } from "./components/outer-click-hook";
import "./components/style.css";
let tooltipStyle = {
  background: "#fff",
  border: "1px solid #e0e0e0",
};

let tooltipClassname = "tooltip";

function App() {
  let [selectedText, setSelectedText] = useState(null);
  useOuterClickHandler(() => setSelectedText(null), `.${tooltipClassname}`);

  return (
    <div style={{ width: "800px", margin: "auto", textAlign: "justify" }}>
      <h1 style={{ textAlign: "center" }}>Medium like popup</h1>
      <h2 style={{ textAlign: "center" }}>Select some text</h2>
      <hr />
      <Manager>
        <SelectionReference
          //onSelect={selection => setSelectedText(selection.toString())}
          onSelect={(selection) => {
            if (selection && !selection.isCollapsed) {
              setSelectedText(selection.toString());
            }
          }}
        >
          {(getProps) => (
            <div
              {...getProps({
                onMouseUp: () => console.log("We still can use this callback!"),
              })}
            >
              <h3>What is Lorem Ipsum?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h3>Why do we use it?</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          )}
        </SelectionReference>
        {selectedText ? (
          <Popper placement="bottom">
            {({ ref, style, placement, arrowProps }) => (
              <div
                ref={ref}
                style={{ ...style, ...tooltipStyle }}
                className={tooltipClassname}
              >
                <span style={{ display: "block", marginRight: "0.5rem" }}>
                  Share this
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://www.facebook.com/sharer/sharer.php?u=https://phannhatchanh.com/react-sample-text-selection-popover/&text=" +
                    selectedText
                  }
                >
                  <svg viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="31" fill="#036ce4"></circle>
                    <path
                      d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://twitter.com/intent/tweet?url=https://phannhatchanh.com/react-sample-text-selection-popover/&text=" +
                    selectedText +
                    "&via=nhatchanh"
                  }
                >
                  <svg fill="#00aced" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "http://www.reddit.com/submit?title=Title Article&selftext=true&text=" +
                    selectedText +
                    " https://phanhatchanh.com/react-sample-text-selection-popover/"
                  }
                >
                  <svg fill="#ff4500" viewBox="0 0 512 512">
                    <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
                  </svg>
                </a>
                <svg style={{ width: "2px" }}>
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100"
                    style={{ stroke: "#dfdfdf", strokeWidth: "4" }}
                  />
                </svg>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://phannhatchanh.com/search/?search=" + selectedText
                  }
                >
                  <svg viewBox="0 0 512 512">
                    <path
                      fill="#d51f5c"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </a>
                <p></p>
              </div>
            )}
          </Popper>
        ) : null}
      </Manager>
    </div>
  );
}

export default App;