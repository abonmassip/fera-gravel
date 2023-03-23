import useTranslation from '@/src/lib/useTranslation'

export default function Agencia () {
  const { t } = useTranslation()
  return(
    <div style={{height: '70vh', textAlign: 'center'}}>
      <h1>{t('agencia')}</h1>
    </div>
  )
}
