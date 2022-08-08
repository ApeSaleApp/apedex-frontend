/** @jsxImportSource theme-ui */
import { Icon } from 'components/Icons/Icon'
import useIsMobile from 'hooks/useIsMobile'
import React from 'react'
import { ButtonModalStyled, ButtonWrapperStyled } from '../style'
import useLanguageModal from './Modal/useLanguageModal'
import { Language } from './types'

interface Props {
  currentLang: Language
  langs: Language[]
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LangSelectorButton: React.FC<Props> = ({ currentLang, langs, setLang, t }) => {
  const isMobile = useIsMobile()
  const { onPresentLanguageModal } = useLanguageModal(currentLang.language, langs, setLang, t)
  return (
    <ButtonWrapperStyled className={isMobile ? 'icons-only' : ''}>
      <ButtonModalStyled type="button" onClick={onPresentLanguageModal}>
        <img src="/images/language/uk.png" width={27} alt="lang" />
        {!isMobile && currentLang.language}
        {!isMobile && <Icon iconName="icon-keyboard_arrow_down" size="20px" />}
      </ButtonModalStyled>
      {/* <LanguageIcon width="30px" cursor="pointer" onClick={onPresentLanguageModal} /> */}
    </ButtonWrapperStyled>
  )
}

export default React.memo(LangSelectorButton)
