import styled, { css } from 'styled-components';

export function getClampedStyle(maxNbLines) {
  return css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${maxNbLines};
    overflow: hidden;
  `
}

export const BorderedAnchor = styled.a`
  --space: 16px;
  :not(:last-of-type) {
    border-bottom: solid 1px var(--color-gray-300);
    padding-bottom: var(--space);
  }
  :not(:first-of-type) {
    padding-top: var(--space);
  }
`;