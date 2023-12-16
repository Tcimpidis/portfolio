import Image from 'next/image';
import { FC, useCallback, useEffect, useState } from 'react';
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import styles from './image-carousel.module.css';

const FullScreenSelectedThumbnail: FC<{url: string}> = ({
  url
}) => (
  <div className={styles.fullscreen_tumbnail}>
    <Image 
      alt="fullscreen-thumbnail"
      className={styles.fullscreen_image}
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      data-test-id="fullscreen-selected-thumbnail"
      src={url}
    />
  </div>
)

interface SelectedThumbnailProps {
  url: string;
  thumbnailSelected: (selectedIndex: number | undefined) => void;
  thumbnailIndex: number;
}

const SelectedThumbnail: FC<SelectedThumbnailProps> = ({
  url,
  thumbnailSelected,
  thumbnailIndex
}) => {
  const handleThumbnailSelected = useCallback(() => {
      thumbnailSelected(thumbnailIndex)
  },[thumbnailSelected,thumbnailIndex]);

  return ( 
    <div className={styles.selected_thumbnail_wrapper}>
      <button 
        data-testid="selected-thumbnail-btn"
        onClick={handleThumbnailSelected}>
        <div className={styles.selected_thumbnail}>
          <Image 
            alt="fullscreen-thumbnail"
            className={styles.thumbnail_image}
            data-test-id="selected-thumbnail"
            layout='fill'
            src={url}
          />
        </div>
      </button>
    </div>
  )
}

interface CarouselProps {
  viewableThumbnailIndeses?: number[];
  thumbnailIndex?: number;
  handlePrevSlide: () => void;
  selectedThumbnail?: JSX.Element;
  imageUrlArray: string[];
  handleNextSlide: () => void;
  setThumbnailIndex: (selectedIndex: number) => void;
  isFullScreen:boolean
}

