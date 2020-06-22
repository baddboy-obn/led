import React from 'react';
import './App.css';
import SwiftSlider from 'react-swift-slider'
var FA = require('react-fontawesome')

const MainModal  = (props) =>{
  return(
    <div className="main-modal">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-3">
              <a href="#" className="modal-hide" onClick={()=>props.closeModal()}><span><i className="fa fa-angle-left"></i> Вернуться</span></a>
            </div>
            <div className="col-md-12 p-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin vel tellus at pharetra.
                Etiam id mattis nibh. In hac habitasse platea dictumst. Suspendisse imperdiet tortor vel aliquet
                pulvinar. Cras eget fringilla est, eu pellentesque purus. Curabitur nec orci diam. Cras at dapibus
                turpis, ac pharetra tellus. Integer consequat sagittis purus, at molestie est varius in. In ut tempor
                leo. Vestibulum sed enim malesuada, interdum ante a, elementum nibh. Mauris finibus, tellus ut maximus
                elementum, neque massa venenatis elit, nec consectetur ex ipsum quis augue. Cras mollis nunc id quam
                mollis, vel interdum lacus rutrum. Sed dapibus, arcu sit amet ornare sagittis, nibh nibh lobortis dolor,
                vitae malesuada eros diam nec augue.</p>

              <p>Vivamus convallis enim vel egestas imperdiet. Ut mollis vehicula sapien pellentesque consectetur.
                Vivamus gravida iaculis lacus a maximus. Mauris quis felis at quam cursus dapibus eu quis massa. Aliquam
                quis sapien a urna commodo porta sed non mi. In maximus dolor a fringilla blandit. Maecenas et metus ut
                dui imperdiet bibendum nec a leo. Vestibulum accumsan, leo in suscipit facilisis, nulla orci dictum
                tortor, vitae fringilla justo mi eu orci. Etiam rutrum sit amet turpis in tincidunt. Nulla facilisi.</p>

              <p>Nulla pellentesque suscipit purus, id fringilla risus pellentesque sed. Duis laoreet felis eu commodo
                consectetur. Vivamus et gravida tellus. Donec quis interdum tellus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam malesuada vulputate leo sit amet porta. Vivamus a tempor nulla.</p>

              <p>Phasellus vitae leo vel diam aliquet sagittis vel nec ante. Donec at quam et enim condimentum ultrices.
                Maecenas malesuada libero ac sem scelerisque bibendum. Nunc hendrerit massa quis ipsum rutrum, ac
                volutpat justo placerat. Aliquam eget est sapien. Cras malesuada urna eget est tincidunt tempus.
                Phasellus viverra facilisis accumsan. Maecenas non elit est. Etiam id lectus sed urna viverra bibendum.
                Pellentesque tempor libero lacus, non tempor ex imperdiet eget. Suspendisse placerat iaculis odio at
                hendrerit. In at magna neque. Proin lacus mauris, tempor vitae mauris auctor, mollis placerat nisl.
                Morbi in gravida justo. Nullam varius sed neque at pulvinar.</p>

              <p>Donec sollicitudin est at nisl placerat elementum. Donec id augue magna. Sed sagittis orci mauris, vel
                maximus urna laoreet in. Nulla nec porttitor nunc, sit amet egestas enim. Pellentesque tincidunt, purus
                ut ornare faucibus, libero risus suscipit sem, id condimentum turpis dui sed ipsum. Proin lacinia eros
                eget dolor consequat, in consectetur quam lobortis. Suspendisse vel pulvinar neque. Mauris in mauris
                vehicula, porttitor arcu vel, efficitur urna. Morbi quis malesuada turpis. Curabitur dignissim
                consectetur maximus. Praesent libero tellus, imperdiet in elementum vitae, congue vel arcu. Duis
                vehicula eros urna, ac pretium est congue fermentum. Morbi arcu dolor, ultricies non ultrices at,
                pulvinar suscipit quam.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

const RightMenu = (props) => {
  return (
      <div className="menu">
        <ul>
          <a href="#">
            <li>Обучающее видео</li>
          </a>
          <a href="#">
            <li>Офоррмление заказ</li>
          </a>
          <a href="#">
            <li>Оплата</li>
          </a>
          <a href="#">
            <li>Доставка</li>
          </a>
          <a href="#">
            <li>Гарантия</li>
          </a>
          <a href="#">
            <li>Возврат</li>
          </a>
          <a href="#">
            <li>Контакты</li>
          </a>
          <a href="#">
            <li>Партнеры</li>
          </a>
        </ul>
      </div>
  )
}

const FooterMenu = (props) =>{
  return (
      <div className="footer-menu">
        <div className="container">

          <ul>
            <a href="#">
              <li>Вариант кухни</li>
            </a>
            <a href="#">
              <li>Размеры</li>
            </a>
            <a href="#">
              <li>Сенсор</li>
            </a>
            <a href="#">
              <li>Питающий кабель</li>
            </a>
            <a href="#">
              <li>Блок питания</li>
            </a>
            <a href="#" className="choosen">
              <li>Цвет свечения</li>
            </a>
            <a href="#">
              <li>Монтаж</li>
            </a>
            <a href="#">
              <li>Корзина</li>
            </a>
          </ul>

        </div>

      </div>
  )
}

const TopMenu = (props) =>{

  return(<div className="navbar bg-dark">
    <a href="#" className="navbar-brand">
      LOGO
    </a>
    <nav>
      <a href="#" className="p-3"><img src={"/images/cart.svg"} width={25}/></a>
      <a href="#" className="p-3" onClick={()=>{
        props.openMenu()}}><img src={"/images/bars.svg"} width={25}/></a>
    </nav>
  </div>)
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalShow:false,
      rightMenuShow: false,
      footerMenuShow: true,
      selected_radio: "radio-1",
      sliders: [
        {src: 'images/slide3.jpg', id: 1},
        {src: 'images/slide3.jpg', id: 2},
        {src: 'images/slide3.jpg', id: 3}
      ]
    }
  }
  render() {
    return(
      <div>
        <TopMenu openMenu={()=>this.setState({rightMenuShow: !this.state.rightMenuShow})}/>

        {this.state.modalShow
          ?
          <MainModal closeModal={()=>{this.setState({modalShow: !this.state.modalShow})}} />
          : null
        }
        {this.state.rightMenuShow
          ? <RightMenu/>
          : null
        }
        <div className="container">
          <div className="row">
            <div className="col-md-6  mt-10 p-3">
              <SwiftSlider data={this.state.sliders} enableNextAndPrev={false} interval={10000}/>
            </div>
            <div className="col-md-6 p-3">
              <div className="row mb-2">
                <div className="col-md-6">Класс</div>
                <div className="col-md-6">Стандарт</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">Потребляемая мощность</div>
                <div className="col-md-6">59 Вт</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">Сила света</div>
                <div className="col-md-6">3459 Люмен = 7.5 ламп накаливания по 40Вт</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">Гарантия</div>
                <div className="col-md-6"> 3 года</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">Монтаж</div>
                <div className="col-md-6">Да</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6">Итого сумма</div>
                <div className="col-md-6">2594 руб.</div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3 mt-3 p-3 text-center text-light i-button-background">
                  <button className="text-light p-3 i-button" name="modal-show" onClick={()=>this.setState({modalShow: !this.state.modalShow})}>i
                  </button>
                  <span>Выбирите цвет свечения</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <center>
                    <div className="row">
                      <div className="col-md-4">
                        <input type="radio" value="radio-1" name="choose" id="radio-1" checked={this.state.selected_radio === "radio-1"} onChange={(e)=>this.changeLight(e)} />
                        <label htmlFor="radio-1">
                          <img src="images/mini1.jpg" className="img-fluid"/>
                          <span>Теплый</span>
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input type="radio" value="radio-2" name="choose" id="radio-2" checked={this.state.selected_radio === "radio-2"} onChange={(e)=>this.changeLight(e)}/>
                        <label htmlFor="radio-2">
                          <img src="images/mini2.jpg" className="img-fluid"/>
                          <span>Дневной</span>
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input type="radio" value="radio-3" name="choose" id="radio-3" checked={this.state.selected_radio === "radio-3"} onChange={(e)=>this.changeLight(e)}/>
                        <label htmlFor="radio-3">
                          <img src="images/mini3.jpg" className="img-fluid"/>
                          <span>Холодный</span>
                        </label>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
        <FooterMenu/>
      </div>

    )
  }

  changeLight(e) {
    this.setState({selected_radio: e.target.value})
    switch (e.target.value) {
      case "radio-1":
        var slider = [
          {src: 'images/slide3.jpg', id: 1},
          {src: 'images/slide3.jpg', id: 2},
          {src: 'images/slide3.jpg', id: 3}
        ]
        this.setState({sliders: slider})
        break;
      case "radio-2":
        var slider = [
          {src: 'images/slide2.jpg', id: 1},
          {src: 'images/slide2.jpg', id: 2},
          {src: 'images/slide2.jpg', id: 3}
        ]
        this.setState({sliders: slider})
        break;
      case "radio-3":
        var slider = [
          {src: 'images/slide1.jpg', id: 1},
          {src: 'images/slide1.jpg', id: 2},
          {src: 'images/slide1.jpg', id: 3}
        ]
        this.setState({sliders: slider})
        break;
      default:
        break;
    }
  }
}

export default App;
