# WCAG Plugin
## Description

This is a chrome extension in which the user can type a guideline number and have the guideline number, name and link copied to their clipboard immediatly. The purpose is to increase efficiency when doccumenting accessibility issues.

## How to install

### Download the repository
On the repository page, click the green 'code' dropdown and download the zip file. unzip this file in a location of your choosing.
### Pack the extension
In google chrome, open the extensions widget and click 'manage extensions'. From here you want to enable 'developer mode'. Once this has been done, click 'pack extension', navigate to and select the unzipped repo.
### Load the extension
Click 'load extension' and navigate the the same folder as the previous step, once selected the extension should be installed.

## How to use
By default the shortcut to open the extension is ctrl+shift+k. Once open the user can immediatly type a guideline number such as '1.1.1'. If a result is found it will be copied to the clipboard and the user can paste the info where needed.

## Future work
In future, I plan to add functionalitiy to settings such that a user can choose what info is returned when a guideline is entered. Additionally, I would like for the program to be able to search by name as well as guideline.

## References
wcagify - https://github.com/abbott567/wcagify - The code to the wcagify function and criteria array were originally written by abbot567. In my code, I made slight modifacations to make them usable in a chrome extension.
