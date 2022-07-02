import {CopyToClipboard} from 'react-copy-to-clipboard';
import * as Styles  from './styles';

import IconCopy from "../../../assets/copy.svg";

export default function CopyClipBoard() {
  return (
      <Styles.Container>
            <Styles.ContainerValue>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique potenti bibendum Lorem ipsum dolor
          </Styles.ContainerValue>
          <Styles.ButtonCopy>
              <img src={IconCopy} alt="Copy" />
          </Styles.ButtonCopy>
    </Styles.Container>
  )
}
