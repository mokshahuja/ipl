import React from "react";

function MiniCard({ match, curTeam }) {
  const { winner, result, result_margin, inning_1, inning_2 } = match;
  const color = winner === curTeam ? "bg-green-700" : "bg-red-700";

  const oppositeTeam = inning_1 === curTeam ? inning_2 : inning_1;
  return (
    <div className={`${color} m-5 p-3 w-5/6 h-60`}>
      <p className="text-sm">vs</p>

      <p className="text-2xl">{oppositeTeam}</p>
      <p className="text-sm">
        {winner} won by {result_margin} {result}
      </p>
    </div>
  );
}

export default MiniCard;
