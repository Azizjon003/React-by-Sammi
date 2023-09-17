import useInputValidation from "../../hook/useInputValidate.js";

const User = () => {
  const firsName = useInputValidation("");
  const lastName = useInputValidation("");

  return (
    <>
      <div className="w-50 mx-auto">
        <div className="border p-3 my-5">
          <p className="text-center fs-3">Register</p>
          <div className="d-flex gap-3">
            <input
              type="text"
              className={`form-control ${firsName.color}`}
              placeholder="First name"
              value={firsName.value}
              onChange={firsName.onChange}
            />
            <input
              type="text"
              className={`form-control ${lastName.color}`}
              placeholder="Last name"
              value={lastName.value}
              onChange={lastName.onChange}
            />
          </div>
          <button className="mt-3 btn btn-success">Send Data</button>
        </div>
      </div>
    </>
  );
};

export default User;
