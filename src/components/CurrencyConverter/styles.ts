import styled from "styled-components";

export const ConverterCard = styled.section`
  width: min(100%, 920px);
  margin: 0 auto 32px;
  padding: 24px;
  border: 1px solid #2b3c55;
  border-radius: 20px;
  background: linear-gradient(180deg, #101927 0%, #0a111b 100%);
  box-shadow: 0 22px 48px rgba(3, 8, 16, 0.45);
`;

export const Heading = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #f4f8ff;
  font-size: 1.5rem;
  line-height: 1.2;
`;

export const Hint = styled.p`
  margin: 6px 0 0;
  color: #90a5c1;
  font-size: 0.95rem;
`;

export const Fields = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(180px, 1fr);
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: grid;
  gap: 8px;
  text-align: left;
`;

export const FieldLabel = styled.span`
  color: #d5e2f4;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const LabelSwitch = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #d5e2f4;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid rgba(118, 180, 255, 0.35);
    outline-offset: 4px;
    border-radius: 10px;
  }
`;

export const SwitchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid #334864;
  border-radius: 999px;
  background: #09111b;
  color: #90c2ff;
  flex-shrink: 0;
`;

const controlStyles = `
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #334864;
  border-radius: 12px;
  background: #09111b;
  color: #f4f8ff;
  font: inherit;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid rgba(118, 180, 255, 0.35);
    outline-offset: 2px;
    border-color: #76b4ff;
  }
`;

export const Input = styled.input`
  ${controlStyles}
`;

export const Select = styled.select`
  ${controlStyles}
`;

export const Result = styled.p`
  margin: 16px 0 0;
  color: #f4f8ff;
  font-size: 1rem;
  text-align: left;
`;

export const StateMessage = styled.div`
  width: min(100%, 920px);
  margin: 0 auto 32px;
  padding: 24px;
  border-radius: 20px;
  border: 1px solid #2b3c55;
  background: linear-gradient(180deg, #101927 0%, #0a111b 100%);
  color: #d5e2f4;
`;
