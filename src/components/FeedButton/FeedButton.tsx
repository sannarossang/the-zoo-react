import "../FeedButton/FeedButton.scss";
import { DateTime } from "luxon";
import { useState } from "react";

export const FeedButton = () => {
  const [time, setTime] = useState(0);

  const getTime = () => {
    const currentTime = DateTime.now().toISO();
    console.log("time now" + currentTime);
    localStorage.setItem("lastFedTime", JSON.stringify(currentTime));
  };

  return (
    <>
      <button type="button" onClick={getTime}>
        Mata mig
      </button>{" "}
    </>
  );
};
