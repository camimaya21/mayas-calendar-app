import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import Footer from 'components/Footer'
import { SBasicContainer, SSection } from 'styles/common'

const App: React.FC = () => {
  const { t } = useTranslation()
  return (
    <SBasicContainer>
      <Header pageTitle={t('appTitle')} />
      <SSection>
        <Button text={'Create new event'} />
      </SSection>
      <Footer />
    </SBasicContainer>
  )
}

export default App
