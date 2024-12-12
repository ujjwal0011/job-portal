// import  { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { clearAllUserErrors, register } from "../store/slices/userSlice";
// import { toast } from "react-toastify";
// // import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
// // import { FaPhoneFlip } from "react-icons/fa6";
// // import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
// // import { RiLock2Fill } from "react-icons/ri";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
// import { Textarea } from "../components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

// function Register() {
//   const [role, setRole] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstNiche, setFirstNiche] = useState("");
//   const [secondNiche, setSecondNiche] = useState("");
//   const [thirdNiche, setThirdNiche] = useState("");
//   const [coverLetter, setCoverLetter] = useState("");
//   const [resume, setResume] = useState("");

//   const nichesArray = [
//     "Software Development",
//     "Web Development",
//     "Cybersecurity",
//     "Data Science",
//     "Artificial Intelligence",
//     "Cloud Computing",
//     "DevOps",
//     "Mobile App Development",
//     "Blockchain",
//     "Database Administration",
//     "Network Administration",
//     "UI/UX Design",
//     "Game Development",
//     "IoT (Internet of Things)",
//     "Big Data",
//     "Machine Learning",
//     "IT Project Management",
//     "IT Support and Helpdesk",
//     "Systems Administration",
//     "IT Consulting",
//   ];

//   const resumeHandler = (e) => {
//     const file = e.target.files[0];
//     setResume(file);
//   };

//   const { loading, isAuthenticated, error, message } = useSelector(
//     (state) => state.user
//   );

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("role", role);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("address", address);
//     formData.append("password", password);
//     if (role === "Job Seeker") {
//       formData.append("firstNiche", firstNiche);
//       formData.append("secondNiche", secondNiche);
//       formData.append("thirdNiche", thirdNiche);
//       formData.append("coverLetter", coverLetter);
//       formData.append("resume", resume);
//     }
//     dispatch(register(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, loading, isAuthenticated, message]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
//       <Card className="w-full max-w-4xl shadow-xl">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-bold text-gray-800">Create a new account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleRegister} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Register As</label>
//                 <Select value={role} onValueChange={setRole}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select Role" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Employer">Register as an Employer</SelectItem>
//                     <SelectItem value="Job Seeker">Register as a Job Seeker</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Name</label>
//                 <Input
//                   type="text"
//                   placeholder="Your Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Email Address</label>
//                 <Input
//                   type="email"
//                   placeholder="youremail@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Phone Number</label>
//                 <Input
//                   type="tel"
//                   placeholder="111-222-333"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Address</label>
//                 <Input
//                   type="text"
//                   placeholder="Your Address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="w-full"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700">Password</label>
//                 <Input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full"
//                 />
//               </div>
//             </div>

//             {role === "Job Seeker" && (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {[firstNiche, secondNiche, thirdNiche].map((niche, index) => (
//                     <div key={index} className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">
//                         Your {index + 1} Niche
//                       </label>
//                       <Select
//                         value={niche}
//                         onValueChange={(value) =>
//                           index === 0
//                             ? setFirstNiche(value)
//                             : index === 1
//                             ? setSecondNiche(value)
//                             : setThirdNiche(value)
//                         }
//                         className="w-full"
//                       >
//                         <Select.Trigger className="w-full">
//                           <Select.Value placeholder="Your Niche" />
//                         </Select.Trigger>
//                         <Select.Content>
//                           {nichesArray.map((option, idx) => (
//                             <Select.Item key={idx} value={option}>
//                               {option}
//                             </Select.Item>
//                           ))}
//                         </Select.Content>
//                       </Select>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700">Cover Letter</label>
//                   <Textarea
//                     value={coverLetter}
//                     onChange={(e) => setCoverLetter(e.target.value)}
//                     rows={4}
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-medium text-gray-700">Resume</label>
//                   <Input
//                     type="file"
//                     onChange={resumeHandler}
//                     className="w-full"
//                   />
//                 </div>
//               </>
//             )}

//             <div className="flex items-center justify-between pt-4">
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full sm:w-auto"
//               >
//                 Register
//               </Button>
//               <Link
//                 to="/login"
//                 className="text-blue-600 hover:underline text-sm font-medium"
//               >
//                 Already have an account? Login
//               </Link>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default Register;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegsiter = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <h3>Create a new account</h3>
          </div>
          <form onSubmit={handleRegsiter}>
            <div className="wrapper">
              <div className="inputTag">
                <label>Register As</label>
                <div>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="Employer">Register as an Employer</option>
                    <option value="Job Seeker">Register as a Job Seeker</option>
                  </select>
                  <FaRegUser />
                </div>
              </div>
              <div className="inputTag">
                <label>Name</label>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FaPencilAlt />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="inputTag">
                <label>Email Address</label>
                <div>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MdOutlineMailOutline />
                </div>
              </div>
              <div className="inputTag">
                <label>Phone Number</label>
                <div>
                  <input
                    type="number"
                    placeholder="111-222-333"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <FaPhoneFlip />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="inputTag">
                <label>Address</label>
                <div>
                  <input
                    type="text"
                    placeholder="Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <FaAddressBook />
                </div>
              </div>
              <div className="inputTag">
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <RiLock2Fill />
                </div>
              </div>
            </div>
            {role === "Job Seeker" && (
              <>
                <div className="wrapper">
                  <div className="inputTag">
                    <label>Your First Niche</label>
                    <div>
                      <select
                        value={firstNiche}
                        onChange={(e) => setFirstNiche(e.target.value)}
                      >
                        <option value="">Your Niche</option>
                        {nichesArray.map((niche, index) => {
                          return (
                            <option key={index} value={niche}>
                              {niche}
                            </option>
                          );
                        })}
                      </select>
                      <MdCategory />
                    </div>
                  </div>
                  <div className="inputTag">
                    <label>Your Second Niche</label>
                    <div>
                      <select
                        value={secondNiche}
                        onChange={(e) => setSecondNiche(e.target.value)}
                      >
                        <option value="">Your Niche</option>
                        {nichesArray.map((niche, index) => {
                          return (
                            <option key={index} value={niche}>
                              {niche}
                            </option>
                          );
                        })}
                      </select>
                      <MdCategory />
                    </div>
                  </div>
                  <div className="inputTag">
                    <label>Your Third Niche</label>
                    <div>
                      <select
                        value={thirdNiche}
                        onChange={(e) => setThirdNiche(e.target.value)}
                      >
                        <option value="">Your Niche</option>
                        {nichesArray.map((niche, index) => {
                          return (
                            <option key={index} value={niche}>
                              {niche}
                            </option>
                          );
                        })}
                      </select>
                      <MdCategory />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="inputTag">
                    <label>Coverletter</label>
                    <div>
                      <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        rows={10}
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="inputTag">
                    <label>Resume</label>
                    <div>
                      <input
                        type="file"
                        onChange={resumeHandler}
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <button type="submit" disabled={loading}>
              Register
            </button>
            <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
