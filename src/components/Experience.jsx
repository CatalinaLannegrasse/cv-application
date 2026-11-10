import { useState } from 'react';
import '../styles/Experience.css';

function Experience({ experiences, setExperiences }) {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === editingId
            ? { ...exp, companyName, positionTitle, responsibilities, dateFrom, dateUntil }
            : exp
        )
      );
      setEditingId(null);
    } else {
      const newExperience = {
        id: crypto.randomUUID(),
        companyName,
        positionTitle,
        responsibilities,
        dateFrom,
        dateUntil,
      };
      setExperiences([...experiences, newExperience]);
    }

    setCompanyName('');
    setPositionTitle('');
    setResponsibilities('');
    setDateFrom('');
    setDateUntil('');
    setShowForm(false);
  };

  const handleEdit = (exp) => {
    setCompanyName(exp.companyName);
    setPositionTitle(exp.positionTitle);
    setResponsibilities(exp.responsibilities);
    setDateFrom(exp.dateFrom);
    setDateUntil(exp.dateUntil);
    setEditingId(exp.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <section className="experience-section">
      <h2>Practical Experience</h2>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <p><strong>Company:</strong> {exp.companyName}</p>
            <p><strong>Position:</strong> {exp.positionTitle}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
            <p><strong>From:</strong> {exp.dateFrom} <strong>- Until:</strong> {exp.dateUntil}</p>
            <button onClick={() => handleEdit(exp)}>Edit Item</button>
            <button onClick={() => handleDelete(exp.id)}>Delete</button>
          </div>
        ))}
      </div>

      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
            setEditingId(null);
            setCompanyName('');
            setPositionTitle('');
            setResponsibilities('');
            setDateFrom('');
            setDateUntil('');
          }}
        >
          + Add Experience
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="experience-form">
          <h3>{editingId !== null ? 'Edit Experience' : 'Add New Experience'}</h3>
          <div>
            <label>Company Name: </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Google"
              required
            />
          </div>
          <div>
            <label>Position Title: </label>
            <input
              type="text"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
              placeholder="e.g. Frontend Software Engineer"
              required
            />
          </div>
          <div>
            <label>Main Responsibilities: </label>
            <textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              placeholder="e.g. Developed and maintained responsive web apps using React and Redux..."
              rows="3"
              required
            />
          </div>
          <div>
            <label>Date From: </label>
            <input
              type="text"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              placeholder="e.g. June 2022"
              required
            />
          </div>
          <div>
            <label>Date Until: </label>
            <input
              type="text"
              value={dateUntil}
              onChange={(e) => setDateUntil(e.target.value)}
              placeholder="e.g. Present"
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

export default Experience;