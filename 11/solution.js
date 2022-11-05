export default function shouldBuyFidelity(times) {
    let acumEntradasFidelity=0;
    for(let i = 1; i<=times;i++){
      acumEntradasFidelity += 12*(0.75**i);
    }
    let precioAcumFidelity = 250 + acumEntradasFidelity;
    let precioAcumNormal = times*12;
  
    return precioAcumFidelity<=precioAcumNormal;
  }