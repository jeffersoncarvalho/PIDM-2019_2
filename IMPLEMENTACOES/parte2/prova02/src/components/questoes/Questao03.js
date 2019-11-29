//AULA
//https://github.com/kriasoft/react-starter-kit/issues/909
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import RNFetchBlob from 'react-native-fetch-blob';

import * as firebase from 'firebase';

import { Cartao, CartaoItem, MeuBotao, MeuSpinner, Header } from '../commons';

import ListarImagens from '../ListarImagensScreen';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

const uploadImage = (uri, mime = 'application/octet-stream') => {

  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = RNFetchBlob.fs;
  window.Blob = Blob;
  const tempWindowXMLHttpRequest = window.XMLHttpRequest;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('imagens_aula').child(`${sessionId}`);

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        resolve(url);
      })
      .then(() => {
        window.XMLHttpRequest = tempWindowXMLHttpRequest;
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default class Questao03 extends Component {
  state = {
    imgSource: '',
    uploadedUrl: null,
    uploading: false
  };
  /**
   * Select image method
   */
  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imgSource: source
        });
      }
    });
  };

  /**
   * Chamado pelo botão de upload
   */
  callUploadImage(uri) {
    this.setState({ uploading: true })
    uploadImage(uri)
      .then(url => this.setState({ uploadedUrl: url }))
      .then(() => {
        const url = this.state.uploadedUrl;
        firebase.database().ref(`/imagens_aula/`).push({ url });
        this.setState({ uploading: false });
        this.child.getImagensURL();
      })
      .catch(error => { this.setState({ uploading: false }); console.log(error) });
  }

  renderBotao() {
    if (this.state.uploading) {
      return <MeuSpinner />
    }
    return (
      <MeuBotao onPress={() => this.callUploadImage(this.state.imgSource.uri)}>
        Upload de Imagem
    </MeuBotao>)
  }

  /*renderListar(){
      if(this.st)
  }*/

  render() {
    return (

      <Cartao>
        <Header titulo="Sistema de Computadores" />
        <CartaoItem><Text>Clique para Selecionar</Text></CartaoItem>
        <CartaoItem>
          <MeuBotao onPress={() => this.pickImage()}>
            Selecione
          </MeuBotao>
        </CartaoItem>

        {this.state.imgSource ? (
          <View>
            <CartaoItem>
              <Image
                source={this.state.imgSource}
                style={styles.image}
              />
            </CartaoItem>
            <CartaoItem>
              {this.renderBotao()}
            </CartaoItem>
          </View>
        ) : (
            <CartaoItem><Text>Select an Image!</Text></CartaoItem>
          )}
          <ListarImagens onRef={ref => (this.child = ref)}/>
      </Cartao>

    );
  }


}

const styles = StyleSheet.create({
  image: {
    margin: 10,
    minWidth: 80,
    height: 80
  }
});
