Android Setup 
==================

Setup Type: Custom
SDK Folder: /Users/gauravkarvir/Library/Android/sdk
SDK Components to Download: 
Android SDK Build-Tools 28
  
Android SDK Platform 28
Android SDK Platform-Tools
 
———————
Make sure the doctor is happy (do what it tells you):
brew doctor
Use Homebrew to install Android dev tools:
brew install ant
brew install maven
brew install gradle


Install Android studio

Update your environment variables:
export ANT_HOME=/usr/local/opt/ant
export MAVEN_HOME=/usr/local/opt/maven
export GRADLE_HOME=/usr/local/opt/gradle
export ANDROID_HOME=/Users/gauravkarvir/Library/Android/sdk
export ANDROID_NDK_HOME=/Users/gauravkarvir/Library/Android/sdk/ndk-bundle
export ANDROID_SDK_ROOT=/Users/gauravkarvir/Library/Android/sdk

Update your paths (bonus points to a better solution to the hardcoded build tools version):
export PATH=$ANT_HOME/bin:$PATH
export PATH=$MAVEN_HOME/bin:$PATH
export PATH=$GRADLE_HOME/bin:$PATH
export PATH=$ANDROID_HOME/tools:$PATH

export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

source ~/.bash_profile


===================
Go to location where react-native-app project is present on HDD
projects/detox/examples/demo-react-native


Build it
detox build --configuration android.emu.release
Test
detox test --configuration android.emu.release





