import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import React from "react";
import "./styles/header.css";

type Props = {
  hasBackButton: boolean;
  onBack: () => void;
};

export const Header = ({ hasBackButton, onBack }: Props) => {
  return (
    <header className="w-full py-4 header-bg relative">
      <h1 className="uppercase text-2xl font-semibold">super film</h1>
      {hasBackButton && (
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 header-back"
          onClick={onBack}
        >
          <ChevronLeftIcon />
        </button>
      )}
    </header>
  );
};
