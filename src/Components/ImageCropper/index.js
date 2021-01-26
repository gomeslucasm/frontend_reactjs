/* import { Row,Col, Modal} from 'reactstrap' */
import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
/* import { Input } from '@material-ui/core'; */

class ImageCropper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            src:null,
            filename:'',
            image:null,
            crop:{ aspect: 3/3, x:0, y:0, width:100, height:100 },
            result:null,
            modal:false,
        }
        this.getCroppedImg = this.getCroppedImg.bind(this)
    }



   getCroppedImg() {

        this.setState({modal:!this.state.modal})
        const image = this.state.image
        const crop = this.state.crop
        const result = this.result

        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
       
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
        })
        }

    render(){
    return(
        <div className = "container">
                    <form>
                    <input type = "file" accept = "image/*"
                    
                    id = 'input-crop'
                    onChange ={e => {
                        this.setState({filename:e.target.files[0].name})
                        this.setState({src:URL.createObjectURL(e.target.files[0])})
                        this.setState({modal:!this.state.modal})
                        e.target.value = null;
                        }}  />
                    </form>
                    {/* <Modal isOpen = {this.state.modal}>

                    {   this.state.src && 
                        <div>
                            <ReactCrop 
                            onImageLoaded ={image => this.setState({image:image})} 
                            src={this.state.src} 
                            crop={this.state.crop} 
                            onChange={crop => this.setState({crop:crop})} />
                            <button type = 'button' 
                            onClick={this.getCroppedImg}>Crop</button>
                            </div>
                            
                    }
                    </Modal> */}
        </div>
    )}
}

export default ImageCropper