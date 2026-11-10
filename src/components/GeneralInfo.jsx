import '../styles/GeneralInfo.css';

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  return (
    <section className="general-info-section">
      <h2>General Information</h2>
      <div className="form-group">
        <label>Full Name: </label>
        <input
          type="text"
          name="name"
          value={generalInfo.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>
      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={generalInfo.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
      </div>
      <div className="form-group">
        <label>Phone Number: </label>
        <input
          type="tel"
          name="phone"
          value={generalInfo.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>
    </section>
  );
}

export default GeneralInfo;