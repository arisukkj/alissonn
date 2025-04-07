  import React, { Component } from "react";
  import { View, Text, Image, Platform, Button, Appearance, StyleSheet, FlatList} from 'react-native';


  class App extends Component {
    //Estrutura do Botão
    
      constructor(props){
        super(props);
        this.state = {
          nome: ''
        };

        this.entrar = this.entrar.bind(this);
      }
      //Estrutura Interna do Botão
        entrar(nome){
          this.setState({
            nome: nome
          })
        }
        
    render() {


      //Começo bruto da página
      return(
        <View style={{marginTop: 25, }}>
          <Text style={{color: '#006400', fontSize: 25, margin: 10}}>
            404</Text>
            <Text
    style={{
      fontFamily: Platform.select
      ({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    }}>

    <Text style={{color: '#FF0000', fontSize: 13, margin: 5}}>
            Versão 3.0</Text><br/>
            
            <Text style={{color: '#4682B4', fontSize: 25, margin: 96, textAlign:'center', lineHeight: 40}}>
            Sumário</Text><br/>

            <Text style={{color: '#006400', fontSize: 18, margin: 5}}>
          • Questões de lógica de programação! <br/>
          • Raciocínio Lógico!</Text>
    
          
  </Text>
    <Text style={{fontSize: 18, color: 'black', textAlign:'center'}}>
      {this.state.nome}
    </Text>
          <Image
          source={{uri: 'https://assets-blog.hostgator.com.br/wp-content/uploads/2016/09/logica-de-programacao-blog.webp'}}
          style={{width: 300, height: 300}}
          />
            <Button
            title="Começar" onPress={() => this.entrar('Redicionamento para outra tela')
           }></Button>
          



          <Text style={{fontSize: 20, marginTop: 10, marginLeft: 7}}> Instituições Parceiras</Text>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <Image
              source={{ uri: 'https://yt3.googleusercontent.com/OoIfYjblzMBPeV3kAHvaOYNgQmvJeVUB9q14pRuAhawNFRppUstvr_inYiBzdVB6EuWhK4li=s900-c-k-c0x00ffffff-no-rj' }}
              style={{ width: 50, height: 50, marginTop: 10}}
            />
            <Text style={{ marginLeft: 10 }}>CodeCademy</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <Image
              source={{ uri: 'https://yt3.googleusercontent.com/Jzh-VfliIJvWX-jBOFRXfCUpDdhInOokGZQshKlET4H-u1OLl_80GY-2wwe8gvQwFoSzeeYzNg=s900-c-k-c0x00ffffff-no-rj' }}
              style={{ width: 50, height: 50, marginTop: 10}}
            />
            <Text style={{ marginLeft: 10 }}>W3Schools</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <Image
              source={{ uri: 'https://yt3.googleusercontent.com/ytc/AIdro_l1mQOV0ggZ_UvodYMWrBA8G2QfsxskEFHNaUbgW9Bem8E=s900-c-k-c0x00ffffff-no-rj' }}
              style={{ width: 50, height: 50, marginTop: 10}}
            />
            <Text style={{ marginLeft: 10 }}>EBAC</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <Image
              source={{ uri: 'https://dl.memuplay.com/new_market/img/com.udemy.android.icon.2023-11-25-11-28-13.png' }}
              style={{ width: 50, height: 50, marginTop: 10}}
            />
            <Text style={{ marginLeft: 10 }}>Udemy</Text>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7luJsX8Uxmh3vzaxPqLEzIDevlU3m8lTwnw&s' }}
              style={{ width: 50, height: 50, marginTop: 10}}
            />
            <Text style={{ marginLeft: 10 }}>IESB</Text>
          </View>
          
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
            <Image
              source={{ uri: 'https://educacaoeterritorio.org.br/wp-content/uploads/2024/05/logo-unb.png' }}
              style={{ width: 50, height: 50, marginTop: 10}}
            />
            <Text style={{ marginLeft: 10 }}>UNB</Text>
          </View>
          
          

  <Text style={{color: '#006400', fontSize: 18, margin: 5, paddingTop: 40, lineHeight: 1}}>
          • Questões de Javascript!</Text>




          <Text style={{fontSize: 30}}></Text>
          
          <Jobs largura={300} altura={300}/>
          

          
        </View>
      );
    }
  }

  export default App;

  // Processo de Carregamento rápido da aplicação
  class Jobs extends Component {

    constructor(props){
      super(props);
      this.state = {
        nome: ''
      };

      this.entrar = this.entrar.bind(this);
    }
    //Estrutura Interna do Botão
      entrar(nome){
        this.setState({
          nome: nome
        })
      }
    render() {
        let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png';

        return(
          <View style={{marginTop: 10}}>
            <Image
            source={{uri: img}}
            style={{width: this.props.largura, height: this.props.altura}}
            />
                      <Button
          title="Começar" onPress={() => this.entrar('*Redicionamento para outra tela')}
          />
          </View>
        );
    }
  }


