Detox Initial Setup with IOS Xcode
https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md


Needs MacOSx 10.13.2
	
	

Home-brew installation

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

If home brew installation has issues with permission then try the below command
sudo chown -R $USER:admin /usr/local


Node.js 8.11
brew update && brew install node

Install Xcode from App Store , create Apple ID, and upgrade MAc OS from Appstore if XCODE doesn’t support current version of OS

Run
brew tap wix/brew
brew install applesimutils

AppleSimUtils Error
If error for applesmutils e.g xcodebuild' requires Xcode, but active developer directory 
Then run below command

sudo xcode-select -s /Applications/Xcode.app/Contents/Developer


Install Detox Tools
npm install -g detox-cli


If error for ACCES: permission denied, access '/usr/local/lib/node_modules'

sudo chown -R $USER:$(id -gn $USER) /usr/local/lib/node_modules



watchman is installed 
brew install watchman
Create new folder in Users/${User}/  directory e.g projects

Clone the repository in projects directory  
https://github.com/wix/detox.git

===================
Go to location where react-native-app project is present on HDD
projects/detox/examples/demo-react-native


install
npm install detox --save-dev

npm install mocha --save-dev

3. Add Detox config to package.json

detox": {
  "configurations": {
    "ios.sim.debug": {
      "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/example.app",
      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      "type": "ios.simulator",
      "name": "iPhone 7"
    }
  }
}

Simulator model specified under the key "name" (iPhone 7 above) is actually available on your machine (it was installed by Xcode)

Create e2e folder and relevant tests as per the example

Initialiase Detox
detox init

Build it
detox build --configuration ios.sim.release
Test
detox test --configuration ios.sim.release










