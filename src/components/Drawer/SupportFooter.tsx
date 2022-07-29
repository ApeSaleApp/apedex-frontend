import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { ActionItem, ContactList, MoreActions, SupportFooterWrapper, Version } from './style'

export const SupportFooter = () => {
  const { t } = useTranslation()
  return (
    <SupportFooterWrapper>
      <MoreActions>
        <ActionItem>
          <a href="/">
            <span className="icon-ask-circle" />
            {t('Support')}
          </a>
        </ActionItem>
        <ActionItem>
          <a href="/">
            <span className="icon-document" />
            {t('Documents')}
          </a>
        </ActionItem>
        <ActionItem>
          <a href="/">
            <span className="icon-alert" />
            {t('Announcements')}
          </a>
        </ActionItem>
      </MoreActions>
      <ContactList>
        <a href="/">
          <span className="icon-home" />
        </a>
        <a href="/">
          <span className="icon-telegram" />
        </a>
        <a href="/">
          <span className="icon-telegram" />
        </a>
        <a href="/">
          <span className="icon-discord" />
        </a>
        <a href="/">
          <span className="icon-medium" />
        </a>
        <a href="/">
          <span className="icon-twitter" />
        </a>
      </ContactList>
      <Version>v1.0.0</Version>
    </SupportFooterWrapper>
  )
}
