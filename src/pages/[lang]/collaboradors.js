import useTranslation from '@/src/lib/useTranslation'

export default function Collaboradors () {
  const { t } = useTranslation()
  return(
    <div style={{height: '70vh', textAlign: 'center'}}>
      <h1>{t('collaboradors')}</h1>
    </div>
  )
}
