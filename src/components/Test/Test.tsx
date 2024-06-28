import React from "react";

const Test = () => {
  const cards: any = ["Jack", 8, 2, 6, "King", 5, 3, "Queen"];
  const cardSorted = (arr: any) => {
    ///// using if statement
    const sortedCards = arr.sort((a: any, b: any) => {
      if (typeof a === "string" && typeof b == "string") {
        const ranks = ["Jack", "Queen", "King"];
        return ranks.indexOf(a) - ranks.indexOf(b);
      } else if (typeof a === "string") {
        return -1;
      } else if (typeof b === "string") {
        return 1;
      } else {
        return a - b;
      }
    });
    return sortedCards;
  };
  const sortedMapCard = cardSorted(cards);
  return (
    <div>
      {/* here to display the card sorting */}
      <div>
        <ul>
          {sortedMapCard?.map((item: any, index: any) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
