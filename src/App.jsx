import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initial state set to empty strings and empty arrays
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Application Builder</h1>
      </header>

      {!isSubmitted ? (
        <div className="edit-container">
          <GeneralInfo 
            generalInfo={generalInfo} 
            setGeneralInfo={setGeneralInfo} 
          />
          <Education 
            educations={educations} 
            setEducations={setEducations} 
          />
          <Experience 
            experiences={experiences} 
            setExperiences={setExperiences} 
          />
          
          <button className="submit-cv-btn" onClick={() => setIsSubmitted(true)}>
            Submit & Preview CV
          </button>
        </div>
      ) : (
        <CVPreview 
          generalInfo={generalInfo}
          educations={educations}
          experiences={experiences}
          onEdit={() => setIsSubmitted(false)}
        />
      )}
    </div>
  );
}

export default App;