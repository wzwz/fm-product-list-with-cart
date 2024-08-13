import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "../../common/types";

export default function Modal({
  children,
  open,
  onClose,
  className = "",
}: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) return;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  function handleOnClick(event: React.MouseEvent<HTMLElement>) {
    if (!dialog.current) return;

    const rect = dialog.current.getBoundingClientRect();

    if (
      !(
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      )
    ) {
      dialog.current.close();
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`}
      onClose={onClose}
      onClick={(e) => handleOnClick(e)}
    >
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
}
