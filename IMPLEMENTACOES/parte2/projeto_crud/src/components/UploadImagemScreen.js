import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import * as firebase from 'firebase';
import 'firebase/firestore';


import { Cartao, CartaoItem, MeuBotao, MeuSpinner, Header } from './commons'

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

/*const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;*/

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
    const imageRef = firebase.storage().ref('images').child(`${sessionId}`);

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
      .then(()=>{
        window.XMLHttpRequest = tempWindowXMLHttpRequest;
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default class UploadImagemScreen extends Component {
  state = {
    imgSource: '',
    uploading: false,
    uploadedUrl: ''
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
        this.setState({ imgSource: source });
      }
    });
  };

  /**
   * Chamado pelo botão de upload
   */
  callUploadImage(uri) {
    this.setState({ uploading: true })
    uploadImage(uri)
      .then(url => this.setState({ uploading: false, uploadedUrl: url }))
      .then(() => {
        const url = this.state.uploadedUrl;
        /*firebase.firestore().collection('imagens').add({url:"teste"})
        .then(()=>console.log('url salva.'))
        .catch(()=>console.log('problemas ao salvar a url'))*/
      })
      .catch(error => { this.setState({ uploading: false }); console.log(error) });
  }

  renderBotaoUpload() {
    if (this.state.uploading) {
      return <MeuSpinner />
    }
    return (
      <MeuBotao onPress={() => this.callUploadImage(this.state.imgSource.uri)}>
        Upload
      </MeuBotao>
    )
  }

  render() {
    return (
      <Cartao>
        <Header titulo="Upload de Imagens" />
        <CartaoItem>
          <MeuBotao onPress={this.pickImage}>
            Selecione Imagem
        </MeuBotao>
        </CartaoItem>
        {
          this.state.imgSource ? (
            <View>
              <CartaoItem>
                <Image source={this.state.imgSource} style={styles.image} />
              </CartaoItem>
              <CartaoItem>
                {this.renderBotaoUpload()}
              </CartaoItem>
            </View>
          ) :
            (
              <View>
                <CartaoItem>
                  <Text>Nenhuma Imagem Selecionada</Text>
                </CartaoItem>
              </View>
            )
        }
      </Cartao>
    )
  }


}

const styles = StyleSheet.create({
  image: {
    minWidth: 200,
    height: 200
  }
});
