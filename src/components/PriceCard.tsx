import React from 'react';
import styled from '@emotion/styled';
import ButtonLink from './link/ButtonLink';
import FlexContainer from './FlexContainer';

interface IStyledCard {
  recommend?: boolean;
}

const StyledPriceCard = styled('div')<IStyledCard>`
  min-width: 320px;
  max-width: 420px;
  background: #fff;
  color: #555;
  padding: 10px;
  margin: 2px;
  margin-top: 1rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 3px 10px #88888844;
  transition: 0.33s ease-in-out;
  :hover {
    box-shadow: 0px 0px 45px #88888844;
    border: none;
    z-index: 200;
  }

  h2 {
    margin: 2rem 0;
  }

  h4 {
    padding: 15px 0;
    background: ${(props) =>
      props.recommend
        ? ` linear-gradient(90.92deg, rgba(82, 0, 82, 0.75) -1.4%, rgba(38, 56, 84, 0.99) 105.93%);`
        : '#fff'};
    color: white;
    margin-bottom: 18px;
    border-radius: 5px;
  }

  h3 {
    font-size: 1.6em;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 3rem 0;
    li {
      padding: 15px 0;
    }
  }

  a {
    margin: 0;
  }
`;

interface IPriceCard {
  recommended?: boolean;
  planType: string;
  price: number;
  planPackage?: string[];
  url?: string;
}

const PriceCard: React.FC<IPriceCard> = ({
  recommended,
  planType,
  price,
  url,
  planPackage,
}) => {
  return (
    <StyledPriceCard recommend={recommended}>
      {recommended && (
        <div className='recommend'>
          <h4>Recommended</h4>
        </div>
      )}
      <h2>{planType || 'Startup'}</h2>
      <h3>{price ? `$${price}` : '$99.99'}</h3>

      <ul>
        {planPackage?.length ? (
          planPackage.map((item) => <li>{item}</li>)
        ) : (
          <>
            <li>10 Software listing</li>
            <li>Protection across two browsers</li>
            <li>100 Password limit</li>
            <li>Weekly password backup</li>
          </>
        )}
      </ul>
      <FlexContainer justify='center'>
        <ButtonLink
          backgroundProps='#263854'
          text='7 days free trial'
          url={url || ''}
        />
      </FlexContainer>
    </StyledPriceCard>
  );
};

export default PriceCard;