const Carousel: FC<CarouselProps> = ({
  viewableThumbnailIndeses,
  thumbnailIndex,
  selectedThumbnail,
  imageUrlArray,
  handleNextSlide,
  handlePrevSlide,
  setThumbnailIndex,
  isFullScreen
}) => {
  const handleThumbnailSelected = useCallback(
    (thumbnailIndex: number) => () => {
      setThumbnailIndex(thumbnailIndex)
  },[setThumbnailIndex]);
 
  const chevronButtonClassName = isFullScreen ? styles.fullscreeen_chrevon_button : ""

  const chevronBackButtonClassName = `${
    thumbnailIndex === 0 ? '' : styles.fullscreeen_chrevon_button_active
  } `
  const chevronForwardButtonClassName = `${
    thumbnailIndex === imageUrlArray.length -1 ? '' : styles.fullscreeen_chrevon_button_active
  } `

  const chevronClassName = isFullScreen ? styles.fullscreen_chevron : styles.chevron;
  
  return (
    <div className={styles.selected_thumbnail_wrapper}>
      <div 
        className={styles.carousel}
        data-testid='image-carousel'
        >
          <div>
            {viewableThumbnailIndeses && viewableThumbnailIndeses?.length > 1 && (
              <button
                className={`${chevronButtonClassName} ${chevronBackButtonClassName}`}
                data-testid='fullscreen-back-chevron'
                disabled={thumbnailIndex === 0}
                onClick={handlePrevSlide}
              >
                <IconContext.Provider value={{className:`${
                  thumbnailIndex === 0 
                    ? `${styles.chevron_inactive}`
                    : `${styles.chevron_active}`
                  } ${chevronClassName}`}}>
                  <FaChevronLeft />
                </IconContext.Provider>
              </button>
            )}
          </div>
          <div>
            {selectedThumbnail}
          </div>
          <div>
            {viewableThumbnailIndeses && viewableThumbnailIndeses?.length > 1 && (
              <button
                className={`${chevronButtonClassName} ${chevronForwardButtonClassName}`}
                data-testid='fullscreen-forward-chevron'
                disabled={thumbnailIndex === imageUrlArray.length - 1}
                onClick={handleNextSlide}
              >
                <IconContext.Provider value={{className:`${
                  thumbnailIndex === imageUrlArray.length - 1 
                  ? `${styles.chevron_inactive}`
                  : `${styles.chevron_active}`
                  } ${chevronClassName}`}}>
                  <FaChevronRight />
                </IconContext.Provider>
              </button>
            )}
          </div>

      </div>
      <div className={styles.carousel_selector}>
        {viewableThumbnailIndeses && 
          viewableThumbnailIndeses.map(index => {
            const viewableIndexOfThumbnail =
              viewableThumbnailIndeses.indexOf(index);
            const imagesLeft = imageUrlArray.length - 1 - index;
            const url = imageUrlArray.find((_, i) => i === index);
            
            return (
              <div className={styles.selector_image_wrapper} key={index}>
                <Image 
                  alt="fullscreen-thumbnail"
                  className={`${
                    thumbnailIndex === index 
                      ? `${styles.selector_image_selected}`
                      : `${styles.selector_image_unselected}`
                  } ${styles.selector_image}`}
                  height={64}
                  width={88}
                  data-testid="fullscreen-thumbnail"
                  onClick={handleThumbnailSelected(index)}
                  onKeyDown={handleThumbnailSelected(index)}
                  role='presentation'
                  src={url as string}
                  tabIndex={index}
                />
                {viewableIndexOfThumbnail === viewableThumbnailIndeses.length - 1 && 
                imagesLeft !== 0 && (
                  <button 
                    className={styles.image_button_count_overlay}
                    onClick={handleThumbnailSelected(index)}
                    >
                    <span className={styles.image_overlay_text}>{imagesLeft} Images</span>
                  </button>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

interface ImageCarouselProps {
  imageUrlArray: string[];
  thumbnailCount: number;
  isFullScreen: boolean;
  thumbnailSelected: (selectedIndex: number | undefined) => void;
  selectedIndex?: number; 
}

export const ImageCarousel: FC<ImageCarouselProps> = ({
  imageUrlArray,
  thumbnailCount,
  isFullScreen,
  thumbnailSelected,
  selectedIndex = 0
}) => {
  const [thumbnailIndex, setThumbnailIndex] = useState<number>(selectedIndex);
  const [selectedThumbnail, setSelectedThumbnail] = useState<JSX.Element>();
  const [previousThumbnailCount, setPreviousThumbnailCount] = useState<number>(0)
  const [viewableThumbnailIndexes, setViewableThumbnailIndexes] = useState<number[]>();

  useEffect(() => {
    if(imageUrlArray && imageUrlArray.length > 0) {
      const viewableIndexes: number[] = [];
      if(!viewableThumbnailIndexes && selectedIndex === 0) {
        imageUrlArray.forEach((_,i) => {
          if(i < thumbnailCount) {
            viewableIndexes.push(i);
          }
        })
        setViewableThumbnailIndexes(viewableIndexes);
        setPreviousThumbnailCount(thumbnailCount);
      } else if (previousThumbnailCount !== thumbnailCount) {
        const indexOffsetDifference = imageUrlArray.length - 1 - thumbnailIndex;
        if(indexOffsetDifference >= thumbnailCount){
          if(thumbnailCount > imageUrlArray.length) {
            for (let x = 0; x < imageUrlArray.length; x++) {
              viewableIndexes.push(thumbnailIndex + x)
            }
          } else {
            for (let x = 0; x < thumbnailCount; x++) {
              viewableIndexes.push(thumbnailIndex + x)
            }
          }
        } else {
          const newIndexOfCurrentVisibleIndex =
            thumbnailIndex + indexOffsetDifference;
          if(thumbnailCount > imageUrlArray.length) {
            for (let x = 0; x < imageUrlArray.length; x++) {
              viewableIndexes.unshift(newIndexOfCurrentVisibleIndex - x)
            }
          } else {
            for (let x = 0; x < thumbnailCount; x++) {
              viewableIndexes.unshift(newIndexOfCurrentVisibleIndex - x)
            }
          } 
        }
        setViewableThumbnailIndexes(viewableIndexes);
        setPreviousThumbnailCount(thumbnailCount);
      } 
    } else if (viewableThumbnailIndexes) {
      setViewableThumbnailIndexes(undefined);
      setPreviousThumbnailCount(0);
    }
  },[
    selectedIndex,
    imageUrlArray,
    thumbnailCount,
    thumbnailIndex,
    previousThumbnailCount,
    viewableThumbnailIndexes
  ]);

  useEffect(() => {
    const selectedUrl = 
      imageUrlArray.find((_,i) => i === thumbnailIndex) || '/assets/no-image.svg';
    if(selectedUrl) {
      if(isFullScreen) {
        setSelectedThumbnail(<FullScreenSelectedThumbnail url={selectedUrl} />)
      } else {
        setSelectedThumbnail(
          <SelectedThumbnail
            thumbnailIndex={thumbnailIndex}
            thumbnailSelected={thumbnailSelected}
            url={selectedUrl} />)
      }
    }
  },[imageUrlArray, isFullScreen, thumbnailIndex, thumbnailSelected]);

  const addToBeginningOfViewableIndexArray = useCallback(
    (index:number) => {
      if(viewableThumbnailIndexes) {
        const viewableIndexOfThumbnail = viewableThumbnailIndexes.indexOf(index);
        if(
          (viewableIndexOfThumbnail === 0 && index !== 0) || 
          viewableIndexOfThumbnail === -1
        ) {
          const newVisableArray: number[] = [];
          if(index < thumbnailCount -1 ) {
            const indexOffsetDifference = thumbnailCount - 1 - index;
            const newIndexOfCurrentVisibleThumbnails = index + indexOffsetDifference;
            for(let x = 0; x < thumbnailCount; x++) {
              newVisableArray.unshift(newIndexOfCurrentVisibleThumbnails - x);
            }
          } else {
            for(let x = 0; x < thumbnailCount; x++) {
              newVisableArray.unshift(index - x);
            }
          }
          setViewableThumbnailIndexes(newVisableArray);
        }
      }
    },
    [thumbnailCount, viewableThumbnailIndexes, setViewableThumbnailIndexes]
  )

  const addToEndOfViewableIndexArray = useCallback(
    (index:number) => {
      if(viewableThumbnailIndexes) {
        const viewableIndexOfThumbnail = viewableThumbnailIndexes.indexOf(index);
        if(
          (viewableIndexOfThumbnail === thumbnailCount -1 || 
          viewableIndexOfThumbnail === -1) && 
          index <= imageUrlArray.length -1
        ) {
          const newVisableArray: number[] = [];
          if(index + thumbnailCount - 2 < imageUrlArray.length -1 ) {
            for(let x = 0; x < thumbnailCount; x++) {
              newVisableArray.push(index + x);
            }
          } else {
            const indexOffset = imageUrlArray.length - 1 - index
            const indexOffsetDifference = thumbnailCount - 1 - indexOffset;
            const beginningIndexOfCurrentVisibleThumbnails = index - indexOffsetDifference;
            for(let x = 0; x < thumbnailCount; x++) {
              newVisableArray.push(beginningIndexOfCurrentVisibleThumbnails + x);
            }
          }
          setViewableThumbnailIndexes(newVisableArray);
        }
      }
    },
    [imageUrlArray, thumbnailCount, viewableThumbnailIndexes, setViewableThumbnailIndexes]
  )

  const handlePrevSide = useCallback(() => {
    if(thumbnailIndex === 0) {
      setThumbnailIndex(imageUrlArray.length - 1);
      addToBeginningOfViewableIndexArray(imageUrlArray.length)
    } else {
      setThumbnailIndex(thumbnailIndex - 1);
      addToBeginningOfViewableIndexArray(thumbnailIndex -1)
    }
  },[imageUrlArray, thumbnailIndex, setThumbnailIndex, addToBeginningOfViewableIndexArray]);

  const handleNextSide = useCallback(() => {
    if(thumbnailIndex < imageUrlArray.length -1) {
      setThumbnailIndex(thumbnailIndex + 1);
      addToEndOfViewableIndexArray(thumbnailIndex + 1)
    } else {
      setThumbnailIndex(0);
      addToEndOfViewableIndexArray(0)
    }
  },[imageUrlArray, thumbnailIndex, setThumbnailIndex, addToEndOfViewableIndexArray]);

  return (
    <Carousel 
      handleNextSlide={handleNextSide}
      handlePrevSlide={handlePrevSide}
      imageUrlArray={imageUrlArray}
      selectedThumbnail={selectedThumbnail}
      setThumbnailIndex={setThumbnailIndex}
      thumbnailIndex={thumbnailIndex}
      viewableThumbnailIndeses={viewableThumbnailIndexes}
      isFullScreen={isFullScreen}
      />
  )
}
