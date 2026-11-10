import '../styles/CVPreview.css';

function CVPreview({ generalInfo, educations, experiences, onEdit }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-preview-container">
      <div className="resume-sheet">
        {/* Header / General Info */}
        <header className="resume-header">
          <h1>{generalInfo.name || 'Your Name'}</h1>
          <div className="contact-info">
            <span>{generalInfo.email || 'email@example.com'}</span>
            <span className="dot">•</span>
            <span>{generalInfo.phone || '(123) 456-7890'}</span>
          </div>
        </header>

        {/* Education Section */}
        <section className="resume-section">
          <h2>Education</h2>
          {educations.length === 0 ? (
            <p className="empty-notice">No education added yet.</p>
          ) : (
            educations.map((edu) => (
              <div key={edu.id} className="resume-item">
                <div className="item-row">
                  <span className="item-title">{edu.schoolName}</span>
                  <span className="item-date">{edu.dateOfStudy}</span>
                </div>
                <div className="item-subtitle">{edu.titleOfStudy}</div>
              </div>
            ))
          )}
        </section>

        {/* Experience Section */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
          {experiences.length === 0 ? (
            <p className="empty-notice">No experience added yet.</p>
          ) : (
            experiences.map((exp) => (
              <div key={exp.id} className="resume-item">
                <div className="item-row">
                  <span className="item-title">{exp.positionTitle}</span>
                  <span className="item-date">{exp.dateFrom} — {exp.dateUntil}</span>
                </div>
                <div className="item-company">{exp.companyName}</div>
                <p className="responsibilities">{exp.responsibilities}</p>
              </div>
            ))
          )}
        </section>
      </div>

      {/* Action Buttons Toolbar */}
      <div className="preview-actions">
        <button className="print-btn" onClick={handlePrint}>
          🖨️ Print / Save as PDF
        </button>
        <button className="edit-mode-btn" onClick={onEdit}>
          ✏️ Edit CV
        </button>
      </div>
    </div>
  );
}

export default CVPreview;