function Distance(x1, y1, x2, y2)
// Assumes: (x1, y1) and (x2, y2) are two point coordinates
// Returns: the distance between those points
    {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
        
function Distance(x2, y2, x3, y3)
// Assumes: (x2, y2) and (x3, y3) are two point coordinates
// Returns: the distance between those points
    {
        return Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    }
        
function Distance(x3, y3, x1, y1)
// Assumes: (x3, y3) and (x1, y1) are two point coordinates
// Returns: the distance between those points
    {
        return Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));
    }
     
function TriangleArea(side1, side2, side3)
//assumes: side1, side2, adn side3 are the lengths of triangle sides
// returns: the area of the triangle
    {
        s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
        
function ShowDistance()
// Assumes: point1xBox, point1yBox, point2xBox, and point2yBox contain nums 
// Results: displays the distance between the points
    {
        point1x = parseFloat(document.getElementById('point1xBox').value);
        point1y = parseFloat(document.getElementById('point1yBox').value);
        point2x = parseFloat(document.getElementById('point2xBox').value);
        point2y = parseFloat(document.getElementById('point2yBox').value); 
        point3x = parseFloat(document.getElementById('point3xBox').value);
        point3y = parseFloat(document.getElementById('point3yBox').value);
        dist = Distance(point1x, point1y, point2x, point2y);
        dist2 = Distance(point2x, point2y, point3x, point3y);
        dist3 = Distance(point3x, point3y, point1x, point1y);
        document.getElementById('outputDiv').innerHTML = 
                'The distance between point 1 and 2 = ' + dist + '<br>The distance between 2 and 3 = ' + dist2 + '<br>The distance between 3 and 1 = ' + dist3;
    }
        
function CalculateArea()
//assumes side1, side2, side3 are the sides of a triangle 
// results: displays area
    {
        side1 = Distance(point1x, point1y, point2x, point2y);
        side2 = Distance(point2x, point2y, point3x, point3y);
        side3 = Distance(point3x, point3y, point1x, point1y);
        area = TriangleArea(side1, side2, side3);
        document.getElementById('areaDiv').innerHTML = 'The area of your triangle is ' + area;
    }