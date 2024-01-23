import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgression = ({ value, sm }: { value: number; sm: boolean }) => {
  const [percentages, setPercentages] = useState([0, 0, 0]);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const updatedPercentages = percentages.map((percentage) => {
              if (percentage < value) {
                return percentage + 1;
              }
              return percentage;
            });
            setPercentages(updatedPercentages);
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [percentages, value]);

  return (
    <div ref={containerRef}>
      <CircularProgressbar
        styles={buildStyles({
          textColor: "black",
          pathColor: "#0CBD68",
        })}
        value={value}
        text={`${!sm ? String(value) + "%" : ""}`}
      />
    </div>
  );
};

export default CircularProgression;
