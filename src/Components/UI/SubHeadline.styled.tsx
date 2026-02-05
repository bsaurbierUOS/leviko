import styled from "styled-components";

export const SubHeadline = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 1025px) {
    margin-bottom: 40px;
  }

  @media (max-width: 430px) {
    margin-bottom: 28px;
    padding: 0 24px 0 24px;
  }
`;
