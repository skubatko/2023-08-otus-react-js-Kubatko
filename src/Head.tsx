import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

export const defaultSetting = {
  titleTemplate: '%s - Inet Shop',
  defaultTitle: 'Inet Shop',
};

export const Head = memo(() => (
  <Helmet {...defaultSetting}>
    <meta name="description" content="Интернет-магазин" />
  </Helmet>
));

Head.displayName = 'Head';
