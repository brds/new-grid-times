import { css } from 'styled-components';

export function getClampedStyle(maxNbLines) {
  return css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${maxNbLines};
    overflow: hidden;
  `
};
