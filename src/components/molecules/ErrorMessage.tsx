import { AlertIcon } from "../atoms";

export default function Error({ message }: { message: string }) {
  return (
    <div className="error bg-danger rounded-xl px-4 py-3 flex items-center gap-spacing">
      <AlertIcon />
      <p className="text-white font-semibold text-white inline-block ml-3">
        {message}
      </p>
    </div>
  );
}
