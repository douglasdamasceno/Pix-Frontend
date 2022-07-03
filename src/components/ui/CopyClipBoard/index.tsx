import {CopyToClipboard} from 'react-copy-to-clipboard';
import * as Styles  from './styles';

import IconCopy from "../../../assets/copy.svg";

interface CopyClipBoardProps { 
    onClick: () => void;
}

export default function CopyClipBoard({onClick}:CopyClipBoardProps) {
  return (
      <Styles.Container>
            <Styles.ContainerValue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique potenti bibendum Lorem ipsum dolor
          </Styles.ContainerValue>
          <Styles.ButtonCopy onClick={onClick}>
              <img src={IconCopy} alt="Copy" />
          </Styles.ButtonCopy>
    </Styles.Container>
  )
}
