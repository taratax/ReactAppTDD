import { createPortal } from "react-dom";




type ErrorDialogProps = {
    portalName: string,
    onClose: () => void
}
export const ErrorDialog = (props: ErrorDialogProps) => {

    return createPortal(
        <>
        <div ></div>
            <dialog open>
                <p>
                    Formularz zawiera błędy popraw je, a następnie ponownie wyślij formularz.
                </p>
                <button onClick={props.onClose}>OK</button>
            </dialog>
       
        </>, document.getElementById(props.portalName) as HTMLElement)

}

