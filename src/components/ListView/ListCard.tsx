/** @jsxImportSource theme-ui */
import { Flex, Svg, InfoIcon, TooltipBubble  } from '@ape.swap/uikit'
import React, { useState } from 'react'
import { ContentContainer, ListCardContainer, ListExpandedContainer, styles } from './styles'
import { ListCardProps } from './types'

const ListCard: React.FC<ListCardProps> = ({
  serviceTokenDisplay,
  tag,
  title,
  cardContent,
  expandedContent,
  infoContent,
  infoContentPosition,
  expandedContentJustified,
  titleContainerWidth,
  open,
  alignServiceTokens,
}) => {
  const [expanded, setExpanded] = useState(open)
  return (
    <>
      <ListCardContainer onClick={() => setExpanded((prev) => !prev)}>
        <Flex sx={{ ...styles.titleContainer, maxWidth: titleContainerWidth || '290px' }}>
          <Flex sx={{ mr: '10px' }}>
            {alignServiceTokens ? (
              <Flex sx={{ width: '130px', justifyContent: 'flex-end' }}>{serviceTokenDisplay}</Flex>
            ) : (
              serviceTokenDisplay
            )}
          </Flex>
          <Flex sx={{ justifyContent: 'center' }}>
            {tag}
            {title}
          </Flex>
        </Flex>
        <ContentContainer>{cardContent}</ContentContainer>
        {expandedContent && (
          <span style={{ marginRight: '30px' }}>
            <Svg icon="caret" direction={expanded ? 'up' : 'down'} width="15px" />
          </span>
        )}
        {infoContent && (
          <div style={{ display: 'inline-block' }}>
            <TooltipBubble
              placement="bottomRight"
              body={infoContent}
              transformTip={infoContentPosition || 'translate(-82%, 40%)'}
            >
              <InfoIcon width="25px" />
            </TooltipBubble>
          </div>
        )}
      </ListCardContainer>
      {expandedContent && expanded && (
        <ListExpandedContainer justifyContent={expandedContentJustified}>{expandedContent}</ListExpandedContainer>
      )}
    </>
  )
}

export default React.memo(ListCard)
