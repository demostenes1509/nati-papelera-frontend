export const blobToFile = (theBlob: Blob): File => {
  return new File([theBlob], 'noname', { type: theBlob.type });
};
