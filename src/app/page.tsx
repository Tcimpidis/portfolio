import { HomeData } from "@/api/home";
import styles from './page.module.css';
import { HighlightReel } from "@/components/highlight-reel";
import Markdown from "react-markdown";
import './page.css';
import { ToolList } from "@/components/tools";
import { ToolData } from "@/api/portfolio";

export default function Home() {
  const { summary, highlightReel } = HomeData
  return (
    <main >
      <div className={styles.title_container}>
        <span className={styles.title}>Home</span>
      </div>
      <div className={styles.summary_container}>
        <Markdown className={styles.summary}>{summary}</Markdown>
      </div>
      <div >
        <HighlightReel highlightReel={highlightReel} />
      </div>
      <div className={styles.tool_container}  id="tool_detail">
        <ToolList toolData={ToolData} />
      </div>
    </main>
  )
}
