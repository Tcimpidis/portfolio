import { ToolData, ToolsList } from '@/api/portfolio';
import styles from './page.module.css';
import { ToolList } from '@/components/tools';


export default async function Tools() {

  return (  
    <div className={styles.container}  id="tool_detail">
      <ToolList toolData={ToolData} toolList={ToolsList} />
    </div>
  )
}