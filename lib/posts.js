import fs from "fs"
import path from "path"
import matter from "gray-matter"

// const postsDir = path.join(process.cwd(), "pages/blog/react-api")

// export function getSortedPostsData() {
//   const fileName = fs.readdirSync(postsDir)

//   const allPostsData = fileName.map((fileName) => {
//     const slug = fileName.replace(/\.mdx$/, "")

//     const fullPath = path.join(postsDir, fileName)
//     const fileContents = fs.readFileSync(fullPath, "utf8")

//     const matterResult = matter(fileContents)

//     return { slug, ...matterResult.data }
//   })

//   return allPostsData.sort(({ api: a }, { api: b }) => b - a)
// }

// * Path to blog page (./pages/blog)
const categoryPath = path.join(process.cwd(), "pages/blog")

// * Get Category Directories
export const getCategoryDir = () => {
  const fileName = fs.readdirSync(categoryPath)
  const images = fs.readdirSync(path.join(process.cwd(), "public/blogs"))

  const img = images.filter((img) => img.match(/\.(jpg|jpeg|png)$/g))
  const folders = fileName.filter((f) => !f.match(/\.js$/))

  const newData = Array.from(folders, (file, i) => ({
    file,
    img: `/blogs/${img[i]}`,
    title: file.replace("-", " "),
  }))

  return newData
}

// * Get MDX File Frontmatters
export const getFileContent = (id) => {
  const categoryDir = getCategoryDir()

  const result = categoryDir.filter((item) => item.file === id)

  const metadata = result.map((item) => {
    const fullPath = path.join(categoryPath, item.file)
    const files = fs.readdirSync(fullPath)

    // * Get the metadata of every blog file
    const getData = files.map((file) => {
      const filePath = path.join(fullPath, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const grayMatter = matter(fileContent)

      return grayMatter.data
    })

    return getData
  })

  return metadata
}

export function getCategoryData() {
  const categoryDir = getCategoryDir()

  // * Get page blog result (./page/blog/[category]). Outputs: [how-to, react-api, ...others]
  const topics = categoryDir.map((categoryFolder) => {
    const fullPath = path.join(categoryPath + "/" + categoryFolder.file)
    const readDir = fs.readdirSync(fullPath)

    return readDir
  })

  const newArray = Array.from(categoryDir, (files, i) => ({
    files,
    topics: topics[i],
  }))

  return newArray
}
