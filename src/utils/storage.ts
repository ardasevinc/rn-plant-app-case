import AsyncStorage from '@react-native-async-storage/async-storage';

const setOnboardingCompleted = async () => {
  try {
    await AsyncStorage.setItem('onboardingStatus', 'completed');
  } catch (error) {
    console.error(
      error,
      'setOnboardingCompleted: error saving data to AsyncStorage',
    );
  }
};

const getOnboardingStatus = async () => {
  try {
    const val = await AsyncStorage.getItem('onboardingStatus');
    return val;
  } catch (error) {
    console.error(
      error,
      'getOnboardingStatus: error reading data from AsyncStorage',
    );
  }
};

const isOnboardingCompleted = async () => {
  try {
    const status = await getOnboardingStatus();
    console.log(status);
    if (status === 'completed') {
      return true;
    } else if (status === 'incomplete') {
      return false;
    }
  } catch (error) {
    console.error(
      error,
      'isOnboardingCompleted: error reading data from AsyncStorage',
    );
  }
};

const clearOnboardingStatus = async () => {
  try {
    await AsyncStorage.setItem('onboardingStatus', 'incomplete');
  } catch (error) {
    console.error(
      error,
      'clearOnboardingStatus: error clearing data from AsyncStorage',
    );
  }
};

export {
  setOnboardingCompleted,
  getOnboardingStatus,
  isOnboardingCompleted,
  clearOnboardingStatus,
};
