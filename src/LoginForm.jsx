//react component name should start with the uppercase letter
import Greeting from "./greeting";
import DataPassing from "./dataPassing";

const LoginForm = ({ apiResponse }) => {
  const { name, age } = apiResponse;
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="border-black border-[0.5px] rounded">
        <h1 className="text-3xl my-5 font-semibold">Form</h1>
        <h1 className="text-left ps-5">Hi, {name} 👋</h1>

        <Greeting />
        <DataPassing name={age} />

        <form
          action=""
          className="flex justify-center items-center flex-col gap-y-2 py-10 px-20 "
        >
          <div className="flex justify-center gap-x-2">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              id="Name"
              className="border-[0.5px] rounded border-blue-500"
            />
          </div>

          <div className="flex justify-center gap-x-2">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="Email"
              className="border-[0.5px] rounded border-blue-500"
            />
          </div>

          <div className="flex justify-center gap-x-2">
            <label htmlFor="Phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="Phone"
              className="border-[0.5px] rounded border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="border-2 rounded border-blue-500 py-1 px-4 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
