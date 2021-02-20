import React, { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function randomNum(){
  return Math.floor(Math.random()*100)
}

const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;
const Image = styled.div`
  background: ${(props) => `url(${props.icon})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 5em;
  height: 5em;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
`;
const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
`;
export default function GroupDetails() {
  let { id } = useParams();

  const [team, setTeam] = useState({})

  let icon ="data:image/jpeg;base64,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"
  
  useEffect(() => {
    let payload = {
      headers: {
        "X-Auth-Token": "2abea09590b44211a919df3d2798bb41",
        "content-type": "application/json",
      },
    };
    let url = `https://api.football-data.org/v2/teams/${id}`;
    async function getData() {
      let res = await axios(url, payload);
      let team = await res.data;
      let {name,address,website,crestUrl,lastUpdated}  = team
      console.log(team)
      let squadArr = team.squad.slice(0,10)
      setTeam({name,address,crestUrl,website,lastUpdated,squadArr})
    }
    getData();
  }, []);
  
  return (
    <Container>
      <Title>{team.name}</Title>
      <ImageContainer>
        <Image icon={team.crestUrl}> </Image>
      </ImageContainer>
      <Text>{team.lastUpdated || 1999}</Text>
      <Link href={team.website}>go to site</Link>
      <Text>{team.address}</Text>
      <Title>Players</Title>
      <ul>
        {team.squadArr && team.squadArr.map((player) => {
          return (
            <li>
              <Text>name: {player.name}</Text>
              <Text>shirt number: {player.shirtNumber || randomNum()}</Text>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
