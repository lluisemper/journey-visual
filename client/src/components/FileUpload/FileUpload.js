import React, { useState } from 'react';
import './FileUpload.css';
import ApiClient from '../../ApiClient';
import { connect } from 'react-redux';
import * as uiStateActions from '../../action/uiState';

const FileUpload = ({ currentPersona }) => {

  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {

    setSelectedFile(event.target.files[0]);
  }

  const fileUploadHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(selectedFile)

    // const blob = new Blob([JSON.stringify(selectedFile)], { type: "image/jpeg" });

    formData.append('file', selectedFile);

    ApiClient.postFile(currentPersona._id, formData);
  }

  return (
    <div className="FileUpload">
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={(e) => {
        fileUploadHandler(e)
      }}>upload</button>
    </div>
  )
}


const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  currentPersona: state.uiState.currentPersona,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);