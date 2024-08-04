import Modal from "react-modal";
import { KeyboardEvent, MouseEvent } from "react";
import { Image } from "../../types.ts";

type Props = {
  modalImg: Image | null;
  modalIsOpen: boolean;
  onCloseModal: (e: MouseEvent<HTMLDivElement> | KeyboardEvent) => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    padding: "5px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

Modal.setAppElement("#root");

export function ImageModal({ modalIsOpen, onCloseModal, modalImg }: Props) {
  return (
    <div onClick={onCloseModal}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
      >
        {modalImg && <img src={modalImg.src} alt={modalImg.alt} />}
      </Modal>
    </div>
  );
}
