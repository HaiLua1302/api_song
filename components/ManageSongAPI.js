//npm install axios --save
import React, {Component,useEffect} from 'react';
import { SearchBar } from 'react-native-elements';
import axios, { Axios } from 'axios';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import SongShow from './FlatListSong';

class SongManagement extends React.Component {
    constructor()
    {
        super();
        //nhận giá trị mới từ server thông qua setState
        this.state = {
            id: '',
            title: '',
            singer: '',
            publication: '',
            image: '',
            dataSong: [],
          };
    }

    // //Lấy dữ liệu từ server thông qua nodejs
    // dnGet=()=>{
    //     var url = 'https://4356-2402-800-6374-f399-6532-1a8f-bacd-5f91.ap.ngrok.io/data';
    //     fetch.get(url)
    //     .then((MySQLData)=>{
    //         console.log(MySQLData.data);
    //         this.setState({
    //             dataSong: MySQLData.data //dữ liệu lấy từ nodejs trả về cho biến dataSong
    //         })
    //     })
    //   };
      //Lấy dữ liệu từ server thông qua nodejs
    dnGet=async()=>{
      var url = 'https://4356-2402-800-6374-f399-6532-1a8f-bacd-5f91.ap.ngrok.io/data';
      await fetch(url)
      .then((res)=>{
          res.json();
      }).then((res)=>{
        this.setState({
          dataSong: res //dữ liệu lấy từ nodejs trả về cho biến dataSong
        })
      })
    }
  
    // //Ưu tiên chạy hàm dnGet khi build app
    //   componentDidMount(){
    //       this.dnGet();
    //   };

  //   //Thêm dữ liệu
  //   dnInser=()=>{
  //     //lấy dữ liệu đang có ở textinput
  //     const dataInsert = {
  //       id:this.state.inputID,
  //       title:this.state.inputTitle,
  //       singer:this.state.inputSinger,
  //       publication:this.state.inputPubliccation,
  //       image:this.state.inputImage
  //     };
  //     //gửi dữ liệu
  //     var url = 'https://4356-2402-800-6374-f399-6532-1a8f-bacd-5f91.ap.ngrok.io/data';
  //     axios.post(url,dataInsert).then((response)=>{
  //       //thông báo
  //       Alert.alert(
  //         "Thông báo!",
  //         "Thêm dữ liệu thành công",
  //         [
  //           { text: "OK", onPress: () => {
  //             this.dnGet();
  //             this.clearTextInput();} }
  //         ]
  //       );  
  //         console.log(response);
  //     }).catch((error)=>{
  //         console.log(error);
  //     });
      
  //   };
    
  //   //Xoá dữ liệu
  //   dnDelete=()=>{
  //     //kiểm tra trống ở text input id 
  //     if(!this.state.inputID){
  //       Alert.alert(
  //         "Thông báo!",
  //         "Kiểm tra lại trường ID",
  //         [
  //           { text: "OK", onPress: () => console.log("OK Pressed") }
  //         ]
  //       );
  //   }else{
  //     Alert.alert(
  //       "Thông báo!",
  //       "Xác nhận xoá bài "+this.state.inputTitle+" với id : "+this.state.inputID,
  //       [
  //         {
  //           text: "Huỷ",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel"
  //         },
  //         { text: "OK", onPress: () => {
  //           //lấy id của bài cần xoá gửi cho nodejs
  //             const idDelete = {
  //               id: this.state.inputID
  //              };
  //             var url = 'https://4356-2402-800-6374-f399-6532-1a8f-bacd-5f91.ap.ngrok.io/delete';
  //             axios.post(url, idDelete)
  //                   .then((response)=>{
  //                     Alert.alert(
  //                       "Thông báo!",
  //                       "Xoá thành công !!!",
  //                       [
  //                         { text: "OK", onPress: () => {
  //                           console.log(response);
  //                           this.dnGet();
  //                           this.clearTextInput();
  //                         }}
  //                       ]
  //                     );         
  //                 }).catch((error)=>{
  //                     console.log(error);
  //                 });              
  //           }}
  //         ]
  //       );
  //     }
  //   };
    
  //   //Sửa dữ liệu
  //   dnUpdate=()=>{
  //     if(!this.state.inputID){
  //       Alert.alert(
  //         "Thông báo!",
  //         "Kiểm tra lại trường ID",
  //         [
  //           { text: "OK", onPress: () => console.log("OK Pressed") }
  //         ]
  //       );
  //     }else{
  //     //lấy dữ liệu cần update đang có ở textinput
  //     const dataUpdate = {
  //       id:this.state.inputID,
  //       title:this.state.inputTitle,
  //       singer:this.state.inputSinger,
  //       publication:this.state.inputPubliccation,
  //       image:this.state.inputImage
  //     };
  //     var url = 'https://4356-2402-800-6374-f399-6532-1a8f-bacd-5f91.ap.ngrok.io/update';
  //       axios.post(url,dataUpdate).then((response)=>{
  //         Alert.alert(
  //           "Thông báo!",
  //           "Cập nhật thành công !",
  //           [
  //             { text: "OK", onPress: () => {
  //               this.dnGet();
  //               console.log("OK Pressed")} }
  //           ]
  //         ); 
  //           console.log(response);
          
