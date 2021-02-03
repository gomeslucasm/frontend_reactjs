import React from 'react'
import {
    Card/* , CardImg */, CardText, CardBody,
    CardTitle, CardSubtitle, CardImg, /* Button */
  } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

const URL = 'https://django-backend-canil.azurewebsites.net';
/* const URL = 'http://localhost:8000';  */


function items(data){
    var items = [];
    var count = 0;
    data.forEach(({photo,id})=>{
        count = count+1;
        const id_str = String(id);
        items.push({
            'src':URL + photo,
            /* altText: 'Slide ' + id_str,
            caption: 'Slide ' + id_str,
            header: 'Slide 3 Header' + id_str, */
            key: id_str
        })

    })
    return items
}

function AnimalCard({id,age, animal_photo, description, location, animal_type, size}){
    console.log('teste')
    items(animal_photo)
    console.log(animal_photo)
    return(
        <>
            <Card key = {id}>
                {(animal_photo.length === 1) &&
                    <CardImg top widht="100%" src = {URL + animal_photo[0].photo} alt = "Card img"/>  
                }
                {(animal_photo.length > 1) &&
                    <UncontrolledCarousel autoPlay = {false} items={items(animal_photo)} />
                }
                         
                <CardBody>
                    <CardTitle tag="h6">Tipo: {animal_type}.</CardTitle>
                    <CardSubtitle tag = "h6">Idade: {age}.</CardSubtitle>
                    <CardText>Descrição: {description}.</CardText>
                    <CardSubtitle tag = "h6">{location}.</CardSubtitle>
                    <CardSubtitle tag = "h6">{size}.</CardSubtitle>
                </CardBody>
            </Card>
        </>
    )
} 


export default AnimalCard;