import styled from "styled-components";

export const TableCard = styled.section`
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

export const UpdatedAt = styled.p`
  margin: 8px 0 0;
  color: #90a5c1;
  font-size: 0.95rem;
`;

export const TableScroll = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #0f1724;
  border-radius: 16px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background: #18263a;
  color: #e8f1ff;
`;

export const HeadCell = styled.th`
  padding: 14px 16px;
  text-align: left;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const BodyRow = styled.tr`
  border-bottom: 1px solid #1f2e45;

  &:nth-child(even) {
    background: #131e2e;
  }
`;

export const Cell = styled.td`
  padding: 14px 16px;
  color: #d5e2f4;
`;

export const NumericCell = styled(Cell)`
  text-align: right;
  font-variant-numeric: tabular-nums;
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
