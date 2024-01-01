'use client'
import { FC, PropsWithChildren } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { envRoute } from "@/envUtility";
import { Button } from "@/common/components/button";

interface ImageReelProps {
  imageUrl: string;
  currentSelectedIndex: number;
  reelLength: number;
  buttonText: string;
  actionOnClick: () => void;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

export const ImageReel: FC<PropsWithChildren<ImageReelProps>> = ({
  imageUrl,
  currentSelectedIndex,
  reelLength,
  children,
  buttonText,
  actionOnClick,
  handlePrevSlide,
  handleNextSlide
}) => {
  return (
    <div className={styles.container}>
      <Image 
        alt={`image_reel_background`}
        className={styles.image}
        fill
        object-fit="fit"
        object-position="center"
        src={`${envRoute}/${imageUrl}`}
      />
      <div className={styles.overlay_buttons}>
        <div className={styles.chevron_button_prev}>
          <button
            className={styles.chevron_button}
            disabled={currentSelectedIndex === 0}
            onClick={handlePrevSlide}
          >
            <IconContext.Provider value={{className:`${styles.chevron}`}}>
              <FaChevronLeft />
            </IconContext.Provider>
          </button>
        </div>
        <div className={styles.action_container}>
          <Button className={styles.button} onClick={actionOnClick}>
            { buttonText }
          </Button>
        </div>
        <div className={styles.chevron_button_next}>
          <button
            className={styles.chevron_button}
            disabled={currentSelectedIndex === reelLength - 1}
            onClick={handleNextSlide}
          >
            <IconContext.Provider value={{className:`${styles.chevron}`}}>
              <FaChevronRight />
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className={styles.overlay_content}>
        {children}
      </div>
    </div>
  )
}