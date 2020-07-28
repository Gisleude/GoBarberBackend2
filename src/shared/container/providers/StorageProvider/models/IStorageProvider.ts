export default interface IStorageProvidedr {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
