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
