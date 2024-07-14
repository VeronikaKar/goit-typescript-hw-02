
import { RotatingLines } from "react-loader-spinner";

export function Loader() {
  return (
    <div className="flex justify-center">
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
