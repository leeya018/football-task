import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
  text-decoration: underline;
`;
const TableItem = styled.table`
  border: 1px solid black;
  margin: 0;
`;
const Row = styled.tr`
  border: 1px solid black;
`;
const RowItem = styled.td`
  border: 1px solid black;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Table({ list, onUpdateChosenIndex }) {
  let history = useHistory();

  useEffect(() => {
    history.push("/teams");
  }, []);

  function updateChosenIndex(groupIndex) {
    onUpdateChosenIndex(groupIndex);
    history.push(`/teams/${groupIndex}`);
  }
  return (
    <Container>
      <Title>Content</Title>
      <SubContainer>
        <TableItem>
          <Row>
            <th>Name</th>
            <th>Founded</th>
            <th>Address</th>
          </Row>
          {list.map((item) => {
            return (
              <Row onClick={() => updateChosenIndex(item.id)}>
                <RowItem>{item.name}</RowItem>
                <RowItem>{item.founded}</RowItem>
                <RowItem>{item.address}</RowItem>
              </Row>
            );
          })}
        </TableItem>
      </SubContainer>
    </Container>
  );
}