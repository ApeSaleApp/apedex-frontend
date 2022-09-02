/** @jsxImportSource theme-ui */
import { Flex } from 'components/Flex'
import { InfoIcon, Svg } from 'components/Svg'
import { TooltipBubble } from 'components/TooltipBubble'
import React, { useState } from 'react'
import { ContentContainer, DropDownIcon, ListCardContainer, ListExpandedContainer, styles } from './styles'
import { ListCardProps } from './types'

const MobileListCard: React.FC<ListCardProps> = ({
  serviceTokenDisplay,
  tag,
  title,
  cardContent,
  expandedContent,
  infoContent,
  infoContentPosition,
  open,
  expandedContentSize,
}) => {
  const [expanded, setExpanded] = useState(open)
  return (
    <>
      <ListCardContainer onClick={() => setExpanded((prev) => !prev)}>
        <Flex sx={{ width: '100%', justifyContent: 'space-between' }}>
          <Flex sx={styles.titleContainer}>
            {serviceTokenDisplay}
            <Flex sx={{ flexDirection: 'column', marginLeft: '10px' }}>
              {tag}
              {title}
            </Flex>
          </Flex>
          <Flex>
            {expandedContent && (
              <span style={{ marginRight: '30px' }}>
                <Svg icon="caret" direction={expanded ? 'up' : 'down'} width="15px" />
              </span>
            )}
            {infoContent && (
              <div style={{ display: 'inline-block' }}>
                <TooltipBubble body={infoContent} transformTip={infoContentPosition || 'translate(-82%, 50%)'}>
                  <InfoIcon width="25px" color="textPrimary" />
                </TooltipBubble>
              </div>
            )}
          </Flex>
        </Flex>
        <ContentContainer>{cardContent}</ContentContainer>
      </ListCardContainer>
      {expandedContent && expanded && (
        <ListExpandedContainer size={expandedContentSize}>{expandedContent}</ListExpandedContainer>
      )}
    </>
  )
}

export default React.memo(MobileListCard)
