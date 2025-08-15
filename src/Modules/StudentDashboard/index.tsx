import profilePic from "../../assets/Images/studentProfilePic.jpg";
import studentsData from "../../data/students.json";
import { useNavigate } from "react-router-dom";
import { setSubject } from "../../store/store";
import { useDispatch } from "react-redux";

export default function StudentDashboard() {
  const student: any = studentsData[0];
  const dispatch = useDispatch();
  const currentGrade = Object.keys(student.grades)[0];
  const subjectsArray = Object.keys(student.grades[currentGrade].subjects);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-4 px-4 sm:px-8 lg:px-24 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Student Personalised Learning Pathway
      </h1>

      <div className="flex gap-5 mt-12 flex-col md:flex-row w-full max-w-6xl">
        {/* Left Section */}
        <div className="basis-[75%]">
          <div className="flex flex-col md:flex-row w-full max-w-3xl gap-4">
            <img
              src={profilePic}
              alt="Student Avatar"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto md:mx-0"
            />

            <div className="flex flex-col gap-8 flex-1">
              <div className="bg-blue-100 shadow-md p-4 rounded-lg inline text-center md:text-left">
                <p className="font-semibold">Name: A C</p>
                <p className="text-blue-700 underline">{student.username}</p>
                <p>Grade: {Object.keys(student.grades)[0]}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                <div className="bg-[#4472c4] text-white rounded-t-lg sm:rounded-l-lg sm:rounded-t-none basis-[100%] sm:basis-[30%] flex flex-col items-center justify-center p-2 font-semibold">
                  <span>Descriptive</span>
                  <span className="font-normal text-sm">(Overall)</span>
                </div>
                <div className="bg-orange-100 p-5 rounded-lg sm:rounded-l-none shadow-md flex-1">
                  <p className="text-sm md:text-xs">
                    {student.grades["Grade 8"]?.descriptive_overall}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                <div className="bg-[#4472c4] text-white rounded-t-lg sm:rounded-l-lg sm:rounded-t-none basis-[100%] sm:basis-[30%] flex flex-col items-center justify-center p-2 font-semibold">
                  <span>Prescriptive</span>
                  <span className="font-normal text-sm">(Overall)</span>
                </div>
                <div className="bg-orange-100 p-5 rounded-lg sm:rounded-l-none shadow-md flex-1">
                  <p className="text-sm md:text-xs">
                    {student.grades["Grade 8"]?.prescriptive_overall}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
    <div className="flex flex-col gap-2 mt-6 max-w-xs">
  {subjectsArray.map((subject: any) => (
    <div
      key={subject}
      className="bg-blue-500 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer text-center"
      onClick={() => {
        dispatch(setSubject(subject));
        navigate(`/subject-summary/${subject}`);
      }}
    >
      {subject}
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
