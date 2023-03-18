import styled from "styled-components";

const ButtonS = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--gray-color);
  }

  i {
    padding-top: 1px;
    font-size: 1.2rem;
  }
`;

export { ButtonS };
