const { API_URL } = require("@/domain/config")
const { postsMapper } = require("@/mapper/posts.mappers")

export const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts?populate=*`)
  if (!res.ok) {
    throw new Error('Algo pasó!')
  }
  const { data } = await res.json()
  const dataMapped = data.map(postsMapper)

  return dataMapped
}