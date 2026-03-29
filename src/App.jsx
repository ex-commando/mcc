import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Users, 
  Briefcase, 
  Calendar, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  ChevronRight,
  GraduationCap,
  Heart,
  Home,
  ShieldCheck
} from 'lucide-react';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw-DMKCjfWmpagOz2cb5olgrHOjmthgVDHJBfTm8MDF41zheQqQo9wl9BBxFmA0EJjfWg/exec';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    maidenName: '',
    address: '',
    officeAddress: '',
    phone: '',
    whatsapp: '',
    gender: '',
    dob: '',
    occupation: '',
    classFriend: '',
    classIn: '',
    acceptConduct: false
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setStatus('success');
      setShowModal(true);
      setFormData({
        name: '',
        maidenName: '',
        address: '',
        officeAddress: '',
        phone: '',
        whatsapp: '',
        gender: '',
        dob: '',
        occupation: '',
        classFriend: '',
        classIn: '',
        acceptConduct: false
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setShowModal(true);
    }
  };

  return (
    <div className="main-wrapper">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="glass-panel"
      >
        <div className="form-container">
          {/* Header Section */}
          <header style={{ textAlign: 'center' }}>
            <div className="logo-box">
              <img src="/logo.png" alt="MCC Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <h1 className="mcc-title">Methodist Comprehensive College, Sagamu</h1>
            <p className="mcc-tagline">Honesty and Industry</p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="row-grid">
              <div>
                <label className="field-label">
                  <User size={18} /> Full Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                  className="custom-input"
                />
              </div>
              <div>
                <label className="field-label">
                  <Heart size={18} /> Maiden Name
                </label>
                <input 
                  type="text" 
                  name="maidenName" 
                  value={formData.maidenName}
                  onChange={handleChange}
                  placeholder="If applicable"
                  className="custom-input"
                />
              </div>
            </div>

            <div className="row-grid">
              <div>
                <label className="field-label">
                  <MapPin size={18} /> Residential Address
                </label>
                <textarea 
                  name="address" 
                  value={formData.address}
                  onChange={handleChange}
                  required 
                  placeholder="Ex. 123 Education Road, Sagamu"
                  className="custom-input"
                />
              </div>
              <div>
                <label className="field-label">
                  <Home size={18} /> Office Address
                </label>
                <textarea 
                  name="officeAddress" 
                  value={formData.officeAddress}
                  onChange={handleChange}
                  placeholder="Business/Work location"
                  className="custom-input"
                />
              </div>
            </div>

            <div className="row-grid">
              <div>
                <label className="field-label">
                  <Phone size={18} /> Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  placeholder="080 1234 5678"
                  className="custom-input"
                />
              </div>
              <div>
                <label className="field-label">
                  <MessageSquare size={18} /> WhatsApp Number
                </label>
                <input 
                  type="tel" 
                  name="whatsapp" 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required 
                  placeholder="080 1234 5678"
                  className="custom-input"
                />
              </div>
            </div>

            <div className="row-grid">
              <div>
                <label className="field-label">
                  <Users size={18} /> Gender
                </label>
                <select 
                  name="gender" 
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="custom-input"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="field-label">
                  <Calendar size={18} /> Date of Birth
                </label>
                <input 
                  type="date" 
                  name="dob" 
                  value={formData.dob}
                  onChange={handleChange}
                  required 
                  className="custom-input"
                />
              </div>
            </div>

            <div className="row-grid">
              <div>
                <label className="field-label">
                  <Briefcase size={18} /> Occupation
                </label>
                <input 
                  type="text" 
                  name="occupation" 
                  value={formData.occupation}
                  onChange={handleChange}
                  required 
                  placeholder="Current Profession"
                  className="custom-input"
                />
              </div>
              <div>
                <label className="field-label">
                  <User size={18} /> Class Friend
                </label>
                <input 
                  type="text" 
                  name="classFriend" 
                  value={formData.classFriend}
                  onChange={handleChange}
                  placeholder="Name of a school friend"
                  className="custom-input"
                />
              </div>
            </div>

            <div className="single-field">
              <label className="field-label">
                <GraduationCap size={18} /> Class In
              </label>
              <select 
                name="classIn" 
                value={formData.classIn}
                onChange={handleChange}
                required
                className="custom-input"
              >
                <option value="" disabled>Select Department/Class</option>
                <option value="Science A">Science A</option>
                <option value="Science B">Science B</option>
                <option value="Commercial A">Commercial A</option>
                <option value="Commercial B">Commercial B</option>
                <option value="Commercial C">Commercial C</option>
                <option value="Art class">Art class</option>
              </select>
            </div>

            <div className="checkbox-field">
              <input 
                type="checkbox" 
                id="acceptConduct"
                name="acceptConduct" 
                checked={formData.acceptConduct}
                onChange={handleChange}
                required
              />
              <label htmlFor="acceptConduct">
                I accept the <a href="https://docs.google.com/document/d/1UBUOxNkfOqpwDWJVKiW2AhS8GmZDe4hbQW6g-KHB2bs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Code of Conduct</a>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="submit-btn"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" style={{ marginRight: '10px' }} />
                  Synchronizing Data...
                </>
              ) : (
                <>
                  Submit to Database <ChevronRight size={20} style={{ marginLeft: '10px' }} />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Modal - Success/Error Overlay */}
      <AnimatePresence>
        {showModal && (
          <div className="modal-overlay">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modal-content"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle size={80} style={{ color: '#22C55E', marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>Success!</h3>
                  <p style={{ color: '#666', marginBottom: '25px', fontSize: '1.1rem' }}>
                    Thank you. Your record has been successfully uploaded to the central spreadsheet.
                  </p>
                </>
              ) : (
                <>
                  <AlertCircle size={80} style={{ color: '#EF4444', marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>Sync Failed</h3>
                  <p style={{ color: '#666', marginBottom: '25px', fontSize: '1.1rem' }}>
                    Communication error. Please verify your connection or check the backend configuration.
                  </p>
                </>
              )}
              <button 
                onClick={() => setShowModal(false)}
                className="submit-btn" 
                style={{ background: '#f0f0f0', color: '#1a1a1a', fontWeight: '700' }}
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
