import { useModal } from 'components/Modal'
import { Language } from 'contexts/Localization/types'
import React from 'react'
import SelectLanguageModal from './SelectLanguageModal'

interface ReturnType {
  onPresentLanguageModal: () => void
}

const useLanguageModal = (
  currentLang: string,
  langs: Language[],
  setLang: (lang: Language) => void,
  t: (key: string) => string,
): ReturnType => {
  const [onPresentLanguageModal] = useModal(
    <SelectLanguageModal currentLang={currentLang} langs={langs} setLang={setLang} t={t} />,
    true,
    true,
    'LanguageModal',
  )
  return { onPresentLanguageModal }
}

export default useLanguageModal
