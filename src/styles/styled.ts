import styled from '@emotion/styled';
import background from '../assets/background.svg';

export const StyledBannerWrapper = styled('div')`
  background: linear-gradient(
    72.7deg,
    #1b283c -16.89%,
    #1f2f46 52.58%,
    #203048 62.94%,
    #253753 76.13%,
    #1e2d44 83.11%,
    #1b283c 83.23%,
    #2f476a 85.38%,
    #213149 85.58%,
    #243651 90.28%,
    #263854 93.52%
  );
  @media screen and (max-width: 834px) {
    background: linear-gradient(
      72.7deg,
      #1b283c -16.89%,
      #1f2f46 52.58%,
      #203048 62.94%,
      #253753 76.13%,
      #1e2d44 83.11%,
      #1b283c 83.23%,
      #2f476a 85.38%,
      #213149 85.58%,
      #243651 90.28%,
      #263854 93.52%
    );
  }
  @media screen and (min-width: 1200px) {
    background: url(${background});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top left;
  }
`;

interface IPaddedContainer {
  padding?: string;
}

export const PaddedContainer = styled('div')<IPaddedContainer>`
  padding-top: ${(props) => props.padding || `5%`};
  padding-bottom: ${(props) => props.padding || `5%`};

  @media (max-width: 760px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
`;

export const SectionBackground = styled('div')<any>`
  background: ${(props) => props.color || '#fff'};
`;

export const StyledImage = styled('img')<any>`
  max-width: ${(props) => props.width || '600px'};
  margin: 4%;
`;

export const StyledWidth = styled('div')<any>`
  max-width: ${(props) => props.maxWidth || '100%'};
  width: ${(props) => props.width || '100%'};
`;

export const StyledInput = styled('input')`
  border: none;
  font-size: 1.1rem;
  border-bottom: 1px #ffffff88 solid;
  padding: 15px 20px;
  background: #ffffff00;
  color: #fff;
  transition: 0.53s ease-out;
  width: 100%;

  :hover,
  :focus {
    background: #ffffffff;
    color: #444;
    /* border-bottom: 3px #ffffffb8 solid; */
  }
`;

export const StyledTextArea = styled('textarea')`
  border: none;
  margin: 2rem 0;
  font-size: 1.1rem;
  border-bottom: 1px #ffffff88 solid;
  padding: 15px 20px;
  background: #00000000;
  color: #fff;
  transition: 0.53s ease-out;
  width: 100%;
  font-family: inherit;
  :hover,
  :focus {
    color: #444;
    background: #fff;
    /* border-bottom: 3px #ffffffb8 solid; */
  }
`;
