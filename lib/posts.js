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

  const img = images.filter((ext) => ext.match(/\.(jpg|jpeg|png)$/g))
  const folders = fileName.filter((file) => !file.match(/\.js$/))

  // console.log(folders)

  const newData = Array.from(folders, (file, i) => {
    // console.log("FILE ->", file)
    return {
      file: file.toLocaleLowerCase(),
      img: `/blogs/${img[i]}`,
      title: file.replace(/[-]/g, " "),
    }
  })
  return newData
}

// * Get MDX File Frontmatters
export const getFileContent = (fileName = null) => {
  const categoryDir = getCategoryDir()
  const FILE = fileName

  let metadata
  const getDataDir = (item) => {
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
  }
  // * Get 1 category
  if (FILE) {
    const category = categoryDir.filter((item) => item.file === FILE)
    metadata = category.map(getDataDir)
  }

  // * Get all category
  if (FILE === null) {
    metadata = categoryDir.map(getDataDir)
  }

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
