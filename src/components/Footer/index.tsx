import React from 'react'
import { useTranslation } from 'react-i18next'
import { SFooter } from './footer.style'

export default function Footer(): JSX.Element {
  const { t } = useTranslation()
  return (
    <SFooter>
      <h3>
        {t('appTitle')}
        {t('footer.text')}
        <span aria-label="heart">💜</span> {t('footer.by')}
        <a href="https://github.com/camimaya21" target="blank">
          @camimaya21
        </a>
      </h3>
    </SFooter>
  )
}
