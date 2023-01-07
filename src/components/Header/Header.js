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
        <a href="#a">Already a subscriber?</a>
      </RightActions>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding: 0;
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: ${160 / 16}rem 1fr  ${160 / 16}rem;
    align-items: center;
    padding-inline: 32px;
    height: ${98 / 16}rem;
    margin-bottom: 72px;
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
    align-self: end;
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }
  & a {
    font-family: var(--font-family-serif);
    text-decoration: underline;
    color: var(--color-gray-900);
    font-style: italic;
    font-size: ${14 / 16}rem;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    margin: 0;
  }
`;

export default Header;
