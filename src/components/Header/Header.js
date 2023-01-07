import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <Wrapper as="header">
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <MobileActionGroup>
            <button>
              <User size={24} />
            </button>
          </MobileActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <RightActions>
        <Button>
          Subscribe 
        </Button>
        <SubLink href="/">Already a subscriber?</SubLink>
      </RightActions>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding: 0;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding-inline: 32px;
    margin-top: 16px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background-color: revert;
    color: var(--color-gray-900);
    padding: 0;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    justify-content: revert;
    padding: 0;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MobileActionGroup = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const RightActions = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    justify-self: end;
    display: revert;
    position: relative;
  }
`;

const SubLink = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  transform: translateY(8px);
  font-family: var(--font-family-serif);
  text-decoration: underline;
  color: var(--color-gray-900);
  font-style: italic;
  font-size: ${14 / 16}rem;
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 0;
  }
`;

export default Header;
