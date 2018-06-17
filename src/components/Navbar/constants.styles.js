import { css } from 'styled-components';

export const collapsedWidth = 70;
export const expandedWidth = 200;
export const width = expanded => expanded ? expandedWidth : collapsedWidth;
export const height = 100;

const animationSpeed = '0.3s';
export const widthAnimation = css`
  -webkit-transition: width ${animationSpeed} ease-in-out;
  -moz-transition: width ${animationSpeed} ease-in-out;
  -o-transition: width ${animationSpeed} ease-in-out;
  transition: width ${animationSpeed} ease-in-out;
`;
