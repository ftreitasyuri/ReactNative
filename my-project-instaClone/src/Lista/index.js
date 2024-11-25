import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };

    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);    
  }

  carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }


  like(){
    let feed = this.state.feed;

    if(feed.likeada === true){
      this.setState({
        feed:{
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      });
    }else{
      this.setState({
        feed:{
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      });
    }
  }


  mostraLikes(likers) {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.curtidas}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );

  }

 

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPeril}>

          <Image
            source={{ uri: this.state.feed.imgperfil }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode='cover'
          source={{ uri: this.state.feed.imgPublicacao }}
          style={styles.fotoFeed}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity 
            onPress={this.like}
          >
            <Image              
              source={this.carregaIcone(this.state.feed.likeada)}
              style={styles.iconeLike}
            />

          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../img/send.png')}
              style={[styles.iconeLike, styles.sendBTN]}
            />

          </TouchableOpacity>
        </View>

        
          {this.mostraLikes(this.state.feed.likers)}
        



        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>
          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {

  },
  viewPeril: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#00000'
  },
  fotoFeed: {
    flex: 1,
    height: 400
  },
  areaBtn: {

    flexDirection: 'row',
    // height: 200,
    padding: 5
  },
  iconeLike: {
    width: 33,
    height: 33,
    borderColor: 'red',
    // minWidth: 30
    // height: 30
  },
  sendBTN: {
    marginLeft: 5,
  },
  viewRodape: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
  },
  curtidas:{
    marginLeft: 5,
    fontWeight: 'bold'
  },

})

export default Lista;