'use client';
import Image from 'next/image';
import styles from './index.module.css';

export const DownloadResume = () => {
  const handleOnClick = () => {
    const url = '/assets/Jamin_Resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jamin_Tcimpidis_Resume';
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <button className={styles.button} onClick={handleOnClick}> 
        Download
      <Image 
        alt="adobe_pdf_icon"
        className={styles.icon}
        height={20}
        src={'/assets/adobe_PDF_icon.svg'}
        width={18}
      />
    </button>
  )
} 