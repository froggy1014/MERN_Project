export interface INewPlaceBody {
  body: {
    title: string;
    description: string;
    address: string;
    creator: strin | null;
    image: file;
  };
  token: string | null;
}

export interface IPatchPlace {
  pid: string;
  title: string;
  description: string;
  token: string | null;
}

export interface IDelPlace {
  pid: string;
  token: string | null;
}
