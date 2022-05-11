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

    function sliceToExcerpt(file, options) {
      const FILE = file.content.split("\n")
      const START = FILE.indexOf("{/* start */}\r")
      const END = FILE.indexOf("{/* end */}\r")

      // file.excerpt = file.content.split("\n").slice(1, 7).join(" ")
      file.excerpt = FILE.slice(START + 1, END).join(" ")
    }

    const matterResult = matter([fileContents].join("\n"), {
      excerpt: sliceToExcerpt,
      excerpt_separator: "/* end */",
    })

    // console.log(matterResult)

    // return {
    //   slug,
    //   ...matterResult.data,
    // }
    return { slug, ...matterResult }
  })

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return a < b ? 1 : a > b ? -1 : 0
  })

  // return allPostsData
}
