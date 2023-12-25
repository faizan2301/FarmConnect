import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Modal,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {
  iconColor,
  secondaryDarkColor,
  secondaryLightColor,
} from '../../../constant/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigationStrings from '../../../constant/navigationStrings';
import {clearAll, getCredentials} from '../../../common/AsyncStorageFunctions';
import {useSelector} from 'react-redux';
import {endSpacing} from '../../../components/CommonComponents';
import {BlurView} from '@react-native-community/blur';
const Profile = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const {userData} = useSelector(state => state.user);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  const {navigation} = props;
  const handleLogout = async () => {
    await clearAll();
    handleModal();
    navigation.replace(navigationStrings.LOGINSCREEN);
  };
  return (
    <View className="flex-1">
      <View className="bg-buttonColor dark:bg-secondaryButtonColor h-[15%]">
        <View className="flex-row  justify-between  items-center m-4">
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back-ios" color={iconColor} size={26} />
          </Pressable>
          <Text className=" text-black text-2xl">Profile</Text>
          {endSpacing()}
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleModal}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={40}>
          <View style={[styles.modalContainer]}>
            {/* Your modal content goes here */}
            <View className="bg-secondaryLightColor dark:bg-secondaryDarkColor rounded-xl p-6  justify-center flex-col">
              <Text className="text-black dark:text-white text-2xl self-center">
                Are you sure?
              </Text>
              <Text className="text-black dark:text-white text-xl self-center">
                Do you want to logout?
              </Text>
              <View className="flex-row justify-around items-center mt-5 ">
                <Pressable
                  onPress={handleLogout}
                  className="bg-buttonColor p-2 m-2 rounded-xl">
                  <Text className="text-white text-xl">Yes, logout</Text>
                </Pressable>
                <Pressable
                  onPress={handleModal}
                  className="bg-secondaryButtonColor p-2 m-2 rounded-xl">
                  <Text className="text-black text-xl">Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>
      <View
        className={`bg-primaryLightColor dark:bg-primaryDarkColor rounded-xl border-2 border-secondaryLightColor dark:border-secondaryDarkColor  p-6 mx-6 -mt-6  flex-col shadow-sm `}>
        <View className="flex-col">
          <Pressable className="self-end p-2 border-secondaryDarkColor border-2 bg-[#E8F1FF]  rounded-full items-center justify-center h-12 w-12">
            <Icon name="edit" color="black" size={25} />
          </Pressable>
          <View className="items-center">
            <Image
              source={{
                uri: 'https://ui-avatars.com/api/?name=Faizan&&color=fff&&background=0066a2&&rounded=true&&font-size=0.44',
              }}
              className="h-20 w-20 rounded-full overflow-hidden bg-cover"
            />
            <Text className="text-black dark:text-white text-2xl mt-3">
              {userData.fullName}
            </Text>
            <Text className="text-secondaryTextColor  text-sm">
              {userData.email}
            </Text>
            <Text className="text-black dark:text-white  text-lg">
              {userData.mobileNo}
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={handleModal}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'red' : 'transparent'},
          styles.logoutButton,
        ]}>
        {({pressed}) => (
          <>
            <AntDesign
              name="logout"
              color={pressed ? 'white' : 'red'}
              size={26}
            />
            <Text
              className={`${
                pressed ? 'text-white' : 'text-red-600'
              } text-xl self-center`}>
              Logout
            </Text>
            {endSpacing()}
          </>
        )}
      </Pressable>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  logoutButton: {
    borderRadius: 12,
    borderColor: 'red',
    padding: 8,
    margin: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 25,
    borderRadius: 10,
    backgroundColor: '#rgba(232, 241, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    // You can adjust the background color and opacity
  },
  closeButton: {
    color: 'white',
  },
});
