Android Setup 
==================

Install Android studio from website

Setup Type: Custom
SDK Folder: /Users/gauravkarvir/Library/Android/sdk

After Install download below  SDK Components
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




Update your environment variables: 

Check if you have bash_profile file, if it doesn't exist, then follow the commands

Go to the home directory.
cd ~

create a file called .bash_profile (the dot means that it will be hidden).

touch .bash_profile

Edit the file

sudo nano .bash_profile


Add the below Paths by Copy Pasting in this file


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



After you are finished, press Ctrl + O, Enter, and Ctrl + X to save and quit. Finally, use


Run
source ~/.bash_profile


Close the terminal and reload

===================
Go to location where react-native-app project is present on HDD
projects/detox/examples/demo-react-native


Build it
detox build --configuration android.emu.release
Test
detox test --configuration android.emu.release





