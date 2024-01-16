import { FC, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Modal from "react-modal";

import { IconContext } from "react-icons";
import { WindowSize } from "../hooks/types";
import { useWindowSize } from "../hooks/useWindowSize";
import { ImageCarousel } from "./image-carousel";
import styles from "./image-carousel-wrapper.module.css";

export interface ImageCarouselWrapperProps {
  imageUrlArray: string[];
  thumbnailCount: number;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    height: "100%",
    width: "100vw",
    overflow: "hidden",
  },
  overlay: {
    zIndex: 30,
  },
};

export const ImageCarouselWrapper: FC<ImageCarouselWrapperProps> = ({
  imageUrlArray,
  thumbnailCount,
}) => {
  const { width } = useWindowSize();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0);

  const handleCloseImageModal = () => setIsImageModalOpen(!isImageModalOpen);

  const handleThumbnailSelected = (selectedIndex: number | undefined) => {
    setSelectedIndex(selectedIndex);
    setIsImageModalOpen(!isImageModalOpen);
  };

  const fullScreenThumbnailCount = () => {
    let thumbnailCount = 3;
    if (width >= WindowSize.XL) {
      thumbnailCount = 8;
    } else if (width >= WindowSize.LG) {
      thumbnailCount = 6;
    } else if (width >= WindowSize.MD) {
      thumbnailCount = 4;
    }
    return thumbnailCount;
  };

  return (
    <div>
      <ImageCarousel
        imageUrlArray={imageUrlArray}
        isFullScreen={false}
        selectedIndex={selectedIndex}
        thumbnailCount={thumbnailCount}
        thumbnailSelected={handleThumbnailSelected}
      />
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={handleCloseImageModal}
        style={customStyles}
        appElement={document.getElementById("root") as HTMLElement}
      >
        <div className={styles.modal_container}>
          <div className={styles.close_button}>
            <button
              onClick={handleCloseImageModal}
              className={styles.close_button}
            >
              <IconContext.Provider value={{ className: `${styles.icon}` }}>
                <FaXmark />
              </IconContext.Provider>
            </button>
          </div>
          <ImageCarousel
            imageUrlArray={imageUrlArray}
            isFullScreen={true}
            selectedIndex={selectedIndex}
            thumbnailCount={fullScreenThumbnailCount()}
            thumbnailSelected={handleThumbnailSelected}
          />
        </div>
      </Modal>
    </div>
  );
};
