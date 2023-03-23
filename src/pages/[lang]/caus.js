import useTranslation from '@/src/lib/useTranslation'

export default function Caus () {
  const { t } = useTranslation()
  return(
    <div style={{height: '70vh', textAlign: 'center'}}>
      <h1>{t('caus')}</h1>
    </div>
  )
}
