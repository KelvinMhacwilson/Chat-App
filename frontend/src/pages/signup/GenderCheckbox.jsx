const GenderCheckbox = ({ selectGender, handleGenderSelect }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`${selectGender === "male" &&
            "selected"} label gap-2 cursor-pointer`}
        >
          <span>Male</span>
          <input
            checked={selectGender === "male"}
            onChange={() => handleGenderSelect("male")}
            type="checkbox"
            className="checkbox border-slate-900 w-5 h-5 rounded-full"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`${selectGender === "female" &&
            "selected"} label gap-2 cursor-pointer`}
        >
          <span>Female</span>
          <input
            checked={selectGender === "female"}
            onChange={() => handleGenderSelect("female")}
            type="checkbox"
            className="checkbox border-slate-900 w-5 h-5 rounded-full"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
