export default function wrapGifts(gifts) {
  let wrappedGifts = [];
  let maxGiftLength = 2;
  gifts.forEach(
    gift => {
      let giftLength = gift.length;
      maxGiftLength = maxGiftLength < giftLength ? giftLength : maxGiftLength;
      wrappedGifts.push("".concat('*',gift,'*'));
    }
  );

  if(wrappedGifts.length){
    let edges = '*'.repeat(maxGiftLength+2);
    wrappedGifts.push(edges);
    wrappedGifts.unshift(edges);
  }

  return wrappedGifts;
}
