import React from "react";
import CardSuggested from "./suggestedForYou/cardSuggested";

const SuggestedForYou = () => {
  return (
    <div className="main-container mt-5">
      <div className="text-xl text-gray-700 dark:text-gray-200 font-medium w-10/12 mx-auto">Suggested for you</div>
      <div className="main-container min-w-[305px] w-10/12 mx-auto h-fit mt-5d dark:bg-subMainDark flex overflow-scroll gap-4 mt-2">
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
        <CardSuggested person="Yves Maurice" followers="656 followers" />
      </div>
    </div>
  );
};

export default SuggestedForYou;
