import LinearProgress from "@mui/joy/LinearProgress";
import React from "react";

const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="min-w-[342px] mx-auto">
      <LinearProgress
        color="primary"
        determinate
        size="md"
        variant="soft"
        value={value}
      />
    </div>
  );
};

export default ProgressBar;
