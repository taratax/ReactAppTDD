export type formActionProps = {
  handlesubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  type?: string;
  action?: "submit" | "reset" | "button";
  text: string;
};
export const FormAction = function ({
  handlesubmit,
  type = "Button",
  action = "submit",
  text,
}: formActionProps) {
  return (
    <form onSubmit={handlesubmit} onReset={handlesubmit} role="form">
      {type === "Button" ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};
