import { ToolMap, ToolType } from '@/api/portfolio';
import styles from './page.module.css';
import { ToolList } from '@/components/tools';

async function getToolData() {
  const res = await fetch('http://localhost:3000/portfolio/api/tool-data/', {
    method: "get",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<ToolMap>;
}

async function getToolList() {
  const res = await fetch('http://localhost:3000/portfolio/api/tool-list/', {
    method: "get",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<ToolType[]>;
}


export default async function Tools() {
  const toolList = await getToolList();
  const toolData = await getToolData();

  return (  
    <div className={styles.container}  id="tool_detail">
      <ToolList toolData={toolData} toolList={toolList} />
    </div>
  )
}