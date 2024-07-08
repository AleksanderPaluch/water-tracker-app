import { NavLink } from "react-router-dom"
import Page from "../../components/Page/Page"

const NotFoundPage = () => {
  return (
       
    <Page>
   
      <h1>OOOps page not found</h1>
      <NavLink to="/" >HomePage</NavLink>
  
    </Page>

  )
}

export default NotFoundPage
