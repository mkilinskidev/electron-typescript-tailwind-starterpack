export interface IElectronAPI {
  helloWord: (text: string) => Promise<string>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}