// * Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getCategoryData } from "lib/posts"

export default function handler(req, res) {
  const data = getCategoryData()

  const categories = Array.from(data, (data) => {
    const category = data.files.file.replace(/\.js$/, "")
    const topic = data.topics.map(
      (file) => "/blog/" + category + "/" + file.replace(/\.mdx$/, "")
    )
    const categoryTitle = category.replace("-", " ").toUpperCase()
    const topicTitle = data.topics.map((topic) =>
      topic.replace(/\.(mdx|js)$/, "").toLowerCase()
    )

    return {
      path: "/blog/" + category,
      child: topic,
      categoryTitle: categoryTitle.replace(/[-]/g, " "),
      topicTitle,
    }
  })

  res.status(200).json(categories)
}
