import React,{useEffect } from "react";
import {Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;
const TableItem = styled.table`
  margin:0;
`;
const SubContainer = styled.div`
  display:flex;
  justify-content:center;
`;

export default function Table({ list,onUpdateChosenIndex }) {
  let history = useHistory();

  useEffect(() => {
    history.push("/teams");
  }, []);

  function updateChosenIndex(groupIndex){
    onUpdateChosenIndex(groupIndex)
    history.push(`/teams/${groupIndex}`)
  }
  return (
    <Container>
        <Title>Content</Title>
      <SubContainer>
        <TableItem>
          <tr>
            <th>Name</th>
            <th>Founded</th>
            <th>Address</th>
          </tr>
          {list.map((item) => {
            return (
              <tr onClick={()=>updateChosenIndex(item.id)}>
                <td>{item.name}</td>
                <td>{item.founded}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </TableItem>
      </SubContainer>
    </Container>
  );
}
// function About() {
//   let history = useHistory();
//   useEffect(() => {
//     history.push("/teams")
//   }, []);
//   return <h2>About</h2>;
// }

// function Users() {
//   const { id } = useParams() || 0;
//   return <h2>Users {id}</h2>;
// }
