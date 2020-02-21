/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ContentBlock } from '../../sub-patterns/ContentBlock';
import { ContentGroup } from '../../sub-patterns/ContentGroup';
import { ContentItem } from '../../sub-patterns/ContentItem';
import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import { Image } from '../../../components/Image';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Content Block - Simple pattern
 *
 * @param {object} props props object
 * @param {string} props.heading content block heading
 * @param {string} props.copy content block short copy to support the heading
 * @param {object} props.items content block content items
 * @returns {*} Content Block - Segmented pattern
 */
const ContentBlockSegmented = ({ copy, heading, items }) => {
  return (
    <ContentBlock
      heading={heading}
      copy={copy}
      customClassName={`${prefix}--content-block-segmented`}>
      <div data-autoid={`${stablePrefix}--content-block-segmented`}>
        {_renderGroup(items)}
      </div>
    </ContentBlock>
  );
};

/**
 *
 * @param {object} items content item data
 * @returns {*} JSX Component with the media
 */
const _renderGroup = items =>
  items.map((item, index) => (
    <ContentGroup cta={item.cta} heading={item.heading} key={index}>
      <div
        data-autoid={`${stablePrefix}--content-block-segmented__content-group`}>
        {item.mediaType === 'image' && (
          <div data-autoid={`${stablePrefix}--content-block-segmented__media`}>
            <Image {...item.mediaData} />
          </div>
        )}
        <ContentItem {...item.content} key={index} />
      </div>
    </ContentGroup>
  ));

ContentBlockSegmented.propTypes = {
  heading: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};

export default ContentBlockSegmented;
