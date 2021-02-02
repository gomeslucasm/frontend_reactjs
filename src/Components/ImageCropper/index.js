import React from 'react';
import Cropper from 'react-easy-crop'
/* import { styles } from './styles' */
import 'react-easy-crop/react-easy-crop.css'
import './index.css'
import {/*  Row,Col,  */Modal/* , CustomInput,FormGroup,Form */} from 'reactstrap'

class ImageCropper extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        image: null,
        image_url: null,
        crop: { x: 0, y: 0 },
        zoom: 1,
        aspect: 3 / 3,
        modal:false,
      }
      this.handleImage = this.handleImage.bind(this)
      this.onCropChange = this.onCropChange.bind(this)
      this.onCropComplete = this.onCropComplete.bind(this)
      this.onZoomChange = this.onZoomChange.bind(this)
      this.getCroppedImg = this.getCroppedImg.bind(this)
    }

    getCroppedImg() {

      this.setState({modal:!this.state.modal})
      const image = this.state.image
      const crop = this.state.crop
      const result = this.result
      console.log(image)
      console.log('altura da imagem',image.height)
      /* 
      console.log(crop)
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      console.log('canvas',canvas);
      console.log('scaleY',scaleY) */
      /* const ctx = canvas.getContext('2d');
     
      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );
      canvas.toBlob(blob =>{
          console.log('nome da imagem',this.state.src)
          blob.name = this.state.filename;
          this.props.imageCallback(blob);
      }) */
      }
    
    
      onCropChange = (crop) => {
        this.setState({ crop })
      }
    
      onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }
    
      onZoomChange = (zoom) => {
        this.setState({ zoom })
      }
    
      async handleImage(e){
        /* this.setState({filename:e.target.files[0].name})
        this.setState({src:URL.createObjectURL(e.target.files[0])})
        this.setState({modal:!this.state.modal}) */
        console.log(e.target.files[0])
        await this.setState({image:e.target.files[0]})
        await this.setState({image_url:URL.createObjectURL(e.target.files[0])})
        this.setState({modal:!this.state.modal})
       /*  this.setState({image:e.target.files[0]}) */
        e.target.value = null;
        console.log(this.state)
    }

    render(){
        return(
            <>
            <div>
              <input type = "file"  accept = "image/*" onChange ={this.handleImage} />
            </div>
            <Modal isOpen = {this.state.modal}>
              <div id = 'cropper-div'>
                <Cropper
                  image={this.state.image_url}
                  crop={this.state.crop}
                  zoom={this.state.zoom}
                  aspect={this.state.aspect}
                  onCropChange={this.onCropChange}
                  onCropComplete={this.onCropComplete}
                  onZoomChange={this.onZoomChange}
                />
                
              </div>
              <buttom type ='button' onClick={this.getCroppedImg}>Crop</buttom>
            </Modal>
            </>
        )}
}

export default ImageCropper;