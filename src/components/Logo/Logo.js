import Image from 'next/image'
import logoSVG from '@public/img/logo-svg-nobackground.svg'

export default function Logo() {
  return (
    <div style={{position: 'relative', height: '100%', width: '100%'}}>
      <Image src={logoSVG} alt="Logo" fill priority/>
    </div>
  )
}
