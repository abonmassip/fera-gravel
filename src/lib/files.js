import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.resolve(process.cwd(), 'content')

export async function getContent(lang, page) {
  const filePath = path.join(contentDirectory, lang, `${page}.md`)
  const defaultLanguagePath = path.join(contentDirectory, 'ca', `${page}.md`)
  let finalPath = defaultLanguagePath

  try {
    if (fs.statSync(filePath).isFile()) {
      finalPath = filePath
    }
  } catch (err) {
    console.error(`Falta l'arxiu traduït a "content/${lang}/${page}.md", s'utilitzarà la versió en català "content/ca/${page}.md"`)
  }

  const fileContents = fs.readFileSync(finalPath, 'utf-8')
  const frontMatter = matter(fileContents)
  const processedContent = await remark().use(html).process(frontMatter.content)
  const contentHtml = processedContent.toString()
  return contentHtml
}


async function getCauData(fileName, filesPath) {
  const id = fileName.replace(/\.md$/, "")
  const fullPath = path.join(filesPath, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const frontMatter = matter(fileContents)
  const processedContent = await remark().use(html).process(frontMatter.content)
  return {
    id,
    ...frontMatter.data,
    content: processedContent.toString()
  }
}

export async function getCaus(lang) {
  const filesPath = path.join(contentDirectory, lang, 'caus')

  const fileNames = fs.readdirSync(filesPath)

  const causData = await Promise.all(fileNames.map(async (fileName) => getCauData(fileName, filesPath)))

  return causData
}
