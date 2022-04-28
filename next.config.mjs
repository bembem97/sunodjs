/** @type {import('next').NextConfig} */
import remarkFrontmatter from "remark-frontmatter"
import rehypeSlug from "rehype-slug"
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter"
import prism from "remark-prism"
import withPlugins from "next-compose-plugins"

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkMdxFrontmatter, remarkFrontmatter, prism],
            rehypePlugins: [rehypeSlug],
          },
        },
      ],
    })

    return config
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
}

export default nextConfig

// const withPlugins = require("next-compose-plugins")
// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: "@mdx-js/react",
//   },
// })

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = withPlugins(
//   [
//     [
//       withMDX,
//       {
//         // Append the default value with md extensions
//         pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
//       },
//     ],
//   ],
//   nextConfig
// )
