import { createPortal } from "react-dom";

type ErrorDialogProps = {
  portalName: string;
  onClose: () => void;
  errorTextMsg: string;
  headerText?: string;
};

export const ErrorDialog = (props: ErrorDialogProps) => {
  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-gray-900 opacity-40 flex items-center justify-center"
        onClick={props.onClose}
      ></div>

      <div className="bg-white text-black">
        <dialog open className="border-none rounded-lg flex-col">
          <div className="p-5">
            <p className="text-lg font-medium">
              {props.headerText ? props.headerText : `Błąd`}
            </p>
            <p className="mt-2">{props.errorTextMsg}</p>
          </div>
          <button
            onClick={props.onClose}
            className="px-44 py-2 text-white rounded bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2  focus:ring-opacity-50"
          >
            OK
          </button>
        </dialog>
      </div>
    </>,
    document.getElementById(props.portalName) as HTMLElement,
  );
};
