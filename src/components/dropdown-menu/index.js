import { useRouter } from 'next/router'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import styles from './dropdown-menu.module.css'

export default function DropdownMenu({ content }) {
  const { title, submenu } = content;
  const router = useRouter()

  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger>{title}</RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content>
          {submenu.map(({text, url}) => (
            <RadixDropdownMenu.Item key={text} onSelect={() => router.push(url)}>
              {text}
            </RadixDropdownMenu.Item>
          ))}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  )
}
