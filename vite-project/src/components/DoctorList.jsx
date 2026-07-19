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
      <h3>{doctor}</h3>
    ))}
 </div>
);
}

export default DoctorList;