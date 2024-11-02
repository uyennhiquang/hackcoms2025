declare global {
  type Studio = {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }

  type Person = {
    mal_id: number;
    url: string;
    name: string;
  }
}

export {}