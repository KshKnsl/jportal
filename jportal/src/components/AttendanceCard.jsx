import React from "react";
import CircleProgress from "./CircleProgress";

const AttendanceCard = ({ subject }) => {
  const { name, type, attendance, lecture, tutorial, practical } = subject;
  const attendancePercentage = attendance.total > 0
    ? ((attendance.attended / attendance.total) * 100).toFixed(0)
    : "100";  // Default to 100% if no attendance data

  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-700">
      <div className="flex-1 mr-4">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        {lecture && <p className="text-sm">Lecture: {lecture}%</p>}
        {tutorial && <p className="text-sm">Tutorial: {tutorial}%</p>}
        {practical && <p className="text-sm">Practical: {practical}%</p>}
      </div>
      <div className="flex items-center gap-2">
        <div className="text-center">
          <div className="text-sm">{attendance.attended}</div>
          <div className="h-px w-full bg-gray-700"></div>
          <div className="text-sm">{attendance.total}</div>
        </div>
        <CircleProgress percentage={attendancePercentage} />
      </div>
    </div>
  );
};

export default AttendanceCard;
