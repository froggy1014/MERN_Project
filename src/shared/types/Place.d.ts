export type TPlaceDetail = {
  address: string;
  creator: string;
  description: string;
  id: string;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  title: string;
  __v: number;
  _id: string;
};

export interface IQueryPlaceData {
  place: TPlaceDetail[];
}
