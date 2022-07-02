import { Item } from "./styles";

interface ItemSideBarProps { 
    icon: string;
    alt?: string;
    onClick?: () => void;
    width?: number;
}

export const ItemSideBar: React.FC<ItemSideBarProps> = ({ icon, width, alt,onClick }: ItemSideBarProps) => {
  return (
    <Item onClick={onClick}>
          <img src={icon} width={width} alt={alt} />
    </Item>
  )
}
