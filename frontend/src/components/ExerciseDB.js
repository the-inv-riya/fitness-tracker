import React, { useState } from "react";
import axios from "axios";
import "./ExerciseDB.css";

const ExercisePage = () => {
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(10);

  const handleMuscleChange = (e) => {
    setSelectedMuscle(e.target.value);
  };

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedMuscle}`,
      headers: {
        "X-RapidAPI-Key": "c7beb6a41fmsh541ee2fc7fc1b1ap16be0bjsn575fbe16a44a",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div  style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <h2 style={{fontWeight: '550', fontSize: '2.5rem'}}>Search For A Perfect Exercise</h2>
      <div className="select-container">
        <select style={{padding:'10px'}} value={selectedMuscle} onChange={handleMuscleChange}>
          <option value="">Select A Muscle Group</option>
          <option value="back">Back</option>
          <option value="cardio">Cardio</option>
          <option value="chest">Chest</option>
          <option value="lower%20arms">Lower Arms</option>
          <option value="lower%20legs">Lower Legs</option>
          <option value="neck">Neck</option>
          <option value="shoulders">Shoulders</option>
          <option value="upper%20arms">Upper Arms</option>
          <option value="upper%20legs">Upper Legs</option>
          <option value="waist">Waist</option>
        </select>
        <button onClick={handleSearch} className="mx-3" style={{ background: '#03346E', fontSize:'1.2rem'}}>Search</button>
      </div>
      {currentExercises.length > 0 ? (
        <div className="exercise-container">
          {currentExercises.map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <h3>{capitalizeFirstLetter(exercise.name)}</h3>
              <div className="gif-container">
                <img
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  className="exercise-gif"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>Exercises and demonstrations will be displayed here.</h3>
      )}
      {exercises.length > exercisesPerPage && (
        <div className="pagination">
          {Array.from({
            length: Math.ceil(exercises.length / exercisesPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisePage;
