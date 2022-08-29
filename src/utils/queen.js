export default function queensAttack(boardSize, k, queenX, queenY, obctacles){
    let top = queenY - 1
    let left = queenX - 1
    let right = boardSize - queenX
    let bottom = boardSize - queenY

    let topLeft = Math.min(top,left)
    let topRight = Math.min(top,right)
    let bottomRight = Math.min(bottom,right)
    let bottomLeft = Math.min(bottom,left)

    obctacles.forEach(([pawnX,pawnY]) => {
        console.log(pawnX)
        console.log(pawnY)
        if(pawnX === queenX && pawnY < queenY){
            top = Math.min(top, queenY - pawnY - 1)
        }
        if(pawnY === queenY && pawnX > queenX){
            right = Math.min(right, pawnX - queenX - 1)
        }
        if(pawnX === queenX && pawnY > queenY){
            bottom = Math.min(bottom, pawnY - queenY - 1)
        }
        if(pawnY === queenY && pawnX < queenX){
            left = Math.min(left, queenX - pawnX - 1)
        }
        if(pawnX < queenX && pawnY < queenY && queenX - pawnX === queenY - pawnY){
            topLeft = Math.min(topLeft, queenX - pawnX - 1)
        }
        if(pawnX > queenX && pawnY < queenY && pawnX - queenX === queenY - pawnY){
            topRight = Math.min(topRight, pawnX - queenX - 1)
        }
        if(pawnX > queenX && pawnY > queenY && pawnX - queenX === pawnY - queenY){
            bottomRight = Math.min(bottomRight, pawnX - queenX - 1)
        }
        if(pawnX < queenX && pawnY > queenY && queenX - pawnX === pawnY - queenY){
            bottomLeft = Math.min(bottomLeft, queenX - pawnX - 1)
        }
    });

    return top + right + bottom + left + topLeft + topRight + bottomLeft + bottomRight
}   
