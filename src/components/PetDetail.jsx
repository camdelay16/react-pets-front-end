const PetDetail = (props) => {
  const { selected } = props;
  if (!selected)
    return (
      <div>
        <h1>No details</h1>
      </div>
    );

  return (
    <div>
      <h1>Name: {selected.name}</h1>
      <h2>Breed: {selected.breed}</h2>
      <h2>Age: {selected.age} years old</h2>
      <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
    </div>
  );
};

export default PetDetail;
