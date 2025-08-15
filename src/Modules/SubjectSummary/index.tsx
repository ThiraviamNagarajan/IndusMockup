import LearningProgressChart from "../../CommonComponents/LineGraph";
  import { useSelector } from 'react-redux';

import studentsData from "../../data/students.json";
const SubjectSummary = () => {
 

 const selectedSubject = useSelector((state: any) => state.subject.selectedSubject);

  const firstStudent:any = studentsData[0];

  // Access subject data dynamically by key
  const subjectData =
    firstStudent?.grades?.["Grade 8"]?.subjects?.[selectedSubject] || null;

   const currentScore = subjectData?.current_score;
  const predictedScore = subjectData?.predicted_score;
 
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Student Personalised Learning Pathway
          </h1>
          <div className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block font-semibold">
            {selectedSubject}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1 space-y-8">
            {/* Academic Scores Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Academic Scores Label */}
                <div className="bg-blue-500 text-white px-4 py-2 rounded font-semibold text-center  flex items-center justify-center lg:w-40 h-[50px]">
                  Academic Scores
                </div>

                {/* Score Cards Container */}
                <div className="flex flex-col sm:flex-row gap-3 flex-1">
                  {/* EOL Daily */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="bg-yellow-300 rounded px-3 py-2 flex items-center justify-center">
                      <div className="text-sm font-medium text-gray-800 h-[40px] ">
                        EOL(Daily)
                      </div>
                    </div>
                    <div className="bg-yellow-200 rounded px-3 py-2 text-center">
                      <div className="text-sm font-medium text-gray-800">
                        Tasks {subjectData?.count_eol}
                      </div>
                    </div>
                    <div className="bg-yellow-100 rounded px-3 py-2 text-center">
                      <div className="text-sm font-bold text-gray-800">
                        Score {subjectData?.percentage_eol}
                      </div>
                    </div>
                  </div>

                  {/* TA Twice a month */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="bg-red-300 rounded px-3 py-2 text-center">
                      <div className="text-sm font-medium text-gray-800">
                        TA(twice a month)
                      </div>
                    </div>
                    <div className="bg-red-200 rounded px-3 py-2 text-center">
                      <div className="text-sm font-medium text-gray-800">
                        Tasks {subjectData?.count_fa}
                      </div>
                    </div>
                    <div className="bg-red-100 rounded px-3 py-2 text-center">
                      <div className="text-sm font-bold text-gray-800">
                        Score {subjectData?.percentage_fa}
                      </div>
                    </div>
                  </div>

                  {/* SA Twice a year */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="bg-green-300 rounded px-3 py-2 text-center">
                      <div className="text-sm font-medium text-gray-800">
                        SA(twice a year)
                      </div>
                    </div>
                    <div className="bg-green-200 rounded px-3 py-2 text-center">
                      <div className="text-sm font-medium text-gray-800">
                        Tasks {subjectData?.count_sa}
                      </div>
                    </div>
                    <div className="bg-green-100 rounded px-3 py-2 text-center">
                      <div className="text-sm font-bold text-gray-800">
                        Score {subjectData?.percentage_sa}
                      </div>
                    </div>
                  </div>

                  {/* Prediction */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="bg-gray-400 rounded px-3 py-2 text-center">
                      <div className="text-xs font-medium text-white">
                        Predicted( where I will be if I continue at this rate
                      </div>
                    </div>
                    <div className="bg-gray-300 rounded px-3 py-2 text-center flex items-center justify-center h-14">
                      <div className="text-2xl font-semibold text-gray-800">
                        {subjectData?.predicted_score}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="bg-blue-500 text-white px-6 py-2 font-semibold flex items-center justify-center lg:w-40 mb-4 lg:mb-0 h-[50px] rounded-md">
                  Smart Analysis
                </div>

                <div className="flex-1 space-y-7 ">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="bg-blue-300 px-6 py-2 h-[40px] flex items-center justify-center sm:w-48 text-center rounded-l-md">
                      <div>
                        <div className="font-semibold text-gray-800 text-[14px]">
                          Descriptive
                        </div>
                        <div className="text-sm text-gray-700 text-[12px]">
                          ({selectedSubject})
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-200 px-6 py-6 flex-1 flex items-center rounded-r-md">
                      <div className="text-sm font-medium text-gray-800">
                    {subjectData?.descriptive_eol}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="bg-blue-300 px-6 py-4 flex items-center justify-center sm:w-48 text-center h-[40px] rounded-l-md">
                      <div>
                        <div className="font-semibold text-gray-800 text-[14px]">
                          Prescriptive
                        </div>
                        <div className="text-sm text-gray-700 text-[12px]">
                          ({selectedSubject})
                        </div>
                      </div>
                    </div>
                    <div className="bg-orange-200 px-6 py-6 flex-1 flex items-center rounded-r-md">
                      <div className="text-sm font-medium text-gray-800">
                        {subjectData?.prescriptive_eol}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         <div className="w-full max-w-[300px] md:max-w-[350px] lg:w-80 xl:w-96 mx-auto">
  <LearningProgressChart
    currentScore={currentScore ?? 0}
    predictedScore={predictedScore ?? 0}
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default SubjectSummary;
