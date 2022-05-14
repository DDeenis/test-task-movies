import React, { useState } from "react";
import ReactDOM from "react-dom";

type Props = {
  medium: string;
  original: string;
  alt: string;
};

export const ExpandableImage = ({ medium, original, alt }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => setIsExpanded(true);
  const onCollapse = () => setIsExpanded(false);
  const stop = (e: React.MouseEvent<HTMLImageElement>) => e.stopPropagation();

  return (
    <>
      <img
        src={medium}
        alt={alt}
        className="w-24 shadow-md"
        onClick={onExpand}
      />
      {isExpanded &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 bg-black/40 z-10 p-6 flex justify-center items-center"
            onClick={onCollapse}
          >
            <img src={original} alt={alt} onClick={stop} className="w-72" />
          </div>,
          document.body
        )}
    </>
  );
};
