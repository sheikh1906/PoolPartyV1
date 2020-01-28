/**
 * Pool Part Test 1 App
 *
 * Author: Sheikh Faridur Rahman
 * Company: Mogul Software LLC
 */

import React, {useState, useEffect} from 'react';
import { Image, Input, StyleSheet, Text, View, Picker, ColorPropType } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import TicketImageButton from './TicketImageButton';

const TicketAddEditScreen = () => {  
    
    const [imageSource, setImageSource] = useState();
    const options = {
        title: 'Add picture of ticket',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

    chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {

            setImageSource( response.data );

          }
        });
      }

      let imagePlaceholder;

        if(imageSource && imageSource.length > 0) {
            imagePlaceholder =
                <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + imageSource,
                }}
                style={{ width: 200, height: 200 }}
              />
            
        }
        else {

        imagePlaceholder = 
            <TicketImageButton onPress={chooseFile} />

        }
    
    return (
    <View >
      <View style={styles.container}>
          <Text style={styles.fieldTitle}>Select Pool</Text>
          <Picker style={styles.select}>
            <Picker.Item label="My Pool" value="myPool" />
          </Picker>
          <Text style={styles.fieldTitle}>Select Drawing</Text>
          <Picker style={styles.select}>
            <Picker.Item label="PowerBall" value="powerball" />
            <Picker.Item label="MegaMillions" value="megamillions" />
          </Picker>
          <View style={styles.imageAddSection}>
              { imagePlaceholder }
          </View>
        </View>
    </View>
);}



const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'stretch'},
    fieldTitle: { fontSize: 20 },
    imageAddSection: { flex: 2, flexDirection: 'column', alignItems: 'center'},
    select: { flex: 1 }
});

export default TicketAddEditScreen;