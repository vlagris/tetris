import Button from "@components/Modal/Button.tsx";
import {ModalMenuProps} from "@components/Modal/modal.tsx";


function GameOverMenu({startGame}: ModalMenuProps) {
  return (
    <>
      <h4 className="modal-title">game Over</h4>
      <div className="modal-item">
        <Button
          className="btn btn-green"
          onClick={startGame}
        >new game</Button>
      </div>
      <div className="modal-item">
        <Button className="btn btn-gray">help</Button>
      </div>
    </>
  );
}

export default GameOverMenu;