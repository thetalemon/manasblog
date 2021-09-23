
type EyeCatch = {
  url: string,
  height: number,
  width: number
}

type Category = {
id: string,
createdAt: string,
updatedAt: string,
publishedAt: string,
revisedAt: string,
name: string
}

export type Blog = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  body: string,
  eyecatch: EyeCatch,
  category: Category
}

export type BlogContentList = {
  contents: [Blog]
}

export type CategoryContentList = {
  contents: [Category]
}
