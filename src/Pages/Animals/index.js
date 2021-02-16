import React from "react";
import DefaultPage from "../../Components/DefaultPage";
/* import apiPublicService from "../../Service/apiPublicService"; */
import "./index.css";
import UserService from "../../Service/UserService";
import Loader from "../../Components/Loader";
import ButtonPagesWrapper from "../../Components/ButtonPagesWraper";
import { getAnimals } from "../../Store/Animals/animals.actions";
import {list} from '../../Store/SelectAnimal/selectAnimal.actions'
import { connect } from "react-redux";
import { awaitTime } from "../../Utils/utils";
import ListAnimals from "../../Components/ListAnimals";
import {filterAnimalById} from "../../Utils/utils"
import AnimalDetail from "../../Components/AnimalDetail";

/* const publicService = new apiPublicService(); */
class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_logged: false,
      display: false,
      display_animal: false,
    };

    this.handleFilterQuery = this.handleFilterQuery.bind(this);
    this.getFilteredData = this.getFilteredData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showData = this.showData.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.checked);
  }
  showData() {
    console.log(this.state.url_query_form);
    console.log("kakakakaka");
  }
  async getData(page = "1") {
    console.log("teste", page);
    await this.props.getAnimals(String(page));
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  }
  async componentDidMount() {
    await this.isLogged();
    await this.getData();

    await awaitTime(1000);
    this.setState({ display: true });
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });

    console.log("see animal", this.props.selectAnimal);
  }

  handleFilterQuery(event) {
    event.preventDefault();
    console.log(event.target.value);
  }
  async getFilteredData() {
    /* const service = new apiPublicService();
        const data = await service.getAnimals() */
    var url_query = String();
    var count = 0;
    for (var key in this.state.url_query) {
      if (this.state.url_query[key].length > 0) {
        if (count > 0) {
          url_query = url_query + "&" + this.state.url_query[key];
        } else {
          url_query = url_query + this.state.url_query[key];
        }
        count = count + 1;
      }
    }
    console.log(url_query);
  }
  eventHandler(data) {
    console.log(data);
    this.setState({ url_query_form: data });
  }
  showAnimalDetail(id) {
    console.log(
      ...this.state.data.filter((animal) => {
        return animal["id"] === id;
      })
    );
  }

  async isLogged() {
    const userService = new UserService();
    var logged;
    logged = await userService.is_logged();
    console.log("logado?", logged);
    this.setState({ is_logged: logged });
    console.log(this.state["is_logged"]);
  }

  render() {
    console.log('teste filter', )
    console.log('teste animal',this.props.selectAnimal);
    if (this.state.display) {
      return (
        <>
          <DefaultPage>
            {/* Lista dos animais */}
            {this.props.selectAnimal.type === "list" && (
              <>
                <ListAnimals animals={this.props.animals.data} />
                <ButtonPagesWrapper
                  prevPage={this.props.animals.prevPage}
                  nextPage={this.props.animals.nextPage}
                  pageCallback={(page) => {
                    console.log("pagina", page);
                    this.getData(page);
                  }}
                />
              </>
            )}
            {/* Animais específicos */}
            {(this.props.selectAnimal.type === "see") && (<>            
              <button 
              className="custom-btn show"
              style = {{marginBottom:'0.5rem'}}
              onClick={()=>{
                this.props.returnPage()
              }}>
                Voltar
              </button>
              <AnimalDetail animal = {
                filterAnimalById(
                  this.props.animals.data,
                  this.props.selectAnimal.id
                )
              } />
            </>)}
            {/* Edição do animal */}


          </DefaultPage>
        </>
      );
    } else {
      return (
        <DefaultPage>
          <Loader display={!this.state.display} />
        </DefaultPage>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAnimals: (page) => dispatch(getAnimals(page)),
  returnPage: () => dispatch(list())
});

const mapStateToProps = (state) => ({
  animals: state.animals,
  selectAnimal: state.selectAnimal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Animals);
