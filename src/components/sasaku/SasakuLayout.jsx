import SasakuNavbar from './SasakuNavbar'
import SasakuFooter from './SasakuFooter'

export default function SasakuLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SasakuNavbar />
      <main className="flex-1">{children}</main>
      <SasakuFooter />
    </div>
  )
}
