import {useRouter} from "next/router"
import { Fragment } from 'react'


const article = () => {

  // const router = useRouter()
  const {id} = router.query
  return (
    <Fragment>
{
      // <div>This is an Article {id}</div>
      }
    </Fragment>
  )
}
export default article;