/** @jsxImportSource theme-ui */
import React from 'react'
import { LiquidityWidget } from 'components/LiquidityWidget'
import { Flex } from 'theme-ui'
import { merge } from 'lodash'
import { useTranslation } from 'contexts/Localization'
import { Modal, ModalHeader, ModalProvider } from 'components/Modal'
import { Link } from 'components/Link'
import { HelpIcon } from 'components/Svg'
import { Heading } from 'components/Heading'

interface LiquidityModalProps {
  widgetProps?: Record<string, any>
  modalProps?: Record<string, any>
  handleClose?: () => void
}

const LiquidityModal: React.FC<LiquidityModalProps> = ({ widgetProps, modalProps: newModalProps, handleClose }) => {
  const { t } = useTranslation()
  const modalProps = {
    minWidth: '385px',
    maxWidth: '385px',
    style: {
      zIndex: 10,
      overflowY: 'auto',
      maxHeight: 'calc(100% - 30px)',
    },
  }

  return (
    <ModalProvider>
      <Modal open {...merge(modalProps, newModalProps)}>
        <ModalHeader onDismiss={handleClose}>
          <Flex
            sx={{
              Svg: {
                marginLeft: 0,
                marginRight: '11px',
              },
              flexDirection: 'row-reverse',
            }}
          >
            <Link
              href="https://apeswap.gitbook.io/apeswap-finance/product-and-features/exchange/liquidity"
              target="_blank"
              textAlign="center"
            >
              <HelpIcon width="20px" style={{ marginLeft: '10px' }} />
            </Link>
            <Heading sx={{ fontSize: '22px', lineHeight: '33px' }} as="h4">
              {t('Add Liquidity')}
            </Heading>
          </Flex>
        </ModalHeader>
        <LiquidityWidget {...widgetProps} onCancel={handleClose} />
      </Modal>
    </ModalProvider>
  )
}

export default LiquidityModal
