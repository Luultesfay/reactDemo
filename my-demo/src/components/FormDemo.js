import "./FormDemo.css";
const FormDemo = () => {
  return (
    <div className="form-container">
      <form className="formFormat">
        <div className="ajust">
          <label type="text">FIRST NAME</label>
          <input type="text" placeholder='First : "john" ' />
        </div>
        <div className="ajust">
          <label type="text" name="name">
            LAST NAME
          </label>
          <input type="text" placeholder='Last : "doe" ' />
        </div>
        <div className="ajust">
          <label type="text" name="email">
            E-MAIL
          </label>
          <input type="text" placeholder="Email  : johndoe@gmail,com" />
        </div>

        <div className="ajust" id="birthd">
          <label type="text">BIRTH DATE</label>
          <input type="date" />
        </div>
        <div className="ajust" id="age">
          <label type="text">AGE</label>
          <input type="number" min="1" max="99" />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};
export default FormDemo;
