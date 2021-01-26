import React from 'react';
import { Input ,TextField, Button} from '@material-ui/core';
import UserService from '../../Service/UserService';
import {Row,Col,Form} from 'reactstrap'
import ImageCropper from '../../Components/ImageCropper';
import axios from 'axios';

class AnimalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                /* 'animal_photo':[], */
                'animal_type':'D',
                'birth_date':'2020-12-12',
                'description':'teste',
                'size':'P',
                'code':'',
                'location':'C',
                'sex':'M',
                'reponsible_volunteer':'',
                'castrated':false,
                'user':'1',
                'animal_photo':''
            },
            imgs:[],
            users:{},
            volunteers:{},
        }
        this.postAnimal = this.postAnimal.bind(this)
        this.handleCroppedImage = this.handleCroppedImage.bind(this)
        this.updatedRender=this.updatedRender.bind(this)
    }
    
    async componentDidMount() {

        const userService = new UserService()
        const volunteers = await userService.get_users('volunteer')
        const users = await userService.get_users()
        this.setState({users:users})
        this.setState({volunteers:volunteers})
        console.log(this.state)
        
    }


    async postAnimal(e){
        e.preventDefault()
        const url = 'http://localhost:8000/api/private/animals/'
        var form = this.state.form
        var imgs = this.state.imgs
        form['animal_photo'] = imgs

        var form_data = new FormData()
        for(var key in form){
                if(key === 'animal_photo'){
                    form[key].forEach((data,index)=>{
                        console.log(data, data.name)
                        form_data.append(key + '[' + String(index) + ']', 
                        data, data.name)
                    })
                   
                    /* await form_data.append(key, form[key]) */
                }else{
                    console.log(key,'=',form[key])
                    await form_data.append(key, form[key])
                }
            }
        await axios.post(url,form_data,
            {headers: {
                'Content-Type': 'multipart/form-data',
             }}
             ).then(response =>{console.log('resultado',response)})
    }


    async handleCroppedImage(img){
        if(this.state.imgs === null){
            this.setState({imgs:[]})
        }
        var imgs = this.state.imgs
        imgs.push(img)
        this.setState({imgs:imgs})
        console.log('estado',this.state)
        console.log('n_imagens', this.state.imgs.length)
    }

    updatedRender(){
        console.log('imgs',this.state.imgs)
    }

    render(){

    this.updatedRender()

    return(
        <>
        <form onSubmit={this.postAnimal}>
            {/* <Row>      
                <Col md = '12'>
                    <ImageCropper imageCallback = {this.handleCroppedImage}/>
                </Col>
            </Row> */}
            <ImageCropper imageCallback = {this.handleCroppedImage}/>

            <button type = 'submit' >Enviar</button>
            {/* <Row>
            <Col md = '12'>
                <button type = 'submit' >Enviar</button>
                </Col>
            </Row> */}
        </form>
        <div>
            <Row>
            {this.state.imgs.map((img,index)=>{
                return(
                    <>
                        <Col md = '6' sm = '12' lg = '4' > 
                        <img className = 'rounded border border-primary'
                        width = '100%' height = 'auto'
                        key={index} src = {URL.createObjectURL(img)}/>
                        </Col>
                    </>
                )
            })}
            </Row>
        </div>
        </>
    )}
}

export default AnimalForm;