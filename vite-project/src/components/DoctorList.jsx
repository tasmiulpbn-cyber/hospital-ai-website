import DoctorCard from "./DoctorCard";
function DoctorList() {
  const doctors = [
    "Dr. Omar",
    "Dr. Poban",
    "Dr. Hasan",
    "Dr. Rahman",
  ];

return (
  <div>
    <h2>Our Doctors</h2>

    {doctors.map((doctor) => (
      <DoctorCard
        key={doctor}
        name={doctor}
        speciality="Cardiologist"
        experience="10 Years Experience"
      />
    ))}
  </div>
);
}

export default DoctorList;