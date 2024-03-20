import { STRAPI_URL } from "@/domain/config"

export const postsMapper = ({ id, attributes }) => {
  const {
    category,
    content,
    date,
    image,
    locale,
    publishedAt,
    slug,
    title,
    author,
  } = attributes

  return {
    id,
    title,
    images: image.data?.map(obj => `${STRAPI_URL + obj.attributes.url}`),
    date,
    category: {
      id: category.data.id,
      name: category.data.attributes.name,
    },
    slug,
    content,
    contentShort: content.substring(0, 130),
    locale,
    publishedAt,
    author: {
      id: author.data.id,
      name: author.data.attributes.firstName,
      role: author.data.attributes.role,
      photo: author.data.attributes.photo,
    }
  }
}