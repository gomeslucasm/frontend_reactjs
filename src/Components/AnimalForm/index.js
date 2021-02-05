import React from 'react';
import UserService from '../../Service/UserService';
import {Row,Col,Button, FormGroup,Label, Input} from 'reactstrap'
import ImageCropper from '../ImageCropper';
import './index.css'
import apiPrivateService from '../../Service/apiPrivateService';
import Loader from '../Loader';

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
                'code':null,
                'location':'C',
                'sex':'M',
                'responsible_volunteer':null,
                'castrated':false,
                'user':'1',
                'animal_photo':''
            },
            imgs:null,
            users:{},
            volunteers:{},
            show_volunteers:null,
            show_canil_info:null,
            show_form:true,
            show_loader:false,
            sucess: false,
        }

        
        /* Funções que usam this */
        this.postAnimal = this.postAnimal.bind(this)
        this.handleCroppedImage = this.handleCroppedImage.bind(this)
        this.updatedRender=this.updatedRender.bind(this)
        this.deleteCroppedImage = this.deleteCroppedImage.bind(this)
        this.handleChange = this.handleChange.bind(this)       
        this.newPost = this.newPost.bind(this)
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
        this.setState({show_form:false})
        this.setState({show_loader:true})
        var form = this.state.form
        var imgs = this.state.imgs
        form['animal_photo'] = imgs
        var keys = Object.keys(form);
        var form_key_data = []

        console.log('forms',keys.length)

        var form_data = new FormData()
        for(var i=0; i<keys.length; i++){

            console.log(keys[i])
            var form_key = keys[i] 
                if(form_key === 'animal_photo'){
                    form_key_data = form[form_key] // eslint-disable-next-line
                    form_key_data.map((data,index)=>{
                        console.log(data, data.name)
                        return form_data.append(form_key + '[' + String(index) + ']', 
                        data, data.name)
                    })
                   
                    /* await form_data.append(key, form[key]) */
                }else{
                    console.log(form_key,'=',form[form_key])
                    await form_data.append(form_key, form[form_key])
                }
            }
        console.log('form',form_data)
        const privateService = new apiPrivateService()
        const response = await privateService.postAnimal(form_data)
        if(response.status === 201){
            this.setState({show_loader:false})
            this.setState({success:true})
        }   
    }

    newPost(){
        this.setState({show_form:true})
        this.setState({success:false})
        var newForm = this.state.form 
        newForm = newForm.fromKeys(newForm,'')
        this.setState({form:newForm})
        this.setState({imgs:null})
        this.setState({show_volunteers:null})
        this.setState({show_canil_info:null})
    }

    async handleCroppedImage(img){
        if(this.state.imgs === null){
            this.setState({imgs:[]})
        }
        var imgs = this.state.imgs
        imgs.push(img)
        this.setState({imgs:imgs})
        console.log('imagem',this.state.imgs)
    }

    updatedRender(){
        console.log('imgs',this.state.imgs)
    }

    deleteCroppedImage(e){
        const idx = Number(e.target.name)
        var imgs = this.state.imgs
        console.log('idx',idx)
        imgs.splice(idx, 1);
        /* imgs = imgs.slice(0, idx).concat(imgs.slice(-idx)); */
        this.setState({imgs:imgs})
    }

    handleChange(e){
        /* e.target.label = '' */
        var form = this.state.form
        

        if(e.target.name === 'location' ){
            if(e.target.value === 'V'){
                console.log('entrou')
                this.setState({show_volunteers:true})
                this.setState({show_canil_info:null})
                form['code'] = null
            }else{
                console.log('entrou na do canil')
                this.setState({show_canil_info:true})
                this.setState({show_volunteers:null})
                form['responsible_volunteer'] = null
            }
        }

        if(e.target.name === 'castrated' || e.target.name === 'show'){
            form[e.target.name] = e.target.checked
            console.log(e.target.name, '=', e.target.checked)
        }else{
            form[e.target.name] = e.target.value
            console.log(e.target.name, '=', e.target.value)
        }
        
        this.setState({form:form})
        console.log(this.state.form)
    }

    

    render(){

    return(
        <div>
        <form onSubmit={this.postAnimal} id = 'animal-form' 
        style = {
            this.state.show_form ?
            {display:'block'} : {display: 'none'}
        }
        >
            <Row>   
                <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form' >
                <FormGroup id = 'center-form-group' >
                    <Label for="animal_type" id = 'center-label'>Tipo de animal:
                    <Input type="select" name="animal_type" id="animal_type" 
                    onChange={this.handleChange}
                    defaultValue = {'default'}
                    >
                        <option hidden value = 'default'> -- selecione uma opção -- </option>
                        <option value = 'D'>Cachorro</option>
                        <option value = 'C'>Gato</option>
                        <option value = 'H'>Cavalo</option>
                        <option value = 'O'>Outro</option>
                    </Input>
                    </Label>
                </FormGroup>
                </Col>

                <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form'>
                <FormGroup id = 'center-form-group'>
                    <Label for="size" id = 'center-label'>Tamanho:
                    <Input type="select" name="size" id="size" 
                    onChange={this.handleChange} 
                    defaultValue = {'default'}
                    >
                        <option hidden value = 'default'> -- selecione uma opção -- </option>
                        <option value = 'PP'>Muito pequeno</option>
                        <option value = 'P'>Pequeno</option>
                        <option value = 'M'>Médio</option>
                        <option value = 'G'>Grande</option>
                        <option value = 'GG'>Muito grande</option>
                    </Input>
                    </Label>
                </FormGroup>
                </Col>

                <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form'>
                <FormGroup id = 'center-form-group'>
                    <Label for="sex" id = 'center-label'>Sexo:
                    <Input type="select" name="sex" id="sex" 
                    onChange={this.handleChange}
                    defaultValue = {'default'}
                    >
                        <option hidden value = 'default'> -- selecione uma opção -- </option>
                        <option value = 'M'>Macho</option>
                        <option value = 'F'>Fêmea</option>
                    </Input>
                    </Label>
                </FormGroup>
                </Col>

                <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form'
                    style = {{'justifyContent': 'center', 'display': 'flex'}}
                >
                    <FormGroup className = 'm-2' id = "form-castrated" check>
                        <Label for="castrated" id = 'center-label' check>
                        <Input onChange = {this.handleChange}
                        type="checkbox" name="castrated" id="castrated"/>{' '}
                        Castrado
                        </Label>
                    </FormGroup>
                    <FormGroup className = 'm-2' id = "form-castrated" check>
                        <Label for="show" id = 'center-label' check>
                            <Input onChange = {this.handleChange}
                            type="checkbox" name="show" id="show"/>{' '}
                            Mostrar no site
                        </Label>
                    </FormGroup>
                </Col>

                <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form'>
                <FormGroup id = 'center-form-group'>
                    <Label for="birth_date" id = 'center-label'>Data de nascimento:
                    <Input type="date" name="birth_date" id="birth_date" 
                    onChange={this.handleChange}/>
                    </Label>
                </FormGroup>
                </Col>

                <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form'>
                <FormGroup id = 'center-form-group'>
                    <Label for="location" id = 'center-label'>Localização do animal
                    <Input type="select" name="location" id="location" 
                    onChange={this.handleChange}
                    defaultValue = {'default'}
                    >
                        <option hidden value = 'default'> -- selecione uma opção -- </option>
                        <option value = 'C'>Canil</option>
                        <option value = 'V'>Casa de voluntário</option>
                    </Input>
                    </Label>
                </FormGroup>
                </Col>  

                {this.state.show_volunteers &&
                    <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form'>
                    <FormGroup id = 'center-form-group'>
                        <Label for="responsible_volunteer" id = 'center-label'>Voluntário:
                        <Input type="select" name="responsible_volunteer" 
                        id="responsible_volunteer" 
                        onChange={this.handleChange}
                        defaultValue = {'default'}
                        >
                        <option hidden value = 'default'> -- selecione uma opção -- </option>
                            {this.state.volunteers.map((volunteer)=>{
                                return(
                                    <option 
                                        key = {'volunteer id' + String(volunteer.id)}
                                        value={volunteer.id}>
                                        {volunteer.first_name} {volunteer.last_name}
                                    </option>
                                )
                            })}
                        </Input>
                        </Label>
                    </FormGroup>
                    </Col>  
                }

                {
                    this.state.show_canil_info &&
                    <Col lg = '3' md = '4' sm = '12' id = 'col-animal-form' >
                    <FormGroup id = 'center-form-group'>
                        <Label for="code" id = 'center-label'>Código do animal:
                        <Input type="text" name='code' id = 'code'
                        onChange={this.handleChange}/>
                        </Label>
                    </FormGroup>
                    </Col>  
                }

                <Col lg = '12' md = '12' sm = '12' id = 'col-animal-form'>
                    <FormGroup id = 'center-form-group' >
                        <Label for="description" id = 'description-animal-form'>Descrição:
                        <Input type="textarea" name="description" id="description" />
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            
            <ImageCropper imageCallback = {this.handleCroppedImage}/>

                {this.state.imgs &&
                    <><div style = {{
                        'border-style': 'solid',
                        'border-radius': '1vh',
                        'margin': '2vh',
                    }}>
                    <Row>
                        {    this.state.imgs.map((image,index)=>{
                                console.log(URL.createObjectURL(image))
                            return(
                                <> 
                                        <Col md = '6' lg = '4' sm='12'
                                            style = {{/* 'margin-left': 'auto',
                                                'margin-right': 'auto', */
                                                'display': 'flex',
                                                'alignSelf':'start',
                                                'textAlign':'center'
                                            }}
                                        >
                                        <img
                                        src={URL.createObjectURL(image)} 
                                        alt = ''
                                        key = {String(index)}
                                        id = 'result-img-cropper'
                                        />
                                        </Col>
                                    </>
                            )
                            })}
                        </Row>
                    </div>
                    
                    </>
                }
                
            

            <div id = 'div-button'>
                <Button color = 'success'
                type = 'submit' form = 'animal-form'
                id = 'btn-animal-form'
                >
                    Cadastrar animal
                </Button>
            </div>
                
        </form>
            <div
            style = {!this.state.show_loader ?
                {display: 'none',justifyContent:'center',} :
                {display: 'grid',justifyContent:'center'}
            }
            >
                <p>Registrando animal</p>
                <Loader 
                display = {!this.state.show_form}
                />
            </div>
            <div
                style = {!this.state.success ?
                    {display: 'none',justifyContent:'center',} :
                    {display: 'grid',justifyContent:'center'}
                }
            >
                <p>Animal criado com sucesso</p>
                <Button
                onClick={this.newPost}
                >Registrar outro animal</Button>
                
            </div>
        </div>
    )}
}

export default AnimalForm;