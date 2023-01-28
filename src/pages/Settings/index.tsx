import { SafeAreaView, ScrollView } from "react-native";
import Profile from "../../components/Profile";
import SettingsCard from "../../components/SettingsCard";

function Settings() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <SettingsCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings;