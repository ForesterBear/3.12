
function getTotalBullets(personnelCount, bulletsPerPerson) {
    return Number(personnelCount) * Number(bulletsPerPerson);
}

function checkSupplyReady(bulletsInStock, requiredBullets) {
    return bulletsInStock >= requiredBullets;
}

module.exports = { getTotalBullets, checkSupplyReady };
