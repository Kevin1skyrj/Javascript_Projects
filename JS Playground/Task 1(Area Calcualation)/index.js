// To calculate the area of a various geometric shapes
function calculateArea(shape, dimensions) {
    switch(shape){
        case 'circle' :
            if(dimensions.length != 1){
                return "Error circle Require one dimensions (radius)"
            }
            return Math.PI*dimensions[0]*dimensions[0];
        case 'rectangle' :
            if(dimensions.length != 2){
                return "Error Rectangle Require two dimensions (length and breadth)"
            }
            return dimensions[0]*dimensions[1];
        case 'triangle' :
            if(dimensions.length != 2){
                return "Error triangle requires two dimensions (base and height)"
            }
            return 0.5*dimensions[0]*dimensions[1];
    }
}