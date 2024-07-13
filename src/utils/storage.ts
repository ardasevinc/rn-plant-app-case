import AsyncStorage from '@react-native-async-storage/async-storage';

const setOnboardingCompleted = async () => {
  try {
    await AsyncStorage.setItem('onboardingCompleted', 'true');
  } catch (error) {
    console.error(error, 'error saving data to AsyncStorage');
  }
};

const getOnboardingCompleted = async () => {
  try {
    const val = await AsyncStorage.getItem('onboardingCompleted');

    if (val === null) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error(error, 'error reading data from AsyncStorage');
  }
};

const clearOnboardingCompleted = async () => {
  try {
    await AsyncStorage.removeItem('onboardingCompleted');
  } catch (error) {
    console.error(error, 'error clearing data from AsyncStorage');
  }
};

export {
  setOnboardingCompleted,
  getOnboardingCompleted,
  clearOnboardingCompleted,
};
