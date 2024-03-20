import { postsMapper } from "@/mapper/posts.mappers"
import { API_URL } from "@/domain/config"
import mdToHTML from "@/utils/snarkdown"
import { useEffect, useState } from "react";

export const metadata = {
  title: "Bocato Blog",
  description: "Recetas de Bocato",
};

const Home = ({ posts }) => {
  const [posts, setPosts] = useState([])
  useEffect(async () => {
    const p = await getPosts()
    console.log(p)
  }, [])

  const getPosts = async () => {
    const res = await fetch(`${API_URL}/posts?populate=*`)
    if (!res.ok) {
      throw new Error('Algo pasó!')
    }
    const { data } = await res.json()
    const dataMapped = data.map(postsMapper)

    return dataMapped
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bocato Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Sumérgete en un Mundo de Dulzura y Sabor: Encuentra Recetas Irresistibles, Noticias Frescas y Todo lo Relacionado con el Encanto de Bocato.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(obj => (
            <article
              key={obj.id}
              className="flex flex-col gap-y-6">
              <div className="aspect-video overflow-hidden rounded-lg shadow">
                <img src={obj.images[0]} alt='Imagen del post' />
              </div>
              <div className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">{obj.publishedAt}</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{obj.category.name}</a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {obj.title}
                    </a>
                  </h3>
                  <p
                    className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: mdToHTML(obj.contentShort) + '...' }}></p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src="https://scontent.cdninstagram.com/v/t39.30808-6/430061789_18324571699189237_3994467676443688793_n.jpg?stp=dst-jpegr_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE1MTUuaGRyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=1XkPJpM_TbgAX9_tS8j&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMxOTYzMzMyMDczOTM0Njk2NQ%3D%3D.2-ccb7-5&oh=00_AfCCGxQpnVQzvn3Z7n4Vb57rWW-HbTFzZ9DISk5G9t86kA&oe=65FDF540&_nc_sid=10d13b" alt="Imagen del autor" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Tania Timaná
                      </a>
                    </p>
                    <p className="text-gray-600">Co-Founder / CTO</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home