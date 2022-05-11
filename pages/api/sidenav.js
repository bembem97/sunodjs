// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSortedPostsData } from "lib/posts"

export default function handler(req, res) {
  const data = getSortedPostsData()
  const slug = Array.from(data, (d) => d.slug)

  res.status(200).json(slug)
}
