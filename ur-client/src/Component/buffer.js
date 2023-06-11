// const createcarrier = (values) => {
//   // console.log(values);

//   return fetch(`${API}/carrier`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//   const [values, setValues] = useState({
//     role: "",
//     skill: "",
//     error: false,
//     success: false,
//     jd: "",
//   });

//   const { role, skill, error, jd, success } = values;

//   const handleChange = (name) => (event) => {
//     setValues({
//       ...values,
//       error: false,
//       success: false,
//       [name]: event.target.value,
//     });
//   };

//   const clickSubmit = (event) => {
//     event.preventDefault();
//     console.log(values);
//     createcarrier(values).then((data) => {
//       // console.log(data);
//       if (data.error) {
//         setValues({ ...values, error: true, success: false });
//         console.log("error from back");
//       } else {
//         setValues({ ...values, success: true, error: false });
//         console.log("success");
//       }
//     });
//   };
//   const clickClear = (event) => {
//     event.preventDefault();
//     setValues({
//       role: "",
//       skill: "",
//       error: false,
//       success: false,
//       jd: "",
//     });
//   };

//   const signUpForm = () => (
//     <form className="mt-4">
//       <div className="form-group">
//         <label className="">Job Role</label>
//         <input
//           onChange={handleChange("role")}
//           type="role"
//           className="form-control"
//           value={role}
//         />
//       </div>
//       <div className="form-group">
//         <label className="mt-2">Skill Required</label>
//         <input
//           onChange={handleChange("skill")}
//           type="skill"
//           className="form-control"
//           value={skill}
//         />
//       </div>
//       <div className="form-group">
//         <label className="mt-2">Job description</label>
//         <textarea
//           onChange={handleChange("jd")}
//           type="jd"
//           className="form-control"
//           value={jd}
//         />
//       </div>
//       <button onClick={clickSubmit} className="btn btn-primary mt-2">
//         Submit
//       </button>
//       <button onClick={clickClear} className="btn btn-primary mt-2 mx-2">
//         Clear
//       </button>
//     </form>
//   );

//   const showError = () => {
//     if (error) {
//       return <h3 className="bg-danger rounded">There is ERROR!</h3>;
//     }
//   };
//   const showSuccess = () => {
//     if (success) {
//       return (
//         <h3 className="bg-success rounded">
//           Your data has been sent.Thank you!
//         </h3>
//       );
//     }
//   };
