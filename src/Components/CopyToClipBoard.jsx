import classNames from "classnames";
import copy from "copy-to-clipboard";
import { useState } from "react";
import toast from "react-hot-toast";
import { Clipboard } from "./Icons";

export const CopyToClipBoard = ({ code }) => {
  const [active, setActive] = useState(false);
  const copyText = () => {
    setActive(true);
    copy(code);
    toast.success("Copied");
    window.setTimeout(() => setActive(false), 1000);
  };

  return (
    <button
      className={classNames("pointer text-white", active && "text-green-200")}
      onClick={copyText}
    >
      <Clipboard />
    </button>
  );
};
