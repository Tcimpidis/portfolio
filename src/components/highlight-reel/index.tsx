'use client'
import { Highlight } from "@/api/home"
import { FC, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { envRoute } from "@/envUtility";
import { Button } from "@/common/components/button";
import { useRouter } from "next/navigation";
import { ImageReel } from "@/common/components/image-reel";

interface HighlightReelProps {
  highlightReel: Highlight[];
}

export const HighlightReel: FC<HighlightReelProps> = ({
  highlightReel
}) => {
  const router = useRouter();
  const [selectedHighlightIndex, setSelectedHighlightIndex] = useState<number>(0);
  const selectedHighlight = highlightReel[selectedHighlightIndex];
  const { company, imageName, title } = selectedHighlight;
  
  const handlePrevSlide = () => {
    if(selectedHighlightIndex > 0) {
      setSelectedHighlightIndex(selectedHighlightIndex - 1);
    }
  }

  const handleNextSlide = () => {
    if(selectedHighlightIndex < highlightReel.length - 1) {
      setSelectedHighlightIndex(selectedHighlightIndex + 1);
    }
  }

  const handleOnClick = () => {
    router.push(`/portfolio/#${encodeURI(selectedHighlight.company)}`)
  }

  return (
    <ImageReel
      imageUrl={`companies/${imageName}.png`}
      currentSelectedIndex={selectedHighlightIndex}
      reelLength={highlightReel.length}
      actionOnClick={handleOnClick}
      handlePrevSlide={handlePrevSlide}
      handleNextSlide={handleNextSlide}
      buttonText="Learn More"
    >
      <div className={styles.content}>
          <span className={styles.company}>{company}</span>
          <span className={styles.title}>{title}</span>
      </div>
    </ImageReel>
  )
}