import { useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import { DashboardContainer, Seperator, Wrapper } from "./dashboard.styled";

const Dashboard = () => {
  const [active, setActive] = useState("profile");

  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    profilepicture:
      "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const onActiveHandler = (tab) => {
    setActive(tab);
  };

  return (
    <DashboardContainer container>
      <Navbar {...{ active, onActiveHandler }} />
      <Wrapper>
        <Header {...{ active, user }} />
        <Seperator orientation="horizontal" />
      </Wrapper>
    </DashboardContainer>
  );
};

export default Dashboard;

// <Profile {...{ active }} />
