function DoctorCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.speciality}</p>
      <p>{props.experience}</p>
    </div>
  );
}

export default DoctorCard;