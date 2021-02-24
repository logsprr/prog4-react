import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid rgba(112, 112, 112, 0.09);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-bottom: 0px;
  color: #707070;
  font-weight: bolder;
`;

export const SubTitle = styled.p`
  margin-top: 8px;
  font-weight: bolder;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 1rem;
  font-weight: bolder;
  border: 2px solid #000;
  border-radius: 8px;
`;
