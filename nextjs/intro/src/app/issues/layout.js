
export default function IssuesLayout({children}) {
  return (
    <div>
        <aside>
        <IssuesList/>
        </aside>
        {children}
    </div>
  )
}
