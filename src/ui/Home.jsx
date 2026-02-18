import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { getUsername } from "../features/user/userSlice";

function Home() {
  const username = useSelector(getUsername);
  return (
    <div className="mt-[30%] space-y-4 text-center sm:mt-[25%] sm:mb-10">
      <div className="mb-8 space-y-3 text-center text-xl font-semibold sm:text-2xl md:text-3xl">
        <h1 className="text-stone-700">The best pizza.</h1>
        <h1 className="text-yellow-500">
          Straight out of the oven, straight to you.
        </h1>
      </div>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
