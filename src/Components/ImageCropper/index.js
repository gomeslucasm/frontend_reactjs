import { button,/* Row,Col, */ Modal/* , CustomInput,FormGroup,Form */} from 'reactstrap'
import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
/* import { Input } from '@material-ui/core';
 */
class ImageCropper extends React.Component{

    constructor(props){
        super(props);
        /* Variáveis de estado */
        this.state = {
            src:null,
            filename:'',
            image:null,
            crop:{ aspect: 3/3, x:0, y:0, width:100, height:100 },
            result:null,
            modal:false,
        }
        /* Funçôes que precisam do this */
        this.getCroppedImg = this.getCroppedImg.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.clickInput = this.clickInput.bind(this)
        /* Refs */
        this.imageInputRef = React.createRef();
    }



   getCroppedImg() {

        this.setState({modal:!this.state.modal})
        const image = this.state.image
        const crop = this.state.crop
/*         const result = this.result */

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
            blob.name = this.state.filename;
            this.props.imageCallback(blob);
        })
        }
    
    handleImage(e){
        this.setState({filename:e.target.files[0].name})
        this.setState({src:URL.createObjectURL(e.target.files[0])})
        this.setState({modal:!this.state.modal})
        e.target.value = null;
    }

    clickInput(){
        /* console.log(this.imageInputRef.current.style.display) */
        this.imageInputRef.current.click();
    }

    render(){
    return(
        <>

                    <input type = "file"  accept = "image/*" 
                    ref = {this.imageInputRef } style = {{display:'none'}}
                    onChange ={this.handleImage} />
                    <div style = {{'textAlign':'center',}}>
                        <button 
                        onClick={this.clickInput}
                        style = {{'width':'40%',}}
                        > 
                        Adicionar fotos do animal</button>
                     </div>
                    
                    <Modal isOpen = {this.state.modal}>
                    {   this.state.src && 
                        <div>
                            <div style = {{display:'flex','width':'100%','justify-content':'space-around',}}>
                                <button
                                onClick={()=>{
                                    this.setState({modal:!this.state.modal})
                                }}
                                style = {{display:'block','width':'50%'}}
                                >Cancelar</button>
                                <button 
                            onClick={this.getCroppedImg}
                            style = {{display:'block','width':'50%'}}
                                >Cortar imagem</button>
                            </div>
                            

                            <ReactCrop 
                            onImageLoaded ={image => this.setState({image:image})} 
                            src={this.state.src} 
                            crop={this.state.crop} 
                            onChange={crop => this.setState({crop:crop})} />
                            
                        </div>
                            
                    }
                    </Modal>
        </>
    )}
}

export default ImageCropper