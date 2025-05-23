import { chakra, Text, Flex } from '@chakra-ui/react';
import React from 'react';

import type { ItemsProps } from './types';
import type { SearchResultTx } from 'types/api/search';

import dayjs from 'lib/date/dayjs';
import * as TxEntity from 'ui/shared/entities/tx/TxEntity';
import HashStringShortenDynamic from 'ui/shared/HashStringShortenDynamic';

const SearchBarSuggestTx = ({ data, isMobile }: ItemsProps<SearchResultTx>) => {
  const icon = <TxEntity.Icon/>;
  const hash = (
    <chakra.mark overflow="hidden" whiteSpace="nowrap" fontWeight={ 700 }>
      <HashStringShortenDynamic hash={ data.transaction_hash } noTooltip/>
    </chakra.mark>
  );
  const date = dayjs(data.timestamp).format('llll');

  if (isMobile) {
    return (
      <>
        <Flex alignItems="center">
          { icon }
          { hash }
        </Flex>
        <Text color="text.secondary">{ date }</Text>
      </>
    );
  }

  return (
    <Flex columnGap={ 2 }>
      <Flex alignItems="center" minW={ 0 }>
        { icon }
        { hash }
      </Flex>
      <Text color="text.secondary" textAlign="end" flexShrink={ 0 } ml="auto">{ date }</Text>
    </Flex>
  );
};

export default React.memo(SearchBarSuggestTx);
