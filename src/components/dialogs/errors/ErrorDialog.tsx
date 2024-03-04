import { createPortal } from "react-dom";

type ErrorDialogProps = {
  portalName: string;
  onClose: () => void;
  errorTextMsg: string;
};

export const ErrorDialog = (props: ErrorDialogProps) => {
  return createPortal(
    <>
      <div className="fixed inset-0 bg-gray-900 opacity-40"></div>

      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white text-black">
          <dialog open>
            <p>Error: {props.errorTextMsg}</p>
            <button onClick={props.onClose}>OK</button>
          </dialog>
        </div>
      </div>
    </>,
    document.getElementById(props.portalName) as HTMLElement,
  );
};
