import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import ProfilePictureActions from './actions';
import "./ProfilePicture.scss";

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '300px',
  height: '150%',
};

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function ProfilePicture(props) {

  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,

  } = useDropzone({accept: 'image/*', maxFiles: 1,
      onDrop: acceptedFiles => {
      
      setFiles(acceptedFiles.map(file => Object.assign(file, {
         preview: URL.createObjectURL(file)
      })));
      
      let file = acceptedFiles[0];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
       reader.onloadend = function (e) {
          props.setPicture(reader.result)
        }.bind(this);
    }
  });
  
    const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img className='image'
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

    useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  
  return (
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input className = "imageBox" {...getInputProps()} />
        <p style={{color: '#606060'}}>Drag 'n' drop a profile picture here, or click to select</p>
      </Container>
      <aside>
      </aside>
     <aside style={thumbsContainer}>
        {thumbs}
       </aside>
    </div>

  )
}


function mapStateToProps(state) {
  return {
    file: state['profilePicture'].file
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      setPicture: (file) => {
         dispatch(ProfilePictureActions.setPictureAction(file))
      },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);