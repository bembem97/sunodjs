import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "pages/blog/react-api")

export function getSortedPostsData() {
  const fileName = fs.readdirSync(postsDir)

  const allPostsData = fileName.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")

    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(fileContents)

    return { slug, ...matterResult.data }
  })

  return allPostsData.sort(({ api: a }, { api: b }) => b - a)
}

// * Blog Tutorial files
const categoryPath = path.join(process.cwd(), "pages/blog")

export function getCategoryData() {
  const fileName = fs.readdirSync(categoryPath)

  // * output: [react-api.js, ...files]
  const files = fileName.filter((f) => f.match(/\.js$/))

  // * output: [react-api, ...folders]
  const folders = fileName.filter((f) => !f.match(/\.js$/))

  const topics = folders.map((file) => {
    const fullPath = path.join(categoryPath + "/" + file)
    const readFiles = fs.readdirSync(fullPath)

    return readFiles
  })

  const newArray = Array.from(files, (files, i) => ({
    files,
    topics: topics[i],
  }))

  return newArray
}