  //       }).catch((error)=>{
  //           console.log(error);
  //       });
           
  //     };    
  // };

  // Xoá dữ liệu đang hiển thị ở TextInput
    clearTextInput = () => {
        this.setState({
          inputID: '',
          inputTitle: '',
          inputSinger: '',
          inputPubliccation: '',
          inputImage: '',
        });
        this.dnGet();
      };

    render()
    {
    return(
    <View style={styles.container}>     
      <Text style={styles.titleTop}>Music Manager</Text>

      <View style={styles.input}>
        <Text>ID: </Text>
        <TextInput
          style={styles.inputContainer}
          //nhận giá trị khi chọn ở FlatList
          value={this.state.inputID}
          placeholder="Nhập id"
          keyboardType="numeric"
          //gán giá trị
          onChangeText={(inputID=>this.setState({inputID}))}
        />
      </View>

      <View style={styles.input}>
        <Text>Title: </Text>
        <TextInput
          style={styles.inputContainer}
          value={this.state.inputTitle}

          placeholder="Nhập tiêu đề bài hát"
          onChangeText={(inputTitle=>this.setState({inputTitle}))}
        />
      </View>

      <View style={styles.input}>
        <Text>Singer: </Text>
        <TextInput
          style={styles.inputContainer}
          value={this.state.inputSinger}
          placeholder="Nhập tên ca sĩ"
          onChangeText={(inputSinger=>this.setState({inputSinger}))}
        />
      </View>

      <View style={styles.input}>
        <Text>Publication: </Text>
        <TextInput
          style={styles.inputContainer}
          value={this.state.inputPubliccation}
          placeholder="Nhập ngày xuất bản"
          onChangeText={(inputPubliccation=>this.setState({inputPubliccation}))}
        />
      </View>

      <View style={styles.input}>
        <Text>Image: </Text>
        <TextInput
          style={styles.inputContainer}
          value={this.state.inputImage}
          secureTextEntry={false}
          placeholder="Nhập link ảnh bài hát"
          onChangeText={(inputImage=>this.setState({inputImage}))}
          
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {/* <View style={styles.buttonContainer}>
          <Button title="Thêm" onPress={this.dnInser.bind(this)} color="#003366" />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Xóa" onPress={this.dnDelete.bind(this)} color="#ff7373" />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Sửa" onPress={this.dnUpdate.bind(this)} color="#ff80ed" />
        </View> */}

        <View style={styles.buttonContainer}>
          <Button title="Mới" onPress={this.clearTextInput} color="#ff16ed" />
        </View>
        </View> 
    
        {/* <FlatList
          data={this.state.filteredData && 
            this.state.filteredData.length > 0 ? this.state.filteredData : this.state.dataSong}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          keyExtractor={(item,index) => index}
          extraData={this.state.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.setState(() => {
                  return {
                    inputID: (item.id).toString(),
                    inputTitle: item.title,
                    inputSinger: item.singer,
                    inputPubliccation: item.publication,
                    inputImage: item.image,
                  };
                });
              }}>
              <SongShow item={item} />
            </TouchableOpacity>
        )}></FlatList> */}
        <FlatList
          data={this.state.filteredData && 
            this.state.filteredData.length > 0 ? this.state.filteredData : this.state.dataSong}
          keyExtractor={(item, index) => item.id.toString() + index.toString()} 
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.setState(() => {
                  return {
                    id: item.id.toString(),
                    title: item.title,
                    singer: item.singer,
                    publication: item.publication,
                    image: item.image,
                  };
                });
              }}>
              <SongShow item={item} />
            </TouchableOpacity>
        )}></FlatList>

        </View>
        )    
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:25
      },
    input: {
      borderRadius: 5,
      height: 40,
      margin: 10,
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      flexDirection: 'row',
    },
    buttonContainer: {
      marginRight:10,
      marginLeft:10,
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 5,
    },
    inputContainer: {
      width: 250,
      marginLeft: 10,
    },
    titleTop: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 26,
      textAlign: 'center',
    },
  
    inputSearch: {
      height:20,
    },
    searchBarContainer:{
      marginTop: 5,
    }
  });
export default SongManagement;