// Updated layout.tsx with OpenGraph image configuration

import React from 'react';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Northernware',
  description: 'A brief description of Northernware.',
  openGraph: {
    images: ['/path/to/northernware-thumbnail.png'], // Add image configuration for OpenGraph
  },
};

const Layout: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;