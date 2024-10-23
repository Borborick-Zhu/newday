import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFile, FaUserCircle, FaEllipsisV } from 'react-icons/fa';
import './PolicyFiles.css';
import logo from '../assets/logo.png';

const PolicyFiles = () => {
  const navigate = useNavigate();

  // Mock data for files (replace with actual data fetching logic)
  const files = [
    { name: 'Document 1.pdf', type: 'file', size: '2.3 MB' },
    { name: 'Spreadsheet.xlsx', type: 'file', size: '1.1 MB' },
    { name: 'Report.docx', type: 'file', size: '3.7 MB' },
    { name: 'Presentation.pptx', type: 'file', size: '5.2 MB' },
  ];

  const handleUpload = () => {
    // Implement upload functionality here
    console.log('Upload button clicked');
  };

  const handleFileOptions = (fileName) => {
    // Implement file options functionality here
    console.log(`Options for ${fileName}`);
  };

  return (
    <div className="policy-files-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src={logo} alt="Newday Logo" className="logo" />
        <nav>
          <ul>
            <li><a href="#" className="nav-item active">All Policies</a></li>
            <li><a href="#" className="nav-item">My Policies</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1 className="page-title">Policy Files</h1>
          <FaUserCircle className="user-icon" />
        </header>

        <section className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <FaFile className="file-icon" />
              <span>{file.name}</span>
              {file.size && <span className="file-size">{file.size}</span>}
              <FaEllipsisV 
                className="options-icon" 
                onClick={() => handleFileOptions(file.name)} 
              />
            </div>
          ))}
        </section>

        <button className="upload-button" onClick={handleUpload}>+ Upload File</button>
      </main>
    </div>
  );
};

export default PolicyFiles;