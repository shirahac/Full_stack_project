import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import PicturesActions from './actions';

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
  width: 'auto',
  height: '100%'
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

function readFile(props, file){
  var reader = new FileReader();
  var url = reader.readAsDataURL(file);
  var preview = URL.createObjectURL(file)
  reader.onloadend = function (e) {
    props.addPicture({value: reader.result, preview: preview})
  }
}


function Pictures(props) {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,

  } = useDropzone({accept: 'image/*', maxFiles: 10,
      onDrop: acceptedFiles => {
      
      setFiles(acceptedFiles.map(file => Object.assign(file, {
         preview: URL.createObjectURL(file)
      })));
      acceptedFiles.map(file  => readFile(props, file))
      // var file = acceptedFiles[0];
      // var reader = new FileReader();
      // var url = reader.readAsDataURL(file);
      //  reader.onloadend = function (e) {
      //     props.setPicture(reader.result)
      //   }.bind(this);
    }
  });

  
  
    const thumbs = props.pictures.map(file => (
      <div>
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
            />
          </div>
        </div>
        <button
              onClick={() => props.removePicture(file)}>
              remove
          </button>
      </div>
  ));

    useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  
  return (
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Add pictures to your review</p>
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
    pictures: state['pictures'].pictures
  };
}



const mapDispatchToProps = (dispatch) => {
  return {
      addPicture: (pic) => {
         dispatch(PicturesActions.addPictureAction(pic))
      },
      removePicture: (pic) => {
        dispatch(PicturesActions.removePictureAction(pic))
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pictures);