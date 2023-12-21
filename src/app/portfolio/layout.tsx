export default async function Layout(props: {
  children: React.ReactNode
  tool: React.ReactNode
  experience: React.ReactNode
}) {
  return (
    <>
      {props.children}
      {props.tool}
      {props.experience}
    </>
  )
}