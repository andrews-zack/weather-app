# Weather App

## What do we need?
- Data from weather API
    * City from ZIP
    * Temp
        - K, F, C
    * Condition
    * Img
- Input box for ZIP code
    * Validation for correct input
        - Handle error inputs and alert user
    * Button with event listener 
- HTML elements/Bootstrap dynamically created with JS. (display only shown after entering ZIP)
    * container
        - h1
        - input field
        - button
    * container
        - city
    * container
        - temp
            * K
            * F
            * C
    * container
        - condition
    * container
        - other info
- Clear DOM to repopulate with new data

## VAR/OBJ
**appState**
    *weatherState*
        - city - string from API
        - tempK - num from API
        - tempF - num from conversion in init()
        - tempC - num from conversion in init()
        - cityCond - string from API
        - weatherImg - icon from API
    *zipCode*
    - User input

**apiKey**
- global constant to call wherever we need it
- easy to access if we need to change it

## FUNC
- **init()**
    * clearDOM()
    * generateElem()
        - for each element needed in HTML
- **buttonClick()**
    * added to eventListener on submit button for ZIP code field
    * validates user input
        - IF undefined
            THEN errorMsg()
    * clearDOM()
    * displays hidden elements
    * getData()
- **generateElem()**
    <!-- * grabs original div by id -->
    * creates elements (divs/containers/rows/colums) to go into the html
    * creates attributes by id for each element to size and place them
    * appends the child elements to the html body div
    * everything but the title, input field, and button set to hidden
    * error message div/content is created and hidden
- **errorMsg()**
    * when called, displays hidden error message element
- **tempConvert()**
    * function will use tempK from getData(), convert and store in objects tempF and tempC
- **getData()**
    * when called, function will fetch API data with user-given ZIP code and API key const
    * weatherState will update values based on API data
    * tempConvert()
<!-- - **getIcon()**
    * IF cityCond is "string from API"
        THEN  -->
- **clearDOM()**
    * sets all text content of the objects within weatherState to null
    * done before any more info can populate the DOM



- get body html element by its ID

- init()
    * clearDOM()
    * generateElem()
        * div - container