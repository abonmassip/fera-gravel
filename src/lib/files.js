import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export function getFilesData() {
  return path.resolve(process.cwd(), 'content')
}

const contentDirectory = path.resolve(process.cwd(), 'content')

export async function getContent(lang, page) {
  const fullPath = path.join(contentDirectory, lang, `${page}_${lang}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const frontMatter = matter(fileContents)
  const processedContent = await remark().use(html).process(frontMatter.content)
  const contentHtml = processedContent.toString()
  return contentHtml
}

// // Directory of the markdown files
// const filesDirectory = path.resolve(process.cwd(), 'content')

// // Return list of files and subdirectories ('en/filename.md')
// function getAllFileNames(directoryPath, filesList = []) {
//   const files = fs.readdirSync(directoryPath)

//   files.forEach((file) => {
//     if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
//       filesList = getAllFileNames(`${directoryPath}/${file}`, filesList)
//     } else {
//       filesList.push(path.join(path.basename(directoryPath), '/', file))
//     }
//   })

//   // Filter only .md files
//   const filteredList = filesList.filter((file) => file.includes('.md'))
//   return filteredList
// }

// // Get info from files
// export function getFilesData() {
//   // Get list of .md files
//   const fileNames = getAllFileNames(filesDirectory)

//   // Use gra-matter to collect information from the files
//   const allFilesData = fileNames.map((fileName) => {
//     const id = fileName.split('/')[1].replace(/\.md$/, '')
//     const fullPath = path.join(filesDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf-8')
//     const frontMatter = matter(fileContents)

//     return {
//       id,
//       ...frontMatter.data
//     }
//   })
// }

// // Separate file name and language
// export function getAllFileIds() {
//   const fileNames = getAllFileNames(filesDirectory)

//   // Split the 'en' and 'filename' parts of ['en/filename.md']
//   return fileNames.map((fileName) => ({
//     params: {
//       id: fileName.split('/')[1].replace(/\.md$/, ''),
//       lang: fileName.split('/')[0]
//     }
//   }))
// }

// // Make data available from the file
// export async function getContentData(id) {
//   const fullPath = path.join(filesDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf-8')
//   const frontMatter = matter(fileContents)

//   const processedContent = await remark().use(html).process(frontMatter.content)

//   const contentHtml = processedContent.toString()
//   return {
//     id,
//     ...frontMatter,
//     contentHtml
//   }
// }
