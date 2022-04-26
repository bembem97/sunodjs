import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "pages/posts")

export function getSortedPostsData() {
  const fileName = fs.readdirSync(postsDir)

  const allPostsData = fileName.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")

    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    function sliceToExcerpt(file, options) {
      file.excerpt = file.content.split("\n").slice(12, 15).join(" ")
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
