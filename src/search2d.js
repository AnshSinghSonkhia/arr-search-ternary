function search2d(func, leftX, rightX, leftY, rightY, precision = 1e-7) {
    while (rightX - leftX > precision || rightY - leftY > precision) {
        let midX1 = leftX + (rightX - leftX) / 3;
        let midX2 = rightX - (rightX - leftX) / 3;
        let midY1 = leftY + (rightY - leftY) / 3;
        let midY2 = rightY - (rightY - leftY) / 3;

        let f1 = func(midX1, midY1);
        let f2 = func(midX1, midY2);
        let f3 = func(midX2, midY1);
        let f4 = func(midX2, midY2);

        let minValue = Math.min(f1, f2, f3, f4);

        if (minValue === f1) {
            rightX = midX2;
            rightY = midY2;
        } else if (minValue === f2) {
            rightX = midX2;
            leftY = midY1;
        } else if (minValue === f3) {
            leftX = midX1;
            rightY = midY2;
        } else {
            leftX = midX1;
            leftY = midY1;
        }
    }
    
    return [(leftX + rightX) / 2, (leftY + rightY) / 2];
}

module.exports = search2d;