import { useState } from 'react';
import '../styles/Education.css';

function Education({ educations, setEducations }) {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      setEducations(
        educations.map((edu) =>
          edu.id === editingId
            ? { ...edu, schoolName, titleOfStudy, dateOfStudy }
            : edu
        )
      );
      setEditingId(null);
    } else {
      const newEducation = {
        id: crypto.randomUUID(),
        schoolName,
        titleOfStudy,
        dateOfStudy,
      };
      setEducations([...educations, newEducation]);
    }

    setSchoolName('');
    setTitleOfStudy('');
    setDateOfStudy('');
    setShowForm(false);
  };

  const handleEdit = (edu) => {
    setSchoolName(edu.schoolName);
    setTitleOfStudy(edu.titleOfStudy);
    setDateOfStudy(edu.dateOfStudy);
    setEditingId(edu.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <section className="education-section">
      <h2>Educational Experience</h2>

      <div className="education-list">
        {educations.map((edu) => (
          <div key={edu.id} className="education-card">
            <p><strong>School:</strong> {edu.schoolName}</p>
            <p><strong>Title of Study:</strong> {edu.titleOfStudy}</p>
            <p><strong>Date:</strong> {edu.dateOfStudy}</p>
            <button onClick={() => handleEdit(edu)}>Edit Item</button>
            <button onClick={() => handleDelete(edu.id)}>Delete</button>
          </div>
        ))}
      </div>

      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
            setEditingId(null);
            setSchoolName('');
            setTitleOfStudy('');
            setDateOfStudy('');
          }}
        >
          + Add Education
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="education-form">
          <h3>{editingId !== null ? 'Edit Education' : 'Add New Education'}</h3>
          <div>
            <label>School Name: </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="e.g. University of California, Berkeley"
              required
            />
          </div>
          <div>
            <label>Title of Study: </label>
            <input
              type="text"
              value={titleOfStudy}
              onChange={(e) => setTitleOfStudy(e.target.value)}
              placeholder="e.g. B.S. in Computer Science"
              required
            />
          </div>
          <div>
            <label>Date of Study: </label>
            <input
              type="text"
              value={dateOfStudy}
              onChange={(e) => setDateOfStudy(e.target.value)}
              placeholder="e.g. 2018 - 2022"
              required
            />
          </div>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              setShowForm(false);
              setEditingId(null);
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </section>
  );
}

export default Education;