import Image from 'next/image'

import styles from './page.module.css';
import { ResumeDetail } from '@/components/resume';
import { ResumeData } from '@/api/resume';
import { DownloadResume } from '@/components/download-resume';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/common/components/loading-spinner';

export default async function Resume() {
  const {education, experience, extracurricular, summary } =  ResumeData;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <span className={styles.title}>Resume</span>
        </div>
        <div className={styles.detail_container}>
        <div className={styles.download_container}>
            <Suspense fallback={<LoadingSpinner />}>
              <DownloadResume />
            </Suspense>
          </div>
          <div className={styles.container}>
            <div className={styles.section}>
              <span className={styles.section_title}>Summary</span>
              <div className={styles.summary_detail}>
                {summary}
              </div>
            </div>
            <div className={styles.section}>
              <span className={styles.section_title}>Experience</span>
              <div className={styles.section_detail}>
                {experience.map((detail, i) => (
                  <ResumeDetail detail={detail} key={i}/>
                ))}
              </div>
            </div>
            <div className={styles.section}>
              <span className={styles.section_title}>Education</span>
              <div className={styles.section_detail}>
                {education.map((detail, i) => (
                  <ResumeDetail detail={detail} key={i}/>
                ))}
              </div>
            </div>
            <div className={styles.section}>
              <span className={styles.section_title}>Extracurricular</span>
              <div className={styles.section_detail}>
                {extracurricular.map((detail, i) => (
                  <ResumeDetail detail={detail} key={i}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
