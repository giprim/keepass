import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface IIconTitleText {
  icon: ReactNode;
  title: string;
  text: string;
}

const Styledbox = styled('div')`
  width: 390px;
  margin-bottom: 1.5rem;
`;

const StyledIcon = styled('div')`
  padding-bottom: 1rem;
`;
const StyledTitle = styled('h3')`
  padding-bottom: 1rem;
  font-size: 1.4rem;
`;

const StyledText = styled('p')`
  color: #858585;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;

const IconTitleText: React.FC<IIconTitleText> = ({ icon, text, title }) => {
  return (
    <Styledbox>
      <StyledIcon>{icon}</StyledIcon>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
    </Styledbox>
  );
};

export default IconTitleText;
