module.exports = {
    moveForward: (displayProductSize, displayProductColor, displayProductStorage, displayProductReview, displayPandaCare) => {
        if(displayProductSize === true){
            displayProductSize = false
            displayProductColor = true
            displayProductStorage = false
            displayPandaCare = false
            displayProductReview = false
            return {
                displayProductSize, 
                displayProductColor, 
                displayProductStorage, 
                displayProductReview, 
                displayPandaCare
            }
        }

        if(displayProductColor === true){
            displayProductSize = false
            displayProductColor = false
            displayProductStorage = true
            displayPandaCare = false
            displayProductReview = false
            return {
                displayProductSize, 
                displayProductColor, 
                displayProductStorage, 
                displayProductReview, 
                displayPandaCare
            }
        }

        if(displayProductStorage === true){
            displayProductSize = false
            displayProductColor = false
            displayProductStorage = false
            displayPandaCare = true
            displayProductReview = false  
             return {
                displayProductSize, 
                displayProductColor, 
                displayProductStorage, 
                displayProductReview, 
                displayPandaCare
            }          
        }

        if(displayPandaCare === true){
            displayProductSize = false
            displayProductColor = false
            displayProductStorage = false
            displayPandaCare = false
            displayProductReview = true
            return {
                displayProductSize, 
                displayProductColor, 
                displayProductStorage, 
                displayProductReview, 
                displayPandaCare
            }
        }
       
    }
}