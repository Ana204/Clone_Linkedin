import React from 'react';

import MobileHeader from '../MobileHeader';

import LeftColumn from '../LeftColumn';
import DesktopHeader from '../DesktopHeader';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
 import { Container } from './styles';
 import AdBanner from '../AdBanner';

const Layout: React.FC = () => {
  return (
      <Container>
          <MobileHeader/>
          <DesktopHeader />
        
          <span>
            <AdBanner/>
          </span>

          <main>
            <LeftColumn/>
            <MiddleColumn/>
            <RightColumn/>
          </main>
      </Container>
  )
}

export default Layout;