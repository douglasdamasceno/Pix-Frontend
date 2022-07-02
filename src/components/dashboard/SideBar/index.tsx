import IconMenu  from "../../../assets/icon-park-outline_menu.svg";
import IconAvatar  from "../../../assets/avatar.svg";
import IconMoney  from "../../../assets/money.svg";
import IconLogout from "../../../assets/log-out.svg";

import { Container, Divider, NavBottom, NavTop } from "./styles";
import { ItemSideBar } from "../ItemSideBar";

export default function SideBar() {
  return (
    <Container>
      <NavTop>
        <ItemSideBar
          icon={IconMenu}
          alt="menu"
          width={24}
          onClick={() => {}}
        />
       
        <ItemSideBar
          icon={IconAvatar}
          alt="home"
          width={48}
          onClick={() => {}}
        />
      </NavTop>
      
      <Divider />
      
      <NavBottom>
         <ItemSideBar
          icon={IconMoney}
          alt="money"
          width={24}
          onClick={() => {}}
        />
         <ItemSideBar
          icon={IconLogout}
          alt="logout"
          width={24}
          onClick={() => {}}
        />
      </NavBottom>
    </Container>
  )
}
