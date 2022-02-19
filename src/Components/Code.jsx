import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";
import { CopyToClipBoard } from "./CopyToClipBoard";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import { useTheme } from "./ThemeContext";

export const Code = ({ code }) => {
  const { darkTheme } = useTheme();
  return (
    <Highlight
      {...defaultProps}
      code={JSON.stringify(code, null, 2)}
      language="jsx"
      theme={darkTheme ? nightOwl : nightOwlLight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            className,
            "whitespace-pre p-5 rounded-b-lg break-words relative"
          )}
          style={style}
        >
          <CopyToClipBoard code={JSON.stringify(code, null, 2)} />
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              className={classNames(
                "whitespace-pre-wrap break-words",
                getLineProps({ line, key: i }).className
              )}
            >
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
