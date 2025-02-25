import React from "react";
import * as Styles from "./index.styled";

const getProgressColor = (percentage: number): string => {
  // First stage (0%)
  if (percentage === 0) return "#71717A"; // Grey

  // Last stage (100%)
  if (percentage === 100) return "#22C55E"; // Green

  // Middle stages
  const stagePercentage = 100 / 7; // Dividing into 7 stages (1 start + 5 middle + 1 end)

  if (percentage <= stagePercentage * 2) return "#EAB308"; // Yellow
  if (percentage <= stagePercentage * 3) return "#3B82F6"; // Blue
  if (percentage <= stagePercentage * 4) return "#F97316"; // Orange
  if (percentage <= stagePercentage * 5) return "#8B5CF6"; // Violet
  if (percentage <= stagePercentage * 6) return "#B45309"; // Brown

  // Sixth and rest of the middle stages
  return "#4ADE80"; // Light green
};

interface SegmentedPieProps {
  percentage: number;
}

const SegmentedPie: React.FC<SegmentedPieProps> = ({ percentage }) => {
  return (
    <Styles.Container>
      <Styles.Pie
        percentage={percentage}
        color={getProgressColor(percentage)}
      />
    </Styles.Container>
  );
};

export default SegmentedPie;
