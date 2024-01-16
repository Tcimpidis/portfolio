"use client";
import { ToolMap, ToolType } from "@/api/portfolio";
import { WindowSize } from "@/common/hooks/types";
import { useWindowSize } from "@/common/hooks/useWindowSize";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useMemo, useState } from "react";
import { ToolDetail } from "../tool-detail";
import { Tool } from "../tool-icon";
import styles from "./index.module.css";

interface ToolListProps {
  toolData: ToolMap;
}

export const ToolList: FC<ToolListProps> = ({ toolData }) => {
  const searchParams = useSearchParams();
  const { width } = useWindowSize();
  const tool = searchParams.get("tool");
  const [focusedTool, setFocusedTool] = useState<ToolType | undefined>(
    (tool as ToolType) || "react"
  );
  const [selectedTool, setSelectedTool] = useState<ToolType | undefined>(
    tool as ToolType
  );

  useEffect(() => {
    if (tool) {
      setFocusedTool(tool as ToolType);
    }
  }, [tool]);

  const handleSelectedTool = (tool: ToolType | undefined) => {
    if (selectedTool && selectedTool === tool) {
      setSelectedTool(undefined);
    } else {
      setSelectedTool(tool);
    }
  };

  const focusedDetails = useMemo(() => {
    if (!selectedTool && focusedTool) {
      return { ...toolData[focusedTool] };
    } else if (selectedTool) {
      return { ...toolData[selectedTool] };
    }
  }, [focusedTool, selectedTool, toolData]);

  const toolList: ToolType[] = Object.keys(toolData).map(
    (key) => key as ToolType
  );

  const renderToolList = () => {
    if (width && width <= WindowSize.LG) {
      return (
        <div className={styles.toolbox}>
          <div className={styles.icon_box}>
            {toolList.map((tool, i) => (
              <Tool
                name={tool}
                onClick={handleSelectedTool}
                onHover={setFocusedTool}
                key={i}
                selectedTool={selectedTool}
              />
            ))}
          </div>
          <div className={styles.detail_box}>
            {focusedDetails && focusedTool && (
              <ToolDetail
                displayName={focusedDetails.displayName}
                proficiency={focusedDetails.proficiency}
                projects={focusedDetails.projects}
                summary={focusedDetails.summary}
                years={focusedDetails.years}
              />
            )}
          </div>
        </div>
      );
    }
    return (
      <div className={styles.toolbox}>
        <div className={styles.detail_box}>
          {focusedDetails && focusedTool && (
            <ToolDetail
              displayName={focusedDetails.displayName}
              proficiency={focusedDetails.proficiency}
              projects={focusedDetails.projects}
              summary={focusedDetails.summary}
              years={focusedDetails.years}
            />
          )}
        </div>
        <div className={styles.icon_box}>
          {toolList.map((tool, i) => (
            <Tool
              name={tool}
              onClick={handleSelectedTool}
              onHover={setFocusedTool}
              key={i}
              selectedTool={selectedTool}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tools/Skills</div>
      {renderToolList()}
    </div>
  );
};
