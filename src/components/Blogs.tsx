import { useEffect, useState } from 'react'
  import Blog from "./Blog";
     import post from './Interfaces'




const Blogs = function(){
const [posts, setPosts] = useState<post[]>([])

const getInfo = () => {fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data: post[]) => setPosts(data))
}

  useEffect(() => 
    {
      getInfo()
    }, 
      [])

  return (<div>
{
posts.map(({ title, body}) => <Blog title={title} body={body}  />)
}
    </div>
  )
}

export default Blogs
