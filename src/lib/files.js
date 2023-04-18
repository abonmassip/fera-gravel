import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.resolve(process.cwd(), 'content')

export async function processMarkdown(text) {
  const processedContent = await remark().use(html).process(text)
  return processedContent.toString()
}

async function extractData(filePath, fileName) {
  const fileContents = fs.readFileSync(path.join(filePath, fileName), 'utf-8')
  const frontMatter = matter(fileContents)
  const processedContent = await remark().use(html).process(frontMatter.content)

  return {
    id: fileName.replace(/\.md$/, ""),
    ...frontMatter.data,
    content: processedContent.toString()
  }
}

export async function getFile(lang, page) {
  const filePath = path.join(contentDir, lang)
  const fileName = page + '.md'
  const content = await extractData(filePath, fileName)
  return content
}

export async function getFolder(lang, folder) {
  const folderPath = path.join(contentDir, lang, folder)
  const fileNames = fs.readdirSync(folderPath)
  const filesData = await Promise.all(
    fileNames.map(async (fileName) => extractData(folderPath, fileName))
  )
  return filesData
}
